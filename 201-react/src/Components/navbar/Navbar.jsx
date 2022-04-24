import React from 'react';
import { Link, Route, BrowserRouter } from "react-router-dom";
import './nav.css';

function Navbar() {
    return (
      <nav id="entirebar">
          <Link to="/" id="logo">
        Vision
      </Link>
      <ul>
        <li>
          <Link to="/login" className="login-button">
            Login
          </Link>
        </li>
      </ul>
      </nav>
    );
  }
  
  export default Navbar;