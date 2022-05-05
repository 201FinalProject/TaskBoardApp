import React from 'react';
import { Routes, Link, Route, BrowserRouter } from "react-router-dom";
import './GroupSelect.css';
import { faElipsisH } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function GroupSelect() {
    return (
        
        <div>
            <Link to="/GroupHome" id="logo">
                <button type="button" id="grpBtn"> 
                    <p id="GHGroupName">GroupHome</p>
                </button>
            </Link>
            <div class="dropdown">
                <button class="dropbtn">...</button>
                <div class="dropdown-content">
                    <Link to="/GroupHome" id="logo">
                        <a href="#">View Group</a>
                    </Link>
                    {/* This one should remove user from the group and remove it from homepage */}
                    <Link to="/" id="logo">
                        <a href="#">Leave Group</a>
                    </Link>
                    
                    
                </div>
            </div>

            
  
        </div>
        
    );
}

export default GroupSelect;