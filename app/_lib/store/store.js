import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "@/app/_lib/store/cartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
