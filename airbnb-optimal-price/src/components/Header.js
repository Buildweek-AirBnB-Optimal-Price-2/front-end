// Import Dependencies
import React from 'react';
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav>
        <NavLink to="/login" activeClassName="active">Login Page</NavLink>
        <NavLink to="/register" activeClassName="active">Register Page</NavLink>
      </nav>
    </header>
  )
}
