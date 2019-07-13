import React, { Component } from 'react';
import { GoogleMapReact } from 'google-maps-react';
import './map.css';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default class MapContainer extends Component {
  static defaultProps = {
    center: {
      lat: -33.890660,
      lng: 151.212970
    },
    zoom: 11
  };
  
  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBqxLAkaXcAqIkPkRYRvIs76y7WKPtFAC4' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          // google={props.google}
          // zoom={8}
          // initial={{ lat: -33.890660, lng: 151.212970}}
          // className='map'
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>    
      </div>
    );
  }
}

// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyBqxLAkaXcAqIkPkRYRvIs76y7WKPtFAC4'
// })(MapContainer);
