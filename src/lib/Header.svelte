<script>
	import LoginRegister from "$lib/LoginRegister.svelte";
	export let myUser;
</script>

<header class="flex bg-slate-300 p-6 shadow-lg">
	<div class="flex flex-1 justify-center">
		<h1 class="text-5xl text-black">Book Ducks</h1>
	</div>
	<div class="flex items-center justify-end">
		{#if myUser.hasOwnProperty("user")}
			<p class="mr-4 text-black">{myUser.user.username}</p>
		{:else}
			<p class="mr-4 text-black">Not logged in</p>
		{/if}
		<LoginRegister bind:myUser />
	</div>
</header>

<style>
</style>
