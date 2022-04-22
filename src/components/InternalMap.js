import React, { useEffect, useCallback } from 'react';
import mapboxgl from 'mapbox-gl';
import Map, { Layer, Source, useMap, Popup } from 'react-map-gl';
import { APIToken } from "../mapboxToken"
import { useLocation } from 'react-router-dom';

mapboxgl.accessToken = APIToken

function InternalMap({ selectedCuisine, restaurantArray, setSelectedRestaurants }) {
  let location = useLocation();
  let indices = {"/" : 0, "/2" : 1, "/3" : 2}
  let index = indices[location.pathname]
  
  const restSubset = restaurantArray.filter((element) => { 
    return element.cuisine_description === selectedCuisine[index] && !element.action.includes("Closed")});
  
  useEffect(() => { setSelectedRestaurants(restSubset)},[selectedCuisine])
  
  const geoJsonified = restSubset.map((element) => { return {
        "type" : "Feature",
        "geometry" : {
          "type" : "Point",
          "coordinates" : [ Math.round(element.longitude * 10000)/10000, Math.round(element.latitude * 10000)/10000 ]
        },
        "properties": {
          "name" : element.dba,
          "street_address" : element.building?.concat(" ",element.street),
          "phone_num" : element.phone,
          "grade" : element.grade
        }
      }
    }
  );

  const dataset = {"type" : "FeatureCollection", "features" : geoJsonified}


  const map = useMap()
  const handleOnClick = useCallback((e) => {   
    console.log(e)
      // Create a popup, but don't add it to the map yet.
      // const popup = new mapboxgl.Popup({
      //   closeButton: false,
      //   closeOnClick: false
      // });
       
      
       
      // map.on('mouseleave', 'places', () => {
      //   map.getCanvas().style.cursor = '';
      //   popup.remove();
      // });
    
  }, []);

  

  // map.on('mouseenter', 'places', (e) => {
  //   // Change the cursor style as a UI indicator.
  //     map.getCanvas().style.cursor = 'pointer';
     
  //   // Copy coordinates array.
  //     const coordinates = e.features[0].geometry.coordinates.slice();
  //     // const description = e.features[0].properties.description;
     
  //   // Ensure that if the map is zoomed out such that multiple
  //   // copies of the feature are visible, the popup appears
  //   // over the copy being pointed to.
  //     while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
  //       coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
  //     }
     
  //   // Populate the popup and set its coordinates
  //   // based on the feature found.
  //     popup.setLngLat(coordinates).addTo(map);
  //   });

  const clusterLayer = {
    id: 'clusters',
    type: 'circle',
    filter: ['has', 'point_count'],
    paint: {
      'circle-color': ['step', ['get', 'point_count'], '#ff6600', 100, '#ffffff', 750, '#003884'],
      'circle-radius': ['step', ['get', 'point_count'], 20, 100, 30, 750, 40]
    }
  };
  
  const clusterCountLayer = {
    id: 'cluster-count',
    type: 'symbol',
    filter: ['has', 'point_count'],
    layout: {
      'text-field': '{point_count_abbreviated}',
      'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
      'text-size': 12
    }
  };
  
  const unclusteredPointLayer = {
    id: 'unclustered-point',
    type: 'circle',
    filter: ['!', ['has', 'point_count']],
    paint: {
      'circle-color': '#4264fb',
      'circle-radius': 6,
      'circle-stroke-width': 2,
      'circle-stroke-color': '#fff'
    }
  };

  

  return ( 
    <>
    <Map initialViewState={{ longitude: -74, latitude: 40.7, zoom: 9 }}
      className="mapContainer"
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={APIToken}
      ref={map.current}
      onSourceData={handleOnClick}
    >
      <Source id="my-data" cluster={true} clusterMaxZoom={14} clusterRadius={50} type="geojson" data={dataset}>
        <Layer {...clusterLayer} />
        <Layer {...clusterCountLayer} />
        <Layer {...unclusteredPointLayer} />
      </Source>
    </Map>
    </>
  );
}

export default InternalMap;