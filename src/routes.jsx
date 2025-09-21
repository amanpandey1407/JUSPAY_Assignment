import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Dashboard from "./pages/Dashboard/Dashboard";
import Orders from "./pages/OrderList/OrderList";
import NotFound from "./pages/NotFound/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/orderlist", element: <Orders /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;
