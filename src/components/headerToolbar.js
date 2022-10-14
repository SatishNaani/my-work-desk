import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {Button, IconButton, Link, ToggleButton} from "@mui/material";
import {useNavigate, useParams} from 'react-router';
import Box from "@mui/material/Box";
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';

const onMenuItemClick = (oEvt,a,selected)=>{

    let navBar = document.getElementsByClassName('navigationBar')[0];
    let mainContent =  document.getElementsByClassName('mainContent')[0];

    if(!selected){
        navBar.style.display ='none'
        mainContent.style.left ='10px'

    }else{

        navBar.style.display ='flex';
        mainContent.style.left ='225px'

    }

}

const ResponsiveAppBar = () => {
    const navigator = useNavigate();
    const [selected, setSelected] = React.useState(false);
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed">
                <Toolbar>

                    <ToggleButton
                        value="check"
                        selected={selected}
                        onChange={(event, value) => {
                            setSelected(!selected);
                            onMenuItemClick(event,value,selected);
                        }}
                    >
                        <MenuIcon />
                    </ToggleButton>




                    <Link
                        component="button"
                        variant="body2"
                        onClick={() => {
                            navigator(`/Dashboard`);
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
                    <Button variant="contained" endIcon={<LogoutIcon />}/>


                </Toolbar>
            </AppBar>
        </Box>
    );
};
export default ResponsiveAppBar;
