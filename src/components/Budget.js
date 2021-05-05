import React from 'react';

const Budget = ({total}) => {
	return (
		<div className='alert alert-secondary'>
			<span>Budget: ${total}</span>
		</div>
	);
};

export default Budget;