import React from 'react';
import ReactDOM from 'react-dom';


function Welcome(props) {
    return <h1>Hello, {props.name}</h1>
}

function App(){
    return(
        <div>
            <Welcome name="Christian" />
        </div>
    )
}

// const element = <Welcome name="Christian" />;
ReactDOM.render(<App />, document.getElementById('root'));