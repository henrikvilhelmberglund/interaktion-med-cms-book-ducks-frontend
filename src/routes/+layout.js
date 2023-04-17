export const prerender = true;
import { getBooks } from "$lib/api";

/** @type {import('./$types').PageLoad} */
export async function load() {
	let books;
	try {
		books = await getBooks();
		// console.log(books);

	} catch (error) {
		if (error === "network error") {
			// showNetworkError = true;
		}
		console.log(error);
		// throw error;
		return { error };
	}
	return { books };
}
