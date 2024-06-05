import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputText";
import { FileUpload } from "primereact/fileupload";
import { useForm, Controller } from "react-hook-form";
import { Card } from "primereact/card";
import { DataView } from "primereact/dataview";
import { listTemplate } from "../cart/index";
import { useUserStore } from "@/stores/user";
import { Button } from "primereact/button";




export default function Checkout() {
    const userStore = useUserStore();



  const onSubmit = (data: any) => {
   console.log(data)
  };

    const methods = useForm();
    return(
        
<div className="grid grid-cols-3 gap-4" >
<div className="col-span-2">
            <Card
            header="Current Cart"
            >
                
        <div className="container mx-auto flex flex-col gap-4">
            <h2 className="my-8 text-5 font-bold">Cart</h2>
            <DataView
                value={userStore?.cart}
                listTemplate={listTemplate}
            />
        </div>
            </Card>
        </div>
    <div className="col-span-1">
        <h3>Order Info</h3>
        <form action="">
        <div className="flex flex-col gap-2 ">
          <label className="font-bold" htmlFor="addess">
            Address
          </label>
          <Controller
            control={methods.control}
            rules={{
              required: true,
            }}
            render={({ field }) => <InputText {...field} id="addess" />}
            name="addess"
          />
        </div>
            <h4>Payment Info</h4>
            <div className="flex flex-col gap-2 ">
          <label className="font-bold" htmlFor="name">
            Name On Card
          </label>
          <Controller
            control={methods.control}
            rules={{
              required: true,
            }}
            render={({ field }) => <InputText {...field} id="name" />}
            name="name"
          />
        </div>
        <div className="flex flex-col gap-2 ">
          <label className="font-bold" htmlFor="card">
            Card Number
          </label>
          <Controller
            control={methods.control}
            rules={{
              required: true,
            }}
            render={({ field }) => <InputText {...field} id="card" />}
            name="card"
          />
        </div>
        <div className="flex flex-col gap-2 ">
          <label className="font-bold" htmlFor="date">
            Expiration Date
          </label>
          <Controller
            control={methods.control}
            rules={{
              required: true,
            }}
            render={({ field }) => <InputText {...field} id="date" />}
            name="date"
          />
        </div>
        <div className="flex flex-col gap-2 ">
          <label className="font-bold" htmlFor="cvv">
            CVV
          </label>
          <Controller
            control={methods.control}
            rules={{
              required: true,
            }}
            render={({ field }) => <InputText {...field} id="cvv" />}
            name="cvv"
          />
        </div>
        <Button 
        label="Submit"
        />
        </form>
    </div>

</div>
    )
}