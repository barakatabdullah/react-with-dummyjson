import { DataView } from "primereact/dataview";
import { getProducts } from "./_utils";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { ItemTemplate } from "./_components/ItemsTemplate";

export default function Home() {
  const { isLoading, data, } = useQuery({
    placeholderData: keepPreviousData,
    queryKey: ["products"],
    queryFn: getProducts,
  });



  return (
    <div className="container mx-auto flex flex-col gap-4">
      <h2 className="my-8 text-5 font-bold">Products</h2>

      <DataView
        value={data?.products}
        loading={isLoading}
        layout="grid"
        pt={{
          content: { className: "bg-transparent!" },
          grid: { className: "grid grid-cols-4 gap-4" },
        }}
        itemTemplate={ItemTemplate}
        // paginator
        // rows={30}
      />
    </div>
  );
}
