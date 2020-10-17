// Import Dependencies
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// import PrivateRoute from "../utilities/PrivateRoute";

// Import Assets
import "./App.css";

// Import Components
import Login from "./components/Login";
import Register from "./components/Register";
import Homepage from "./components/Homepage";
import Header from "./components/Header";
import Listings from "./components/Listings";
import AddListing from "./components/AddListing";
// Import Assets
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Route exact path="/">
          <Homepage />
        </Route>

        <Route path="/listings">
          <Listings />
        </Route>

        {/* This will replace the route above */}
        {/* <PrivateRoute exact path="/listings" component={Listings}/> */}

        <Route path="/addlisting">
          <AddListing />
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
