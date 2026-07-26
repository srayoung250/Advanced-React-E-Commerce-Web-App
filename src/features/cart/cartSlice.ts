import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { CartItem } from "../../types/product";

interface CartState {
  items: CartItem[];
}

const loadFromSession = (): CartItem[] => {
  const stored = sessionStorage.getItem("cart");
  return stored ? JSON.parse(stored) : [];
};

const saveToSession = (items: CartItem[]) => {
  sessionStorage.setItem("cart", JSON.stringify(items));
};

const initialState: CartState = {
  items: loadFromSession(),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Omit<CartItem, "count">>) => {
      const existing = state.items.find(
        (item) => item.id === action.payload.id,
      );
      if (existing) {
        existing.count += 1;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }
      saveToSession(state.items);
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      saveToSession(state.items);
    },
    clearCart: (state) => {
      state.items = [];
      sessionStorage.removeItem("cart");
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
