import React from "react";
import NotFound from "../components/Pages/NotFound";
import Flyers from "../components/Pages/Flyers";

const flyers: React.FC = () => {
  return <Flyers />;
};

const Standings: React.FC = () => {
  return <h1>Favourites</h1>;
};

const notFound: React.FC = () => {
  return <NotFound />;
};

const Routes = [
  {
    path: "/",
    sidebarName: "Home",
    component: flyers,
  },
  {
    path: "/favourites",
    sidebarName: "Favourites",
    component: Standings,
  },
  {
    path: "/notfound",
    sidebarName: "Not Found",
    component: notFound,
  },
];

export default Routes;
