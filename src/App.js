import React from 'react';
// import logo from './images/eco-finder-logo.ico';
import './App.css';

import MapContainer from './components/map/MapContainer';
import Sidebar from './components/sidebar/Sidebar';

const axios = require("axios");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://k38vjgr50a.execute-api.us-east-1.amazonaws.com/dev/categories"
      )
      .then(response => {
        // handle success
        this.setState({ data: response.data });
      }) 
  }

  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Eco Finder
        </p>
      </header> */}
        <MapContainer data={this.state.data} />
        <Sidebar data={this.state.data} />
      </div>
    );
  }
}

// const fetchPlaces = () => {
//   axios.get('https://k38vjgr50a.execute-api.us-east-1.amazonaws.com/dev/categories')
//   .then(function (response) {
//     // handle success
//     return response.data;
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
// }

// function App() {
//   const data = fetchPlaces();
//   console.log(data);

//   return (
//     <div className="App">
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Eco Finder
//         </p>
//       </header> */}
//       <MapContainer />
//       <Sidebar
//         items={data}
//       />
//     </div>
//   );
// }

export default App;
