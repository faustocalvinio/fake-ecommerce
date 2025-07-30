import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../interfaces";
import toast, { Toaster } from "react-hot-toast";
import { StarIcon } from "../components/icons";
import { useProductsCartStore } from "../store/ProductsCart";
import { SkeletonProduct } from "../components/SkeletonProduct";

export const ProductPage = () => {
   const params = useParams();
   const id = Number(params.id);
   const [loading, setLoading] = useState(true);
   const [item, setItem] = useState<Product>({
      id: 2,
      title: "ads",
      price: 22,
      description: "string",
      category: "string",
      image: "string",
      rating: { rate: 2, count: 3 },
   });
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
         ...item,
         quantity,
      });
      toast.success(`Product ${item.title.slice(0, 20)} added successfully`, {
         className: "dark:bg-black dark:text-white border dark:border-gray-600",
         duration: 2000,
      });
   }
   const getItemById = async (id: number): Promise<Product> => {
      try {
         await new Promise(resolve => setTimeout(resolve, 1500));
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

   useEffect(() => {
      getItemById(id).then((data) => {
         setItem(data);
         setLoading(false);
         console.log(data);
      });
   }, [id]);

   if (loading) return <SkeletonProduct />;
   else
      return (
         <div className="w-full mt-20 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img
               className="p-8 rounded-t-lg"
               src={item.image}
               alt="product image"
            />

            <div className="px-5 pb-5">
               <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white underline hover:text-gray-300">
                  {item.title}
               </h5>
               <h4 className="italic opacity-70  text-white">
                  {item.category}
               </h4>
               <p className="text-white">{item.description}</p>
               <div className="flex items-center mt-2.5 mb-5">
                  <div className="flex items-center space-x-1 rtl:space-x-reverse">
                     {renderStarIcons(item.rating.rate)}
                     {/* {product.rating.rate} */}
                  </div>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                     {item.rating.rate}
                  </span>
               </div>
               <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">
                     ${item.price.toFixed(1)}
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
