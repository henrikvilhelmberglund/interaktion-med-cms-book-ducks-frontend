<script>
	import { base } from "$app/paths";
	import { clickOutside } from "$lib/actions";
	import DOMPurify from "dompurify";
	import { marked } from "marked";
	import Rating from "./Rating.svelte";
	import { updateAverageRating } from "./api";
	import { bookExpanded, myUser, userRatingObject } from "./stores";

	export let book;
	// console.log(book);
	let book_id = book.id;
	// console.log(id);
	let title = book.attributes.title;
	let author = book.attributes.author;
	let page_count = book.attributes.page_count;
	let average_rating = book.attributes.average_rating;
	let release_date = book.attributes.release_date;
	let cover_image = book.attributes.cover_image.data.attributes.url;
	// console.log(cover_image);
	let cover_image_alt = book.attributes.cover_image;
	let synopsis = book.attributes.synopsis;
	let title_font = book.attributes.font_component?.title_font;
	let author_font = book.attributes.font_component?.author_font;
	let y_offset = `top-[${book.attributes.font_component?.y_offset}%]`;
	let font_weight = book.attributes.font_component?.font_weight;
	let ratings = book.attributes.ratings.data;
	let usersWhoRated = book.attributes.ratings.data.length;
	if (ratings.length) console.log(ratings);
	let ratingChanged = false;

	// console.log($myUser.user?.ratings.filter((a) => a.books.id === id));
	// console.log(title);
	// console.log(userHasRated);
	// if (ratings) {

	// $: average

	const fonts = {
		a: "Playfair Display",
		b: "Lora",
		c: "Cormorant",
		d: "Merriweather",
		e: "EB Garamond",
		f: "Abril Fatface",
		g: "Roboto Slab",
		h: "Montserrat",
		i: "Bitter",
		j: "Crimson Text",
		k: "Alegreya Sans",
		l: "Asap",
		m: "Domine",
		n: "Fanwood Text",
		o: "Gentium Book Basic",
		p: "Quattrocento Sans",
		q: "Tinos",
		r: "Vollkorn",
	};

	let titleFontKey = null;
	let authorFontKey = null;

	for (const key in fonts) {
		if (fonts[key] === title_font) {
			titleFontKey = key;
			break;
		}
	}
	for (const key in fonts) {
		if (fonts[key] === author_font) {
			authorFontKey = key;
			break;
		}
	}

	// console.log(titleFontKey);
</script>

<article class="relative w-72">
	<button
		class="hover:(outline-2 outline-solid rounded-sm) outline-black dark:outline-white"
		on:click={() => {
			$bookExpanded[book_id] = true;
			event.stopPropagation();
		}}>
		<img
			class="shadow-xl shadow-black/80"
			src="http://127.0.0.1:1337{cover_image}"
			alt={cover_image_alt} />
		<div
			class="absolute left-[50%] font-{font_weight} {y_offset} w-full translate-x-[-50%] md:w-full">
			<h2 class="font-{titleFontKey} text-center text-3xl text-black">{title}</h2>
			<h3 class="font-{authorFontKey} text-center text-xl">{author}</h3>
		</div>
	</button>
	{#if $bookExpanded[book_id]}
		<div class="fixed inset-0 z-50 !m-0 backdrop-blur-lg" />

		<div
			use:clickOutside={() => ($bookExpanded = {})}
			class="z-100 w-100vw absolute left-0 top-0 p-12 md:fixed md:w-min [&>*]:dark:text-base-100">
			<div class="h-[690px] w-full md:w-[512px]">
				<img
					class="absolute shadow-xl shadow-black/80 md:min-w-[512px] md:translate-x-0"
					src="http://127.0.0.1:1337{cover_image}"
					alt={cover_image_alt} />
				<div
					class="absolute left-0 font-{font_weight} {y_offset} w-full translate-x-0 pt-0 md:left-[50%] md:w-full md:translate-x-[-50%] md:p-12 md:pt-12">
					<h2 class="font-{titleFontKey} pt-4 text-center text-5xl text-black md:pt-4 md:text-5xl">
						{title}
					</h2>
					<h3 class="font-{authorFontKey} text-center text-2xl text-black md:text-3xl">{author}</h3>
				</div>
			</div>
			<div
				class="font-e translate-y-175 absolute right-0 top-12 bg-[#F9D8A7] dark:bg-gray-900 text-base-400 p-4 py-8 text-lg md:translate-x-[120%] md:translate-y-0 md:translate-y-0">
				<h3 class="text-2xl">Synopsis</h3>
				{@html DOMPurify.sanitize(marked.parse(synopsis))}
			</div>
			<div
				class="translate-y-160 absolute bottom-0 left-0 bg-slate-300 dark:bg-gray-900 p-4 pb-12 md:fixed md:left-12 md:w-[512px] md:translate-y-0 md:translate-y-0">
				{#key ratingChanged}
					{#if $myUser.username}
						<p>
							Your rating: {$userRatingObject[book_id]?.userRating !== undefined
								? $userRatingObject[book_id]?.userRating / 2
								: "You haven't rated this book yet."}
						</p>
					{/if}
				{/key}
				<p>
					Average rating: {average_rating / 2 ?? "This book has not been rated yet."}
					{usersWhoRated ? `(${usersWhoRated} users)` : ""}
				</p>
				<Rating {book_id} bind:average_rating bind:usersWhoRated />
				<ul>
					<li>{title} was released in {release_date}.</li>
					<li>Page count: {page_count}</li>
				</ul>
			</div>
		</div>
	{/if}
</article>

<style>
</style>
