import React from 'react'
import './Footer.css'
import waste from '../images/waste.png'
import traffic from '../images/traffic.png'
import pollution from '../images/pollution.png'
import other from '../images/other.png'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
function Footer() {
    return (
        <Router>
            <div className="row">
            <div className="column">
                    <Link className="link" to="/waste"><img  className="image" src={waste} alt="" /></Link>
                </div>
                <div className="column">
                    <Link className="link" to="/pollution"><img  className="image" src={traffic} alt="" /></Link>
                </div>
                <div className="column">
                    <Link className="link" to="/traffic"><img  className="image" src={pollution} alt="" /></Link>
                </div>
                <div className="column">
                    <Link className="link" to="/"><img  className="image" src={other} alt="" /></Link>
                </div>
        </div>

        </Router>
        
    )
}

export default Footer
