import { createBrowserRouter } from "react-router-dom";

import Home from "@/pages/Home";
import Login from "@/pages/Login";
import MyContent from "@/pages/Mycontent.tsx";
import Subscription from "@/pages/subscription.tsx";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/my-contents",
    element: <MyContent />,
  },
  {
    path: "/subscription",
    element: <Subscription />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default Router;
