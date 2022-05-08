import React, { Component } from 'react'
import TaskService from '../../../services/TaskService'
import './ListTaskComponent.css'

class ListTaskComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                tasks: []
        }
        this.editTask = this.editTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
        this.markCompleted = this.markCompleted.bind(this);
    }

    deleteTask(id){
        TaskService.deleteTask(id).then( res => {
            this.setState({tasks: this.state.tasks.filter(task => task.id !== id)});
        });
    }
    viewTask(id){
        this.props.history.push(`/view-task/${id}`);
    }
    editTask(id){

        //this.props.history.push(`/add-task/${id}`);
    }
    markCompleted(id, task){
        task.completed = !task.completed;
        TaskService.changeTaskCompletion(task, id);
    }

    componentDidMount(){
        TaskService.getTasks().then((res) => {
            this.setState({ tasks: res.data});
        });
    }



    render() {
        return (
            <div>
                 <h2 className="text-center">Tasks List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" id="AddTaskBtn" onClick={event => window.location.href='/add-task/_add'}> Add Task</button>
                 </div>
                 <br></br>
                 <div>
                        <table id="listTable" >
                            <thead>
                                <tr style={{borderTop: "solid 1px #6A6A6A", borderLeft: "solid 1px black"}}>
                                    <th> Completed?</th>
                                    <th> Task Name</th>
                                    <th> Task Completed By</th>
                                    <th> Task Description</th>
                                    <th> Task Difficulty</th>
                                    <th> Task Completion Date</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.tasks.map(
                                        task => 
                                        <tr key = {task.id} style={{borderLeft: "solid 1px black"}}>
                                             <td> 
                                                 <input key={task.id} type="checkbox" defaultChecked={task.completed} onClick={this.markCompleted(task.id, task)}/>
                                             </td>
                                             <td> {task.taskName} </td>   
                                             <td> {task.completedBy}</td>
                                             <td> {task.description}</td>
                                             <td> {task.difficulty}</td>
                                             <td> {task.completionDate}</td>
                                             <td>
                                                 <button onClick={event => window.location.href='/add-task/'+task.id} id="btn123" className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={() => this.deleteTask(task.id)} id="btn234" className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewTask(task.id)} id="btn123" className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListTaskComponent
