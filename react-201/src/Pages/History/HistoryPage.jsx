import React from "react";
import PageHeader from "../../Components/PageHeader/PageHeader";
import HistoryTask from "../../Components/HistoryTask/HistoryTask";
import background from "../../LongBackground.png"

function HistoryPage(){
    return(
        <div style={{width: "100%",
        backgroundImage: `url(${background}`,
        backgroundSize: "cover",
        height: "2048px"}}>
            <PageHeader name="History"></PageHeader>
            <HistoryTask></HistoryTask>
            <HistoryTask></HistoryTask>
            <HistoryTask></HistoryTask>
            <HistoryTask></HistoryTask>
            
        </div>
    )
}

export default HistoryPage;
