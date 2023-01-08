import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { requestProductList } from '../../actions/admin';

export const AdminProducts = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(requestProductList())
	}, [])
	const products = useSelector(state => state.admin.products)
	return (
		<div className='admin_users'>
			<div className="container">
				<div className="users_container">
					<h1 className='admin_user_title'>Товары</h1>
					<NavLink to={'/admin/product/add'} className='users_resume' >
						<button className='add_user'>
							Добавить товар
						</button>
					</NavLink>
					<NavLink to='review' className='users_resume'>
						<button className='add_user'>
							Создать работу
						</button>
					</NavLink>
					<NavLink to='review' className='users_resume'>
						<button className='add_user'>
							Назначить работу
						</button>
					</NavLink>
					<div className="history__table">
						<table>
							<thead>
								<tr>
									<th>Название</th>
									<th>Категория</th>
								</tr>
							</thead>
							<tbody>
								{products.map(item => {
									return(
										<tr>
										<td data-label="Название">{item.name}</td>
										<td data-label="Категория">{item.category}</td>											
										</tr>
									)
								})}
							</tbody>
						</table>
					</div>
				</div>
			</div>

		</div>
	);
};