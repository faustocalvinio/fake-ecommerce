import toast, { Toaster } from "react-hot-toast";
import { Product } from "../interfaces";
import { StarIcon } from "./icons";
import { useProductsCartStore } from "../store/ProductsCart";

export const ProductPageCard = ({
   category,
   description,
   id,
   image,
   price,
   rating,
   title,
}: Product) => {
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
   const quantity = 1;
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
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
         <img className="p-8 rounded-t-lg" src={image} alt="product image" />

         <div className="px-5 pb-5">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white underline hover:text-gray-300">
               {title}
            </h5>
            <h4 className="italic opacity-70">{category}</h4>
            <p className="">{description}</p>
            <div className="flex items-center mt-2.5 mb-5">
               <div className="flex items-center space-x-1 rtl:space-x-reverse">
                  {renderStarIcons(rating.rate)}
                  {/* {product.rating.rate} */}
               </div>
               <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                  {rating.rate}
               </span>
            </div>
            <div className="flex items-center justify-between">
               <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  ${price.toFixed(1)}
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
