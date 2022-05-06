import React from 'react';
import { Routes, Link, Route, BrowserRouter } from "react-router-dom";
import './HistoryTask.css';
import ReactDOM from 'react-dom';
import { Component } from "react";
import "@fontsource/dm-sans";
import "@fontsource/sora";
import HistoryService from '../../services/HistoryService'

    function HistoryTask(props) {
        return (
            <div class = "IndivTask">
                <div class = "TaskName">{props.taskName}</div>
                <div class = "Line1"></div>
                {/* {
                    this.state.tasks.map(
                        task =>
                        <tr key = {task.id}> */}
                            <div id="sectionDiv">
                                <div id = "leftHistoryDiv1">
                                    <p>Completed by: </p>
                                </div>
                                <div id = "rightHistoryDiv">
                                    <p>{props.memberName}</p>
                                </div>
                                <div style={{clear: "both"}}></div>
                            </div>
                            <div id="sectionDiv">
                                <div id = "leftHistoryDiv2">
                                    <p>Difficulty: </p>
                                </div>
                                <div id = "rightHistoryDiv">
                                    <p>{props.stars}</p>
                                </div>
                                <div style={{clear: "both"}}></div>
                            </div>
                            <div id="sectionDiv">
                                <div id = "leftHistoryDiv3">
                                    <p>Completion Date: </p>
                                </div>
                                <div id = "rightHistoryDiv">
                                    <p>{props.date}</p>
                                </div>
                                <div style={{clear: "both"}}></div>
                            </div>
        
            </div>

            
        );        
}

export default HistoryTask;