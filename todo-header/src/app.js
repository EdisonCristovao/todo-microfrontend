import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header";

export default function Root(props) {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/">
          <div>
            <h1>Opaaa</h1>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}
