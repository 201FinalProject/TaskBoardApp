import React from "react";
import HistoryTask from "../../components/HistoryTask/HistoryTask";
import { Component } from "react";


export default class HistoryPage extends Component {
    constructor(props) {
      super(props);
    
  
    
    
  }

    render() {
      return(
        <div style={{marginTop: "100px"}}>
            <p id="PHeader">History</p>
            <HistoryTask></HistoryTask>
          
            
        </div>
    )};
}

