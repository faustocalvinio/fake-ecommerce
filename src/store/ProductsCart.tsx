import { create } from "zustand";
import { CartItem } from "../interfaces";
import { persist } from "zustand/middleware";

interface State {
   cart: CartItem[];
   addProductToCart: (cartItem: CartItem) => void;
   cleanCart: () => void;
   removeProduct: (id: number) => void;
}

export const useProductsCartStore = create<State>()(
   persist(
      (set, get) => ({
         cart: [],
         addProductToCart: (cartItem: CartItem) => {
            const { cart } = get();

            const productInCart = cart.some((item) => item.id === cartItem.id);

            if (!productInCart) {
               set({ cart: [...cart, cartItem] });
               return;
            }

            const updatedCartProducts = cart.map((item) => {
               if (item.id === cartItem.id) {
                  return {
                     ...item,
                     quantity: item.quantity + cartItem.quantity,
                  };
               }
               return item;
            });

            set({ cart: updatedCartProducts });
         },
         removeProduct: (id: number) => {
            const { cart } = get();
            const updatedCartProducts = cart.filter((item) => item.id !== id);
            set({ cart: updatedCartProducts });
         },
         cleanCart: () => {
            set({ cart: [] });
         },
      }),
      {
         name: "items-cart",
      }
   )
);
