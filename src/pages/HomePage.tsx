import React from "react";
import { Navbar } from "../components/Navbar";
import { ProductsList } from "../components/ProductsList";

export const HomePage = () => {
   return (
      <>
         <Navbar />
         <ProductsList />
      </>
   );
};
