import React from "react";
import GroupSelect from "../Components/GroupSelectButton/GroupSelect"
import PageHeader from "../Components/PageHeader/PageHeader"
import './CreateGroup.css';

function CreateGroup(){
    return(
        <div id="Main" style={{marginTop: "100px"}}>
            <div id="FormContainer">
                <form>
                    <button type="submit" name="CreateGroup" id="CreateGroup">Create Group</button>
                    <div id="BottomRow">
                        <input type="text" id="JoinGroup" name="JoinGroup" placeholder="Join Group"/>
                        <button type="submit" name="Enter" id="Enter">Enter</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateGroup;