<script>
	import { token } from "./stores";
	import { base } from "$app/paths";
</script>

<div
	class="bg-primary-100 border-1 border-base-100 flex w-32 flex-col rounded-lg border-solid p-2 [&>*]:pt-2">
	<a class="btn-primary" href="{base}/profile">View your profile</a>

	<div class="flex w-full flex-col">
		<button
			on:click={() => {
				$token = null;
				location.href = "/";
			}}
			class="btn-primary !border-0">Log out</button>
	</div>
</div>

<style>
</style>
