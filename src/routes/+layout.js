import { getCurrentUserAndRatings } from "$lib/api";
import { setUserRatingObject } from "$lib/helpers";
import { myUser, token, userRatingObject } from "$lib/stores";
import { get } from "svelte/store";

export const prerender = true;
userRatingObject;

async function setMyUser() {
	if (get(token)) {
		let currentUser;
		currentUser = await getCurrentUserAndRatings();
		myUser.set(currentUser);
		// $myUser = $myUser;
		setUserRatingObject();
	}
}

/** @type {import('./$types').PageLoad} */
export async function load() {
	await setMyUser();
}
