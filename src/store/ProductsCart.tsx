import { create } from "zustand";

export const useProductsCartStore = create((set) => ({
   cart: [],
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   addProductToCart: (product) =>
      set((state) => {
         console.log(product);
         return {
            cart: [...state.cart, product],
         };
      }),
}));
// increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
// removeAllBears: () => set({ bears: 0 }),
// updateBears: (newBears) => set({ bears: newBears }),
