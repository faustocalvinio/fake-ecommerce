import { Link } from "react-router-dom";
import { useProductsCartStore } from "../store/ProductsCart";

export const Navbar = () => {
   const cart = useProductsCartStore((state) => state.cart);
   return (
      <nav className="bg-white border-gray-200 dark:bg-gray-900 fixed top-0 w-full">
         <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link
               to={"/"}
               className="flex items-center space-x-3 rtl:space-x-reverse"
            >
               <img
                  src="https://flowbite.com/docs/images/logo.svg"
                  className="h-8"
                  alt="Flowbite Logo"
               />
               <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  Fake Commerce
               </span>
            </Link>
            <Link to={`/cart`} className="flex md:order-2">
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 16 16"
               >
                  <path
                     fill="#ffffff"
                     d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607L1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4a2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4a2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2a1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2"
                  />
               </svg>
               <span className="text-white text-sm mt-[-5px] px-2">
                  {cart.length}
               </span>
            </Link>
            <div
               className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
               id="navbar-search"
            >
               <div className="relative mt-3 md:hidden">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                     <svg
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                     >
                        <path
                           stroke="currentColor"
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth="2"
                           d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                     </svg>
                  </div>
                  <input
                     type="text"
                     id="search-navbar"
                     className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     placeholder="Search..."
                  />
               </div>
               <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                  <li>
                     <a
                        href="#"
                        className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                        aria-current="page"
                     >
                        Home
                     </a>
                  </li>
                  <li>
                     <a
                        href="#"
                        className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                     >
                        About
                     </a>
                  </li>
                  <li>
                     <a
                        href="#"
                        className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                     >
                        Services
                     </a>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
   );
};