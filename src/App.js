
import CalculatorForm from './components/calculatorForm/CalculatorForm';
import Header from './components/header/Header';
import TableRow from './components/tableRow/TableRow';
import { useState } from 'react';

function App() {
  const [tableData, setTableData] = useState([]);
  const [emptyFieldNames, setEmptyFieldNames] = useState([])
  const resetCalculator = () => {
    setEmptyFieldNames([])
    setTableData([])
  }

  const cleanError = () =>{
    setEmptyFieldNames([])
  }



  const handleEmptyField = (emptyFields) =>{
    setEmptyFieldNames(emptyFields)

  }

  const calculateHandler = (userInput) => {


    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData = []; // per-year results

    let currentSavings = +userInput['current-savings']; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput['yearly-contribution']; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

    setTableData(yearlyData)

  };
  let emptyFieldsContent = (
    <p></p>
  )

  if(emptyFieldNames.length){
    emptyFieldsContent = (
      <p>{emptyFieldNames} can not be empty</p>
    )
  }

  let tableContent = (
    <p className="no-data">Please,enter data</p>
  );

  if (tableData.length){

    tableContent = <table className="result">
      <thead>
      <tr>
        <th>Year</th>
        <th>Total Savings</th>
        <th>Interest (Year)</th>
        <th>Total Interest</th>
        <th>Invested Capital</th>
      </tr>
      </thead>
      <tbody>
      {tableData.map((rowItem, index) =>(

        <TableRow
          key = {index}
          year={rowItem.year}
          savingsEndOfYear={rowItem.savingsEndOfYear}
          yearlyInterest={rowItem.yearlyInterest}
          yearlyContribution={rowItem.yearlyContribution}
        />
      ))}


      </tbody>
    </table>
  }


  return (
    <div>
      <Header/>

      <CalculatorForm
        onResetCalculator = {resetCalculator}
        onSetCalculateValues = {calculateHandler}
        onEmptyFilds = {handleEmptyField}
        onChangeInput = {cleanError}
      />
      {emptyFieldsContent}

      {tableContent}


    </div>
  );
}

export default App;
