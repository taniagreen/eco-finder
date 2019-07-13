import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import './map.css';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class MapContainer extends Component {
  static defaultProps = {
    center: {
      lat: -33.890660,
      lng: 151.212970
    },
    zoom: 11,
    google: "yes",
  };
  
  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <Map
        google={this.props.google}
        zoom={14}
        initialCenter={{
         lat: -33.890660,
         lng: 151.212970
        }}
      />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBqxLAkaXcAqIkPkRYRvIs76y7WKPtFAC4'
})(MapContainer);
