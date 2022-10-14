import React, {useState} from 'react'
import NavBar from "./navBar";
import MainContent from "./mainContent";
import {Paper} from "@mui/material";

function NewBugsCount() {


    return (
        <Paper elevation={3} className="countClass" sx={{
            minWidth:'270px',
            flex:1,
            '&:hover': {
                backgroundColor:'#F1F3F6',
                cursor:'pointer',
                opacity: [0.9, 0.8, 0.7],
            }}}>
            <label className="itemType">Bugs</label>
            <label style={{fontSize: '40px',color:'#aa0808',textOverflow: 'ellipsis'}}>44</label>

        </Paper>

    )
}

export default NewBugsCount
