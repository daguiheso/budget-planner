import React, { useContext } from 'react';
import budgetContext from '../../context/context';

const Budget = () => {
	const { money } = useContext(budgetContext);

	return (
		<div className='alert alert-secondary'>
			<span>Budget: ${money.budget}</span>
		</div>
	);
};

export default Budget;