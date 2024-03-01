import { useQuery } from "react-query";
import { ProductCard } from "./ProductCard";
import { useProductsCartStore } from "../store/ProductsCart";
import { Loading } from "./Loading";

export interface Product {
   id: number;
   title: string;
   price: number;
   description: string;
   category: string;
   image: string;
   rating: Rating;
}
export type Rating = {
   rate: number;
   count: number;
};

export const ProductsList = () => {
   const cart = useProductsCartStore((state) => state.cart);
   const { data, isLoading, isError } = useQuery("products", async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
         throw new Error("Network response was not ok");
      }
      return response.json();
   });
   if (isLoading) return <Loading />;
   if (isError) return <div>Error fetching data</div>;
   return (
      <div className="bg-white">
         <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
               All Products
            </h2>

            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
               {data.map((product: Product) => (
                  <ProductCard {...product} />
               ))}
            </div>
         </div>

         
      </div>
   );
};
