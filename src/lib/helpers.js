import { get } from "svelte/store";
import { getTheme } from "./api";
import { activeTheme, myUser, preferredMode, userRatingObject } from "./stores";
import { browser } from "$app/environment";

function toRGB(hex) {
	// Thanks chatGPT
	// Remove the '#' character from the beginning of the hex code
	hex = hex.replace("#", "");

	// If the hex code is three digits, repeat each digit
	if (hex.length === 3) {
		hex = hex
			.split("")
			.map(function (c) {
				return c + c;
			})
			.join("");
	}

	// Split the hex code into three parts: red, green, and blue
	var r = parseInt(hex.substring(0, 2), 16);
	var g = parseInt(hex.substring(2, 4), 16);
	var b = parseInt(hex.substring(4, 6), 16);

	// Return the RGB color as an object
	// return { r: r, g: g, b: b };
	return `${r}, ${g}, ${b}`;
}

function setCustomCSSColors(colors) {
	Object.values(colors).forEach((type) => {
		// console.log(type);
		Object.entries(type).forEach((shade) => {
			// console.log(shade);
			Object.entries(shade[1]).forEach((color) => {
				// console.log(`--un-preset-theme-colors-${shade[0]}-${color[0]}`, color[1]);
				document.documentElement.style.setProperty(
					`--un-preset-theme-colors-${shade[0]}-${color[0]}`,
					toRGB(color[1])
				);
			});
		});
	});
}

export async function activateTheme(override) {
	if (browser) {
		let data = await getTheme();
		if (!override) {
			activeTheme.set(data.attributes.theme);
		} else {
			activeTheme.set(override);
		}

		document.documentElement.classList = "";

		if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
			if (!get(preferredMode)) {
				preferredMode.set("dark");
			}
		}
		if (get(preferredMode) === "dark") {
			// dark mode
			// console.log("I am dark mode");
			activeTheme.set(get(activeTheme) + "Dark");
			document.documentElement.classList.add(get(activeTheme));
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.add(get(activeTheme));
			document.documentElement.classList.add("light");
		}

		let customThemeColors = data.attributes.custom_theme_colors;
		if (get(activeTheme) === "custom") {
			customThemeColors = customThemeColors.custom;
			// console.log(customThemeColors);
			setCustomCSSColors(customThemeColors);
		} else if (get(activeTheme) === "customDark") {
			customThemeColors = customThemeColors.customDark;
			// console.log(customThemeColors);
			setCustomCSSColors(customThemeColors);
		} else {
			document.documentElement.style = "";
		}

		return get(activeTheme);
	}
}

export function setUserRatingObject() {
	get(myUser).ratings.forEach((rating) => {
		// console.log(rating);
		if (rating.books[0].id) {
			// 	console.log(rating.half_stars);
			get(userRatingObject)[rating.books[0].id] = {
				rating_id: rating.id,
				userRating: rating.half_stars,
			};
			// console.log(
			// 	`${$myUser.username} has rated ${rating.books[0].title} with ${
			// 		$userRatingObject[rating.books[0].id].userRating
			// 	}`
			// );
		} else {
			console.log("uh what");
		}
	});
}

/**
 * ## Sorts a list
 * @param {Array<string>} array - An array of books.
 * @param {string} mode - How to sort the list..
 * @returns {Array<string>} An array of a sorted list.
 */

function sortListCallback(bookA, bookB, property, type) {
	if (property === "Rating") property = "average_rating";
	let a = bookA.attributes[property.toLowerCase()];
	let b = bookB.attributes[property.toLowerCase()];
	if (type === "Asc") {
		if (a < b) {
			return -1;
		}
		if (a > b) {
			return 1;
		}
	} else {
		if (a < b) {
			return 1;
		}
		if (a > b) {
			return -1;
		}
	}
}

export function sortList(array, mode) {
	if (mode === "normal") return array;
	if (mode !== "normal") {
		const [property, type] = mode.split(" ");
		return array.sort((bookA, bookB) => sortListCallback(bookA, bookB, property, type));
	}
}
