import { configureStore } from "@reduxjs/toolkit";
import exampleReducer from "./slices/exampleSlice";

export const store = configureStore({
	reducer: {
		example: exampleReducer, // Add other reducers here
	},
});

// Infer RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
