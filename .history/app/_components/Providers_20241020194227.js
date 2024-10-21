"use client";

import { Provider } from "react-redux";
import { store, persistor } from "../_lib/store/store";
import { PersistGate } from "redux-persist/integration/react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

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
      <ReactQueryDevtools initialIsOpen={true} />
      <Provider store={store}>
        <PersistGate persistor={persistor}>{children}</PersistGate>
      </Provider>
    </QueryClientProvider>
  );
}

export default Providers;
