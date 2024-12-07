"use client";
import { useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "../store";
import { setCartFromStorage } from "@/store/slices/cartSlice";

export function Providers({ children }: { children: React.ReactNode }) {
	useEffect(() => {
		if (typeof window !== "undefined") {
			const storedCart = localStorage.getItem("cart");
			if (storedCart) {
				const parsedCart = JSON.parse(storedCart);
				store.dispatch(setCartFromStorage(parsedCart)); // Dispatch to load cart from localStorage
			}
		}
	}, []);

	return <Provider store={store}>{children}</Provider>;
}
