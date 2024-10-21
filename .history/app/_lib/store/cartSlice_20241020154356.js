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
      state.cart = state.cart.filter(
        (item) => item.jerseyId !== action.payload,
      );
    },
    increaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.jerseyId === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.jerseyId === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  clearCart,
  increaseItemQuantity,
  decreaseItemQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;

// export const getItemQuantity = (state) =>
//   state.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getItemPrice = (state) =>
  state.cart?.reduce((sum, item) => sum + item.totalPrice, 0);

export const getCart = (state) => state.cart;

export const getCurrentQuantity = (id) => (state) =>
  state.cart?.find((item) => item.jerseyId === id)?.quantity ?? 0;
