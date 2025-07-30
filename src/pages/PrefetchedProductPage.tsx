import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import { queryClient } from "../main";
import { Loading, ProductPageCard } from "../components";
import { Product } from "../interfaces";
import { Return } from "../components/icons";

interface ItemData {
   item: Product;
}

export const PrefetchedProductPage = () => {
   const params = useParams();
   const id = Number(params.id);
   const getItemById = async (id: number): Promise<ItemData> => {
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

   const cachedData = queryClient.getQueryData(["item", id]);

   // Usa los datos en caché si están disponibles
   const { data, isLoading, isSuccess } = useQuery<ItemData, Error>(
      ["item", id],
      async () => await getItemById(id),
      {
         initialData: cachedData as ItemData,
         enabled: !cachedData, // Evita realizar una segunda solicitud si los datos ya están en caché
      }
   );

   if (isLoading) return <Loading />;

   if (isSuccess)
      return (
         <section className="mt-20 w-full min-h-screen text-white flex justify-center items-center flex-col">
            <Link
               className="absolute top-20 left-10 bg-blue-600 text-white py-1 px-2 rounded-lg ml-14 flex w-fit gap-2 hover:opacity-70 transition-opacity"
               to={"/"}
            >
               <Return />
               Return Home
            </Link>
            <div className="div mx-auto">
               <ProductPageCard {...(data as unknown as Product)} />
            </div>
         </section>
      );
};
