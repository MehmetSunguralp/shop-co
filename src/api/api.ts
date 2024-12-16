import axios from "axios";

export const fetchProducts = async () => {
	try {
		const products = await axios.get("http://localhost:9000/products").then((response) => response);
		console.log(products);
		return products.data;
	} catch (error) {
		console.log("ERROR")
		console.error(error);
	}
};
