import React from 'react';
import { Routes, Link, Route, BrowserRouter } from "react-router-dom";
import './HistoryTask.css';
import ReactDOM from 'react-dom';
import { Component } from "react";
import "@fontsource/dm-sans";
import "@fontsource/sora";




export default class HistoryTask extends Component {
    constructor(props) {
      super(props);
      this.onChangeMember = this.onChangeMember.bind(this);
      this.onChangeDifficulty = this.onChangeDifficulty.bind(this);
      this.onChangeDate = this.onChangeDate.bind(this);
  
      this.state = {
        member: null,
        difficulty: null,
        date: null
      };
    }
  
    onChangeMember(e) {
      this.setState({
        member: e.target.value
      });
    }
  
    onChangeDifficulty(e) {
      this.setState({
        difficulty: e.target.value
      });
    }

    onChangeDate(e) {
        this.setState({
          date: e.target.value
        });
    }
  
    
  
    //   LoginDataService.create(data) 
    //     .then(response => {
    //       this.setState({
    //         email: response.data.email,
    //         password: response.data.password,
    //         groupCode: response.data.groupCode,
    //       });
    //       console.log(response.data);
    //     })
    //     .catch(e => {
    //       console.log(e);
    //     });
    
  
    newHistoryPage() {
      this.setState({
        member: "",
        difficulty: "",
        date: ""
      });
    }
  
    render() {
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
        )};
    }



