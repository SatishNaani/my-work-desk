import React, {useState} from 'react'
import NavBar from "./navBar";
import MainContent from "./mainContent";

function Dashboard() {


    return (
        <div style={{position: "relative",top:'70px'}}>
            <NavBar/>
            <MainContent/>
        </div>
    )
}

export default Dashboard
