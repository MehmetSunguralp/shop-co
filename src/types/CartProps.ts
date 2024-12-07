export type CartItem = {
	id: number;
	price: number;
	quantity: number;
	size: string;
};

export type CartState = {
	items: CartItem[];
	totalPrice: number;
};
