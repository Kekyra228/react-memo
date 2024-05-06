import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { EasyModSelecting } from "./components/context/gameModContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <EasyModSelecting>
        <RouterProvider router={router}></RouterProvider>
    </EasyModSelecting>
  </React.StrictMode>,
);
