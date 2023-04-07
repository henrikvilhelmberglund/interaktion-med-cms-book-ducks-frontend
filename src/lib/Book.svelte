<script>
	import { base } from "$app/paths";
	import DOMPurify from "dompurify";
	import { marked } from "marked";

	export let book;
	console.log(book);
	let title = book.attributes.title;
	let author = book.attributes.author;
	let page_count = book.attributes.page_count;
	let average_rating = book.attributes.average_rating;
	let release_date = book.attributes.release_date;
	let cover_image = book.attributes.cover_image.data.attributes.url;
	console.log(cover_image);
	let cover_image_alt = book.attributes.cover_image;
	let synopsis = book.attributes.synopsis;
</script>

<article class="relative border-red border-1 w-72">
  <img src="http://127.0.0.1:1337{cover_image}" alt={cover_image_alt} />
	<div class="absolute left-[50%] translate-x-[-50%] w-[80%] top-[2%]">
    <h2 class="text-center text-3xl">{title}</h2>
		<h3 class="translate-y-[10%] text-center text-xl">{author}</h3>
	</div>
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
