import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AddExpenseForm from './components/AddExpenseForm';

const App = () => {

  const [expenses, setExpenses] = useState([
    { id: 12, name: 'Compras', cost: 10 },
		{ id: 13, name: 'Navidad', cost: 200 },
		{ id: 14, name: 'Lavado de carro', cost: 40 },
  ]) 

  const [money, setMoney] = useState({
    budget: 2000,
    remaining: 2000,
    limit: 1000
  })

  useEffect(() => {
    let totalExpenses = 0;
    expenses.forEach( ({cost}) => {
      totalExpenses += Number(cost)
    })
    setMoney({
      ...money,
      remaining: money.budget - totalExpenses
    })
  }, [expenses])
  
	return (
    <>
      <div className='row pt-3 px-5 mb-5 sticky-top' style={{background: '#cfcfcf'}}>
        <div className='col-3 m-auto'>
          <h2>My Budget Planner</h2>
        </div>
        <div className='col-3'>
          <Budget total={money.budget} />
        </div>
        <div className='col-3'>
          <Remaining remaining={money.remaining} />
        </div>
        <div className='col-3'>
          <ExpenseTotal limit={money.limit} remaining={money.remaining} />
        </div>
      </div>
      
      <div className='container p-0'>
        <div className="row">

          <div className="col-7 mr-4">
            <h3 className="mb-3">Expenses</h3>
            <ExpenseList expenses={expenses} setExpenses={setExpenses} />
          </div>
          <div className="col-4 border-left">
            <h3 className="mb-3">Add Expense :D</h3>
            <AddExpenseForm setExpenses={setExpenses} />
          </div>

        </div>
      </div>
    </>
  );
};

export default App;