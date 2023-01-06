import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {NavLink} from "react-router-dom";
import { requestProducts, requestAddProducts } from '../../actions/admin';

export const StockResume = () => {
	const dispatch = useDispatch()
	const products = useSelector(state => state.admin.products)
	const [count, setCount] = useState(0)
	const [pId, setPId] = useState(1)
	useEffect(() => {
		dispatch(requestProducts())
	}, [])
	function handleSubmit() {
		const data={
			"p_id": pId,
			"count": count
		}
		dispatch(requestAddProducts(data))
	}
	return (
		<div className='stockResume'>
			<div className="container">
				<div className="resume_container">
					<form className='resume_form' onSubmit={e => {
						e.preventDefault()
						handleSubmit()
					}}>
						<h2 className='resume_stock_title'>Пополнение склада</h2>
						<select onChange={e => setPId(e.target.value)} className='resume_input' >
							{products.map(item => {
								return(
									<option key={item.id} value={item.id}>{item.name}</option>
								)
							})}
						</select>
						<input type="number" placeholder='Введите количество' value={count}
								onChange={e => setCount(e.target.value)} className='resume_input'/>
						<div className="link resume_stock_link">
							<button type='submit' className="resume_stock_submit">Добавить</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

