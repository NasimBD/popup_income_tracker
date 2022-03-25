import './App.css';
import { useState } from 'react';
import { Header } from './components/Header';
import { IncomeForm } from './components/IncomeForm';
import { IncomeTable } from './components/IncomeTable';
import { PopupContainer } from './components/Popup/PopupContainer';

function App() {
  const [incomeList, setIncomeList] = useState([]);
  let net = 0;
  if(incomeList.length){
    let prices = incomeList.map(item => Number(item.price));
    net = prices.reduce((x,y) => x + y, 0);
  }

  
  const deleteIncome = (incomeId) => {
    setIncomeList(incomeList.filter(item => item.id !== incomeId));
  }

  
  return (
    <div className="container">
      <Header net={net}/>
      <div id="tracker-main">
        <IncomeForm incomeList={incomeList} setIncomeList={setIncomeList}/>
        <IncomeTable incomeList={incomeList} deleteIncome={deleteIncome}/>
      </div>

      <PopupContainer incomeList={incomeList}/>
    </div>
  );
}

export default App;
