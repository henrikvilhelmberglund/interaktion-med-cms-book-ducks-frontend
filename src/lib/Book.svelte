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
	<div class="absolute left-[50%] top-[2%] md:w-full translate-x-[-50%]">
		<h2 class="font-c text-center text-4xl font-bold text-black">{title}</h2>
		<h3 class="translate-y-[10%] text-center text-xl">{author}</h3>
	</div>
	{#if expanded}
		<div class="fixed inset-0 z-50 !m-0 backdrop-blur-lg" />

		<div use:clickOutside class="z-100 fixed left-0 top-0 bg-slate-200">
			<div class="flex md:w-[512px]">
				<div class="absolute left-[50%] top-[2%] translate-x-[-50%] md:w-full">
					<img
						class="absolute md:min-w-[512px]"
						src="http://127.0.0.1:1337{cover_image}"
						alt={cover_image_alt} />
					<h2 class="font-c sticky text-center font-bold text-black md:pt-4 md:text-6xl">
						{title}
					</h2>
					<h3 class="translate-y-[10%] text-center text-3xl">{author}</h3>
				</div>
				<div class="p-4">
					<p>
						Average rating: {average_rating}
					</p>
					<ul>
						<li>{title} was released in {release_date}.</li>
						<li>Page count: {page_count}</li>
					</ul>
				</div>
				<div
					class="font-e absolute right-0 top-12 translate-x-[120%] bg-[#F9D8A7] p-4 py-8 text-lg">
					{@html DOMPurify.sanitize(marked.parse(synopsis))}
				</div>
			</div>
		</div>
	{/if}
</article>

<style>
</style>
