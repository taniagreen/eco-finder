import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const MapContainer = (props) => {
  return (
    <Map
        google={props.google}
        zoom={8}
        initial={{ lat: -33.890660, lng: 151.212970}}
        className='mapContainer'
    >
    </Map>    
  )
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBqxLAkaXcAqIkPkRYRvIs76y7WKPtFAC4'
})(MapContainer);