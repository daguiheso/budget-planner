import React, { useContext } from 'react'
import budgetContext from '../context/context';
import ExpenseItem from './ExpenseItem';

const ExpenseList = () => {

	const { expenses, dispatch } = useContext(budgetContext);

	const deleteExpense = (id) => {
		const newExpenses = expenses.find(expense => expense.id === id)
		dispatch({
			type: 'DELETE_EXPENSE',
			payload: newExpenses.id,
		})
	}

	return (
		<ul className='list-group'>
			{expenses.map(({id, name, cost}) => (
				<ExpenseItem id={id} key={id} name={name} cost={cost} deleteExpense={deleteExpense} />
			))}
		</ul>
	)
}

export default ExpenseList