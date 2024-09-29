import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },

    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const { addItem, deleteItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;

export function getItemQuantity(state) {
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);
}

export function getItemPrice(state) {}
state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);

export function getCart(state) {}
state.cart.cart;

export function getCurrentQuantity(id) {
  (state) => state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;
}
