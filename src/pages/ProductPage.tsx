import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { queryClient } from "../main";
import { Loading, ProductCard } from "../components";
import { Product } from "../interfaces";

interface ItemData {
   item: Product;
}

export const ProductPage = () => {
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
   const { data, isLoading, isSuccess, isError } = useQuery<ItemData, Error>(
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
         <>
            <div>ProductPage</div>
            <h1>{JSON.stringify(id)}</h1>
            <h2>{JSON.stringify(data)}</h2>
            {/* <ProductCard
               // category={data.item.category}
               category=""
               id={data.item.id}
               title={data.item.title}
               price={data.item.price}
               description={data.item.description}
               image={data.item.image}
               rating={{
                  rate: data.item.rating.rate,
                  count: data.item.rating.count,
               }}
            /> */}
         </>
      );
};
