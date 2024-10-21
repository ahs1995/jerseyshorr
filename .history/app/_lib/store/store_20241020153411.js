import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "@/app/_lib/store/cartSlice";
import authReducer from "@/app/_lib/store/authSlice";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import { persistReducer, persistStore } from "redux-persist";

const rootReducer = combineReducers({
  cart: cartReducer,
  auth: authReducer,
});

const persistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel2,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});
export const persistor = persistStore(store);
