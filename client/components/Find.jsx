import React from 'react';

const Find = (props) => {
    return (
        <div>
            <label htmlFor='barSearch'>Location of bar: </label>
            <input id='barSearch' type='text' onKeyDown={ props.handleKeyDown } />
            <button onClick={props.handleOnClick}>Go</button>
        </div>
    )
}

export default Find;