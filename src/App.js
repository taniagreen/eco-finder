import React from 'react';
// import logo from './images/eco-finder-logo.ico';
import './App.css';

import MapContainer from './components/map/MapContainer';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Eco Finder
        </p>
      </header> */}
      <MapContainer />
      <Sidebar />
    </div>
  );
}

export default App;
