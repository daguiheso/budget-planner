import React from 'react';

const ExpenseTotal = ({limit, remaining}) => {

	return (
		<div className={`alert ${remaining > limit ? 'alert-primary' : 'alert-danger'}`}>
			<span>Spent so far: ${limit}</span>
		</div>
	);
};

export default ExpenseTotal;