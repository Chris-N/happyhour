import React from 'react';
import Welcome from './Welcome.jsx';
// import MainContainer from '../containers/MainContainer.jsx'
import BarContainer from '../containers/BarContainer.jsx';

function App(){
    return(
        <div>
            <Welcome name="Christian N" />
            {/* <MainContainer /> */}
            <BarContainer />
        </div>
    );
}

export default App;
