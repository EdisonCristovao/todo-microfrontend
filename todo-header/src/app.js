import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header";
import Parcel from "single-spa-react/parcel";

export default function Root(props) {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <div>
            <h1>Opaaa</h1>
          </div>
        </Route>

        <Route path="/list">
          <Parcel config={() => System.import("@ec/todo-list")}></Parcel>
        </Route>
      </Switch>
    </Router>
  );
}
