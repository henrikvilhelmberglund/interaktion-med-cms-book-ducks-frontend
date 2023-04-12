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

	onMount(async () => {
		books = await getBooks();
		console.log(books);
	});
</script>

<Header bind:myUser/>
<main class="[&>*]:m-4">
	<div class="flex flex-wrap justify-end gap-4 md:justify-start">
		{#each Object.values(books) as book}
			<Book {book} />
		{/each}
	</div>
</main>

<Footer />
