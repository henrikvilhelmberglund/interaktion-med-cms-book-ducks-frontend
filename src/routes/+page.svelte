<script>
	import Footer from "$lib/Footer.svelte";
	import Book from "$lib/Book.svelte";
	import { books } from "$lib/stores";
</script>

<svelte:head>
	<title>Book Ducks</title>
	<meta
		name="description"
		content="This is Book Ducks! Browse to find your favorite book, then give us all your money. :)" />
</svelte:head>

<main class="bg-primary-100 dark:bg-base-900 pb-80 pt-4 [&>*]:m-4 [&>*]:mt-0">
	<div class="flex flex-wrap justify-end gap-4 md:justify-start">
		{#each Object.values($books) as book}
			<Book {book} />
		{/each}
	</div>
</main>

<Footer />
