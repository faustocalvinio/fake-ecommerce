import { Link } from "react-router-dom";
import { useProductsCartStore } from "../store/ProductsCart";
import { Product } from "../interfaces";
import { StarIcon } from "./icons";
import { queryClient } from "../main";
import toast, { Toaster } from "react-hot-toast";

export const ProductCard = (product: Product) => {
   const addProductToCart = useProductsCartStore(
      (state) => state.addProductToCart
   );
   function renderStarIcons(rating: number) {
      const stars = [];
      const totalStars = 5;
      for (let i = 0; i < totalStars; i++) {
         if (i < Math.floor(rating)) {
            stars.push(<StarIcon key={i} completed={true} />);
         } else if (i === Math.floor(rating) && rating % 1 !== 0) {
            stars.push(<StarIcon key={i} completed={false} />);
         } else {
            stars.push(<StarIcon key={i} completed={false} />);
         }
      }
      return stars;
   }

   const { id, title, price, category } = product;
   const quantity = 1;

   const getItemById = async (id: number) => {
      try {
         const response = await fetch(
            `https://fakestoreapi.com/products/${id}`
         );
         if (!response.ok) {
            throw new Error("Network response was not ok");
         }
         const data = await response.json();
         return data;
      } catch (error) {
         console.error("Fetch error:", error);
         throw error;
      }
   };

   const onMouseEnter = async () => {
      const cachedData = queryClient.getQueryData(["item", id]);
      if (!cachedData) {
         // Solo realizar prefetch si los datos no están en caché
         await queryClient.prefetchQuery(["item", id], async () => {
            const data = await getItemById(id);
            return data;
         });
      }
   };
   function addToCartHandler() {
      addProductToCart({
         id,
         title,
         quantity,
         price,
         category,
      });
      toast.success(`Product ${title.slice(0, 20)} added successfully`, {
         className: "dark:bg-black dark:text-white border dark:border-gray-600",
         duration: 2000,
      });
   }
   return (
      <div
         onMouseEnter={onMouseEnter}
         className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
         <img
            className="p-8 rounded-t-lg"
            src={product.image}
            alt="product image"
         />

         <div className="px-5 pb-5">
            <Link to={`/product/${product.id}`}>
               <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white underline hover:text-gray-300">
                  {product.title}
               </h5>
            </Link>

            <div className="flex items-center mt-2.5 mb-5">
               <div className="flex items-center space-x-1 rtl:space-x-reverse">
                  {renderStarIcons(product.rating.rate)}
                  {/* {product.rating.rate} */}
               </div>
               <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                  {product.rating.rate}
               </span>
            </div>
            <div className="flex items-center justify-between">
               <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  ${product.price.toFixed(1)}
               </span>
               <button
                  onClick={() => addToCartHandler()}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
               >
                  Add to cart
               </button>
            </div>
         </div>
         <Toaster />
      </div>
   );
};
