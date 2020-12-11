import React from 'react';

const UserInput = (props) => {
    return (
        <div>
            <input type="text" onChange={props.click} value={props.company}/>
        </div>
    )
}

export default UserInput;