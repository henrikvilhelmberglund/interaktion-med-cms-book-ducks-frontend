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

	let expanded = false;

	function clickOutside(element) {
		function onEsc(event) {
			if (event.key === "Escape") {
				console.log("pressed esc - closing!");
        expanded = false;
			}
		}

		function onClick(event) {
			if (!element.contains(event.target)) {
				console.log("clicked outside of modal - closing!");
				expanded = false;
			} else {
				console.log("clicked in modal");
			}
		}
		document.body.addEventListener("click", onClick);
		document.body.addEventListener("keydown", onEsc);
		return {
      update(newCallbackFunction) {
        callbackFunction = newCallbackFunction;
			},
			destroy() {
        document.body.removeEventListener("click", onClick);
        document.body.removeEventListener("keydown", onEsc);
			},
		};
	}
</script>

<article class="relative w-72">
	<button
		on:click={() => {
			expanded = true;
			event.stopPropagation();
		}}>
		<img src="http://127.0.0.1:1337{cover_image}" alt={cover_image_alt} />
	</button>
	<div class="absolute left-[50%] top-[2%] w-[95%] translate-x-[-50%]">
		<h2 class="font-c text-center text-4xl font-bold text-black">{title}</h2>
		<h3 class="translate-y-[10%] text-center text-xl">{author}</h3>
	</div>
	{#if expanded}
		<div class="fixed inset-0 z-50 !m-0 backdrop-blur-lg" />

		<div class="flex">
			<div use:clickOutside class="z-100 fixed left-0 top-0 bg-slate-200">
				<img src="http://127.0.0.1:1337{cover_image}" alt={cover_image_alt} />
        <div class="absolute left-[50%] top-[2%] w-[95%] translate-x-[-50%]">
          <h2 class="font-c text-center text-7xl font-bold text-black">{title}</h2>
          <h3 class="translate-y-[10%] text-center text-4xl">{author}</h3>
        </div>
        <p>{title} was released in {release_date}.</p>
				<p>Page count: {page_count}</p>
				<p>Average rating: {average_rating}</p>
			</div>
			<div>
				{@html DOMPurify.sanitize(marked.parse(synopsis))}
			</div>
		</div>
	{/if}
</article>

<style>
</style>
