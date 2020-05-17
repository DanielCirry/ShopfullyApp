import React from "react";
import NotFound from "../Pages/NotFoundPage";
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
class NotFoundPath extends React.Component<any, any> {
  render() {
    return <NotFound />;
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
  {
    path: "/notfound",
    sidebarName: "Not Found",
    component: NotFoundPath,
  },
];

export default Routes;
