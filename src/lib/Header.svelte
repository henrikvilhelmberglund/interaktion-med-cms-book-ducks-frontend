<script>
	import LoginRegister from "$lib/LoginRegister.svelte";
	export let myUser;
</script>

<header class="flex items-center justify-end bg-slate-800 p-6">
	{#if myUser.hasOwnProperty("user")}
		<p class="mr-4 text-white">{myUser.user.username}</p>
	{:else}
		<p class="mr-4 text-white">Not logged in</p>
	{/if}
	<LoginRegister bind:myUser />
</header>

<style>
</style>
