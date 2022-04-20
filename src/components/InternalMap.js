import React, { useRef, useEffect, useState } from 'react';

import mapboxgl from 'mapbox-gl';
import Map, {Marker} from 'react-map-gl';

import { APIToken } from "../mapboxToken"

mapboxgl.accessToken = APIToken
function InternalMap({selectedCuisine, restaurantArray}){

return (
    <Map
      initialViewState={{
        longitude: -74,
        latitude: 40.7,
        zoom: 9
      }}
      className="mapContainer"
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={APIToken} 
    >
      <Marker longitude={-74} latitude={40.7} anchor="center" color="red" />
    </Map>
    );
}

export default InternalMap;