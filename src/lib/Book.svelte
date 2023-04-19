<script>
	import { clickOutside } from "$lib/actions";
	import DOMPurify from "dompurify";
	import { marked } from "marked";
	import Rating from "./Rating.svelte";
	import { createReadLaterList, updateReadLaterList, getCurrentUserAndRatings } from "./api";
	import { bookExpanded, myUser, token, userRatingObject } from "./stores";
	import { afterUpdate } from "svelte";

	export let book;
	let book_id = book.id;
	let title = book.attributes.title;
	let author = book.attributes.author;
	let page_count = book.attributes.page_count;
	let average_rating = book.attributes.average_rating;
	let release_date = book.attributes.release_date;
	let cover_image = book.attributes.cover_image.data.attributes.url;
	let cover_image_alt = book.attributes.cover_image;
	let synopsis = book.attributes.synopsis;
	let title_font = book.attributes.font_component?.title_font;
	let author_font = book.attributes.font_component?.author_font;
	let y_offset = `top-[${book.attributes.font_component?.y_offset}%]`;
	let font_weight = book.attributes.font_component?.font_weight;
	let ratings = book.attributes.ratings.data;
	let usersWhoRated = book.attributes.ratings.data.length;
	// if (ratings.length) console.log(ratings);
	let ratingChanged = false;
	export let updatedRating = false;
	export let isProfilePage = false;
	let isAddedToReadLater;

	afterUpdate(() => {
		let toReadBooks = $myUser.to_read_list?.books;
		if (!toReadBooks) {
			return;
		}

		// console.log(toReadBooks);
		let toReadBooksIDs = toReadBooks.map((book) => book.id);
		let filteredBook = Array(book).filter((book) => {
			return toReadBooksIDs.includes(book_id);
		});
		isAddedToReadLater = filteredBook.length ? true : false;
		// console.log(isAddedToReadLater);
	});

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

<article class="relative md:w-72">
	<button
		class="hover:(outline-2 outline-solid rounded-sm) outline-black dark:outline-white"
		on:click={() => {
			$bookExpanded[book_id] = true;
			event.stopPropagation();
		}}>
		<img
			class="shadow-xl shadow-black/100"
			src="http://127.0.0.1:1337{cover_image}"
			alt={cover_image_alt} />
		<div
			class="absolute left-[50%] font-{font_weight} {y_offset} w-full translate-x-[-50%] md:w-full">
			<h2 class="font-{titleFontKey} text-center text-3xl text-black">{title}</h2>
			<h3 class="font-{authorFontKey} text-center text-xl">{author}</h3>
		</div>
	</button>
	{#if $token}
		<button
			class:i-mdi-remove-circle={isAddedToReadLater}
			class:bg-red-500={isAddedToReadLater}
			class:i-mdi-add-circle={!isAddedToReadLater}
			class:bg-green-500={!isAddedToReadLater}
			aria-label="add to read later list button"
			class="hover:(h-18 w-18 opacity-100) absolute bottom-0 right-0 h-12 w-12 opacity-20 transition-all"
			on:click={async () => {
				if (!isAddedToReadLater) {
					if ($myUser.to_read_list?.id) {
						// console.log($myUser.to_read_list.id);
						await updateReadLaterList(book_id);
						$myUser = await getCurrentUserAndRatings();
					} else {
						// ! pretty stupid
						await createReadLaterList();
						$myUser = await getCurrentUserAndRatings();
						await updateReadLaterList(book_id);
						$myUser = await getCurrentUserAndRatings();
					}
					console.log($myUser);
				} else {
					if ($myUser.to_read_list?.id) {
						// console.log($myUser.to_read_list.id);
						await updateReadLaterList(book_id, "remove");
						$myUser = await getCurrentUserAndRatings();
					}
				}
			}} />
	{/if}
	{#if $bookExpanded[book_id]}
		<div class:invisible={updatedRating} class="fixed inset-0 z-50 !m-0 md:backdrop-blur-lg" />

		<div
			use:clickOutside={() => ($bookExpanded = {})}
			class:invisible={updatedRating}
			class="z-100 [&>*]:dark:text-base-100 absolute inset-0 left-0 top-0 pr-0 md:fixed md:w-min md:p-12">
			<div class="w-full md:h-[690px] md:w-[512px]">
				<img
					class="absolute shadow-xl md:min-w-[512px] md:translate-x-0 md:shadow-black/100"
					src="http://127.0.0.1:1337{cover_image}"
					alt={cover_image_alt} />
				<div
					class="absolute left-0 font-{font_weight} {y_offset} w-full translate-x-0 md:left-[50%] md:w-full md:translate-x-[-50%] md:p-12 md:pt-0">
					<h2
						class="font-{titleFontKey} pt-0 text-center text-3xl text-black md:px-2 md:pt-4 md:text-5xl">
						{title}
					</h2>
					<h3 class="font-{authorFontKey} text-center text-xl text-black md:text-3xl">{author}</h3>
				</div>
			</div>
			<div
				class="font-e translate-y-190 text-base-400 light:bg-[url(/paper.jpg)] absolute right-0 top-12 mt-24 bg-cover p-4 text-lg dark:bg-gray-900 md:absolute md:m-0 md:translate-x-[120%] md:translate-y-0 md:p-4 md:py-8">
				<h3 class="pb-4 text-3xl">Synopsis</h3>
				<div class="[&>*]:text-xl">
					{@html DOMPurify.sanitize(marked.parse(synopsis))}
				</div>
			</div>
			<div
				class="translate-y-65 absolute bottom-0 left-0 bg-slate-300 p-4 pb-12 dark:bg-gray-900 md:fixed md:left-12 md:w-[512px] md:translate-y-0 md:pb-2">
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
				<Rating
					{book_id}
					{isProfilePage}
					bind:updatedRating
					bind:average_rating
					bind:usersWhoRated />
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
