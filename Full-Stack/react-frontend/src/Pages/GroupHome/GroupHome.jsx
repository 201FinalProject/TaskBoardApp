import React from 'react';
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ListTaskComponent from "../../components/Task/ListTaskComponent"

export default function GroupHome(){
    return(
        <div>
            <div >
                <button id="historyButton">History</button>
                <button id="addTaskButton"><FontAwesomeIcon icon={faPlus} /></button>
            </div>
            <div>
                <ListTaskComponent/>
            </div>
        </div>
    );
}
