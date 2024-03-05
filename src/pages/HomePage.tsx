import { ProductsList } from "../components/ProductsList";

export const HomePage = () => {
   return (
      <div className=" dark:bg-slate-700">
         <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
               All Products
            </h2>
            <ProductsList />
         </div>
      </div>
   );
};
