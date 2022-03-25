import React, { useEffect, useState } from 'react'
import { convertTimestampToDate } from '../../functions';
import { Popup } from './Popup';

export const PopupContainer = ({incomeList}) => {
  const [buttonPopupOpen, setButtonPopupOpen]  = useState(false);
  const [timedPopup, setTimedPopup] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTimedPopup(true);
    }, 100);
  }, []);


  const handleButtonPopupCloseClick = () => {
      setButtonPopupOpen(false);
  }


  const handleTimedPopupCloseClick = () => {
    setTimedPopup(false);
  }


  //Find maximum income and then all the items with that price and return a div containing the jsx according to them.
  const handleHighestIncome = () => {
    let maxIncome = 0;
    incomeList.forEach(item => {
      if(item.price > maxIncome) {
        maxIncome = item.price;
        return maxIncome;
      } else return;
    });

      let maxIncomeArr = incomeList.filter(item => item.price === maxIncome);

      let maxIncomeElemsArr = maxIncomeArr.map(item => {
      let itemDateArr = convertTimestampToDate(item.date);
      return <li key={item.id}>{`${itemDateArr[0]}/${itemDateArr[1]}/${itemDateArr[2]}`}</li>
    });

    let divElem = <div>Maximum income was <strong>{maxIncome}</strong> pounds on<ul>{maxIncomeElemsArr}</ul></div>;
    return divElem;
  }


  return (
    <>
        {
        incomeList.length > 0 && 
        <div className="maxIncome-btn-wrapper">
            <button type="button" className="btn simple-btn" onClick={() => setButtonPopupOpen(true)}>Highest income and date</button>
        </div>
      }

      {/* The following popup appears on clicking the above button. */}
      {
        buttonPopupOpen &&
        <Popup handlePopupCloseClick={handleButtonPopupCloseClick} handleOutsideClick={setButtonPopupOpen}>
            {handleHighestIncome()}
        </Popup>
      }

      {/* The following popup will appear automatically after the set time into the page load. */}
      {
        timedPopup &&
        <Popup handlePopupCloseClick={handleTimedPopupCloseClick} handleOutsideClick={setTimedPopup}>
            <p>This is the timed popup which appears after the set time.</p>
        </Popup>
      }
    </>
  )
}
