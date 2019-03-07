import React from 'react';

const Bar = props => {
    return (
        <div>
            <a><span>{props.name}: {props.location}</span></a>
        </div>
    );
}

export default Bar;