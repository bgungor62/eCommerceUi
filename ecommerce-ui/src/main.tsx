import "./index.css";
import App from "./App.tsx";
import { AuthProvider } from "./auth/AuthContext.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDom from "react-dom/client";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});
ReactDom.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <App></App>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
