import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProducts as fetchProductsAPI } from "@/api/api";

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
	const data = await fetchProductsAPI();
	return data.products;
});

type ProductsState = {
	items: any[];
	status: "idle" | "loading" | "succeeded" | "failed";
	error: string | null;
};

const initialState: ProductsState = {
	items: [],
	status: "idle",
	error: null,
};

export const productsSlice = createSlice({
	name: "products",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchProducts.pending, (state) => {
				state.status = "loading";
			})
			.addCase(fetchProducts.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.items = action.payload; // Update the items with fetched products
			})
			.addCase(fetchProducts.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message ?? null;
			});
	},
});

//console.log(productsSlice)

export default productsSlice.reducer;
