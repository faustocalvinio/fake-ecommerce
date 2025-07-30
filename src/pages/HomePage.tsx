import { ProductsList } from "../components/ProductsList";

export const HomePage = () => {
   return (
      <div className=" dark:bg-slate-700">
         <div className="mx-auto max-w-2xl  py-16 sm:px-6 sm:py-24 lg:max-w-7xl">
            <p className="text-white mb-4">
               This is a React application demonstrating React Query's prefetch
               capabilities and a global shopping cart powered by Zustand. The home page implements hover-based prefetching to
               preload product details, while the products page displays the
               same items without prefetching. This showcases the performance
               benefits of intelligent data preloading strategies and efficient state management.
               Additionally, it features TypeScript interfaces for type safety and React Router for navigation.
            </p>
            <ProductsList />
         </div>
      </div>
   );
};
