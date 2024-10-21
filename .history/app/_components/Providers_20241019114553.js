"use client";

import { Provider } from "react-redux";
import { store, persistor } from "../_lib/store/store";
import { PersistGate } from "redux-persist/integration/react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});
function Providers({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>{children}</PersistGate>
      </Provider>
    </QueryClientProvider>
  );
}

export default Providers;
