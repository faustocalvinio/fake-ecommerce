import { useParams } from "react-router-dom";

export const ProductSinPrefetch = () => {
   const params = useParams();
   const id = Number(params.id);

   return (
      <>
         <h1>TODO!</h1>
         <h2>{id.toString()}</h2>
         <div>ProductSinPrefetch</div>
      </>
   );
};
