import React, {useCallback, useEffect, useState} from 'react'
import Box from '@mui/material/Box';
import {Divider, ListItemIcon, ListItemText, MenuItem, MenuList, Paper} from "@mui/material";
import Typography from "@mui/material/Typography";
import {ContentCut} from "@mui/icons-material";
import {getProjects} from "../services/projects";
import {toast} from "react-toastify";

function UserDetails() {
    const [data, setData] = useState([]);
    const onGetProjects = useCallback(() => {
        getProjects()
            .then(response => {
                if (response) {
                    let projectData = (response?.value || []).map((item, index) => {
                        return {name: item.name, value: parseInt(Math.random() * 100)}
                    });
                    setData(projectData);
                }
            })
            .catch(e => toast.error(e.message));
    }, []);
    useEffect(() => {
        onGetProjects();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div className="userDetails">
            <form style={{width: '210px'}}>
                <div className='userName'>
                    <div>
                        <label>
                            <Typography variant="inherit" noWrap>
                                Default User
                            </Typography>
                        </label>

                    </div>
                    <div>
                        <label>
                            <Typography variant="inherit" noWrap>
                                default.user@vistex.com
                            </Typography>
                        </label>

                    </div>
                    <div>
                        <label>
                            <Typography variant="inherit" noWrap>
                                040 2311 4413
                            </Typography>
                        </label>

                    </div>
                </div>
                <div style={{position: "relative", top: "70px"}}>
                    <div style={{textAlign: "center"}}><label> All Projects</label></div>

                    <MenuList>
                        {data.map(item => (
                            <MenuItem style={{
                                borderBottom: '1px solid rgba(0, 0, 0, 0.09)'
                            }}
                                      key={item.id}
                                      value={item.id}
                            >
                                <Typography variant="inherit" noWrap>
                                    {item.name}
                                </Typography>
                            </MenuItem>
                        ))}

                    </MenuList>

                </div>

            </form>


        </div>
    )
}

export default UserDetails
