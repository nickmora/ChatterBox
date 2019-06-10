import React, {Component} from "react";
import {Toolbar, Menu, MenuItem, Typography, AppBar, IconButton} from "@material-ui/core";
import {Menu as MenuIcon, AccountCircle} from "@material-ui/icons";

class MainToolbar extends Component {
    state = {
        isLoggedIn: false,
        
    }
    render() {
        return(
            <AppBar position = "static">
                <Toolbar>
                    <IconButton
                        color = "inherit"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography 
                        variant = "h6"
                        color = "inherit"
                    >
                        ChatterBox!
                    </Typography>
                </Toolbar>
            </AppBar>
        )
    }
}

export default MainToolbar