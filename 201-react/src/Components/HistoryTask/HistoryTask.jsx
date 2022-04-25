import React from 'react';
import { Routes, Link, Route, BrowserRouter } from "react-router-dom";
import './HistoryTask.css';
import "@fontsource/dm-sans";
import "@fontsource/sora";

function HistoryTask() {
    return (
        <h1>
        <div class = "IndivTask">
            <div class = "TaskName">TaskName</div>
            <div class = "Line1"></div>
            <ul class = "Completed">
                <li class = "CompletedBy1">Completed By: </li>
                <li class = "CompletedBy2">MemberName</li>
            </ul>
            <ul class = "Difficulty">
                <li class = "Difficulty1">Difficulty: </li>
                <li class = "Difficulty2">DifficultyLevel</li>
            </ul>
            <ul class = "Date">
                <li class = "CompletionDate1">Completion Date: </li>
                <li class = "CompletionDate2">CompletionDate</li>
            </ul>
        </div>
        <select id = "OrderBy" name = "OrderBy">
            <option class = "SelectionDisabled" selected disabled>Order By:</option>
            <option value = "CompletedBy">Completed By</option>
            <option value = "Difficulty">Difficulty</option>
            <option value = "CompletionDate">Completion Date</option>
        </select>
        </h1>
    );
}

export default HistoryTask;