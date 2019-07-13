import { Map, GoogleApiWrapper } from 'google-maps-react';

const Map = (props) => {
  return (
    <Map
        google={props.google}
        zoom={8}
        initial={{ lat: 47.444, lng: -122.176}}
    >
      <Marker position={{ lat: 48.00, lng: -122.00}} />
    </Map>    
  )
}