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
			const existingItem = state.items.find((item) => item.id === action.payload.id);
			if (existingItem) {
				existingItem.quantity += 1;
			} else {
				state.items.push({ ...action.payload, quantity: 1 });
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
		updateQuantity: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
			const item = state.items.find((item) => item.id === action.payload.id);
			if (item) {
				state.totalPrice += (action.payload.quantity - item.quantity) * item.price;
				item.quantity = action.payload.quantity;
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
