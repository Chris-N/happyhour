import React from 'react'; 

const BarForm = (props) => {
    return (
        <div>
            <label htmlFor='name'>Name: </label>
            <input type='text' onChange={props.inputName} value={props.name} />
            <label htmlFor='location'>Location: </label>
            <input type='text' onChange={props.inputLocation} value={props.location} />
            <button onClick={ props.submitForm }>Add Bar</button>
        </div>
    )

}

export default BarForm;