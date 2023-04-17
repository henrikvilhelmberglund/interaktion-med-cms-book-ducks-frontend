<script>
	import { token } from "./stores";
	import { base } from "$app/paths";
</script>

<div class="bg-primary-100 flex w-32 flex-col rounded-lg [&>*]:pt-2">
	<a href="{base}/to-read-list">View to read list</a>

	<div class="border-t-1 flex w-full flex-col border-solid border-black">
		<button
			on:click={() => {
				$token = null;
				location.reload();
			}}
			class="btn-primary !border-0">Log out</button>
	</div>
</div>

<style>
</style>
