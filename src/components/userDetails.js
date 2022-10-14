import React, {useState} from 'react'
import Box from '@mui/material/Box';
import {Divider, ListItemIcon, ListItemText, MenuItem, MenuList, Paper} from "@mui/material";
import Typography from "@mui/material/Typography";
import {ContentCut} from "@mui/icons-material";

function UserDetails() {
    return (
        <div className="userDetails">
            <form style={{width: '210px'}}>
                <div className='userName'>
                    <div>
                        <label>
                            <Typography variant="inherit" noWrap>
                                User Name
                            </Typography>
                        </label>

                    </div>
                    <div>
                        <label>
                            <Typography variant="inherit" noWrap>
                                User.Email@vistex.com
                            </Typography>
                        </label>

                    </div>
                    <div>
                        <label>
                            <Typography variant="inherit" noWrap>
                                User Phone
                            </Typography>
                        </label>

                    </div>
                </div>
                <div style={{position: "relative", top: "70px"}}>
                    <div style={{textAlign: "center"}}><label> List of Projects</label></div>

                    <MenuList>
                        <MenuItem style={{
                            borderBottom: '1px solid rgba(0, 0, 0, 0.09)'
                        }}>
                            <Typography variant="inherit" noWrap>
                                Project 1
                            </Typography>
                        </MenuItem>
                        <MenuItem style={{
                            borderBottom: '1px solid rgba(0, 0, 0, 0.09)'
                        }}>
                            <Typography variant="inherit" noWrap>
                                Project 2
                            </Typography>
                        </MenuItem>
                        <MenuItem style={{
                            borderBottom: '1px solid rgba(0, 0, 0, 0.09)'
                        }}>
                            <Typography variant="inherit" noWrap>
                                Project 3
                            </Typography>
                        </MenuItem>
                        <MenuItem style={{
                            borderBottom: '1px solid rgba(0, 0, 0, 0.09)'
                        }}>
                            <Typography variant="inherit" noWrap>
                                Project 4
                            </Typography>
                        </MenuItem>
                    </MenuList>

                </div>

            </form>


        </div>
    )
}

export default UserDetails
