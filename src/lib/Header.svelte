<script>
	import LoginRegister from "$lib/LoginRegister.svelte";
	import { activateTheme } from "./helpers";
	import { activeTheme, bookExpanded, myUser, preferredMode } from "./stores";
	import { slide } from "svelte/transition";
	import { base } from "$app/paths";
</script>

{#if !Object.keys($bookExpanded).length}
	<header
		id="book-ducks-header"
		transition:slide
		class="z-100 sticky left-0 top-0 flex p-2 shadow-lg md:p-6">
		<div class="flex flex-1 items-center" />
		<div class="flex flex-1 items-center justify-center">
			<h1 class="font-logo text-base-100 text-5xl">
				<a href="{base}/">Book Ducks</a>
			</h1>
		</div>
		<div class="flex md:flex-row flex-col flex-1 items-center justify-end">
			{#if !$myUser.username}
				<p class="text-base-300 md:mr-4">Not logged in</p>
			{/if}
			<LoginRegister />
			<button
				on:click={() => {
					$preferredMode = $preferredMode === "light" ? "dark" : "light";
					activateTheme();
				}}
				aria-label="dark mode toggle"
				class="absolute top-0 right-0 md:relative i-carbon-sun !bg-base-100 dark:i-carbon-moon ml-4 text-3xl" />
		</div>
	</header>
{/if}

<style>
</style>
