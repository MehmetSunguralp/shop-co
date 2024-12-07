import { Middleware } from "@reduxjs/toolkit";
import { setCartFromStorage } from "@/store/slices/cartSlice";

// Middleware to persist the cart state to localStorage
const persistCartMiddleware: Middleware = (storeAPI) => (next) => (action) => {
  const result = next(action);
  const state = storeAPI.getState();
  const cartState = state.cart;

  // Save the cart state to localStorage
  if (typeof window !== "undefined") {
    localStorage.setItem("cart", JSON.stringify(cartState));
  }

  return result;
};

export default persistCartMiddleware;
