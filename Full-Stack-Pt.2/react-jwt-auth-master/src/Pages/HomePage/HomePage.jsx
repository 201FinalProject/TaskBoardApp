import React, { Component } from 'react'
import './HomePage.css';
import "@fontsource/sora";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ListTaskComponent from '../../components/Task/ListTaskComponent/ListTaskComponent';
import UserService from "../../services/user.service";


class HomePage extends Component{
    constructor(props) {
        super(props)
        this.state = {
            groups: [],
            content: ""
        }
    }
    componentDidMount() {
        UserService.getPublicContent().then(
          response => {
            this.setState({
              content: response.data
            });
          },
          error => {
            this.setState({
              content:
                (error.response && error.response.data) ||
                error.message ||
                error.toString()
            });
          }
        );
      }

    render(){
        return(
            <div id="mainHome">
                
                <div>
                    <div id="headerDiv">
                        <h2 id="dividerHeader">My Tasks</h2>
                    </div>
                    <hr id="divider" style={{clear: "both"}}></hr>   
                </div>
                <h2 style={{height: "30px"}}></h2>
                <ListTaskComponent />
                <h2 id="temp"></h2>
                {/* <div id="mainDiv">
                    <div id="headerDiv">
                        <h2 id="dividerHeader">Groups</h2>
                    </div>
                    <div id="buttonDiv">
                        <button type="button" id="GroupButton" onClick={event =>  window.location.href='/add-group/_add'}>
                        <FontAwesomeIcon icon={faPlus} />
                        &nbsp;   Create/Join Group
                        </button>
                    </div>
                    <hr id="divider" style={{clear: "both"}}></hr>
                </div>
                {
                this.state.groups.map(
                        group => 
                        <GroupSelect key={group.id} code={group.groupCode}></GroupSelect>
                    )
                }        */}
            </div>
        );
    }
}

export default HomePage;