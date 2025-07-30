import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartPage, HomePage, ProductPage, ProductsPage } from "../pages";
import { Navbar } from "../components/Navbar";

export const AppRouter = () => {
   return (
      <BrowserRouter>
         <Navbar />
         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="products-sin-prefetch" element={<ProductsPage />} />
            <Route path="/product-sin-prefetch/:id" element={<ProductPage />} />
            <Route path="/product/:id" element={<ProductPage />} />
         </Routes>
      </BrowserRouter>
   );
};
