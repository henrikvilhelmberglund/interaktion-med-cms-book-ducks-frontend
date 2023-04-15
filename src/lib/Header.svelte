<script>
	import LoginRegister from "$lib/LoginRegister.svelte";
	import { activeTheme, bookExpanded, myUser } from "./stores";
  import { slide } from 'svelte/transition';

</script>

{#if !Object.keys($bookExpanded).length}
	<header id="book-ducks-header" transition:slide class="z-100 sticky left-0 top-0 flex p-6 shadow-lg">
		<div class="flex flex-1 justify-center">
			<h1 class="text-5xl font-logo text-base-100">Book Ducks</h1>
		</div>
		<div class="flex items-center justify-end">
			{#if $myUser.username}
				<p class="mr-4 text-base-300">{$myUser.username}</p>
			{:else}
				<p class="mr-4 text-base-300">Not logged in</p>
			{/if}
			<LoginRegister />
		</div>
	</header>
{/if}

<style>
</style>
