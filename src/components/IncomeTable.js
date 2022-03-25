import React from 'react'
import { IncomeRow } from './incomeRow'

export const IncomeTable = ({incomeList, deleteIncome}) => {
  return (
    <table id="income-table">
         <tbody>
         {
          incomeList.map(income => 
           <IncomeRow key={income.id} income={income} deleteIncome={deleteIncome}/>
            )
        }
         </tbody>
    </table>
  )
}
