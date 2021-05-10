import React, { useContext } from 'react'
import budgetContext from '../context/context';
import ExpenseItem from './ExpenseItem';

const ExpenseList = () => {

	const { expenses, setExpenses } = useContext(budgetContext);

	const deleteExpense = (id) => {
		const newExpenses = expenses.filter(expense => expense.id !== id)
		setExpenses(newExpenses)
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