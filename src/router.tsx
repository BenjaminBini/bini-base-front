import { createBrowserRouter } from "react-router-dom";

import Users from "./admin/Users";
import App from "./App";
import Layout from "./Layout";
import Login from "./Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/admin",
        children: [
          {
            path: "users",
            element: <Users />,
          },
        ],
      },
    ],
  },
]);

export default router;
