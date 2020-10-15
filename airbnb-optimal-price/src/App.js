// Import Dependencies
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";

import PrivateRoute from "../utilities/PrivateRoute";

// Import Assets
import "./App.css";
import Homepage from "./components/Homepage";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/">
          <Homepage />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/register">
          <Register />
        </Route>
      </div>
    </Router>
  );
}

export default App;
