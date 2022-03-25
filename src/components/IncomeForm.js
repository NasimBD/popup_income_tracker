import React, { useRef } from 'react'
import { convertTimestampToDate } from '../functions';

export const IncomeForm = ({incomeList, setIncomeList}) => {
    const descriptionRef = useRef(null);
    const priceRef = useRef(null);
    const dateRef = useRef(null);


    const handleSubmit = e => {
        e.preventDefault();
        const dateArr = dateRef.current.value ? dateRef.current.value.split('-') : convertTimestampToDate(Date.now());
        let newIncome = {id: Date.now(),description: descriptionRef.current.value, price: priceRef.current.value, date: new Date(dateArr[0], dateArr[1], dateArr[2]).getTime()};
        setIncomeList([newIncome, ...incomeList]);
        descriptionRef.current.value = '';
        priceRef.current.value = '';
        dateRef.current.value = '';
    }


  return (
    <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input type="text" placeholder="Income Description..." ref={descriptionRef} required/>
            <input type="number" min="0" placeholder="Price..." ref={priceRef} required/>
            <input type="date" placeholder="yyyy/mm/dd" ref={dateRef}/>
            <input type="submit" value="Add"/>
          </div>
    </form>
  )
}
