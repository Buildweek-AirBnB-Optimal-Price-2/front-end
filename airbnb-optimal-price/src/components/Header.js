// Import Dependencies
import React from 'react';
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div id="logo">
        <img src="https://cdn.pixabay.com/photo/2018/05/04/21/27/airbnb-3375057_960_720.png" alt="AirBnB App Logo" />
      </div>
      
      <nav>
        <NavLink to="/" exact activeClassName="active">Home</NavLink>
        <NavLink to="/listings" activeClassName="active">Listings</NavLink>
        <NavLink to="/login" activeClassName="active">Login</NavLink>
        <NavLink to="/register" activeClassName="active">Register</NavLink>
      </nav>
    </header>
  )
}
