<script>
	import Header from "$lib/Header.svelte";
	import { getTheme } from "$lib/api";
	import { activateTheme } from "$lib/helpers";
	import { activeTheme } from "$lib/stores";
	import { onMount } from "svelte";
	let themes = ["blue", "blueDark", "yellow", "yellowDark", "custom", "customDark"];

	onMount(async () => {
		try {
			let data = await getTheme();
			$activeTheme = data.attributes.theme;
			// TODO if custom theme, get custom colors from strapi and set css variables
			console.log($activeTheme);
			$activeTheme = activateTheme($activeTheme);
		} catch (error) {
			console.log(error);
			throw error;
		}
	});
</script>

<Header />

<div class="gif-BG h-full w-full" />

<main class="bg-base-900 flex [&>*]:m-4">
	<h1 class="text-base-50 text-3xl">{$activeTheme}</h1>
	<div class="text-base-50 bg-primary-700 h-32 w-32">primary</div>
	<div class="text-base-50 bg-primary-500 h-32 w-32">secondary</div>
	<div class="text-base-50 h-32 w-32 bg-gray-600">gray</div>
	<button class="btn-{$activeTheme}-primary">I am a button</button>
	{#each themes as theme}
		<button on:click={() => activateTheme(theme)} class="btn">Toggle {theme}</button>
	{/each}
</main>

<style>
</style>
