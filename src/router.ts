import {

    createBrowserRouter,

  } from "react-router-dom";
import Layout from "./pages/Layout";
import login from "./pages/root/auth/login";
import Home from "./pages/root";
import Product from "./pages/root/product";



const router = createBrowserRouter([
    {
      path: "/",
      Component: Layout,
      children: [
        {
          index: true,
        //   loader: homeLoader,
          Component: Home,
        },
        {
            path:"/product",
            Component: Product,
          },
     
      ],
    },
    {
        path: "/auth",
        children: [
              {
                path:"login",
                Component: login,
              },
        ]
    }
  ]);

  export default router
  