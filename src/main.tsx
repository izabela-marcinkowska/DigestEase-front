import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import Logs from "./Logs.tsx";
import Rapports from "./Rapports.tsx";
import AddLog from "./AddLog.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/logs",
    element: <Logs />,
  },
  {
    path: "/add-log",
    element: <AddLog />,
  },
  {
    path: "/rapports",
    element: <Rapports />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
