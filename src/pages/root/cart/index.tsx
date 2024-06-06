
import { DataView } from "primereact/dataview";
import { useUserStore } from "../../../stores/user";
import { ItemTemplate } from "./_components/ItemTemplate";
import { CartItem } from "../../../typs";



export const listTemplate = (items:CartItem[]) => {
    const ListTemplate = ({items}:{items:CartItem[]}) => {
    
        if (!items || items.length === 0) return null;

        const list = items.map((product:CartItem, index:number) => {
            return <div key={index}>{ItemTemplate(product, index)}</div>;
        });
        
        return <div className="grid grid-nogutter">{list}</div>;
    };

    return <ListTemplate items={items} />
};

export default function Cart() {
    const userStore = useUserStore();

    return (
        <div className="container mx-auto flex flex-col gap-4">
            <h2 className="my-8 text-5 font-bold">Cart</h2>
            <DataView
                value={userStore?.cart}
                listTemplate={listTemplate}
            />
        </div>
    );
}

