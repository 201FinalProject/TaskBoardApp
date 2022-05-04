import React from 'react';
import { Routes, Link, Route, BrowserRouter } from "react-router-dom";
import './HistoryTask.css';
import ReactDOM from 'react-dom';
import { Component } from "react";
import "@fontsource/dm-sans";
import "@fontsource/sora";
import HistoryService from '../../services/HistoryService'




export default class HistoryTask extends Component {
    constructor(props) {
      super(props);
    
      this.state = {
        tasks:[]
      };
    }

  componentDidMount(){
    HistoryService.getTasks().then((res) => {
        this.setState({ tasks: res.data});
    });
  }
  

  /*
    newHistoryPage() {
      this.setState({
        member: "",
        difficulty: "",
        date: ""
      });
    }
  */
    render() {
        return (
            <h1>
            <div class = "IndivTask">
                <div class = "TaskName">TaskName</div>
                <div class = "Line1"></div>
                <ul class = "Completed">
                    <li class = "CompletedBy1">Completed By: </li>
                    <li class = "CompletedBy2">Task Name</li>
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

            <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Task Name</th>
                                    <th> Task Completed By</th>
                                    <th> Task Difficulty</th>
                                    <th> Task Completion Date</th>
                                    <th> Task Group Code </th>
                                   
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.tasks.map(
                                        task => 
                                        <tr key = {task.id}>
                                             <td> { task.taskName} </td>   
                                             <td> {task.completedBy}</td>
                                             <td> {task.difficulty}</td>
                                             <td> {task.completionDate}</td>
                                             <td> {task.groupCode}</td>
                                             
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </h1>

            
        )};
    }



