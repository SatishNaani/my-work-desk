import React, {useState} from 'react'
import Box from '@mui/material/Box';
import {Avatar, Paper, Stack} from "@mui/material";
import UserDetails from "./userDetails";


function stringAvatar(name) {
    return {
        children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
}

function NavBar() {
    return (
        <div className="navigationBar" style={{position: "fixed", zIndex: 50, height: '100%'}}>
            <Box sx={{
                width: 218,
                height: '100%',
                backgroundColor: 'white',
                '& > :not(style)': {
                   width: '100%',
                    height: '100%',
                },

            }}>
                <Paper elevation={24} sx={{
                    width: 218,
                    height: '100%',
                    backgroundColor: 'white'
                }}>
                    <div style={{width: '220px', top: '50px', position: 'relative'}}>
                        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <Stack direction="row" spacing={2}>
                                <Avatar style ={{background:'#1976d2'}} {...stringAvatar('Satish Medhuri')} sx={{width: 85, height: 85}}/>
                            </Stack>
                        </div>
                    </div>
                    <UserDetails/>

                </Paper>


            </Box>
        </div>
    )
}

export default NavBar
