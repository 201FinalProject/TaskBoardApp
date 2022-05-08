import React from 'react';
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ListTaskComponent from "../../components/Task/ListTaskComponent/ListTaskComponent"
import './GroupHome.css'; 
 

export default function GroupHome(){
    return(
        <div id="mainHome">
            
            <div>
                <ListTaskComponent/>
            </div>
        </div>
    );
}
