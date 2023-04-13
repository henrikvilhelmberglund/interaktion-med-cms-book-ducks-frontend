import axios from "axios";

export const getBooks = async () => {
	const data = await sendRequestNonAuth("GET", "http://127.0.0.1:1337/api/books?populate=*");
	return data;
};

export const updateAverageRatingNonAuth = async (id, newRating) => {
	const average_rating = newRating;
	console.log(average_rating);
	const data = await sendRequestNonAuth("PUT", `http://127.0.0.1:1337/api/books/${id}`, {
		data: {
			average_rating: average_rating,
		},
	});
	return data;
};

export const sendRequest = async (method, url, data = null) => {
	try {
		const headers = {
			Authorization: `Bearer ${sessionStorage.getItem("token")}`,
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
		console.error(e);
		throw e.request;
	}
};
