import React from "react";
import PageHeader from "../../Components/PageHeader/PageHeader";
import HistoryTask from "../../Components/HistoryTask/HistoryTask";

function HistoryPage(){
    return(
        <div style={{marginTop: "100px"}}>
            <p id="PHeader">History</p>
            <HistoryTask></HistoryTask>
            <HistoryTask></HistoryTask>
            <HistoryTask></HistoryTask>
            <HistoryTask></HistoryTask>
            
        </div>
    )
}

export default HistoryPage;