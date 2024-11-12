import axios from "axios";

export const fetchProducts = async () => {
	try {
		const products = await axios.get("https://dummyjson.com/products").then((response) => response);
		return products.data;
	} catch (error) {
		console.error(error);
	}
};
