import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestUserInfo } from '../../actions/admin';

export const UsersDetail = () => {
	const dispatch = useDispatch()
	const { user, user_count, user_defect, user_cancel, user_name } = useSelector(state => state.admin)
	useEffect(() => {
		const id = window.location.pathname.split('/')[4]
		dispatch(requestUserInfo(id))
	}, [])
	return (
		<div className='user_detail'>
			<div className="container">
				<div className="user_detail_container">
					<h1>{user_name}</h1>
					<div className="user_detail_block">
						<h2>Сделано количество: {user_count}</h2>
						<table>
							<thead>
								<tr>
									<th>Продукт</th>
									<th>Тип</th>
									<th>Сделано</th>
									<th>Дата добавления</th>
								</tr>
							</thead>
							<tbody>
								{user.map(item => {
									return (
										<tr>
											<td data-label="Продукт">{item.process.product}</td>
											<td data-label="Тип">{item.info}</td>
											<td data-label="Сделано">{item.process.count}</td>
											<td data-label="Дата добавления">{item.process.date}</td>
										</tr>
									)
								})}
							</tbody>
						</table>
					</div>
					<div className="user_detail_block">
						<h2> Брак количество: {user_defect}</h2>
						<table>
							<thead>
								<tr>
									<th>Продукт</th>
									<th>Тип</th>
									<th>Брак</th>
									<th>Дата добавления</th>
								</tr>
							</thead>
							<tbody>
								{user.map(item => {
									if (item.process.defect || item.process.status_id == 3) {
										return (
											<tr>
												<td data-label="Продукт">{item.process.product}</td>
												<td data-label="Тип">{item.info}</td>
												<td data-label="Брак">{item.process.defect}</td>
												<td data-label="Дата добавления">{item.process.date}</td>
											</tr>
										)
									}
								})}
							</tbody>
						</table>
					</div>
					<div className="user_detail_block">
						<h2>Отмена количество: {user_cancel}</h2>
						<table>
							<thead>
								<tr>
									<th>Продукт</th>
									<th>Тип</th>
									<th>Отмена</th>
									<th>Дата добавления</th>
								</tr>
							</thead>
							<tbody>
								{user.map(item => {
									if (item.process.status_id == 4) {
										return (
											<tr>
												<td data-label="Продукт">{item.process.product}</td>
												<td data-label="Тип">{item.info}</td>
												<td data-label="Отменено">{item.process.count}</td>
												<td data-label="Дата добавления">{item.process.date}</td>
											</tr>
										)
									}
								})}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};
