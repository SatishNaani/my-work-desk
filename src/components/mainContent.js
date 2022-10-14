import React, {useState} from 'react'
import Box from '@mui/material/Box';
import {Divider, Paper} from "@mui/material";
import ProjectTableContent from "./projectTableContent";
import ActiveTasks from "./activeTasks";
import Bugs from "./bugs";
import Notifications from "./notifications";
import ActiveTasksCount from "./activeTasksCount";
import NewBugsCount from "./newBugsCount";
import NotificationsCount from "./notificationsCount";
import PieChartArea from "./pieChartArea";

function MainContent() {
    return (
        <div className="mainContent">
            <Box sx={{
                width: '100%',
                height: '100%',
                backgroundColor: 'white',
                '& > :not(style)': {
                    m: 0.25,
                    width: '100%',
                    height: '100%',
                },

            }}>
                <Paper elevation={6} sx={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'white'

                }}>


                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            '& > :not(style)': {
                                m: 1,
                                width: 400,
                                height: 128,
                            },
                        }}
                    >
                        <ActiveTasksCount/>
                        <NewBugsCount/>
                        <NotificationsCount/>

                        <Box
                            sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                '& > :not(style)': {
                                    width: 128,
                                    height: 128,
                                },
                            }}
                        > <PieChartArea/>
                        </Box>




                    </Box>



                    <Divider variant="middle" style={{border: '1px solid'}} />
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            '& > :not(style)': {
                                m: 1
                            },
                        }}
                    >
                        <ActiveTasks/>
                        <Bugs/>
                        <Notifications/>


                    </Box>
                    <ProjectTableContent/>

                </Paper>
            </Box>

        </div>
    )
}

export default MainContent
