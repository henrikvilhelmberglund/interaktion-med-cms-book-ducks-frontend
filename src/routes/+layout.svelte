<script>
	import Header from "$lib/Header.svelte";
	import ThemeTester from "$lib/ThemeTester.svelte";
	import { getBooks, getTheme } from "$lib/api";
	import { activateTheme } from "$lib/helpers";
	import { activeTheme, books } from "$lib/stores";
	import "@unocss/reset/tailwind.css";
	import { onMount } from "svelte";
	import "/src/lib/themeCSS.scss";

	onMount(async () => {
		try {
			$books = await getBooks();
			// console.log(books);
		} catch (error) {
			if (error === "network error") {
				// showNetworkError = true;
			}
			console.log(error);
			// throw error;
			return { error };
		}

		let data = await getTheme();
		$activeTheme = data.attributes.theme;
		console.log($activeTheme);
		$activeTheme = activateTheme($activeTheme);
	});
</script>

<Header />

<!-- <ThemeTester /> -->

<slot />

<style uno:preflights uno:safelist global></style>
