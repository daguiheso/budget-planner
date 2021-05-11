import React, { useState, useReducer } from 'react';
import budgetContext from './context';
import AppReducer from './mutations';

const initialState = {
	money: {
		budget: 2000,
		remaining: 2000,
		limit: 1000,
	},
	expenses: [
		{ id: 12, name: 'Compras', cost: 10 },
		{ id: 13, name: 'Navidad', cost: 200 },
		{ id: 14, name: 'Lavado de carro', cost: 40 }
	],
};

const BudgetState = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	return (
		<budgetContext.Provider value={{
			expenses: state.expenses,
			money: state.money,
			dispatch,
		}}>
			{ children }
		</budgetContext.Provider>
	)
}

export default BudgetState;