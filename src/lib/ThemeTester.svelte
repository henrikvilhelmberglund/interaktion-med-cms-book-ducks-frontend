<script>
	let themes = ["blue", "blueDark", "yellow", "yellowDark", "custom", "customDark"];
	import { getTheme } from "$lib/api";
	import { activateTheme } from "$lib/helpers";
	import { activeTheme, preferredMode } from "$lib/stores";
	import { onMount } from "svelte";

	onMount(async () => {
		try {
			$activeTheme = activateTheme();
		} catch (error) {
			console.log(error);
			throw error;
		}
	});
</script>

<main class="bg-primary-100 dark:bg-base-900 flex flex-col [&>*]:m-4">
	<div>
		<h1 class="text-base-50 text-3xl">{$activeTheme}</h1>
	</div>
	<div class="flex flex-row [&>*]:m-2">
		<div class="text-base-50 bg-primary-700 h-32 w-32">primary</div>
		<div class="text-base-50 bg-secondary-500 h-32 w-32">secondary</div>
		<div class="text-base-50 h-32 w-32 bg-gray-600">gray</div>
		<button class="btn-primary">I am a button</button>
		{#each themes as theme}
			<button
				on:click={() => {
					if (theme.includes("Dark")) {
						$preferredMode = "dark";
						activateTheme(theme.replace("Dark", ""));
					} else {
						$preferredMode = "light";
						activateTheme(theme);
					}
				}}
				class="btn-primary">Toggle {theme}</button>
		{/each}
	</div>
</main>

<style>
</style>
