
import { Menu } from "primereact/menu";

import NavItemTemplate from "./NavItemTemplate";



const items = [
    {
        label: 'Dummy Json',
        items:[
            {
                label: 'Home',
                 icon: 'i-tabler-home',
                  template: NavItemTemplate,
                   page: '/',
                    
                },
                
            {
                label: 'Cart',
                 icon: 'i-tabler-shopping-cart',
                  template: NavItemTemplate,
                   page: '/cart',
                    
                },
            {
                label: 'Checkout',
                 icon: 'i-tabler-check',
                  template: NavItemTemplate,
                   page: '/checkout',
                    
                },
                {
                    label: 'Add Product',
                     icon: 'i-tabler-plus',
                      template: NavItemTemplate,
                       page: '/product/add',
                        
                    },
        ]
    }
    

];
export default function SideBar() {
    return (
        <div className="h-screen w-15rem">

            <div className="card flex justify-center h-full fixed">
                <Menu pt={{
                    root: { className: 'rounded-l-0!' },
                }} model={items} className=" w-15rem" />
            </div>
        </div>
    )
}