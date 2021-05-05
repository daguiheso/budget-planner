import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AddExpenseForm from './components/AddExpenseForm';

const App = () => {
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
            <ExpenseList />
          </div>
          <div className="col-4 border-left">
            <h3 className="mb-3">Add Expense :D</h3>
            <AddExpenseForm />
          </div>

        </div>
      </div>
    </>
  );
};

export default App;