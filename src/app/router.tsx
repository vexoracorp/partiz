import { createBrowserRouter } from "react-router-dom";

import Login from "@/pages/Login";
import Main from "@/pages/Main";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default Router;
