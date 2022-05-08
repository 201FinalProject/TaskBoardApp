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
                 
                 <div className = "row">
                    <button className="btn btn-primary" id="addTaskButton" onClick={event => window.location.href='/add-task/_add'} id="AddTaskBtn"> Add Task</button>
                 </div>
                 <br></br>

                 <div>
                        <table id="listTable" >
                            <thead>
                                <tr style={{borderTop: "solid 1px #6A6A6A", borderLeft: "solid 1px black"}}>
                                    <th> Completed?</th>
                                    <th> Task Name</th>
                                    <th> Task Assigned To</th>
                                    <th> Task Assigned By</th>
                                    
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
                                             <td> {task.assignedBy}</td>
                                             
                                             <td> {task.difficulty}</td>
                                             <td> {task.completionDate}</td>
                                             <td>
                                                 <button onClick={event => window.location.href='/add-task/'+task.id} className="btn btn-info" id="btn123">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={() => this.deleteTask(task.id)} className="btn btn-danger" id="btn234">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={event => window.location.href='/add-task/'+task.id} className="btn btn-info" id="btn123">View </button>
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
