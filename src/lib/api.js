import axios from "axios";
import { token, userRatingObject, myUser } from "./stores";
import { get } from "svelte/store";

export const getBooks = async () => {
	const data = await sendRequestNonAuth("GET", "http://127.0.0.1:1337/api/books?populate=*");
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

// TODO
export const createUserRating = async (id, newRating) => {
	const average_rating = newRating;
	console.log(average_rating);
	const data = await sendRequest("PUT", `http://127.0.0.1:1337/api/books/${id}`, {
		data: {
			average_rating: average_rating,
		},
	});
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

export const updateAverageRating = async (id, newRating) => {
	const average_rating = newRating;
	console.log(average_rating);
	const data = await sendRequest("PUT", `http://127.0.0.1:1337/api/books/${id}`, {
		data: {
			average_rating: average_rating,
		},
	});
	return data;
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
