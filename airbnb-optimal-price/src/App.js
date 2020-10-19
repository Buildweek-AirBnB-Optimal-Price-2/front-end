// Import Dependencies
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PrivateRoute from "./utilities/PrivateRoute";

// Import Assets
import "./App.css";

// Import Components
import Login from "./components/Login";
import Register from "./components/Register";
import Homepage from "./components/Homepage";
import Header from "./components/Header";
import Listings from "./components/Listings";
import AddListing from "./components/AddListing";
import EditListing from "./components/EditListing";
// Import Assets
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
          <PrivateRoute exact path="/listings" component={Listings} />
          <Route exact path="/">
            <Homepage />
          </Route>

          {/* <Route path="/listings">
            <Listings />
          </Route> */}

          <Route path="/addlisting">
            <AddListing />
          </Route>

          <Route path="/editlisting/:id">
            <EditListing />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
