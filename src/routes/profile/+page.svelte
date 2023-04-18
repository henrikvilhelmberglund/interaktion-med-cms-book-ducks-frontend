<script>
	import { browser } from "$app/environment";
	import Book from "$lib/Book.svelte";
	import LoginRegister from "$lib/LoginRegister.svelte";
	import { sortList } from "$lib/helpers.js";
	import { myUser, userRatingObject } from "$lib/stores";
	import { afterUpdate } from "svelte";
	import { quintOut } from "svelte/easing";
	import { crossfade } from "svelte/transition";
	import { flip } from "svelte/animate";

	export let data;

	const [send, receive] = crossfade({
		duration: (d) => Math.sqrt(d * 200),

		fallback(node, params) {
			const style = getComputedStyle(node);
			const transform = style.transform === "none" ? "" : style.transform;

			return {
				duration: 600,
				easing: quintOut,
				css: (t) => `
        transform: ${transform} scale(${t});
        opacity: ${t}
      `,
			};
		},
	});

	let toReadBooks;
	let filteredBooks;
	let mode = "To read list";
	let filterModes = ["Title Asc", "Title Desc", "Author Asc", "Author Desc"];
	let activeFilterMode = "normal";

	// ? this seems pretty stupid
	afterUpdate(async () => {
		try {
			toReadBooks = $myUser.to_read_list.books;
		} catch (error) {
			// ! this is SSR and triggered an error because $myUser is not defined yet
			return;
		}
		// console.log(toReadBooks);
		if (mode === "To read list") {
			let toReadBooksIDs = toReadBooks.map((book) => book.id);
			filteredBooks = data.books.filter((book) => {
				return toReadBooksIDs.includes(book.id);
			});
			// console.log(filteredBooks);
			filteredBooks = sortList(filteredBooks, activeFilterMode);
			// console.log(filteredBooks);
		} else if (mode === "Rated books list") {
			let ratedBooksIDs = $myUser.ratings.map((book) => book.books[0].id);
			// console.log(ratedBooksIDs);
			filteredBooks = data.books.filter((book) => {
				return ratedBooksIDs.includes(book.id);
			});
			filteredBooks = sortList(filteredBooks, activeFilterMode);
			// console.log($myUser);
		}
	});
</script>

<main class="bg-primary-100 dark:bg-base-900 pb-64 pt-4 [&>*]:m-4 [&>*]:mt-0">
	<h2 class="text-4xl">Welcome, {$myUser.username}!</h2>
	<button
		on:click={() => {
			if (mode === "To read list") {
				mode = "Rated books list";
				filterModes = [
					"Title Asc",
					"Title Desc",
					"Author Asc",
					"Author Desc",
					"Rating Desc",
					"Rating Asc",
				];
			} else {
				mode = "To read list";
				filterModes = ["Title Asc", "Title Desc", "Author Asc", "Author Desc"];
			}
		}}
		class="btn-secondary"
		>Switch to {mode === "To read list" ? "Rated books list" : "To read list"}</button>

	{#if toReadBooks}
		<h3 class="text-base-100 text-3xl">{mode}</h3>
		<button
			on:click={() => {
				activeFilterMode = "normal";
			}}
			class="btn-primary">Clear sort</button>
		{#each filterModes as filterMode}
			<button
				on:click={() => {
					activeFilterMode = filterMode;
				}}
				class="btn-primary">{filterMode}</button>
		{/each}
		{#if mode === "To read list"}
			<div class="flex flex-wrap">
				{#each filteredBooks as book, i (book.id)}
					<div
						in:receive={{ key: book.id }}
						out:send={{ key: book.id }}
						animate:flip={{ duration: 1000 }}>
						<Book {book} />
					</div>
				{/each}
			</div>
		{:else if mode === "Rated books list"}
			<div class="flex flex-wrap">
				{#each filteredBooks as book, i (book.id)}
					<div
						in:receive={{ key: book.id }}
						out:send={{ key: book.id }}
						animate:flip={{ duration: 1000 }}>
						<Book
							on:pleaseUpdateFilteredList={(e) => {
								// ! this doesn't work :(
								filteredBooks = sortList(filteredBooks, activeFilterMode);
								console.log(e.detail);
							}}
							{book} />
					</div>
				{/each}
			</div>
		{/if}
	{:else}
		<h3 class="text-base-100 text-3xl">You need to be logged in to view your To read list.</h3>
		<LoginRegister />
	{/if}
</main>

<style>
</style>
