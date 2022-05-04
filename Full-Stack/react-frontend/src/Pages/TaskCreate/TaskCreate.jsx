import React from "react";
import { Component } from "react";
// import GroupSelect from "../../Components/GroupSelectButton/GroupSelect";
// import PageHeader from "../../Components/PageHeader/PageHeader";
import './TaskCreate.css';



export default class TaskCreatePage extends Component {
    constructor(props) {
      super(props);
      this.onChangeTitle = this.onChangeTitle.bind(this);
      this.onChangeMember = this.onChangeMember.bind(this);
      this.onChangeDueDate = this.onChangeDueDate.bind(this);
      this.onChangeDescription = this.onChangeDescription.bind(this);
      this.onChangeDifficulty = this.onChangeDifficulty.bind(this);


      this.state = {
        title: null,
        member: null,
        dueDate: null,
        description: null,
        difficulty: null
      };
    }
  
    onChangeTitle(e) {
      this.setState({
        title: e.target.value
      });
    }
  
    onChangeMember(e) {
      this.setState({
        member: e.target.value
      });
    }

    onChangeDueDate(e) {
        this.setState({
          dueDate: e.target.value
        });
    }

    onChangeDescription(e) {
        this.setState({
          description: e.target.value
        });
    }

    onChangeDifficulty(e) {
        this.setState({
          difficulty: e.target.value
        });
    }
  
    saveTask() {
      var data = {
        title: this.state.title,
        member: this.state.member,
        dueDate: this.state.dueDate,
        description: this.state.description,
        difficulty: this.state.difficulty
    };
  
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
    }
  
    newTaskPage() {
      this.setState({
        title: "",
        member: "",
        dueDate: "",
        description: "",
        difficulty: ""
      });
    }
  
    render() {
        return(
            <div class = "main">
                <form action="" method="">
                <div class="form-group row">
                    <label id="title" for="title-id">Title: </label>
                    <input type="text" class="form-control" id="title-id" name="title" placeholder="Add Title"></input>
                    <button type="button" class="save">Save</button>
                    <button type="button" class="cancel">Cancel</button>
                </div>
                <div class="form-group row">
                    <label id="member" for="member-id">Member: </label>
                    <input type="text" class="form-control" id="member-id" name="member" placeholder="Add Member"></input>
                </div>
                <div class="form-group row">
                    <label id="dated" for="date-id">Due Date: </label>
                    <input type="date" class="form-control" id="date-id" name="date"></input>
                </div>
                <div class="form-group row">
                    <label for="description-id">Description: </label>
                </div>
                <div class="form-group-row">
                    <input type="text" class="form-control" id="description-id" name="description" placeholder="Add Description"></input>
                </div>
                <div class="form-group row">
                    <label id="difficulty" for="difficulty-id">Difficulty: Stars? </label>
                    <button type="button" class="delete">Delete Task</button>
                </div>
    
                </form>
            </div>
        )};
    }

