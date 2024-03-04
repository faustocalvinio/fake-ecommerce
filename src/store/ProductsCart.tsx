import { create } from "zustand";
import { Product, ProductsCartStore } from "../interfaces";

export const useProductsCartStore = create((set) => ({
   cart: [],
   addProductToCart: (product: Product) =>
      set((state: ProductsCartStore) => {
         console.log(product);
         return {
            cart: [...state.cart, product],
         };
      }),
}));
