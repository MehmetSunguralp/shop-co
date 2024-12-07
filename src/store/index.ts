import { configureStore } from "@reduxjs/toolkit";
import { productsSlice } from "./slices/productsSlice";
//import wishlistReducer from "./slices/wishlistSlice";
import cartReducer from "./slices/cartSlice";
export const store = configureStore({
	reducer: {
		products: productsSlice.reducer,
		//wishlist: wishlistReducer,
		cart: cartReducer,
	},
});

// Infer RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
