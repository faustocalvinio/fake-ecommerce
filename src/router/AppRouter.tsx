import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
   CartPage,
   HomePage,
   ProductPage,
   ProductSinPrefetch,
   SinPrefetch,
} from "../pages";
import { Navbar } from "../components/Navbar";

export const AppRouter = () => {
   return (
      <BrowserRouter>
         <Navbar />
         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="products-sin-prefetch" element={<SinPrefetch />} />
            <Route
               path="/product-sin-prefetch/:id"
               element={<ProductSinPrefetch />}
            />
            <Route path="/product/:id" element={<ProductPage />} />
         </Routes>
      </BrowserRouter>
   );
};
