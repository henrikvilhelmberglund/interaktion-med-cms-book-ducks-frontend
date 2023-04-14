<script>
	import LoginRegister from "$lib/LoginRegister.svelte";
	import { bookExpanded, myUser } from "./stores";
  import { slide } from 'svelte/transition';

</script>

{#if !Object.keys($bookExpanded).length}
	<header transition:slide class="z-100 sticky left-0 top-0 flex bg-slate-300 p-6 shadow-lg">
		<div class="flex flex-1 justify-center">
			<h1 class="text-5xl text-black">Book Ducks</h1>
		</div>
		<div class="flex items-center justify-end">
			{#if $myUser.username}
				<p class="mr-4 text-black">{$myUser.username}</p>
			{:else}
				<p class="mr-4 text-black">Not logged in</p>
			{/if}
			<LoginRegister />
		</div>
	</header>
{/if}

<style>
</style>
