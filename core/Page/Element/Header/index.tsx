import React from 'react';
import { Button, AppBar, Menu, Toolbar, IconButton, Typography } from "@material-ui/core"


export default class HeaderElement extends React.Component{
    public render(){
        return <AppBar position="static" color="primary" style={{boxShadow:"none"}}>
            <Toolbar>
                {/* <IconButton color="inherit" aria-label="Open drawer">
                    <MenuIcon fontSize={"default"} />
                </IconButton> */}
                <Typography  variant="h6" color="inherit" noWrap>
                    Cat Helper
                </Typography>
            </Toolbar>
        </AppBar>
    }
}