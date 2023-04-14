<script>
	import { onMount } from "svelte";
	let themes = ["blue", "yellow"];

	function activateTheme(theme) {
    document.documentElement.classList = "";
		document.documentElement.classList.add(theme);
	}
	onMount(() => {
		// activateTheme();
	});
</script>

<main class="[&>*]:m-4">
	<div class="bg-primary-700 h-32 w-32">hello</div>
	<div class="blue bg-primary-500 h-32 w-32">hello</div>
	<div class="blue bg-gray-600 h-32 w-32">hello</div>
	{#each themes as theme}
		<button on:click={() => activateTheme(theme)} class="btn">Toggle {theme}</button>
	{/each}
</main>

<style>
</style>
