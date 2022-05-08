import React from 'react';
import { Routes, Link, Route, BrowserRouter } from "react-router-dom";
import './PageHeader.css';

function PageHeader(props) {
    return (
        
        <div id="headID">
            <p id="PHeader">{props.name}</p>
        </div>
        
    );
}

export default PageHeader;