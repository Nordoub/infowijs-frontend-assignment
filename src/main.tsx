import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./constants/domPurify.ts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import router from "./routing/routes.tsx";
import FeedProvider from "./context/FeedProvider.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <FeedProvider>
        <RouterProvider router={router} />
      </FeedProvider>
    </QueryClientProvider>
  </StrictMode>
);
