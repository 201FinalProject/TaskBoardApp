import React, { Component } from 'react'
import TaskService from '../../services/TaskService'

class ViewTaskComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            task: {}
        }
    }

    componentDidMount(){
        TaskService.getTaskById(this.state.id).then( res => {
            this.setState({task: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Task Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Task Name: </label>
                            <div> { this.state.task.taskName}</div>
                        </div>
                        <div className = "row">
                            <label> Task Completed By: </label>
                            <div> { this.state.task.completedBy}</div>
                        </div>
                        <div className = "row">
                            <label> Task Difficulty: </label>
                            <div> { this.state.task.difficulty }</div>
                        </div>
                        <div className = "row">
                            <label> Description: </label>
                            <div> { this.state.task.description }</div>
                        </div>
                        <div className = "row">
                            <label> Task Completion Date: </label>
                            <div> { this.state.task.completionDate }</div>
                        </div>
                        <div className = "row">
                            <label> Group Code: </label>
                            <div> { this.state.task.groupCode }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewTaskComponent
