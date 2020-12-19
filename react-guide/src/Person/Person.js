import React from 'react';


// class Person extends Component {

// }

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>My name is {props.name} I am Male and I am {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
}

export default person;