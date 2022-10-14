import React, {useState} from 'react'
import NavBar from "./navBar";
import MainContent from "./mainContent";

function UserDashboard() {


    return (
        <div style={{position: "relative",top:'70px'}}>
            <NavBar/>
            <MainContent/>
        </div>
    )
}

export default UserDashboard
