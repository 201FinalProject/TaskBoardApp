import React from "react";
import HistoryTask from "../../components/HistoryTask/HistoryTask";
import PageHeader from "../../components/PageHeader/PageHeader";
import { Component } from "react";
import background from "../../LongBackground.png";
import { Redirect } from "react-router";
import HistoryService from "../../services/HistoryService";

const useStyles = {
    MainDivision: {
      // backgroundImage: `url(${background}`,
      // backgroundSize: "cover",
      
    }
}

export default class HistoryPage extends Component {
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
  
    render() {
      return(
        <div style={useStyles.MainDivision}>
          <div>
            <PageHeader name="History"></PageHeader>
          </div>
          {/* <select id = "OrderBy" name = "OrderBy">
                <option class = "SelectionDisabled" selected disabled>Order By:</option>
                <option value = "CompletedBy">Completed By</option>
                <option value = "Difficulty">Difficulty</option>
                <option value = "CompletionDate">Completion Date</option>
          </select> */}

            {
            this.state.tasks.map(
              task =>
              <HistoryTask key = {task.id} memberName={task.completedBy} stars={task.difficulty} date={task.completionDate} taskName={task.taskName}></HistoryTask>
            )}
        </div>
    )};
}