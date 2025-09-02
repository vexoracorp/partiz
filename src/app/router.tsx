import { createBrowserRouter } from "react-router-dom";

import {
  Content,
  Home,
  Login,
  Product,
  ProductDetail,
  Subscription,
} from "@/pages";
import Signup from "@/pages/auth/signup";
import ProductList from "@/pages/ProductList";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contents",
    element: <Content />,
  },
  {
    path: "/subscription",
    element: <Subscription />,
  },
  {
    path: "/product-list",
    element: <ProductList />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/product/:id",
    element: <Product />,
  },
  {
    path: "/product/:id/party/:partyId",
    element: <ProductDetail />,
  },
  {
    path: "auth/login",
    element: <Login />,
  },
  {
    path: "/auth/signup",
    element: <Signup />,
  },
]);

export default Router;
