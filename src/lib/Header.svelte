<script>
	import LoginRegister from "$lib/LoginRegister.svelte";
	export let myUser;
</script>

<header class="flex justify-end bg-slate-800 p-6">
	{#if myUser.hasOwnProperty("user")}
		<p>{myUser.user.username}</p>
	{:else}
		<p>login stuff here</p>

		<LoginRegister bind:myUser />
	{/if}
</header>

<style>
</style>
