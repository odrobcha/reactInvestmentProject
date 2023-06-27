import React from 'react';

const InputItem = (props) =>{
    const setInputValue = (event) =>{

        props.onEnteredValue({value : event.target.value, id :props.id})
    }

    return (
      <p>
        <label htmlFor={props.id}>{props.label}</label>

        <input type={props.type}
               id={props.id}
               value = {props.value}
               onChange={setInputValue}
        />
    </p>)

}

export default InputItem
