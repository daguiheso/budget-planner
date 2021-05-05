import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AddExpenseForm from './components/AddExpenseForm';

const App = () => {

  const [expenses, setExpenses] = useState([
    { id: 12, name: 'Compras', cost: 40 },
		{ id: 13, name: 'Navidad', cost: 400 },
		{ id: 14, name: 'Lavado de carro', cost: 50 },
  ])  
  
	return (
    <>
      <div className='row pt-3 px-5 mb-5 sticky-top' style={{background: '#cfcfcf'}}>
        <div className='col-3 m-auto'>
          <h2>My Budget Planner</h2>
        </div>
        <div className='col-3'>
          <Budget />
        </div>
        <div className='col-3'>
          <Remaining />
        </div>
        <div className='col-3'>
          <ExpenseTotal />
        </div>
      </div>
      
      <div className='container p-0'>
        <div className="row">

          <div className="col-7 mr-4">
            <h3 className="mb-3">Expenses</h3>
            <ExpenseList expenses={expenses} />
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