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

    const [userData, setUserData] = React.useState({});
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
                    boxShadow: '0px 11px 15px -7px rgb(0 0 0 / 20%), 0px 24px 38px 3px rgb(0 0 0 / 4%), 0px 9px 46px 8px rgb(0 0 0 / 2%)',
                    width: 218,
                    height: '100%',
                    backgroundColor: 'white'
                }}>
                    <div style={{width: '220px', top: '50px', position: 'relative'}}>
                        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <Stack direction="row" spacing={2}>
                                <Avatar style={{background: '#1976d2'}} {...stringAvatar('Anil Talla')}
                                        sx={{width: 85, height: 85}}/>
                            </Stack>
                        </div>
                    </div>
                    <UserDetails userData={userData}/>

                </Paper>


            </Box>
        </div>
    )
}

export default NavBar
