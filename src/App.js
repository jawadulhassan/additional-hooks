import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import UseCallback from "./components/UseCallback";
import UseReducerAndContext from "./components/UseReducerAndContext/index";

import "./App.css";
import Layout from "./Layout";

function App() {
  return (
    <Router>
      <div>
        <Layout />
        <Switch>
          <Route
            path="/use-reducer-with-context"
            component={UseReducerAndContext}
          />
          <Route path="/use-callback-memo" component={UseCallback} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
