import React from "react";
import NotFound from "../Pages/NotFoundPage";
import FlyersPage from "../Pages/FlyersPage";
import { IError } from "../types/general";
import { IGetFlyersResponse } from "../store/flyers/types";
import { Dispatch } from "redux";
import * as asyncActions from "../store/flyers/asyncAction";
import { IRootState } from "../store";
import { FlyersActions } from "../store/flyers/types";

class HomePath extends React.Component<any, any> {
  render() {
    console.log(this.props);
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
    path: "/",
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

const mapStateToProps = ({ flyers }: IRootState) => ({
  flyersData: flyers.flyersData,
  loading: flyers.flyersDataLoading,
  error: flyers.flyersDataError,
});
