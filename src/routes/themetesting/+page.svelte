<script>
	import ThemeCSS from "$lib/ThemeCSS.svelte";
	import { getTheme } from "$lib/api";
	import { onMount } from "svelte";
	let themes = ["blue", "blueDark", "yellow", "yellowDark"];
	let activeTheme;

	onMount(async () => {
		try {
			let data = await getTheme();
			activeTheme = data.attributes.theme;
			console.log(activeTheme);
			activateTheme(activeTheme);
		} catch (error) {
			console.log(error);
			throw error;
		}
	});

	function activateTheme(theme) {
		if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
			// dark mode
			console.log("I am dark mode");
			theme = theme + "Dark";
		}
		document.documentElement.classList = "";
		document.documentElement.classList.add(theme);
		activeTheme = theme;
	}
</script>

<div
	class="{activeTheme}BG h-[100vh] w-[100vw]" />

<main class="bg-base-900 [&>*]:m-4">
	<h1 class="text-base-50 text-3xl">{activeTheme}</h1>
	<div class="text-base-50 bg-primary-700 h-32 w-32">primary</div>
	<div class="text-base-50 bg-primary-500 h-32 w-32">secondary</div>
	<div class="text-base-50 h-32 w-32 bg-gray-600">gray</div>
	<button class="btn-{activeTheme}-primary">I am a button</button>
	{#each themes as theme}
		<button on:click={() => activateTheme(theme)} class="btn">Toggle {theme}</button>
	{/each}
</main>

<style>
</style>
