// Import Dependencies
import React from 'react';
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav>
        <NavLink to="/login">Login Page</NavLink>
        <NavLink to="/register">REgister Page</NavLink>
      </nav>
    </header>
  )
}
