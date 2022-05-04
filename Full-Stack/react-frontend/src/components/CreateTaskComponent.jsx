import React, { Component } from 'react'
import TaskService from '../services/TaskService';

class CreateTaskComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            taskName: '',
            completedBy: '',
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
                this.setState({taskName: task.taskName,
                    completedBy: task.completedBy,
                    difficulty: task.difficulty,
                    completionDate: task.completionDate,
                    groupCode: task.groupCode
                });
            });
        }        
    }
    saveOrUpdateTask = (e) => {
        e.preventDefault();
        let task = {taskName: this.state.taskName, completedBy: this.state.completedBy, difficulty: this.state.difficulty, completionDate: this.state.completionDate, groupCode: this.state.groupCode};
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
    
    changeTaskNameHandler= (event) => {
        this.setState({taskName: event.target.value});
    }

    changeCompletedByHandler= (event) => {
        this.setState({completedBy: event.target.value});
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
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Task Name: </label>
                                            <input placeholder="Task Name" name="taskName" className="form-control" 
                                                value={this.state.taskName} onChange={this.changeTaskNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Completed By: </label>
                                            <input placeholder="Completed By" name="completedBy" className="form-control" 
                                                value={this.state.completedBy} onChange={this.changeCompletedByHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Difficulty: </label>
                                            <input placeholder="Difficulty" name="difficulty" className="form-control" 
                                                value={this.state.difficulty} onChange={this.changeDifficultyHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Completion Date: </label>
                                            <input placeholder="Completion Date" name="completionDate" className="form-control" 
                                                value={this.state.completionDate} onChange={this.changeCompletionDateHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Group Code: </label>
                                            <input placeholder="Group Code" name="groupCode" className="form-control" 
                                                value={this.state.groupCode} onChange={this.changeGroupCodeHandler}/>
                                        </div>

                                    

                                        <button className="btn btn-success" onClick={this.saveOrUpdateTask}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateTaskComponent
