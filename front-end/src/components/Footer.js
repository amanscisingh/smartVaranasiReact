import React from 'react'
import './Footer.css'
// import { Link } from 'react-router-dom';
// import im from '../qex.jpg'
function Footer() {
    function click(e) {
        e.preventDefault();
        window.open("/");
      }
    return (
        <div className="row">
            <div className="column" onClick={click}>
                Waste
            </div>
            <div className="column" onClick={click}>
                Pollution
            </div>
            <div className="column" onClick={click}>
                Traffic
            </div>
            <div className="column" onClick={click}>
                Other
            </div>
            
        </div>

    )
}

export default Footer
