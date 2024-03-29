import React, { useEffect, useCallback, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import Map, { Layer, Source, useMap, Popup } from 'react-map-gl';
import { APIToken } from "../mapboxToken"
import { useLocation } from 'react-router-dom';


mapboxgl.accessToken = process.env.APITOKEN


function InternalMap({ selectedCuisine, restaurantArray, setSelectedRestaurants }) {
  
  let location = useLocation();
  let indices = {"/" : 0, "/1" : 0, "/2" : 1, "/3" : 2}
  let index = indices[location.pathname]
  

  const restSubset = restaurantArray.filter((element) => { 
    // if (element.action) console.log(element.action)
    return element.cuisine_description === selectedCuisine[index] && !element.action?.includes("Closed")
  });
  
  useEffect(() => { setSelectedRestaurants(restSubset)},[])

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
          "grade" : (element.grade ?? "?"),
          "cuisine": element.cuisine_description
        }
      }
    }
  );

  const dataset = {"type" : "FeatureCollection", "features" : geoJsonified}

  const map = useMap()
  
  const [showPopup, setShowPopup] = useState(false);
  const handleOnZoom = (e) => {

    setShowPopup(e.viewState.zoom > 14 ? true : false)
    // console.log("Zoom:", e.viewState.zoom)
  }

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
      onZoom={handleOnZoom}
    >
      <Source id="my-data" cluster={true} clusterMaxZoom={15} clusterRadius={50} type="geojson" data={dataset}>
        <Layer {...clusterLayer} />
        <Layer {...clusterCountLayer} />
        <Layer {...unclusteredPointLayer} />
      </Source>
      {showPopup && geoJsonified.map((element)=> {
        // console.log(element)
        // console.log(element.properties)
        if (element.geometry.coordinates[0] && element.geometry.coordinates[0]) {
        return <Popup className='popup' longitude={element.geometry.coordinates[0]} latitude={element.geometry.coordinates[1]}
          anchor="top"
          onClose={() => setShowPopup(false)}>
            <div className='restaurant-map-popups'>
            <div className='popup-text'>
              <div className='popup-top-text-line'>{element.properties.name} | {element.properties.cuisine} </div>
              <div className='popup-bottom-text-line'>{element.properties.street_address} | {element.properties.phone_num} </div>
            </div>
            <div className='popup-side-line'>
              <img src={`imgs/Grade Card_${element.properties.grade}.png`} onError={event => {
                event.target.src = "imgs/shrug-emoticon.png"
                event.onerror = null
                }}
                style={{height: 25, width: 25}}/>
              <button onClick={()=>setSelectedRestaurants(prevState => [element, ...prevState])}>+</button>
            </div>
            </div>
        </Popup>}})}
    </Map>
    </>
  );
}

export default InternalMap;