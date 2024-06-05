import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputText";
import { FileUpload } from "primereact/fileupload";
import { useForm, Controller } from "react-hook-form";


export default function AddProduct() {


  const onSubmit = (data: any) => {
   console.log(data)
  };

    const methods = useForm();
    return(
        
    <div className="w-screen h-screen flex gap-4 items-center justify-center">
    <Card className="w-2/8">
      <h3 className="text-center mb-8 font-bold text-8">Add Product</h3>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="flex flex-col gap-8 w-full"
      >
        <div className="flex flex-col gap-2 ">
          <label className="font-bold" htmlFor="title">
            Title
          </label>
          <Controller
            control={methods.control}
            rules={{
              required: true,
            }}
            render={({ field }) => <InputText {...field} id="title" />}
            name="title"
          />
        </div>
        <div className="flex flex-col gap-2 ">
          <label className="font-bold" htmlFor="description">
          Description
          </label>
          <Controller
            control={methods.control}
            rules={{
              required: true,
            }}
            render={({ field }) => <InputText {...field} id="description" />}
            name="description"
          />
        </div>
        <div className="flex flex-col gap-2 ">
          <label className="font-bold" htmlFor="category">
            Category
          </label>
          <Controller
            control={methods.control}
            rules={{
              required: true,
            }}
            render={({ field }) => <Dropdown {...field} id="category" />}
            name="category"
          />
        </div>
        <div className="flex flex-col gap-2 ">
          <label className="font-bold" htmlFor="price">
            Price
          </label>
          <Controller
            control={methods.control}
            rules={{
              required: true,
            }}
            render={({ field }) => <InputText {...field} id="price" />}
            name="price"
          />
        </div>
        <div className="flex flex-col gap-2 ">
          <label className="font-bold" htmlFor="brand">
            Brand
          </label>
          <Controller
            control={methods.control}
            rules={{
              required: true,
            }}
            render={({ field }) => <InputText {...field} id="brand" />}
            name="brand"
          />
        </div>
        <div className="flex flex-col gap-2 ">
          <label className="font-bold" htmlFor="images[]">
          Main Image
          </label>
          <Controller
            control={methods.control}
            rules={{
              required: true,
            }}
            render={({ field }) => <FileUpload {...field} id="mainImage"  url={'/api/upload'} accept="image/*" maxFileSize={1000000} emptyTemplate={<div>
              <p className="m-0">Drag and drop file to here to upload.</p>
              <p className="m-0">You can only upload one image as the main image.</p>
            </div>} />}
            name="mainImage"
          />
        </div>
        <div className="flex flex-col gap-2 ">
          <label className="font-bold" htmlFor="images">
          Other Images
          </label>
          <Controller
            control={methods.control}
            rules={{
              required: true,
            }}
            render={({ field }) => <FileUpload {...field} id="mainImage"  url={'/api/upload'} multiple accept="image/*" maxFileSize={1000000} emptyTemplate={<p className="m-0">Drag and drop files to here to upload.</p>} />}
            name="images"
          />
        </div>


        <Button label="Login" type="submit" />
      </form>
    </Card>
  </div>
    )
}