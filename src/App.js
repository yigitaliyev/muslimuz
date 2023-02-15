import Navbar from "./components/navbar";
import React from "react";
import {BrowserRouter as Router, Route, Switch, } from "react-router-dom";
import BoshSahifa from "./Routes/BoshSahifa";
import Buttom from "./components/buttom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
          <Switch>
            <Route path="/" exact>
                <BoshSahifa />
            </Route>
          </Switch>
          <Buttom />
      </Router>
    </>
  );
}

export default App;
