<script>
	import { browser } from "$app/environment";
	import Book from "$lib/Book.svelte";
	import { myUser } from "$lib/stores";
	import { afterUpdate } from "svelte";
	export let data;

	let toReadBooks;
	let filteredBooks;

	// ? this seems pretty stupid
	afterUpdate(async () => {
		try {
			toReadBooks = $myUser.to_read_list.books;
		} catch (error) {
			// ! this is SSR and triggered an error because $myUser is not defined yet
			return;
		}
		console.log(toReadBooks);
		let toReadBooksIDs = toReadBooks.map((book) => book.id);
		filteredBooks = data.books.filter((book) => {
			return toReadBooksIDs.includes(book.id);
		});
	});
</script>

<main class="bg-primary-100 dark:bg-base-900 pb-64 pt-4 [&>*]:m-4 [&>*]:mt-0">
	{#if toReadBooks}
		<p>hi</p>
		{#each filteredBooks as book}
			<Book {book} />
		{/each}
	{/if}
</main>

<style>
</style>
