import { InputText } from "primereact/inputText";
import { useForm, Controller } from "react-hook-form";
import { Card } from "primereact/card";
import { DataView } from "primereact/dataview";
import { useUserStore } from "@/stores/user";
import { Button } from "primereact/button";
import CartList from "../cart/_components/ListTemplate";




export default function Checkout() {
  const userStore = useUserStore();



  const onSubmit = (data: any) => {
    console.log(data)
  };

  const methods = useForm();
  return (

    <div className="grid grid-cols-3 gap-4 p-6" >
      <div className="col-span-2">
        <Card
        className="p-4 shadow-none! border h-full"
          header={
            (
              <h3 className=" mb-8 font-bold text-6">Current Cart</h3>
            )
          }
          footer={
            (
              <div className="flex justify-between items-center">
                <span>Total:</span>
                <span className="text-5 font-bold">${userStore?.cart.reduce((a, b) => a + b.price*b.quantity, 0)}</span>
              </div>
            )
          }
        >

          <div className="container mx-auto flex flex-col gap-4">
            <DataView
              value={userStore?.cart}
              listTemplate={CartList}
            />
          </div>
        </Card>
      </div>
      <Card className="col-span-1 shadow-none! border">
        <h3 className=" mb-8 font-bold text-6">Order Info</h3>
        <form action="" className="flex flex-col gap-4">
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
          <h4 className=" mt-6 font-bold text-5">Payment Info</h4>
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
            label="Checkout"
          />
        </form>
      </Card>

    </div>
  )
}