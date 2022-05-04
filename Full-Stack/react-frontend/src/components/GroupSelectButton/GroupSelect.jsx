import React from 'react';
import { Routes, Link, Route, BrowserRouter } from "react-router-dom";
import './GroupSelect.css';

function GroupSelect() {
    return (
        
        <div>
            <Link to="/GroupHome" id="logo">
                <button type="button" id="grpBtn"> 
                    <p id="GHGroupName">GroupHome</p>
                </button>
            </Link>

            
  
        </div>
        
    );
}

export default GroupSelect;