import React from 'react';

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>
}

export default Welcome

// function App(){
//     return(
//         <div>
//             <Welcome name="Christian" />
//         </div>
//     )
// }

// const element = <Welcome name="Christian" />;
// ReactDOM.render(<App />, document.getElementById('root'));