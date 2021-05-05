import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import BudgetState from './context/state';

ReactDOM.render(
  <React.StrictMode>
    <BudgetState>
      <App />
    </BudgetState>
  </React.StrictMode>,
  document.getElementById('root')
);
