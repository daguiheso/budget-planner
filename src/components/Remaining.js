import React, { useContext } from 'react';
import budgetContext from '../context/context';

const Remaining = () => {
	const { expenses, money } = useContext(budgetContext);

	const totalExpenses = expenses.reduce((total, item) => {
		return (total += +item.cost);
	}, 0);

	return (
		<div className='alert alert-success'>
			<span>Remaining: ${money.budget - totalExpenses}</span>
		</div>
	);
};

export default Remaining;