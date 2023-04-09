<script>
	import { base } from "$app/paths";
	import { onMount } from "svelte";
	import { getBooks } from "$lib/api";
	import Footer from "$lib/Footer.svelte";
	import Book from "$lib/Book.svelte";

	let books = [];

	onMount(async () => {
		books = await getBooks();
		console.log(books);
	});
</script>

<main class="[&>*]:m-4">
	<h1 class="text-3xl flex justify-center">Book Ducks</h1>

	<div class="flex flex-wrap justify-end gap-4 md:justify-start">
		{#each Object.values(books) as book}
			<Book {book} />
		{/each}
	</div>
</main>

<Footer />
