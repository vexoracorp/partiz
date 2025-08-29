import { createBrowserRouter } from "react-router-dom";

import Main from "../pages/main";
import Login from "../pages/login";

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
