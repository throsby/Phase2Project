import React, { useRef, useEffect, useState } from 'react';

import mapboxgl from 'mapbox-gl';
import Map from 'react-map-gl';

import { APIToken } from "../mapboxToken"

mapboxgl.accessToken = APIToken
function InternalMap({selectedCuisine, restaurantArray}){


//     console.log("From Map",restaurantArray)
//     const mapContainer = useRef(null);
//     const mapRef = useRef(null);
//     const [lng, setLng] = useState(-74);
//     const [lat, setLat] = useState(40.71);
//     const [zoom, setZoom] = useState(9);
//     const geojson = {
//         type: 'FeatureCollection',
//         features: [
//           {
//             type: 'Feature',
//             geometry: {
//               type: 'Point',
//               coordinates: [-74, 40.71]
//             },
//             properties: {
//               title: 'Mapbox',
//               description: 'New York City'
//             }
//           },
//           {
//             type: 'Feature',
//             geometry: {
//               type: 'Point',
//               coordinates: [-122.414, 37.776]
//             },
//             properties: {
//               title: 'Mapbox',
//               description: 'San Francisco, California'
//             }
//           }
//         ]
//       };


// useEffect(() => {
//     const map = new mapboxgl.Map({
//     container: mapContainer.current,
//     style: 'mapbox://styles/mapbox/streets-v11',
//     center: [lng, lat],
//     zoom: zoom
//     })

//     for (const feature of geojson.features) {
//         // create a HTML element for each feature
//         const el = document.createElement('div');
//         el.className = 'marker';
      
//         // make a marker for each feature and add to the map
//         new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates).addTo(map);
//     }
    
//     }, [selectedCuisine]);

    
        
    

return (
    <Map
      initialViewState={{
        longitude: -74,
        latitude: 40.7,
        zoom: 9
      }}
      className="mapContainer"
      mapStyle="mapbox://styles/mapbox/streets-v9"
    />
    );
}

export default InternalMap;