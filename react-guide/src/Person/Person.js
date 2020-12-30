import React from 'react';
import styles from './Person.css'

const person = (props) => {

    const rand = Math.random();

    if(rand > 1.8){
        throw new Error( ' Error.! Error..!! Error...!!!');
    }

    return (
        <div className={styles.Person}>
            <p onClick={props.click}>My name is {props.name} I am Male and I am {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
}

export default person;