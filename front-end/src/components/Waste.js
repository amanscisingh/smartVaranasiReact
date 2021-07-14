import React from 'react'

import Footer from './Footer';
import { Loader } from "@googlemaps/js-api-loader"
import initMap from './map';


function Waste() {    
    return (
        <>
        
        <div id="map">
            asas
        </div>
        { initMap() }
        <Footer />
        </>
    )
}

let map;

export default Waste

