import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../context/pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
]);
