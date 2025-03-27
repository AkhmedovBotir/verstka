import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import Home from "./pages/Home";
import Excursion from "./pages/Excursion";

// Define your pages here as a JSON configuration
const pages = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/excursion",
    element: <Excursion />,
  },
];

// Create the router
const router = createBrowserRouter(pages);

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);