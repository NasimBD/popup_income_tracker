import React from 'react';
import { convertTimestampToDate } from '../functions';

export const IncomeRow = ({income, deleteIncome}) => {
  const [year, month, date] = convertTimestampToDate(income.date);

  return (
    <tr>
        <td><button type="button" className="btn delete-btn" onClick={() => deleteIncome(income.id)}>X</button></td>
        <td className="">
        <p>{income.description}</p>
        </td>
        <td>&pound; {income.price}</td>
        <td>{ year + '/' + month + '/' + date}</td>
    </tr> 
  )
}
