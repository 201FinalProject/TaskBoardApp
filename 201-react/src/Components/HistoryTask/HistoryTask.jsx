import React from 'react';
import { Routes, Link, Route, BrowserRouter } from "react-router-dom";
import './HistoryTask.css';

function HistoryTask() {
    return (
        
        <div class = "IndivTask">
            <ul class = "TaskList">
            <li class = "TaskName1">TaskName</li>
            <li class = "CompletedBy1">Completed By: </li>
            <li class = "Difficulty1">Difficulty: </li>
            <li class = "CompletionDate1">Completion Date: </li>
            </ul>
        </div>
        
    );
}

export default HistoryTask;