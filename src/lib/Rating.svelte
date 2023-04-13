<script>
	export let average_rating;
	// 127.0.0.1:1337/api/books?populate[ratings][populate][0]=user
</script>

{average_rating}
<div>
	{#each Array.from({ length: 10 }) as _, i}
		{#if i % 2 === 0}
			<button
				aria-label={i / 2 === 0.5 ? i / 2 + " star" : i / 2 + " stars"}
				on:mousedown={() => console.log(i)}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="12"
					height="24"
					class:fill-orange-400={average_rating > i}
					class:fill-slate-400={average_rating <= i}>
					<path
						d="m12 .587 3.668 7.568L24 9.306l-6.064 5.828 1.48 8.279L12 19.446l-7.417 3.967 1.481-8.279L0 9.306l8.332-1.151z" /></svg>
			</button>
		{:else}
			<button
				aria-label={i / 2 === 1 ? i / 2 + " star" : i / 2 + " stars"}
				on:mousedown={() => console.log(i)}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="12"
					height="24"
					class:fill-orange-400={average_rating > i}
					class:fill-slate-400={average_rating <= i}
					class="-scale-x-100">
					<path
						d="m12 .587 3.668 7.568L24 9.306l-6.064 5.828 1.48 8.279L12 19.446l-7.417 3.967 1.481-8.279L0 9.306l8.332-1.151z" /></svg>
			</button>
		{/if}
	{/each}
</div>

<style>
</style>
