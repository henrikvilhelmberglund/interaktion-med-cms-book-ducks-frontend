<script>
	import Header from "$lib/Header.svelte";
	import ThemeTester from "$lib/ThemeTester.svelte";
	import { getTheme } from "$lib/api";
	import { activateTheme } from "$lib/helpers";
	import { activeTheme } from "$lib/stores";
	import "@unocss/reset/tailwind.css";
	import { onMount } from "svelte";

	onMount(async () => {
		let data = await getTheme();
		$activeTheme = data.attributes.theme;
		console.log($activeTheme);
		$activeTheme = activateTheme($activeTheme);
	});
</script>

<Header />

<ThemeTester />

<slot />

<style uno:preflights uno:safelist global></style>
