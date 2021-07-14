import React from 'react'

import Footer from './Footer';
function Welcome() {
    let style={
    width: "100%",
    height: "100vh",
    backgroundImage: "url('https://i0.wp.com/singularitie.com.au/wp-content/uploads/2019/04/blue-link-bg.png?fit=1920%2C900&ssl=1')",
    backgroundPosition: "center",
    backgroundColor: "rgba(0,0,0,.4)",
    backgroundBlendMode: "darken",
    backgroundSize: "cover", 
    paddingLeft: "5%",
    paddingRight: "5%",
    boxSizing: "border-box",
    color: "white",
    textAlign: "center",
    fontSize: "xx-large",
    paddingTop: "300px",
    // fontStyle: "oblique",
    fontFamily: "Sans-serif"
    }
    return (
        <>
        <div className="card" style={style}>
            <h5>Welcome! <hr />  Smart City Varanasi</h5>
            
        </div>
        </>
    )
}

export default Welcome
