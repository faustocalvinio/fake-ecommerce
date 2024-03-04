import { useParams } from "react-router-dom";

export const ProductPage = () => {
   const { id } = useParams();

   return (
      <>
         <div>ProductPage</div>
         <h1>{JSON.stringify(id)}</h1>
      </>
   );
};
