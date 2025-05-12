import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Root from "./Pages/Root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import OrderForm from "./Components/OrderForm";
import Details from "./Components/Details";
import Products from "./Pages/Products";
import About from "./Pages/About";
import Dashboard from "./Pages/Dashboard";
import AddProduct from "./Pages/AddProduct";
import Oders from "./Pages/Oders";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Admin from "./Pages/Admin";
import AuthProvider from "./Hooks/AuthProvider";
import Err from "./Pages/Err";
import AdminChecker from "./Pages/AdminChecker";
const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Err />,
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "oder",
        element: <OrderForm />,
      },
      {
        path: "/details/:id",
        element: <Details />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/checkout",
        element: <OrderForm />,
      },
      {
        path: "/admin",
        element: <Admin />,
      },
    ],
  },
  {
    path: "/dashboard",
    errorElement: <Err />,
    element: (
      <AdminChecker>
        <Dashboard />
      </AdminChecker>
    ),
    children: [
      {
        index: true,
        path: "/dashboard/orders",
        element: (
          <AdminChecker>
            <Oders />
          </AdminChecker>
        ),
      },
      {
        path: "/dashboard/add-product",
        element: (
          <AdminChecker>
            <AddProduct />
          </AdminChecker>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
);
