import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestUserInfo } from '../../actions/admin';

export const UsersDetail = () => {
	const dispatch = useDispatch()
	const [date, setDate] = useState(1)
	const [count, setCount] = useState(0)
	const [defect, setDefect] = useState(0)
	const [cancel, setCancel] = useState(0)
	const [myType, setType] = useState('0')
	const { user, user_name } = useSelector(state => state.admin)
	const [data, setData] = useState(user)
	const [search, setSearch] = useState('')
	useEffect(() => {
		const id = window.location.pathname.split('/')[4]
		dispatch(requestUserInfo(id, date))
		setType('0')
	}, [])
	useEffect(() => {
		let arrayCount = [],
			arrayDefect = [],
			arrayCancel = []
		user.map(item => {
			arrayCount.push(parseInt(item.process.count, 10))
			arrayDefect.push(parseInt(item.process.defect, 10))
			if (item.process.status_id == 2)
				arrayCancel.push(parseInt(item.process.count, 10))
		})
		setCount(arrayCount.reduce((partialSum, a) => partialSum + a, 0))
		setDefect(arrayDefect.reduce((partialSum, a) => partialSum + a, 0))
		setCancel(arrayCancel.reduce((partialSum, a) => partialSum + a, 0))

	}, [user])
	function handleChangeDate(e) {
		const id = window.location.pathname.split('/')[4]
		setDate(e.target.value);
		dispatch(requestUserInfo(id, e.target.value))
	}
	useEffect(() => {
		setData(user)
	}, [user])
	const filteredData = data.filter(item => {
		return item.process.product.toLowerCase().includes(search)
	})
	return (
		<div className='user_detail'>
			<div className="container">
				<div className="user_detail_container">
					<h1>{user_name}</h1>
					<div className="user_filters">
						<input value={search} onChange={e => setSearch(e.target.value.toLowerCase())}
							type="text" placeholder='Поиск' />
						<select onChange={e => handleChangeDate(e)}>
							<option value='1'>День</option>
							<option value='2'>Неделя</option>
							<option value='3'>Месяц</option>
							<option value='4'>Год</option>
						</select>
						<select onChange={e => setType(e.target.value)}>
							<option value='0' defaultValue='0'>Все</option>
							<option value='1'>Сделано</option>
							<option value='2'>Брак</option>
							<option value='3'>Отмена</option>
						</select>
					</div>
					{myType == '1' | myType == '0' ?
						<div className="user_detail_block">
							<h2>Сделано количество: {count}</h2>
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
									{filteredData.map(item => {
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
						</div> : ''}
					{myType == '2' | myType == '0' ?
						<div className="user_detail_block">
							<h2> Брак количество: {defect}</h2>
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
									{filteredData.map(item => {
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
						</div> : ''}
					{myType == 3 | myType == '0' ?
						<div className="user_detail_block">
							<h2>Отмена количество: {cancel}</h2>
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
									{filteredData.map(item => {
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
						</div> : ''}
				</div>
			</div>
		</div>
	);
};
