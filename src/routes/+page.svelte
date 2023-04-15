<script>
	import { base } from "$app/paths";
	import { onMount } from "svelte";
	import { getBooks, getTheme } from "$lib/api";
	import { fly } from "svelte/transition";
	import Footer from "$lib/Footer.svelte";
	import Header from "$lib/Header.svelte";
	import Book from "$lib/Book.svelte";
	import { activateTheme } from "$lib/helpers";
	import { activeTheme } from "$lib/stores";
  import "/src/themeCSS.scss";
	// import ThemeCss from "$lib/ThemeCSS.svelte";

	let books = [];
	let showNetworkError = false;

	onMount(async () => {
		try {
			books = await getBooks();
			console.log(books);
			let data = await getTheme();
			$activeTheme = data.attributes.theme;
			console.log($activeTheme);
			$activeTheme = activateTheme($activeTheme);
		} catch (error) {
			if (error === "network error") {
				showNetworkError = true;
			}
			console.log(error);
			throw error;
		}
	});
</script>

<Header />
<main class="[&>*]:m-4">
	{#if showNetworkError}
		<div class="flex justify-center">
			<p class="rounded bg-red-400 p-2 text-2xl">
				It seems like the Strapi server is not running. Please start it and try again!
			</p>
		</div>
	{/if}
	<div class="flex flex-wrap justify-end gap-4 md:justify-start">
		{#each Object.values(books) as book}
			<Book {book} />
		{/each}
	</div>
</main>

<Footer />
