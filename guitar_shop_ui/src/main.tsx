import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

// React Router
import { BrowserRouter } from "react-router-dom";

// Fonts
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

// TanStack Query
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Create a client
// const queryClient = new QueryClient();

// Query debugger
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <QueryClientProvider client={queryClient}> */}
      <App />
      {/* <ReactQueryDevtools />
      </QueryClientProvider> */}
    </BrowserRouter>
  </React.StrictMode>
);
