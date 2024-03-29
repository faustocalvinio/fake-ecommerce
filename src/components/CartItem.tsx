import { Link } from "react-router-dom";
import type { CartItem } from "../interfaces";
import { useProductsCartStore } from "../store/ProductsCart";
import toast from "react-hot-toast";

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

   function removeHandler() {
      removeProductFromCart(id);
      toast.error(`Product ${title.slice(0, 20)} successfully removed`, {
         className: "dark:bg-black dark:text-white border dark:border-gray-600",
         duration: 2000,
      });
   }

   return (
      <tr>
         <td className="p-2"></td>
         <td className="p-2 flex flex-col">
            <Link
               to={`/product/${id}`}
               className="font-medium text-gray-800 hover:underline dark:text-white text-xl"
            >
               {title.slice(0, 30)}
            </Link>
            <span className="italic">{category}</span>
         </td>
         <td className="p-2">
            <div className="text-left">{quantity}</div>
         </td>
         <td className="p-2">
            <div className="text-left font-medium text-green-500">${price}</div>
         </td>
         <td className="p-2">
            <div className="flex justify-center">
               <button onClick={() => removeHandler()}>
                  <svg
                     className="h-8 w-8 rounded-full p-1 hover:bg-gray-100 hover:text-blue-600 transition-all"
                     fill="none"
                     stroke="currentColor"
                     viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                     ></path>
                  </svg>
               </button>
            </div>
         </td>
      </tr>
   );
};
