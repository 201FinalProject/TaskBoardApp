import React, { Component } from 'react'
import { Routes, Link, Route, BrowserRouter } from "react-router-dom";
import './GroupSelect.css';
// import { faElipsisH } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HomePageService from '../../services/HomePageService'

function GroupSelect(props){
    return (
        
        <div id="surroundingDiv">
            <Link to="/GroupHome" id="logo">
                <button type="button" id="grpBtn"> 
                    <p id="GHGroupName">
                        {props.code}
                    </p>
                    <div class="dropdown">
                        <button class="dropbtn">•••</button>
                        <div class="dropdown-content">
                            <Link to="/GroupHome" id="logo">
                                <a href="#">View Group</a>
                            </Link>
                    {/* This one should remove user from the 
                    group and remove it from homepage */}
                            <Link to="/" id="logo">
                                <a href="#">Leave Group</a>
                            </Link>
                    
                    
                        </div>
                    </div>
                </button>
            </Link>

        </div>
        
    );
}

// class GroupSelect extends Component{
//     constructor(props) {
//         super(props)

//         this.state = {
//                 groups: []
//         }
        
//     }
//     componentDidMount(){
//         HomePageService.getGroups().then((res) => {
//             this.setState({ groups: res.data});
//         });
//     }

//     render() {
    
//                 }
// }

export default GroupSelect;