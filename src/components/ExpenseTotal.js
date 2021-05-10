import React, { useContext } from 'react';
import budgetContext from '../context/context';

const ExpenseTotal = () => {
	const { money } = useContext(budgetContext);

	return (
		<div className={`alert ${money.remaining > money.limit ? 'alert-primary' : 'alert-danger'}`}>
			<span>Spent so far: ${money.limit}</span>
		</div>
	);
};

export default ExpenseTotal;