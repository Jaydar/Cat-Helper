import React from 'react';
import {HashRouter as Router, Route, Switch  } from "react-router-dom"
import { Button, AppBar, Menu, Toolbar, IconButton, Typography } from "@material-ui/core"


import HomePage from "./Home/HomePage"
const App: React.FC = () => {
    return (
        <Router>
            <div>
                <AppBar position="static" color="primary">
                    <Toolbar>
                        {/* <IconButton color="inherit" aria-label="Open drawer">
                            <MenuIcon fontSize={"default"} />
                        </IconButton> */}
                        <Typography  variant="h6" color="inherit" noWrap>
                            Cat Helper
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Route path="/" exact component={HomePage} />
                <Route path="/about/" component={HomePage} />
                <Route path="/users/" component={HomePage} />
            </div>
        </Router>
    );
}

export default App;
