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
        path: "/details",
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
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
