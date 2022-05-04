import React, { Component } from 'react'
import GroupService from '../services/GroupService'

class ListGroupComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                groups: []
        }
        this.addGroup = this.addGroup.bind(this);
        this.editGroup = this.editGroup.bind(this);
        this.deleteGroup = this.deleteGroup.bind(this);
    }

    deleteGroup(id){
        GroupService.deleteGroup(id).then( res => {
            this.setState({groups: this.state.groups.filter(group => group.id !== id)});
        });
    }
    viewGroup(id){
        this.props.history.push(`/view-group/${id}`);
    }
    editGroup(id){
        this.props.history.push(`/add-group/${id}`);
    }

    componentDidMount(){
        GroupService.getGroups().then((res) => {
            this.setState({ groups: res.data});
        });
    }

    addGroup(){
        this.props.history.push('/add-group/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Groups List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addGroup}> Add Group</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> UserID</th>
                                    <th> GroupID</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.groups.map(
                                        group => 
                                        <tr key = {group.id}>
                                             <td> { group.userID} </td>   
                                             <td> {group.groupID}</td>
                                             <td>
                                                 <button onClick={ () => this.editGroup(group.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteGroup(group.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewGroup(group.id)} className="btn btn-info">View </button>
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

export default ListGroupComponent
