export type CartItem = {
	id: number;
	price: number;
	title: string;
	thumbnail: string;
	quantity: number;
	size: string;
};

export type CartState = {
	items: CartItem[];
	totalPrice: number;
};
