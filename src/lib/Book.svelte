<script>
	import { base } from "$app/paths";
	import DOMPurify from "dompurify";
	import { marked } from "marked";

	export let title;
	export let author;
	export let page_count;
	export let average_rating;
	export let release_date;
	export let cover_image;
	export let cover_image_alt;
	export let synopsis;
</script>

<article>
	<img src="{base}/{cover_image}" alt={cover_image_alt} />
	<h2 class="text-3xl">{title}</h2>
	<h3 class="text-xl">{author}</h3>
	<div class="flex">
		<p>{release_date}</p>
		<p>{page_count}</p>
		<p>{average_rating}</p>
	</div>
	<div>
		{@html DOMPurify.sanitize(marked.parse(synopsis))}
	</div>
</article>

<style>
</style>
