import { StrictMode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./shared/routers/Router";
import { Theme } from "@radix-ui/themes";
import { ThemeProvider } from "next-themes";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init(); // Axios Init
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 2 * 60 * 1000, // 2 minutes
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Theme>
      <ThemeProvider attribute={"class"}>
        <QueryClientProvider client={queryClient}>
          <div className="bg-[#efede9]">
            <RouterProvider router={router} />
          </div>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </ThemeProvider>
    </Theme>
  </StrictMode>
);
