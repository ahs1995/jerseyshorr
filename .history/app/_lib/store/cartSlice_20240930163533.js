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
    clearCart(state) {
      state.cart = [];
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(loadCart.fulfilled, (state, action) => {
  //     state.cart = action.payload;
  //     state.loaded = true;
  //   });
  // },
});

export const { addItem, deleteItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;

export const getItemQuantity = (state) =>
  state.cart?.cart?.reduce((sum, item) => sum + item.quantity, 0);

export const getItemPrice = (state) =>
  state.cart?.cart?.reduce((sum, item) => sum + item.totalPrice, 0);

export const getCart = (state) => state.cart;

export const getCurrentQuantity = (id) => (state) =>
  state.cart?.cart?.find((item) => item.jerseyId === id)?.quantity ?? 0;