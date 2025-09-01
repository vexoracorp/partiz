import { createBrowserRouter } from "react-router-dom";

import {
  Content,
  Home,
  Login,
  Product,
  ProductDetail,
  Subscription,
} from "@/pages";

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
]);

export default Router;
