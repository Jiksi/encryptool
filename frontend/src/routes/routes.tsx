import { createBrowserRouter } from "react-router";
import Home from "./home/page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);
