import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./main.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
export const queryClient = new QueryClient({
   defaultOptions: {
      queries: {
         staleTime:  60 * 10000,
      },
   },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
   <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen />
   </QueryClientProvider>
);
