import React from 'react';
import Map from './components/Map/Map';
import Sidebar from './components/Sidebar/Sidebar';
import Layers from './components/Layers/Layers';

function App(){
    return (
        <>
            <Layers />
            <Sidebar />
            <Map />
        </>
    )
}

export default App