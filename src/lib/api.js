import axios from "axios";
import { token, userRatingObject, myUser } from "./stores";
import { get } from "svelte/store";

export const getBooks = async () => {
	const data = await sendRequestNonAuth("GET", "http://127.0.0.1:1337/api/books?populate=*");
	return data;
};

export const getTheme = async () => {
	const data = await sendRequestNonAuth("GET", "http://127.0.0.1:1337/api/active-theme");
	return data;
};

export const getCurrentUserAndRatings = async () => {
	const data = await sendRequestMe(
		"GET",
		"http://127.0.0.1:1337/api/users/me?populate[ratings][populate][0]=books"
	);

	// console.log("data is " + data);
	console.log(get(myUser));
	// myUser.set(data);
	return data;
};

export const createUserRating = async (book_id, newRating) => {
	const average_rating = newRating;
	console.log(average_rating);
	const data = await sendRequest("POST", `http://127.0.0.1:1337/api/ratings/`, {
		data: {
			half_stars: newRating,
			user: get(myUser),
			books: book_id,
		},
	});
	console.log("created data was", data);
	return data;
};

export const updateUserRating = async (userRatingObject, book_id, newRating) => {
	console.log(userRatingObject[book_id].rating_id);
	const data = await sendRequest(
		"PUT",
		`http://127.0.0.1:1337/api/ratings/${userRatingObject[book_id].rating_id}`,
		{
			data: {
				half_stars: newRating,
			},
		}
	);
	return data;
};

export const removeUserRating = async (rating_id, newRating) => {
	const average_rating = newRating;
	console.log(average_rating);
	const data = await sendRequest("DELETE", `http://127.0.0.1:1337/api/ratings/${rating_id}`);
	console.log("created data was", data);
	return data;
};
// no axios error??
// export const updateUserRating = async (userRatingObject, book_id) => {
// 	console.log(userRatingObject[book_id].rating_id);
// 	const data = await sendRequest(
// 		"PUT",
// 		`http://127.0.0.1:1337/api/ratings/${userRatingObject[book_id].rating_id}`,
// 		{
// 			data: {
// 				half_stars: userRatingObject.userRating,
// 			},
// 		}
// 	);
// 	return data;
// };

export const updateAverageRating = async (id) => {
	const bookData = await sendRequestNonAuth(
		"GET",
		`http://127.0.0.1:1337/api/books/${id}?populate=*`
	);
	let new_average_rating = 0;
	console.log(bookData);

	const bookRatings = bookData.attributes.ratings.data;

	bookRatings.forEach((rating) => {
		// console.log(`${title} has ${rating.attributes.half_stars} half stars`);
		new_average_rating += rating.attributes.half_stars;
	});
	new_average_rating /= Math.round(bookRatings.length);
	console.log("new average rating", new_average_rating);

	// ? no ratings - set new_average_rating to null as it was by default
	if (isNaN(new_average_rating)) {
		new_average_rating = null;
	}

	const data = await sendRequest("PUT", `http://127.0.0.1:1337/api/books/${id}`, {
		data: {
			average_rating: new_average_rating,
		},
	});
	return { average_rating: new_average_rating, usersWhoRated: bookRatings.length };
};

// to remember that Me is different for some reason
export const sendRequestMe = async (method, url, data = null) => {
	try {
		const headers = {
			Authorization: `Bearer ${get(token)}`,
		};
		const response = await axios({
			method,
			url,
			headers,
			data,
		});
		return response.data;
	} catch (e) {
		console.error(e);
		throw e.request;
	}
};

export const sendRequest = async (method, url, data = null) => {
	try {
		const headers = {
			Authorization: `Bearer ${get(token)}`,
		};
		const response = await axios({
			method,
			url,
			headers,
			data,
		});
		return response.data.data;
	} catch (e) {
		console.error(e);
		throw e.request;
	}
};

export const sendRequestNonAuth = async (method, url, data = null) => {
	try {
		const response = await axios({
			method,
			url,
			data,
		});
		return response.data.data;
	} catch (e) {
		if (e.code === "ERR_NETWORK") {
			throw "network error";
		}
		console.log("code:" + e.code);
		console.error(e);
		throw e.request;
	}
};
