import React from 'react';
import { useForm } from '../hooks/useForm';

const AddExpenseForm = ({setExpenses}) => {

	const [ values, handleInputChange, reset] = useForm({
		name: '',
		cost: ''
	})
	const { name, cost } = values

	const handleClick = (e) => {
		e.preventDefault()
		const id = Date.now()
		setExpenses(expenses => [...expenses, {...values, id}])
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
						value={name}
						onChange={handleInputChange}
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
						onChange={handleInputChange}
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