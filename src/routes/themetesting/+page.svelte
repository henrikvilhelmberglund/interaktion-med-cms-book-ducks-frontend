<script>
	import { onMount } from "svelte";
	let themes = ["blue", "bluedark", "yellow", "yellowdark"];
	let activeTheme = "blue";

	function activateTheme(theme) {
		if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
			// dark mode
			console.log("I am dark mode");
			theme = theme + "dark";
		}
		document.documentElement.classList = "";
		document.documentElement.classList.add(theme);
		activeTheme = theme;
	}
	onMount(() => {
		activateTheme("blue");
	});
</script>

<main class="bg-base-900 [&>*]:m-4">
	<h1 class="text-base-50 text-3xl">{activeTheme}</h1>
	<div class="text-base-50 bg-primary-700 h-32 w-32">primary</div>
	<div class="text-base-50 bg-primary-500 h-32 w-32">secondary</div>
	<div class="text-base-50 h-32 w-32 bg-gray-600">gray</div>
	{#each themes as theme}
		<button on:click={() => activateTheme(theme)} class="btn">Toggle {theme}</button>
	{/each}
</main>

<style>
</style>
