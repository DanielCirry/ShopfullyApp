import React from "react";
import FlyersPage from "../Pages/FlyersPage";

class HomePath extends React.Component<any, any> {
  render() {
    return <FlyersPage />;
  }
}

class FavouritesPath extends React.Component<any, any> {
  render() {
    return <h1>Favourites</h1>;
  }
}

const Routes = [
  {
    path: "/api/flyers",
    sidebarName: "Home",

    component: HomePath,
  },
  {
    path: "/favourites",
    sidebarName: "Favourites",
    component: FavouritesPath,
  },
];

export default Routes;
