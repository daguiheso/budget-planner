import React from 'react';

const Remaining = ({remaining}) => {
	return (
		<div className='alert alert-success'>
			<span>Remaining: ${remaining}</span>
		</div>
	);
};

export default Remaining;