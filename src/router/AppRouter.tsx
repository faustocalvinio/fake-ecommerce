import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartPage, HomePage, ProductPage } from "../pages";
import { Navbar } from "../components/Navbar";

export const AppRouter = () => {
   return (
      <BrowserRouter>
         <Navbar />
         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="/id/:id" element={<ProductPage />} />
         </Routes>
      </BrowserRouter>
   );
};
