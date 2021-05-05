import React from 'react'
import ExpenseItem from './ExpenseItem';

const ExpenseList = ({expenses}) => {
    return (
		<ul className='list-group'>
			{expenses.map(({id, name, cost}) => (
				<ExpenseItem id={id} key={id} name={name} cost={cost} />
			))}
		</ul>
    )
}

export default ExpenseList