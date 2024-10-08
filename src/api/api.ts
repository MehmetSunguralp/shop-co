export const fetchProducts = async () => {
	try {
		const data = await fetch("https://dummyjson.com/products");
		const response = await data.json();
		return response;
	} catch (error) {
		console.error(error);
	}
};
