import React, {useState} from 'react'
import NavBar from "./navBar";
import MainContent from "./mainContent";
import {Paper} from "@mui/material";

function PieChartArea() {


    return (
        <Paper elevation={3} sx={{
            margin:'8px',
            '&:hover': {
                 cursor:'pointer'
            }}}>
        </Paper>

    )
}

export default PieChartArea
