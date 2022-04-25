import React from "react";
import GroupSelect from "../Components/GroupSelectButton/GroupSelect"
import PageHeader from "../Components/PageHeader/PageHeader"
import './CreateGroup.css';

function CreateGroup(){
    return(
        <div id="Main" style={{marginTop: "100px"}}>
            <div id="FormContainer">
                <form>
                    <button type="submit" name="CreateGroup">Create Group</button>
                    <input type="text" id="JoinGroup" name="JoinGroup" placeholder="Join Group"/>
                    <button type="submit" name="Register">Create Account</button>
                </form>
            </div>
        </div>
    )
}

export default CreateGroup;