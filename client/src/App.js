import * as React from 'react';
import { useState, useEffect} from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import { listLogEntries } from './API';

const App = () => {
  const [viewport, setViewport] = useState({
    latitude: 36.1667192,
    longitude: -89.4111423,
    zoom: 4,
    width: "100vw",
    height: "100vh",
  });

  const [logEntries, setLogEntries ] = useState([]);

  const getEntries = async () => {
    const logEntries = await listLogEntries();
    setLogEntries(logEntries);
  };

  useEffect(() => {
    getEntries();
  }, []);
  
  return (
    <ReactMapGL
      {...viewport}
      mapStyle="mapbox://styles/xploreout/ckhkz9msc03ms19pkibsaavuh"
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      onViewportChange={nextViewport => setViewport(nextViewport)}
    > 
    { 
      logEntries.map(log => 
       {
       return (<React.Fragment key={log._id}>
        <Marker 
                latitude={log.latitude}
                longitude={log.longitude}
        >
          <div style={{color:'red'}}
              onclick={{}}
                >
            <svg
              className="marker"
              style={{
                fill: `green`,
                height: `${6 * viewport.zoom}px`,
                width: `${6 * viewport.zoom}px`,
              }}
              version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 512 512">
              <g>
                <g>
                  <path d="M256,0C153.755,0,70.573,83.182,70.573,185.426c0,126.888,165.939,313.167,173.004,321.035
                    c6.636,7.391,18.222,7.378,24.846,0c7.065-7.868,173.004-194.147,173.004-321.035C441.425,83.182,358.244,0,256,0z M256,278.719
                    c-51.442,0-93.292-41.851-93.292-93.293S204.559,92.134,256,92.134s93.291,41.851,93.291,93.293S307.441,278.719,256,278.719z"/>
                </g>
              </g>
            </svg>
          </div>
        </Marker>

      </React.Fragment>)
    }
    )}
</ReactMapGL>
  );
}
 

export default App;
