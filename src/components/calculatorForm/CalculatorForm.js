import React, { useState } from 'react';
import styles from './calculator.module.css';
import InputItem from '../inputItem/InputItem'
import Button from '../UI/Button';

const CalculatorForm = (props)=>{

    const [inputFields, setInputFields] = useState([
        {id : "current-savings" ,  label : "Current Savings ($)", type : "number", value :''},
        {id : "yearly-contribution" , label : "Yearly Savings ($)", type : "number", value :''},
        {id : "expected-return" , label : "Expected Interest (%, per year)", type : "number", value :''},
        {id : "duration" , label : "Investment Duration (years)", type : "number",  value :''},

    ])

    const setEnteredValue = (enteredValue) =>{
        setInputFields (prevState => {
            let updatedInputs = [...prevState];
            updatedInputs.find(item => (item.id === enteredValue.id)).value = enteredValue.value
            return updatedInputs
        })
        props.onChangeInput()

    }

    const handleResetButton = () =>{
        setInputFields([
            {id : "current-savings" ,  label : "Current Savings ($)", type : "number", value :''},
            {id : "yearly-contribution" , label : "Yearly Savings ($)", type : "number", value :''},
            {id : "expected-return" , label : "Expected Interest (%, per year)", type : "number", value :''},
            {id : "duration" , label : "Investment Duration (years)", type : "number",  value :''},

        ])
        props. onResetCalculator()
    }

    const handleCalculateButton = () =>{

        let calculatorValues = [];
        let emptyField = false;
        let emptyFields = []
        inputFields.forEach((field) =>{
            if (field.value === ''){
                emptyField = true;
                emptyFields.push(field.id)
            }
            calculatorValues[field.id] = field.value
        })
        if (!emptyField){
            props.onSetCalculateValues(calculatorValues)
        } else {
            props.onEmptyFilds(emptyFields)
        }

    }

    return (
      <div className={styles.form}>

          <div className={styles["input-group"]}>

              {inputFields.map ((inputField) => (

                <InputItem
                  key = {inputField.id}
                  label = {inputField.label}
                  type = {inputField.type}
                  id={inputField.id}
                  value = {inputField.value}
                  onEnteredValue = {setEnteredValue}

                />
              ) )}

          </div>
          <p className={styles.actions}>

              <Button
                label = 'Reset'
                buttonAlt = "true"
                onButtonClick = {handleResetButton}
              />
              <Button
                label = 'Calculate'
                onButtonClick = {handleCalculateButton}
              />

          </p>
      </div>

    )

}

export default CalculatorForm
