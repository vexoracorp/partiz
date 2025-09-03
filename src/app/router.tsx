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
import Service from "@/pages/service";

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
    path: "/service",
    element: <Service />,
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
