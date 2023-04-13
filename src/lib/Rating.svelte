<script>
	import { myUser } from "./stores";
	import { fly } from "svelte/transition";
	export let average_rating;
	export let id;
	let showPleaseLoginPopup = false;
	let timeout;
	// 127.0.0.1:1337/api/books?populate[ratings][populate][0]=user

	function starPressed(i) {
		if (!Object.keys($myUser).length) {
			if (timeout) clearTimeout(timeout);
			showPleaseLoginPopup = true;
			timeout = setTimeout(() => {
				showPleaseLoginPopup = false;
			}, 1500);
		}
		let half_stars = i + 1;
		console.log(half_stars);
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
