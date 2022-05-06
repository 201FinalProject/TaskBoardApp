import React, { Component } from 'react'
import GroupService from '../../services/GroupService';

class CreateGroupComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            userID: '',
            groupCode: '',
        }
        this.changeUserIDHandler = this.changeUserIDHandler.bind(this);
        this.changeGroupIDHandler = this.changeGroupIDHandler.bind(this);
        this.saveOrUpdateGroup = this.saveOrUpdateGroup.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            GroupService.getGroupById(this.state.id).then( (res) =>{
                let group = res.data;
                this.setState({userID: group.userID,
                    groupCode: group.groupCode,
    
                });
            });
        }        
    }
    saveOrUpdateGroup = (e) => {
        e.preventDefault();
        let group = {userID: this.state.userID, groupCode: this.state.groupCode};
        console.log('group => ' + JSON.stringify(group));

        // step 5
        if(this.state.id === '_add'){
            GroupService.createGroup(group).then(res =>{
                this.props.history.push('/');
            });
        }else{
            GroupService.updateGroup(group, this.state.id).then( res => {
                this.props.history.push('/');
            });
        }
    }
    
    changeUserIDHandler= (event) => {
        this.setState({userID: event.target.value});
    }

    changeGroupIDHandler= (event) => {
        this.setState({groupCode: event.target.value});
    }


    cancel(){
        this.props.history.push('/groups');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Group</h3>
        }else{
            return <h3 className="text-center">Update Group</h3>
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
                                            <label> UserID: </label>
                                            <input placeholder="User ID" name="userID" className="form-control" 
                                                value={this.state.userID} onChange={this.changeUserIDHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> GroupID: </label>
                                            <input placeholder="Group ID" name="groupCode" className="form-control" 
                                                value={this.state.groupCode} onChange={this.changeGroupIDHandler}/>
                                        </div>
                                       

                                        <button className="btn btn-success" onClick={this.saveOrUpdateGroup}>Save</button>
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

export default CreateGroupComponent
