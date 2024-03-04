import { CartItemComponent  } from "../components";
import { CartItem  } from "../interfaces";
import { useProductsCartStore } from "../store/ProductsCart";

export const CartPage = () => {
   const cart = useProductsCartStore((state) => state.cart);
   const cleanCart = useProductsCartStore((state) => state.cleanCart);
   return (
      <>
         <h2>Products in cart</h2>
         <button onClick={cleanCart} className="bg-blue-700 dark:text-white">
            Vaciar carrito
         </button>
         <div className="mt-6 flex flex-col gap-x-6 gap-y-4 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 min-w-[300px]">
            {cart.map((cartItem: CartItem) => (
               <CartItemComponent key={crypto.randomUUID()} {...cartItem} />
            ))}
         </div>
      </>
   );
};
