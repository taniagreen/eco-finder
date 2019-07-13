import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import './map.css';

const MapContainer = (props) => {
  return (
    <div className='mapContainer'>
      <Map
        google={props.google}
        zoom={8}
        initial={{ lat: -33.890660, lng: 151.212970}}
        className='map'
      >
      </Map>    
    </div>
   
  )
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBqxLAkaXcAqIkPkRYRvIs76y7WKPtFAC4'
})(MapContainer);