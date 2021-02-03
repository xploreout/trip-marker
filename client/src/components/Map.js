import * as React from 'react';
import { useState, useEffect} from 'react';
   
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { listLogEntries, removeEntry  } from './API';
import LogEntryForm from './LogEntryForm'
import ViewBlog from './ViewBlog'

// <i class="fas fa-ellipsis-v"/>
const App = () => {
  const [viewport, setViewport] = useState({
    latitude: 36.1667192,
    longitude: -89.4111423,
    zoom: 4,
    width: "100vw",
    height: "100vh",
  });

  const [logEntries, setLogEntries ] = useState([]);
  const [showPopup, setShowPopup] = useState({});
  const [addMarkerLocation, setAddMarkerLocation] = useState(null)

  const getEntries = async () => {
    const logEntries = await listLogEntries();
    setLogEntries(logEntries);
  };

  useEffect(() => {
    const listener = e => {
      if (e.key === "Escape") {
        setShowPopup({});
      }
    }
    window.addEventListener("keydown", listener )
    
    getEntries();
     
    //when App component is unmounted, cleanup this
    return () => {
      window.removeEventListener("keydown", listener)
    }
      
  }, []);

  const showAddMarkerPopup = event => {
      const [longitude, latitude] = event.lngLat;
    setAddMarkerLocation({
      latitude,
      longitude
    })
  }

  //  <i class="fal fa-ellipsis-v"></i> 
  const removeMarker = (id) => {
    removeEntry(id);
    setShowPopup({});
    getEntries();
  }
  
  const viewBlog = id => {
    return <ViewBlog />

  }
  
  return (
    <ReactMapGL
    {...viewport}
    mapStyle="mapbox://styles/xploreout/ckhwdp1lo0m5j1aobc3q9l2ey"
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      onViewportChange={newViewport => setViewport(newViewport)}
      onDblClick={showAddMarkerPopup}
    > 
    { 
      logEntries.map(log => 
       {
       return (
        <React.Fragment key={log._id}>
            <Marker 
              latitude={log.latitude}
              longitude={log.longitude}
            >
          <div 
            onClick={(e) => {
              e.preventDefault();
              setShowPopup({[log._id]: true})
            }}>
            <svg
              className="marker"
              style={{
                fill: 'yellow',
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
        { showPopup[log._id] ? (
            <Popup
              latitude={log.latitude}
              longitude={log.longitude}
              closeButton={true}
              closeOnClick={false}
              dynamicPosition={true}
              onClose={() => setShowPopup({})}
              anchor="top" >
                <div className='popup'>
                  <div onClick={(e)=>{  e.preventDefault();removeMarker(log._id) } }>
                
                  <button>Remove log</button>
                </div>
                <div>
                  <button onClick={(e)=>{  e.preventDefault(); viewBlog(log._id) } }>View Blog</button>
                </div>
                  <h5>{log.title}</h5>
                  <p>{log.description}</p>
                  <small>Visited on: {new Date(log.visitDate).toLocaleDateString()}</small>
                  {log.image && <img src={log.image} alt={log.title}/>}
                </div>
            </Popup> 
          ) : null
        }
      </React.Fragment>)
    }
    )}
    { 
    addMarkerLocation ? (
        <> addMarkerLocation.longitude
          <Marker 
            latitude={addMarkerLocation.latitude}
            longitude={addMarkerLocation.longitude}
          >
           <div>
            <svg
              className="marker red"
              style={{
                fill: 'purple',
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
          <Popup
            latitude={addMarkerLocation.latitude}
            longitude={addMarkerLocation.longitude}
            closeButton={true}
            closeOnClick={false}
            dynamicPosition={true}
            onClose={() => setAddMarkerLocation(null)}
            anchor="top" >
            <div>
              <LogEntryForm onClose={() => {
                setAddMarkerLocation(null);
                getEntries();
              }}
              marker={addMarkerLocation}/>
              
            </div>
        </Popup>
        </>
      ) : null 
    }
    </ReactMapGL>
  );
}
 

export default App;
