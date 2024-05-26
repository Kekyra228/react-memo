import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { ModProvider } from "./components/context/gameModContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ModProvider>
      <RouterProvider router={router}></RouterProvider>
    </ModProvider>
  </React.StrictMode>,
);
