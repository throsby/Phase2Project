import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import Map, { Layer, Marker, Source } from 'react-map-gl';
import { APIToken } from "../mapboxToken"

mapboxgl.accessToken = APIToken

function InternalMap({ selectedCuisine, restaurantArray }) {
  
    console.log("Cuisine:",selectedCuisine)
const restSubset = restaurantArray.filter((element) => { 
  return element.cuisine_description === selectedCuisine && !element.action.includes("Closed")})

const geoJsonified = restSubset.map((element) => { return {
        "type" : "Feature",
        "geometry" : {
          "type" : "Point",
          "coordinates" : [ Math.round(element.longitude * 10000)/10000, Math.round(element.latitude * 10000)/10000 ]
        },
        "properties": {
          "name" : element.dba,
          "street_address" : element.building.concat(" ",element.street),
          "phone_num" : element.phone,
          "grade" : element.grade
        }
      }
    }
  );

  const dataset = {"type" : "FeatureCollection", "features" : geoJsonified}


  const layerStyle = {
    id: 'point',
    type: 'circle',
    paint: {
      'circle-radius': 10,
      'circle-color': '#007cbf'
    }
  };
  console.log(dataset)
  // const layer0 = {
  //   id: 'clusters',
  //   type: 'circle',
  //   source: 'earthquakes',
  //   filter: ['has', 'point_count'],
  //   paint: {
  //     // Use step expressions (https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-step)
  //     // with three steps to implement three types of circles:
  //     //   * Blue, 20px circles when point count is less than 100
  //     //   * Yellow, 30px circles when point count is between 100 and 750
  //     //   * Pink, 40px circles when point count is greater than or equal to 750
  //     'circle-color': [
  //       'step',
  //       ['get', 'point_count'],
  //       '#51bbd6',
  //       100,
  //       '#f1f075',
  //       750,
  //       '#f28cb1'
  //     ],
  //     'circle-radius': [
  //       'step',
  //       ['get', 'point_count'],
  //       20,
  //       100,
  //       30,
  //       750,
  //       40
  //     ]
  //   }
  // }






  // geoJSON.features.forEach((element) => {
  //   console.log(element.geometry.coordinates)
  // })

  return ( 
  <Map initialViewState = {{ longitude: -74, latitude: 40.7, zoom: 9 }}
    className = "mapContainer"
    mapStyle = "mapbox://styles/mapbox/streets-v9"
    mapboxAccessToken = { APIToken } >
    <Source id= "my-data" type="geojson" data={ dataset } >
      <Layer {...layerStyle}/>
    </Source>
    </Map>
  );
}

export default InternalMap;