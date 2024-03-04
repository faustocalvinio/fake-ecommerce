import { ProductCard } from "../components";
import { Product } from "../interfaces";
import { useProductsCartStore } from "../store/ProductsCart";

export const CartPage = () => {
   const cart = useProductsCartStore((state) => state.cart);

   return (
      <>
         <h2>Products in cart</h2>
         <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {cart.map((product: Product) => (
               <ProductCard {...product} />
            ))}
         </div>
      </>
   );
};
