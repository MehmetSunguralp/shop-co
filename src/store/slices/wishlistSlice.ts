import { WishlistState } from "@/types/WishListProps";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: WishlistState = {
	items: [],
};

const wishlistSlice = createSlice({
	name: "wishlist",
	initialState,
	reducers: {
		addToWishlist: (state, action: PayloadAction<number>) => {
			if (!state.items.includes(action.payload)) {
				state.items.push(action.payload);
			}
		},
		removeFromWishlist: (state, action: PayloadAction<number>) => {
			state.items = state.items.filter((id) => id !== action.payload);
		},
		toggleWishlist: (state, action: PayloadAction<number>) => {
			if (state.items.includes(action.payload)) {
				state.items = state.items.filter((id) => id !== action.payload);
			} else {
				state.items.push(action.payload);
			}
		},
	},
});

export const { addToWishlist, removeFromWishlist, toggleWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
