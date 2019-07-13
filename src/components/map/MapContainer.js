import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker} from 'google-maps-react';
import './map.css';

export class MapContainer extends Component {
  
  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <Map
        google={this.props.google}
        zoom={16}
        initialCenter={{
         lat: -33.890660,
         lng: 151.212970
        }}
        >
          <Marker lat={-33.8851532} lng={-33.8851532} />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBqxLAkaXcAqIkPkRYRvIs76y7WKPtFAC4'
})(MapContainer);
