import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "../modules/Home/Home";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "*",
    element: <div>Not Found</div>,
  },
];

const AppRoutes = () => {
  const appRoutes = useRoutes(routes);
  return appRoutes;
};

export default AppRoutes;
