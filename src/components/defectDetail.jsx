import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestProfileDefects } from '../actions/user';

export const DefectDetail = () => {
	const dispatch = useDispatch()
	const [sum, setSum] = useState(0)
	const defects = useSelector(state => state.user.profile_defects)
	useEffect(() => {
		dispatch(requestProfileDefects())
	}, [])

	useEffect(() => {
		let array = []
		defects.map(item => {
		  array.push(parseInt(item.process.defect, 10))
		})
		setSum(array.reduce((partialSum, a) => partialSum + a, 0))
	  }, [defects])
	return (
		<div className='defect'>
			<div className="container">
				<div className="defect_container">

					<div className="defect_title">
						<h1>Информация о браке</h1>
					</div>

					<div className="history__filters">
						<input type="text" placeholder='Поиск' className='history__search' />
						<select className="history_select">
							<option>День</option>
							<option>Неделя</option>
							<option>Месяц</option>
							<option>Год</option>
						</select>
					</div>
					<h2 className='history_count'>Общее число: {sum}</h2>

					<div className="history__table">
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
								{defects.map(item => {
									return (
										<tr>
											<td data-label="Продукт">{item.process.product}</td>
											<td data-label="Тип">{item.info}</td>
											<td data-label="Брак">{item.process.defect}</td>
											<td data-label="Дата добавления">{item.process.date}</td>
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

