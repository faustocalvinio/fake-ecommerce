import { Link } from "react-router-dom";
import { useProductsCartStore } from "../store/ProductsCart";
import { Product } from "../interfaces";
import { StarIcon } from "./icons";

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
   return (
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
         <img
            className="p-8 rounded-t-lg"
            src={product.image}
            alt="product image"
         />

         <div className="px-5 pb-5">
            <Link to={`/id/${product.id}`}>
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
                  onClick={() =>
                     addProductToCart({
                        id,
                        title,
                        quantity,
                        price,
                        category,
                     })
                  }
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
               >
                  Add to cart
               </button>
            </div>
         </div>
      </div>
   );
};
