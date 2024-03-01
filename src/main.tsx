import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./main.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { HomePage } from "./pages/HomePage.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Navbar } from "./components/Navbar.tsx";
import { ProductsList } from "./components/ProductsList.tsx";
import { CartPage } from "./pages/CartPage.tsx";
const queryClient = new QueryClient();

const router = createBrowserRouter([
   {
      path: "/",
      Component: HomePage,
   },
   {
      path: "/cart",
      Component: CartPage,
   },
   {
      path: "/id/:id",
      element: <h1>product</h1>,
   },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
   <QueryClientProvider client={queryClient}>
      {/* <App /> */}
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen />
   </QueryClientProvider>
);
