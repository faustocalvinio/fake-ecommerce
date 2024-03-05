import { useQuery } from "react-query";
import { ProductCard } from "./";

import { Product } from "../interfaces";
import { SkeletonProduct } from "./SkeletonProduct";

export const ProductsList = () => {
   const { data, isLoading, isError } = useQuery("products", async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
         throw new Error("Network response was not ok");
      }
      return response.json();
   });
   if (isLoading)
      return (
         <div className="mt-6 grid grid-cols-1 min-w-[1216px] gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(() => (
               <SkeletonProduct key={crypto.randomUUID()} />
            ))}
         </div>
      );
   if (isError) return <div>Error fetching data</div>;
   return (
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
         {data.map((product: Product) => (
            <ProductCard key={crypto.randomUUID()} {...product} />
         ))}
      </div>
   );
};
