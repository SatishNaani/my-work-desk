import React, {useState} from 'react'
import NavBar from "./navBar";
import MainContent from "./mainContent";
import {Paper} from "@mui/material";

function NotificationsCount() {


    return (

        <Paper elevation={3} className="countClass" sx={{
            minWidth:'400px',
            flex:1,
            '&:hover': {
                backgroundColor: '#F1F3F6',
                cursor: 'pointer',
                opacity: [0.9, 0.8, 0.7],
            }
        }}>
            <label className="itemType">Customer Bugs</label>
            <label style={{fontSize: '40px', color: "rgb(255, 128, 0)", textOverflow: 'ellipsis'}}>21</label>
        </Paper>

    )
}

export default NotificationsCount
