<script>
	import { base } from "$app/paths";
	import { onMount } from "svelte";
	import { getBooks, getTheme } from "$lib/api";
	import { fly } from "svelte/transition";
	import Footer from "$lib/Footer.svelte";
	import Header from "$lib/Header.svelte";
	import Book from "$lib/Book.svelte";
	import { activateTheme } from "$lib/helpers";
	import { activeTheme, books } from "$lib/stores";
	import ThemeTester from "$lib/ThemeTester.svelte";
	// import ThemeCss from "$lib/ThemeCSS.svelte";
	let showNetworkError = false;


</script>

<main class="bg-primary-100 dark:bg-base-900 pb-64 pt-4 [&>*]:m-4 [&>*]:mt-0">
	{#if showNetworkError}
		<div class="flex justify-center">
			<p class="rounded bg-red-400 p-2 text-2xl">
				It seems like the Strapi server is not running. Please start it and try again!
			</p>
		</div>
	{/if}
	<div class="flex flex-wrap justify-end gap-4 md:justify-start">
		{#each Object.values($books) as book}
			<Book {book} />
		{/each}
	</div>
</main>

<Footer />
