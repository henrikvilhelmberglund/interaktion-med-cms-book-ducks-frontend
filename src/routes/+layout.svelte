<script>
	import Header from "$lib/Header.svelte";
	import ThemeTester from "$lib/ThemeTester.svelte";
	import { getBooks, getTheme } from "$lib/api";
	import { activateTheme } from "$lib/helpers";
	import { activeTheme, books } from "$lib/stores";
	import "@unocss/reset/tailwind.css";
	import { onMount } from "svelte";
	import "/src/lib/themeCSS.scss";

	let showNetworkError;
  let finishedLoading = false;

	onMount(async () => {
		try {
			$books = await getBooks();
			// console.log(books);
		} catch (error) {
			if (error === "network error") {
				showNetworkError = true;
			}
			console.log(error);
			// throw error;
			return { error };
		}

		let data = await getTheme();
		$activeTheme = data.attributes.theme;
		// console.log($activeTheme);
		$activeTheme = await activateTheme($activeTheme);
    finishedLoading = true;
	});
</script>

{#if finishedLoading}
<Header />

<slot />
{/if}

<!-- <ThemeTester /> -->

{#if showNetworkError}
	<div class="flex justify-center">
		<p class="rounded bg-red-400 p-2 text-2xl">
			It seems like the Strapi server is not running. Please start it and try again!
		</p>
	</div>
{/if}


<style uno:preflights uno:safelist global></style>
