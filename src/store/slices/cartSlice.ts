import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartState, CartItem } from "@/types/CartProps";

const initialState: CartState = {
	items: [],
	totalPrice: 0,
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<CartItem>) => {
			const { id, size, quantity } = action.payload;
			const existingItem = state.items.find((item) => item.id === id && item.size === size);
			if (existingItem) {
				existingItem.quantity += 1;
			} else {
				state.items.push({ ...action.payload, quantity: quantity });
			}
			state.totalPrice += action.payload.price;
		},
		removeFromCart: (state, action: PayloadAction<number>) => {
			const itemIndex = state.items.findIndex((item) => item.id === action.payload);
			if (itemIndex !== -1) {
				const removedItem = state.items.splice(itemIndex, 1)[0];
				state.totalPrice -= removedItem.price * removedItem.quantity;
			}
		},
		updateQuantity: (state, action: PayloadAction<{ id: number; quantity: number; size: string }>) => {
			const item = state.items.find((item) => item.id === action.payload.id && item.size === action.payload.size);
			if (item) {
				item.quantity += action.payload.quantity;
				state.totalPrice = item.quantity * item.price;
			}
		},
		clearCart: (state) => {
			state.items = [];
			state.totalPrice = 0;
		},
	},
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
