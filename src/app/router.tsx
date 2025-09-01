import { createBrowserRouter } from "react-router-dom";

import { Content, Home, Login, Product, Subscription } from "@/pages";

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
]);

export default Router;
