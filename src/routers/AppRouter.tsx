import React from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import { createBrowserHistory as createHistory } from "history";
import Routes from "./Routes";
import NavigationBar from "../components/NavigationBar";
import NotFound from "../Pages/NotFoundPage";

const history = createHistory();

export default class AppRouter extends React.Component {
  render() {
    return (
      <>
        <Router history={history}>
          <NavigationBar />
          <Switch>
            {Routes.map((route: any) => (
              <Route exact path={route.path} key={route.path}>
                <route.component />
              </Route>
            ))}
            <Route path="/notfound" component={NotFound} />
            <Redirect to={"/notfound"} />
          </Switch>
        </Router>
      </>
    );
  }
}
