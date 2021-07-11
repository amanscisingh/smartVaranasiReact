import React from 'react'
import Welcome from './Welcome'
import Waste from './Waste'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
function Top() {
    return (
        <>
        <Router>
            <Switch>
                <Route exact path="/waste" component={Waste} />
                <Route exact path="/" component={Welcome} />
            </Switch>
        </Router>
        
        </>
    )
}

export default Top
