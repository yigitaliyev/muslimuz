import Navbar from "./components/navbar";
import React from "react";
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";
import BoshSahifa from "./Routes/BoshSahifa";
import Buttom from "./components/buttom";
import Login from "./components/login";
import Signup from "./components/signup";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "./store/action";
import Maqolalar from "./Routes/Maqolaalar";
function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch]);

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
          <Route path="/maqolalar" exact>
            <Maqolalar />
          </Route>
        </Switch>
      </Router>
        <Buttom />
    </>
  );
}

export default App;
