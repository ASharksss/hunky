import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { requestAddProduct } from '../../actions/admin';

export const AddProduct = () => {
	const [name, setName] = useState('')
	const [category, setCategory] = useState(1)

	const dispatch = useDispatch()

	function handleSubmit(e) {
		const data = {
			"name": name,
			"cat": category
		}
		dispatch(requestAddProduct(data))
	}
	return (
		<div className='stockResume'>
			<div className="container">
				<div className="resume_container">
					<form className='resume_form' onSubmit={e => {
						e.preventDefault()
						handleSubmit()
					}}>
						<h2 className='resume_stock_title'>Добавление товара</h2>
						<input type="text" placeholder='Введите название' value={name}
							onChange={e => setName(e.target.value)} className='resume_input' />
						<select onChange={e => setCategory(e.target.value)} className='resume_input' >
							<option value="1">Расходники</option>
							<option value="2">Рыбки</option>
						</select>
						<div className="link resume_stock_link">
							<button type='submit' className="resume_stock_submit">Добавить</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

