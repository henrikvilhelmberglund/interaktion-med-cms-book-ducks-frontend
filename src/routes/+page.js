import { getBooks, getTheme } from "$lib/api";
import { activateTheme } from "$lib/helpers";
import { activeTheme } from "$lib/stores";
import { get } from "svelte/store";

/** @type {import('./$types').PageLoad} */
export async function load() {
	let books;
	try {
		books = await getBooks();
		console.log(books);
		let data = await getTheme();
		activeTheme.set(data.attributes.theme);
		console.log(get(activeTheme));
		activeTheme.set(activateTheme(get(activeTheme)));
	} catch (error) {
		if (error === "network error") {
			showNetworkError = true;
		}
		console.log(error);
		// throw error;
		return { error };
	}
	return { books };
}
