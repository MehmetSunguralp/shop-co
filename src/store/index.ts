import { configureStore } from "@reduxjs/toolkit";

import exampleReducer from "./slices/exampleSlice";
import { productsSlice } from "./slices/productsSlice";
export const store = configureStore({
	reducer: {
		example: exampleReducer, // Add other reducers here
		products: productsSlice.reducer,
	},
});

// Infer RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
