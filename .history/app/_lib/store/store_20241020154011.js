import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "@/app/_lib/store/cartSlice";
import authReducer from "@/app/_lib/store/authSlice";
import storage from "redux-persist/lib/storage"; // default to localStorage for web
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import { persistReducer, persistStore } from "redux-persist";

// Combine reducers
const rootReducer = combineReducers({
  cart: cartReducer,
  auth: authReducer,
});

// Check if running in a browser environment (client-side)
const persistConfig = {
  key: "root",
  storage: typeof window !== "undefined" ? storage : undefined, // Use storage only on the client
  stateReconciler: autoMergeLevel2,
};

const persistedReducer = persistConfig.storage
  ? persistReducer(persistConfig, rootReducer)
  : rootReducer; // Fallback to normal reducer for SSR

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

export const persistor = persistConfig.storage ? persistStore(store) : null;
