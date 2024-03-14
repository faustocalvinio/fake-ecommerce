import toast, { Toaster } from "react-hot-toast";
import { CartItemComponent } from "../components";
import { CartItem } from "../interfaces";
import { useProductsCartStore } from "../store/ProductsCart";

export const CartPage = () => {
   const cart = useProductsCartStore((state) => state.cart);
   const cleanCart = useProductsCartStore((state) => state.cleanCart);

   const { subTotal } = useProductsCartStore((state) =>
      state.getSummaryInformation()
   );

   function cleanCartHandler() {
      cleanCart();
      toast.success(`Cart successfully cleaned`, {
         className: "dark:bg-black dark:text-white border dark:border-gray-600",
         duration: 2000,
      });
   }

   return (
      <>
         <section className=" bg-gray-100 px-4 text-gray-600 antialiased w-full dark:bg-slate-700 dark:text-white mt-20">
            <div className="flex h-full w-full flex-col justify-center bg-gray-100 dark:bg-slate-700">
               <div className="mx-auto w-full  max-w-2xl rounded-sm border border-gray-200 bg-white shadow-lg dark:bg-slate-500">
                  <header className="border-b border-gray-100 px-5 py-4 flex justify-between">
                     <h1 className="text-3xl font-semibold text-gray-800 dark:text-white">
                        Cart
                     </h1>
                     <button
                        onClick={cleanCartHandler}
                        className="text-white bg-red-700 flex items-center gap-2 px-2 py-1 rounded-lg hover:opacity-85 transition-opacity"
                     >
                        Clean
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           width="25"
                           height="25"
                           viewBox="0 0 16 16"
                        >
                           <g fill="currentColor">
                              <path d="M7.354 5.646a.5.5 0 1 0-.708.708L7.793 7.5L6.646 8.646a.5.5 0 1 0 .708.708L8.5 8.207l1.146 1.147a.5.5 0 0 0 .708-.708L9.207 7.5l1.147-1.146a.5.5 0 0 0-.708-.708L8.5 6.793z" />
                              <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607l1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4a2 2 0 0 0 0-4h7a2 2 0 1 0 0 4a2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0a1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0" />
                           </g>
                        </svg>
                     </button>
                  </header>

                  <div className="overflow-x-auto p-3">
                     <table className="w-full table-auto">
                        <thead className="bg-gray-50 text-xs font-semibold uppercase text-gray-400 dark:bg-gray-300">
                           <tr>
                              <th></th>
                              <th className="p-2">
                                 <div className="text-left font-semibold dark:text-slate-700">
                                    Product Name
                                 </div>
                              </th>
                              <th className="p-2">
                                 <div className="text-left font-semibold dark:text-slate-700">
                                    Quantity
                                 </div>
                              </th>
                              <th className="p-2">
                                 <div className="text-left font-semibold dark:text-slate-700">
                                    Total
                                 </div>
                              </th>
                              <th className="p-2">
                                 <div className="text-center font-semibold dark:text-slate-700">
                                    Action
                                 </div>
                              </th>
                           </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-100 text-sm">
                           {cart.map((cartItem: CartItem) => (
                              <CartItemComponent
                                 key={crypto.randomUUID()}
                                 {...cartItem}
                              />
                           ))}
                        </tbody>
                     </table>
                  </div>

                  <div className="flex justify-end space-x-4 border-t border-gray-100 px-5 py-4 text-2xl font-bold">
                     <div>Total</div>
                     <div className="text-green-400 ">
                        $ <span>{subTotal.toFixed(2)}</span>
                     </div>
                  </div>

                  <div className="flex justify-end">
                     <input
                        type="hidden"
                        className="border border-black bg-gray-50"
                        x-model="selected"
                     />
                  </div>
               </div>
            </div>
         </section>
         <Toaster />
      </>
   );
};
