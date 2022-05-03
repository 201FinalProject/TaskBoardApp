import React from "react";
import GroupSelect from "../../Components/GroupSelectButton/GroupSelect";
import PageHeader from "../../Components/PageHeader/PageHeader";
import './HomePage.css';

function HomePage(){
    return(
        <div style={{marginTop: "100px"}}>
            <PageHeader name="Home"></PageHeader>
            <div>
            <h2 id="dividerHeader">Groups</h2>
            <hr id="divider"></hr>
            </div>
            
            <GroupSelect></GroupSelect>
            <GroupSelect></GroupSelect>
            <GroupSelect></GroupSelect>
        </div>
    )
}

export default HomePage;