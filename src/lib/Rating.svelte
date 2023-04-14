<script>
	import { createUserRating, updateUserRating } from "./api";
	import { myUser, userRatingObject } from "./stores";
	import { fly } from "svelte/transition";

	export let average_rating;
	export let book_id;
	let showPleaseLoginPopup = false;
	let timeout;
	let newRating = 0;
	// 127.0.0.1:1337/api/books?populate[ratings][populate][0]=user
	// 127.0.0.1:1337/api/users/me?populate[ratings][populate][0]=books

	console.log($myUser);
	console.table($userRatingObject);
	async function starPressed(i) {
		if (!$myUser.username) {
			if (timeout) clearTimeout(timeout);
			showPleaseLoginPopup = true;
			timeout = setTimeout(() => {
				showPleaseLoginPopup = false;
			}, 1500);
			return;
		}
		newRating = i + 1;

		if ($userRatingObject[book_id]) {
			// user rating exists - update it
			await updateUserRating($userRatingObject, book_id, newRating);
			$userRatingObject[book_id].userRating = newRating;
		} else {
			// no user rating - create it
			await createUserRating(book_id, newRating);
		}
		// TODO
		// update book's average rating here too
	}
</script>

{#if showPleaseLoginPopup}
	<div
		id="show-please-login-popup"
		class="z-100 absolute left-[50%] top-0 mt-4 translate-x-[-50%] rounded-lg bg-red-500 p-4"
		transition:fly={{ y: 20 }}>
		<p>You need to log in to give a rating!</p>
	</div>
{/if}
<div>
	{#each Array.from({ length: 10 }) as _, i}
		<!-- {#if i % 2 === 0} -->
		<button
			aria-label={i / 2 === 0 ? i / 2 + 0.5 + " star" : i / 2 + 0.5 + " stars"}
			on:mousedown={() => starPressed(i)}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="12"
				height="24"
				class:star-hover={Object.keys($myUser).length}
				class:-scale-x-100={i % 2 !== 0}
				class:fill-orange-400={average_rating > i}
				class:fill-slate-400={average_rating <= i}>
				<path
					d="m12 .587 3.668 7.568L24 9.306l-6.064 5.828 1.48 8.279L12 19.446l-7.417 3.967 1.481-8.279L0 9.306l8.332-1.151z" /></svg>
		</button>
	{/each}
</div>

<style>
</style>
