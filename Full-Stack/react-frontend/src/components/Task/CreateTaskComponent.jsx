import React, { Component } from 'react'
import TaskService from '../../services/TaskService';
import './TaskCreate.css';

class CreateTaskComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            taskName: '',
            completedBy: '',
            description: '',
            difficulty: '',
            completionDate: '',
            groupCode:''
        }
        this.changeTaskNameHandler = this.changeTaskNameHandler.bind(this);
        this.changeCompletedByHandler = this.changeCompletedByHandler.bind(this);
        this.saveOrUpdateTask = this.saveOrUpdateTask.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            TaskService.getTaskById(this.state.id).then( (res) =>{
                let task = res.data;
                this.setState({
                    taskName: task.taskName,
                    completedBy: task.completedBy,
                    description: task.description,
                    difficulty: task.difficulty,
                    completionDate: task.completionDate,
                    groupCode: task.groupCode
                });
                this.deleteTask = this.deleteTask.bind(this);
            });
        }        
    }
    saveOrUpdateTask = (e) => {
        e.preventDefault();
        let task = {taskName: this.state.taskName, completedBy: this.state.completedBy, description: this.state.description, difficulty: this.state.difficulty, completionDate: this.state.completionDate, groupCode: this.state.groupCode};
        console.log('task => ' + JSON.stringify(task));

        // step 5
        if(this.state.id === '_add'){
            TaskService.createTask(task).then(res =>{
                this.props.history.push('/tasks');
            });
        }else{
            TaskService.updateTask(task, this.state.id).then( res => {
                this.props.history.push('/tasks');
            });
        }
    }
    
    deleteTask(id){
        TaskService.deleteTask(id).then( res => {
            this.setState({tasks: this.state.tasks.filter(task => task.id !== id)});
        });
    }

    changeTaskNameHandler= (event) => {
        this.setState({taskName: event.target.value});
    }

    changeCompletedByHandler= (event) => {
        this.setState({completedBy: event.target.value});
    }

    changeDescriptionHandler= (event) => {
        this.setState({description: event.target.value});
    }

    changeDifficultyHandler= (event) => {
        this.setState({difficulty: event.target.value});
    }

    changeCompletionDateHandler= (event) => {
        this.setState({completionDate: event.target.value});
    }

    changeGroupCodeHandler= (event) => {
        this.setState({groupCode: event.target.value});
    }

    cancel(){
        this.props.history.push('/tasks');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Task</h3>
        }else{
            return <h3 className="text-center">Update Task</h3>
        }
    }
    render() {
        return(
            <div class = "main">
                <form action="" method="">
                <div className="form-group row">
                    <label id="title" for="title-id">Title: </label>
                    <input type="text" className="form-control" id="title-id" name="title" placeholder="Task Name" name="taskName" 
                        value={this.state.taskName} onChange={this.changeTaskNameHandler}></input>
                    <button type="button" className="cancel" onClick={this.cancel.bind(this)} >Cancel</button>
                </div>
                <div className="form-group row">
                    <label id="member" for="member-id">Member: </label>
                    <input type="text" className="form-control" id="member-id" name="member" placeholder="Completed By" 
                        value={this.state.completedBy} onChange={this.changeCompletedByHandler}></input>
                </div>
                <div className="form-group row">
                    <label id="dated" for="date-id">Due Date: </label>
                    <input type="date" className="form-control" id="date-id" name="date" placeholder="Completion Date" 
                         value={this.state.completionDate} onChange={this.changeCompletionDateHandler}></input>
                </div>
                <div className="form-group row">
                    <label for="description-id">Description: </label>
                </div>
                <div className="form-group-row">
                    <input type="text" className="form-control" id="description-id" name="description" placeholder="Add Description"
                     value={this.state.description} onChange={this.changeDescriptionHandler}></input>
                </div>
                <div className="form-group row">
                    <label id="difficulty" for="difficulty-id">Difficulty: Stars? </label>
                    <button type="button" onClick={ () => this.deleteTask(this.id)} className="delete">Delete Task</button>
                    <button className = "save" onClick={this.saveOrUpdateTask}>Save</button>
                </div>
    

                </form>
            </div>
        )
    }
}

export default CreateTaskComponent;

