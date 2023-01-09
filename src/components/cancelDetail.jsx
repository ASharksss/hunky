import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestProfileCanceled } from '../actions/user';

export const CancelDetail = () => {
	const dispatch = useDispatch()
	const canceled = useSelector(state => state.user.profile_canceled)
	const [sum, setSum] = useState(canceled.length)
	const [select, setSelect] = useState(1)
	const [search, setSearch] = useState('')
	useEffect(() => {
		dispatch(requestProfileCanceled(select))
	}, [])

	let filteredData = canceled.filter(item => item.process.product.toLowerCase().includes(search))

	const handleSelect = (val) => {
		setSelect(val)
		dispatch(requestProfileCanceled(val))
	}
	return (
		<div className='defect'>
			<div className="container">
				<div className="defect_container">

					<div className="defect_title">
						<h1>Информация об отменах</h1>
					</div>

					<div className="history__filters">
						<input type="text" value={search} onChange={e => setSearch(e.target.value.toLowerCase())}
							placeholder='Поиск' className='history__search' />
						<select defaultValue={select} onChange={e => handleSelect(e.target.value)} className="history_select">
							<option value='1'>День</option>
							<option value='2'>Неделя</option>
							<option value='3'>Месяц</option>
							<option value='4'>Год</option>
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
								{canceled.length !== 0 ?
									filteredData.map(item => {
										return (
											<tr>
												<td data-label="Продукт">{item.process.product}</td>
												<td data-label="Тип">{item.info}</td>
												<td data-label="Брак">{item.process.defect}</td>
												<td data-label="Дата добавления">{item.process.date}</td>
											</tr>
										)
									}) : <tr>У Вас нет браков</tr>}
							</tbody>
						</table>
					</div>

				</div>
			</div>

		</div>
	);
};

