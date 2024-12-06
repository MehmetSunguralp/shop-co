export type CartItem = {
	id: number;
	price: number;
	quantity: number;
};

export type CartState = {
	items: CartItem[];
	totalPrice: number;
};
