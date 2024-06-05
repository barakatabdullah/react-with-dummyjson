import { DataView } from "primereact/dataview";
import { getProducts } from "./_utils";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { ItemTemplate } from "./_components/ItemsTemplate";
import { Button } from "primereact/button";

export default function Home() {
  const { isLoading, data, } = useQuery({
    placeholderData: keepPreviousData,
    queryKey: ["products"],
    queryFn: getProducts,
  });



  return (
    <div className="container mx-auto flex flex-col gap-4">
      <div className="flex items-center justify-between">
      <h2 className="my-8 text-5 font-bold">Products</h2>
      <Button label="Add Product" onClick={() => {}} icon="i-tabler-plus" />
      </div>

<div>
<DataView
        value={data?.products}
        loading={isLoading}
        layout="grid"
        pt={{
          root:{className:'rounded-6 overflow-hidden'},
          content: { className: "p2" },
          grid: { className: "grid grid-cols-5 gap-4" },
        }}
        itemTemplate={ItemTemplate}
        paginator
        rows={10}
      />
</div>
    </div>
  );
}
