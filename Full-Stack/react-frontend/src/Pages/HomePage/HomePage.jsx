import React, { Component } from 'react'
import GroupSelect from "../../components/GroupSelectButton/GroupSelect";
import PageHeader from "../../components/PageHeader/PageHeader";
import './HomePage.css';
import "@fontsource/sora";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ListTaskComponent from '../../components/Task/ListTaskComponent.jsx';
import HomePageService from "../../services/HomePageService";


class HomePage extends Component{
    constructor(props) {
        super(props)
        this.state = {
            groups: []
        }
    }
     componentDidMount(){
        HomePageService.getGroups().then((res) => {
            this.setState({ groups: res.data});
        });
    }

    render(){
        return(
            <div id="mainHome">
                <PageHeader name="Home"></PageHeader>
                <div>
                    <div id="headerDiv">
                        <h2 id="dividerHeader">My Tasks</h2>
                    </div>
                    <hr id="divider" style={{clear: "both"}}></hr>   
                </div>
                <h2 style={{height: "30px"}}></h2>
                <ListTaskComponent />
                <h2 id="temp"></h2>
                <div id="mainDiv">
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
                }       
            </div>
        );
    }
}

export default HomePage;