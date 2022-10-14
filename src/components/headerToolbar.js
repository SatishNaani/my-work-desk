import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {Button, IconButton, Link} from "@mui/material";
import {useNavigate, useParams} from 'react-router';
import Box from "@mui/material/Box";
import LogoutIcon from '@mui/icons-material/Logout';

const ResponsiveAppBar = () => {
    const navigator = useNavigate();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed">
                <Toolbar>
                    <Link
                        component="button"
                        variant="body2"
                        onClick={() => {
                            navigator(`/UserDashboard`);
                        }}
                    >
                        <div className="vistexTitle"></div>
                    </Link>

                    <Typography variant="h6" component="div" sx={{flexGrow: 1}} style={{
                        position:"relative",
                        left:'30%'

                    }}>
                        Welcome to vistex work desk
                    </Typography>
                    <LogoutIcon/>
                </Toolbar>
            </AppBar>
        </Box>
    );
};
export default ResponsiveAppBar;
