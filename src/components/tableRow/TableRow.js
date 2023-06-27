import React from 'react';
const TableRow = (props) => {
    return (
      <tr>
          <td>{props.year}</td>
          <td>{props.savingsEndOfYear}</td>
          <td>{props.yearlyInterest}</td>
          <td>{props.yearlyContribution}</td>
      </tr>
    )
}

export default TableRow;
