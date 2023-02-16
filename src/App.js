import Navbar from "./components/navbar";
import React from "react";
import {BrowserRouter as Router, Route, Switch, } from "react-router-dom";
import BoshSahifa from "./Routes/BoshSahifa";
import Buttom from "./components/buttom";
import Login from "./components/login";
import Signup from "./components/signup";

function App() {
  return (
    <>
      <Router>
        <Navbar />
          <Switch>
            <Route path="/" exact>
                <BoshSahifa />
            </Route>
            <Route path="/login" exact>
                <Login />
            </Route>
            <Route path="/signup" exact>
               <Signup />
            </Route>
          </Switch>
          <Buttom />
      </Router>
    </>
  );
}

export default App;
