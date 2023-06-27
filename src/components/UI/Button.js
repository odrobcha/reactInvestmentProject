import styles from './Button.module.css';
import React from 'react';


const Button = (props) =>{
    const clickHandle = () =>{
        props.onButtonClick()
    }

    return (
      <button onClick={clickHandle}
        className={props.buttonAlt ? styles.buttonAlt : styles.button }>
          {props.label}
      </button>
    )
}

export default Button
