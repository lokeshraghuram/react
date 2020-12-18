import React from 'react';

const char = (props) => {

    /* const style = {
        display: 'inline-block',
        padding: '16px',
        textAlign: 'center',
        margin: '16px',
        border: '1px solid black'
    } */

    return (
        <div className="CharComponent">
            <p onClick={props.click}>{props.name}</p>
        </div>
    )
}

export default char;