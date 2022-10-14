import React, {useState} from 'react'
import Box from '@mui/material/Box';
import {Avatar, Paper, Stack} from "@mui/material";
import UserDetails from "./userDetails";

function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
}

function stringAvatar(name) {
    return {
        sx: {
            bgcolor: stringToColor(name),
        },
        children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
}

function NavBar() {
    return (
        <div style={{position: "fixed", zIndex: 50, height: '100%'}}>
            <Box sx={{
                width: 198,
                height: '100%',
                backgroundColor: 'white',
                '&:hover': {
                    backgroundColor: 'white',
                    opacity: [0.9, 0.8, 0.7],
                },
            }}>
                <Paper elevation={6} sx={{
                    width: 198,
                    height: '100%',
                    backgroundColor: 'white',
                    '&:hover': {
                        backgroundColor: 'white',
                        opacity: [0.9, 0.8, 0.7],
                    },
                }}>
                    <div style={{width: '200px', top: '50px', position: 'relative'}}>
                        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <Stack direction="row" spacing={2}>
                                <Avatar {...stringAvatar('Satish Medhuri')} sx={{width: 85, height: 85}}/>
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
