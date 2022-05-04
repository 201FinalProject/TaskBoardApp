import React from "react";
import HistoryTask from "../../components/HistoryTask/HistoryTask";
import { Component } from "react";
import background from "../../LongBackground.png";

const useStyles = {
    MainDivision: {
      backgroundImage: `url(${background}`,
      backgroundSize: "cover",
      marginTop: "100px"
    }
}

export default class HistoryPage extends Component {
    constructor(props) {
      super(props);
    
  
    
    
  }

    render() {
      return(
        <div style={useStyles.MainDivision}>
            <p id="PHeader">History</p>
            <HistoryTask></HistoryTask>
            <HistoryTask></HistoryTask>
            <HistoryTask></HistoryTask>
            <HistoryTask></HistoryTask>
            
        </div>
    )};
}

