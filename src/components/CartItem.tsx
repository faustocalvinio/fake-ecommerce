import type { CartItem } from "../interfaces";
import { useProductsCartStore } from "../store/ProductsCart";

export const CartItemComponent = ({
   category,
   id,
   price,
   quantity,
   title,
}: CartItem) => {
   const removeProductFromCart = useProductsCartStore(
      (state) => state.removeProduct
   );
   return (
      <div
         id={`product-in-cart-${id}`}
         className="border border-gray-400 w-full flex justify-between"
      >
         <div className="flex flex-col">
            <h4 className="underline">{title}</h4>
            <span>{category}</span>
         </div>
         <div className="flex flex-col">
            <span>Unitary Price : ${price}</span>
            <span>Quantity : {quantity}</span>
         </div>
         <div className="div">
            <h3 className="text-green-500">
               Total price: {Number(price.toFixed(2)) * quantity}
            </h3>
            <button
               onClick={() => removeProductFromCart(id)}
               className="bg-red-700 dark:text-white px-2"
            >
               X
            </button>
         </div>
      </div>
   );
};
