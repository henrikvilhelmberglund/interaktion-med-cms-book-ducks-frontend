<script>
	import {
		createUserRating,
		getBooks,
		getCurrentUserAndRatings,
		removeUserRating,
		updateAverageRating,
		updateUserRating,
	} from "./api";
	import { books, myUser, userRatingObject } from "./stores";
	import { fly } from "svelte/transition";
	import { createEventDispatcher } from "svelte";
	import { setUserRatingObject } from "./helpers";
	const dispatch = createEventDispatcher();
	export let average_rating;
	export let usersWhoRated;
	export let book_id;
	export let updatedRating = false;
	let showPleaseLoginPopup = false;
	let timeout;
	let newRating = 0;
	export let isProfilePage;
	// 127.0.0.1:1337/api/books?populate[ratings][populate][0]=user
	// 127.0.0.1:1337/api/users/me?populate[ratings][populate][0]=books

	console.log($myUser);
	// console.table($userRatingObject);
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
			const newAverageRatingObject = await updateAverageRating(book_id);
			average_rating = newAverageRatingObject.average_rating;
			usersWhoRated = newAverageRatingObject.usersWhoRated;
			$userRatingObject[book_id].average_rating = average_rating / usersWhoRated;
			$myUser = await getCurrentUserAndRatings();
			setUserRatingObject();
			$books = await getBooks();
			console.log(average_rating);
			if (isProfilePage) {
				updatedRating = true;
				setTimeout(() => {
					updatedRating = false;
				}, 1020);
			}
		} else {
			// no user rating - create it
			let data = await createUserRating(book_id, newRating);
			$userRatingObject[book_id] = {};
			$userRatingObject[book_id].rating_id = data.id;
			$userRatingObject[book_id].userRating = newRating;
			const newAverageRatingObject = await updateAverageRating(book_id);
			average_rating = newAverageRatingObject.average_rating;
			usersWhoRated = newAverageRatingObject.usersWhoRated;
			$userRatingObject[book_id].average_rating = average_rating / usersWhoRated;
			console.log(average_rating);
		}
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
	{#if $userRatingObject[book_id]}
		<button
			on:click={async () => {
				await removeUserRating($userRatingObject[book_id].rating_id);
				$userRatingObject[book_id] = null;
				console.log(average_rating);

				const newAverageRatingObject = await updateAverageRating(book_id);
				average_rating = newAverageRatingObject.average_rating;
				usersWhoRated = newAverageRatingObject.usersWhoRated;
				// console.log(average_rating);
			}}
			class="btn-primary !p-px">
			Remove your rating</button>
	{/if}
</div>

<!-- {@debug average_rating, $myUser, usersWhoRated} -->

<style>
</style>
