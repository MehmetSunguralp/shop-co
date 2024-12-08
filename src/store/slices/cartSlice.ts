import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartState, CartItem } from "@/types/CartProps";

// Initial state of the cart is empty
const initialState: CartState = {
	items: [],
	totalPrice: 0,
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<CartItem>) => {
			const { id, size, quantity, price, title, thumbnail } = action.payload;
			const existingItem = state.items.find((item) => item.id === id && item.size === size);

			if (existingItem) {
				existingItem.quantity += quantity; // Update quantity if item already exists in cart
			} else {
				// Add new item to cart with extra data (title, thumbnail)
				state.items.push({
					id,
					size,
					quantity,
					price,
					title, // Add title
					thumbnail, // Add thumbnail
				});
			}

			// Update total price based on the added item’s price and quantity
			state.totalPrice += price * quantity;
		},

		removeFromCart: (state, action: PayloadAction<{ id: number; size: string }>) => {
			const itemIndex = state.items.findIndex((item) => item.id === action.payload.id && item.size === action.payload.size);
			if (itemIndex !== -1) {
				const removedItem = state.items.splice(itemIndex, 1)[0];
				state.totalPrice -= removedItem.price * removedItem.quantity;
			}
		},
		updateQuantity: (state, action: PayloadAction<{ id: number; quantity: number; size: string }>) => {
			const item = state.items.find((item) => item.id === action.payload.id && item.size === action.payload.size);
			if (item) {
				item.quantity += action.payload.quantity;

				// Update the total price by recalculating it
				state.totalPrice = state.items.reduce((total, item) => {
					return total + item.price * item.quantity;
				}, 0);
			}
		},

		clearCart: (state) => {
			state.items = [];
			state.totalPrice = 0;
		},
		// Action to load cart from localStorage
		setCartFromStorage: (state, action: PayloadAction<CartState>) => {
			state.items = action.payload.items;
			state.totalPrice = action.payload.totalPrice;
		},
	},
});

export const { addToCart, removeFromCart, updateQuantity, clearCart, setCartFromStorage } = cartSlice.actions;
export default cartSlice.reducer;
