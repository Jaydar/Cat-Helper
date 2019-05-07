import React from 'react';
import {HashRouter as Router, Route, Switch  } from "react-router-dom"
import { Button, AppBar, Menu, Toolbar, IconButton, Typography } from "@material-ui/core"


import HomePage from "./Home/HomePage"
import ColorPage from "./Color/ColorPage"
import Header from "./Element/Header";

const App: React.FC = () => {
    return (
        <Router>
            <div>
                <Header />
                <Route path="/" exact component={HomePage} />
                <Route path="/ColorPage/" component={ColorPage} />
                <Route path="/users/" component={HomePage} />
            </div>
        </Router>
    );
}

export default App;
