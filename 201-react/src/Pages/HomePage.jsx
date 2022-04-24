import React from "react";
import GroupSelect from "../Components/GroupSelectButton/GroupSelect"
import PageHeader from "../Components/PageHeader/PageHeader"

function HomePage(){
    return(
        <div style={{marginTop: "100px"}}>
            <PageHeader></PageHeader>
            <GroupSelect></GroupSelect>
            <GroupSelect></GroupSelect>
            <GroupSelect></GroupSelect>
        </div>
    )
}

export default HomePage;