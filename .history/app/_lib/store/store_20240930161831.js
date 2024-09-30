import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "@/app/_lib/store/cartSlice";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel2,
};

const rootReducer = combineReducers({
  cart: cartReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore(persistedReducer);
export const persistor = persistStore(store);

// const store = configureStore({
//   reducer: {
//     cart: cartReducer,
//   },
// });

// export default store;
