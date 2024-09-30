import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const existingItem = state.cart.find(
        (item) =>
          item.JerseyId === action.payload.JerseyId &&
          item.size === action.payload.size,
      );
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
        existingItem.totalPrice =
          existingItem.unitPrice * existingItem.quantity;
      }
      state.cart.push(action.payload);
    },

    deleteItem(state, action) {
      state.cart = state.cart.filter(
        (item) =>
          item.id !== action.payload || item.size !== action.payload.size,
      );
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const { addItem, deleteItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;

export const getItemQuantity = (state) =>
  state.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getItemPrice = (state) =>
  state.cart.reduce((sum, item) => sum + item.totalPrice, 0);

export const getCart = (state) => state.cart;

export const getCurrentQuantity = (id) => (state) =>
  state.cart.find((item) => item.Id === id)?.quantity ?? 0;
