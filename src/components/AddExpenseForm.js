import React, { useContext, useState } from 'react';
import budgetContext from '../context/context';

const AddExpenseForm = () => {

	const { setExpenses } = useContext(budgetContext)

	const [name, setName] = useState('')
	const [cost, setCost] = useState('')

	const reset = () => {
		setName('')
		setCost('')
	}


	const handleClick = (e) => {
		e.preventDefault()
		console.log(name, cost)
		const id = Date.now()
		setExpenses(expenses => [...expenses, {name, cost, id}])
		reset()
	}

	return (
		<form>
			<div className='row'>
				<div className='col-sm'>
					<label htmlFor='name'>Name</label>
					<input
						required='required'
						type='text'
						className='form-control'
						name='name'
						autoComplete="off"
						placeholder="Restaurant"
						value={name}
						onChange={({target})=> setName(target.value)}
					></input>
				</div>
				<div className='col-sm'>
					<label htmlFor='cost'>Cost</label>
					<input
						required='required'
						type='number'
						className='form-control'
						name='cost'
						autoComplete="off"
						value={cost}
						placeholder="$23"
						onChange={({target})=> setCost(target.value)}
					></input>
				</div>
			</div>
			<div className='row'>
				<div className='col-sm'>
					<button type='submit' onClick={handleClick} className='btn btn-primary mt-3'>
						Save
					</button>
				</div>
			</div>
		</form>
	);
};

export default AddExpenseForm;