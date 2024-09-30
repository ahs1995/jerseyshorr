"use client";

import { Provider } from "react-redux";
import { store, persistor } from "../_lib/store/store";
import { PersistGate } from "redux-persist/integration/react";

function Providers({ children }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>{children}</PersistGate>
    </Provider>
  );
}

export default Providers;
