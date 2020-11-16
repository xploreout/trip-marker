import * as React from 'react';
import { useState } from 'react';
import ReactMapGL from 'react-map-gl';


const App = () => {
  const [viewport, setViewport] = useState({
    latitude: 36.1667192,
    longitude: -89.4111423,
    zoom: 3,
    width: "100vw",
    height: "100vh",
  

  });

  return (
    <ReactMapGL
      {...viewport}
      mapStyle="mapbox://styles/xploreout/ckhkz9msc03ms19pkibsaavuh"
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      onViewportChange={nextViewport => setViewport(nextViewport)}
    />
  );
}

export default App;