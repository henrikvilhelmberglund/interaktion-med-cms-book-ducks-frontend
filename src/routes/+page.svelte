<script>
	import { base } from "$app/paths";
	import { onMount } from "svelte";
	import { getBooks } from "$lib/api";
	import { fly } from "svelte/transition";
	import Footer from "$lib/Footer.svelte";
	import Header from "$lib/Header.svelte";
	import Book from "$lib/Book.svelte";

	let books = [];
	let myUser = {};
	let showLoginPopup = false;

	$: {
		if (myUser.hasOwnProperty("user")) {
			showLoginPopup = true;
			setTimeout(() => {
				showLoginPopup = false;
			}, 1500);
		}
	}

	onMount(async () => {
		books = await getBooks();
		console.log(books);
	});
</script>

<Header bind:myUser/>
<button
	on:click={() => {
		sessionStorage.removeItem("token");
		location.reload();
	}}
	class="absolute right-4 rounded bg-blue-400 p-2 hover:bg-blue-300">Clear token</button>

<main class="[&>*]:m-4">
	{#if myUser.hasOwnProperty("user") && showLoginPopup}
		<div
			id="login-popup"
			class="z-100 absolute left-[50%] top-0 mt-4 translate-x-[-50%] rounded-lg bg-green-500 p-4"
			transition:fly={{ y: 20 }}>
			<p>Successfully logged in as {myUser.user?.username}!</p>
		</div>
	{/if}
	<h1 class="flex justify-center text-3xl">Book Ducks</h1>


	<div class="flex flex-wrap justify-end gap-4 md:justify-start">
		{#each Object.values(books) as book}
			<Book {book} />
		{/each}
	</div>
</main>

<Footer />
