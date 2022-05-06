import React from 'react';
import { Link} from "react-router-dom";
import './Navbar.css';

function Navbar() {
    return (
      <nav id="entirebar">
      <Link to="/" id="logo">
        Vision
      </Link>
      <ul>
        <li>
          <Link to="/" className="home-button">
            Home
          </Link>
          
        </li>
        <li>
          <Link to="/login" className="login-button">
            Login
          </Link>
          
        </li>
        <li>
          <Link to="/history" className="history-button">
            History
          </Link>
        </li>
        <li>
          <Link to="/add-task/_add">
            Create Task
          </Link>
        </li>
        <li>
          <Link to="/add-group/_add">
            Create/Join Group
          </Link>
        </li>
      </ul>
      </nav>
    );
  }
  
  export default Navbar;