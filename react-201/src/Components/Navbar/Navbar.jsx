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
          <Link to="/taskcreate">
            Create Task
          </Link>
        </li>
      </ul>
      </nav>
    );
  }
  
  export default Navbar;