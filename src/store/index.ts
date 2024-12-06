import { configureStore } from "@reduxjs/toolkit";

import exampleReducer from "./slices/exampleSlice";
import { productsSlice } from "./slices/productsSlice";
import wishlistReducer from "./slices/wishlistSlice";
import cartReducer from "./slices/cartSlice";
export const store = configureStore({
	reducer: {
		example: exampleReducer, // Add other reducers here
		products: productsSlice.reducer,
		wishlist: wishlistReducer,
		cart: cartReducer,
	},
});

// Infer RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
