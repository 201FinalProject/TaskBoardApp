import React from "react";
import GroupSelect from "../../components/GroupSelectButton/GroupSelect";
import PageHeader from "../../components/PageHeader/PageHeader";
import './HomePage.css';

function HomePage(){
    return(
        <div id="mainHome">
            <PageHeader name="Home"></PageHeader>
            <div>
                <div id="headerDiv">
                    <h2 id="dividerHeader">My Tasks</h2>
                </div>
                <hr id="divider"></hr>
            </div>
            
            <div id="mainDiv">
                <div id="headerDiv">
                    <h2 id="dividerHeader">Groups</h2>
                </div>
                <div id="buttonDiv">
                    <button type="button" id="GroupButton">
                        <i class="fa fa-plus" aria-hidden="true"></i>
                        Create/Join Group
                    </button>
                </div>
                <hr id="divider"></hr>
            </div>
            
            <GroupSelect></GroupSelect>
            
        </div>
    )
}

export default HomePage;