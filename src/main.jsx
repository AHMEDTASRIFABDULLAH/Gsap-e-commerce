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
const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
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
    element: <Dashboard />,
    children: [
      {
        index: true,
        path: "/dashboard/orders",
        element: <Oders />,
      },
      {
        path: "/dashboard/add-product",
        element: <AddProduct />,
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
