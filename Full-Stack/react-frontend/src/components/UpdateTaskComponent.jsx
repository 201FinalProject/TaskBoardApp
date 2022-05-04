import React, { Component } from 'react'
import TaskService from '../services/TaskService';

class UpdateTaskComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            userName: '',
            pass: '',
            email: ''
        }
        this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.updateTask = this.updateTask.bind(this);
    }

    componentDidMount(){
        TaskService.getTaskById(this.state.id).then( (res) =>{
            let task = res.data;
            this.setState({userName: task.userName,
                pass: task.pass,
                email : task.email
            });
        });
    }

    updateTask = (e) => {
        e.preventDefault();
        let task = {userName: this.state.userName, pass: this.state.pass, email: this.state.email};
        console.log('task => ' + JSON.stringify(task));
        console.log('id => ' + JSON.stringify(this.state.id));
        TaskService.updateTask(task, this.state.id).then( res => {
            this.props.history.push('/tasks');
        });
    }
    
    changeUserNameHandler= (event) => {
        this.setState({userName: event.target.value});
    }

    changePasswordHandler= (event) => {
        this.setState({pass: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({email: event.target.value});
    }

    cancel(){
        this.props.history.push('/tasks');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Task</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> First Name: </label>
                                            <input placeholder="First Name" name="userName" className="form-control" 
                                                value={this.state.userName} onChange={this.changeUserNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Last Name: </label>
                                            <input placeholder="Last Name" name="pass" className="form-control" 
                                                value={this.state.pass} onChange={this.changePasswordHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email Id: </label>
                                            <input placeholder="Email Address" name="email" className="form-control" 
                                                value={this.state.email} onChange={this.changeEmailHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateTask}>Save</button>
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

export default UpdateTaskComponent
