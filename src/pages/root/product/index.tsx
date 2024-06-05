import { useLocation, useParams } from "react-router-dom"
import { getProduct } from "./_utils";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { Button } from "primereact/button";
import { addToCart, useUserStore } from "../../../stores/user";
import { Skeleton } from "primereact/skeleton";


export default function Product(){
    const userStore = useUserStore()
    let { id } = useParams();
    const { isPending, data } = useQuery({
        queryKey: ["product"],
        queryFn: ()=> getProduct(id),
      });

      console.log(userStore.cart)
      if (isPending) return <div className="p5"><Skeleton className="w-full p5"/></div>

    return (
        <div className="container mx-auto flex flex-col gap-4">
            <h2 className="my-8 text-5 font-bold">{data?.title}</h2>
            <div className="flex gap-4">
                <img className="h-64 w-64" src={data?.images.find(() => true)} alt={data?.title} />
                <div className="flex flex-col gap-4">
                    <p>{data?.description}</p>
                    <p>Price: {data?.price}</p>
                    <p>Category: {data?.category}</p>
                </div>
                <Button label="Add to cart" onClick={() => {addToCart({id:data?.id,quantity:3})}} />
            </div>
        </div>
    )
}