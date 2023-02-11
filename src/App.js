import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";

import { createContext } from "react";
import { useState } from "react";

import { useEffect } from "react";
import Login from "./Login/Login";
import Home from "./Home/Home";
// import "bootstrap/dist/css/bootstrap.min.css";
/* The following line can be included in your src/index.js or App.js file */

// import "./App.css";

export const Context = createContext({});

function App() {
  return (
    <Context.Provider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </Context.Provider>
  );
}

export default App;
