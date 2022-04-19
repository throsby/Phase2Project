import React, { useRef, useEffect, useState } from 'react';

import mapboxgl from 'mapbox-gl';
import { APIToken } from "../mapboxToken"

mapboxgl.accessToken = APIToken
function Map(){
const mapContainer = useRef(null);
const map = useRef(null);
const [lng, setLng] = useState(-74);
const [lat, setLat] = useState(40.71);
const [zoom, setZoom] = useState(9);

useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
    container: mapContainer.current,
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [lng, lat],
    zoom: zoom
    });
    });

return (
    <div className='Map-container'>
        <div ref={mapContainer} className="map-container" />
    </div>
    );
}

export default Map;