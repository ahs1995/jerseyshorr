import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "@/app/_lib/store/cartSlice";
import authReducer from "@/app/_lib/store/authSlice";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import { persistReducer, persistStore } from "redux-persist";

const cartPersistConfig = {
  key: "cart",
  storage,
  stateReconciler: autoMergeLevel2,
};

const rootReducer = combineReducers({
  cart: persistReducer(cartPersistConfig, cartReducer),
  auth: authReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});
export const persistor = persistStore(store);
