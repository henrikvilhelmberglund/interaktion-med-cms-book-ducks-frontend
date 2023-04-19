<script>
	import Book from "$lib/Book.svelte";
	import LoginRegister from "$lib/LoginRegister.svelte";
	import { sortList } from "$lib/helpers.js";
	import { books, myUser, token } from "$lib/stores";
	import { beforeUpdate } from "svelte";
	import { quintOut } from "svelte/easing";
	import { crossfade } from "svelte/transition";
	import { flip } from "svelte/animate";

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

	let toReadBooks = [];
	let filteredBooks;
	let ratedBooks = [];
	let mode = "To read list";
	let filterModes = ["Title Asc", "Title Desc", "Author Asc", "Author Desc"];

	let activeFilterMode = "normal";

	// beforeUpdate(async () => {
	// });

	// * beforeUpdate is nice!
	beforeUpdate(async () => {
		try {
			toReadBooks = $myUser.to_read_list.books;
			ratedBooks = $myUser.ratings;
			ratedBooks = ratedBooks.map((ratings) => {
				ratings = ratings.books[0];
				// console.log(ratings);
				ratings = { id: ratings.id, attributes: { ...ratings } };
				// console.log(ratings);
				return ratings;
			});
			// console.log(toReadBooks);
			// console.log(ratedBooks);
			updateList();
		} catch (error) {
			// ! this is SSR and triggered an error because $myUser is not defined yet
			return;
		}
	});

	function updateList() {
		// console.log("ran updateList");
		if (mode === "To read list") {
			let toReadBooksIDs = toReadBooks.map((book) => book.id);
			filteredBooks = Object.values($books).filter((book) => {
				return toReadBooksIDs.includes(book.id);
			});
			// console.log(filteredBooks);
			// console.log(filteredBooks);
		} else if (mode === "Rated books list") {
			let ratedBooksIDs = ratedBooks.map((book) => book.id);
			// console.log(ratedBooksIDs);

			filteredBooks = Object.values($books).filter((book) => {
				return ratedBooksIDs.includes(book.id);
			});
		}
		filteredBooks = sortList(filteredBooks, activeFilterMode);
	}
</script>

<svelte:head>
	<title>{$myUser.username}'s profile page</title>
	<meta
		name="description"
		content="This is the profile page for {$myUser.username} which contains his/her lists." />
</svelte:head>

<main class="bg-primary-100 dark:bg-base-900 pb-80 pt-4 [&>*]:m-4 [&>*]:mt-0">
	<h2 class="text-base-100 text-4xl">Welcome, {$myUser.username}!</h2>
	<button
		on:click={async () => {
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
			updateList();
		}}
		class="btn-secondary"
		>Switch to {mode === "To read list" ? "Rated books list" : "To read list"}</button>

	<h3 class="text-base-100 text-3xl">{mode}</h3>
	<button
		on:click={() => {
			activeFilterMode = "normal";
			// updateList();
		}}
		class:outline-solid={activeFilterMode === "normal"}
		class="btn-primary">Clear sort</button>
	{#each filterModes as filterMode}
		<button
			on:click={() => {
				activeFilterMode = filterMode;
				// updateList();
			}}
			class:outline-solid={activeFilterMode === filterMode}
			class="btn-primary">{filterMode}</button>
	{/each}
	{#if (mode === "To read list" && toReadBooks.length) || (mode === "Rated books list" && ratedBooks.length)}
		<div class="flex flex-wrap gap-4">
			{#if filteredBooks}
				{#each filteredBooks as book, i (book.id)}
					<div
						in:receive={{ key: book.id }}
						out:send={{ key: book.id }}
						animate:flip={{ duration: 1000 }}>
						{#if mode === "To read list" && toReadBooks.length}
							<Book {book} />
						{:else if mode === "Rated books list" && ratedBooks.length}
							<Book
								{book}
								isProfilePage={activeFilterMode === "Rating Desc" ||
									activeFilterMode === "Rating Asc"} />
						{/if}
					</div>
				{/each}
			{/if}
		</div>
	{:else if !$token}
		<h3 class="text-base-100 text-3xl">You need to be logged in to view your To read list.</h3>
		<LoginRegister />
	{:else if mode === "To read list" && !toReadBooks.length}
		<h3 class="text-base-100 text-3xl">You don't have any books in your To read list.</h3>
	{:else if mode === "Rated books list" && !ratedBooks.length}
		<h3 class="text-base-100 text-3xl">You don't have any books rated.</h3>
	{/if}
</main>

<style>
</style>
