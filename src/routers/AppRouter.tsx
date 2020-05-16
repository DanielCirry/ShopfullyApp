import React from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import { createBrowserHistory as createHistory } from "history";
import Routes from "./Routes";
import NavigationBar from "../components/NavigationBar";

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
            {/* <Route exact path="/" component={Flyers} />
            <Route path="/notfound" component={NotFound} /> */}
            <Redirect to={"/notfound"} />
          </Switch>
        </Router>
      </>
    );
  }
}
