<script>
	import Header from "$lib/Header.svelte";
	import ThemeTester from "$lib/ThemeTester.svelte";
	import "@unocss/reset/tailwind.css";
</script>

<Header />

<ThemeTester />

<slot />

<style uno:preflights uno:safelist global></style>
