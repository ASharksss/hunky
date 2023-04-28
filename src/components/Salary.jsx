import React, {useEffect, useState} from 'react';
import axios from "axios";

export const Salary = () => {
	const [firstDate, setFirstDate] = useState('')
	const [lastDate, setLastDate] = useState('')
	const [preload, setPreload] = useState(false)
	const [error, setError] = useState('')
	const [data, setData] = useState([])
	useEffect(() => {
		setPreload(true)
		axios.get('/user/salary?f_date=' + firstDate + '&s_date=' + lastDate)
			.then(res => {
				if (res.data.server_status == 1) {
					setPreload(false)
					setData(res.data.data)
				} else {
					setPreload(false)
					setError('Произошла ошибка')
				}
			})
			.catch(err => {
				setPreload(false)
				setError('Произошла ошибка')
				console.log(err)
			})

	}, [firstDate, lastDate])
	return (
		<div className='salary'>
			<div className="container">
				<div className="salary_container">
					<div className="salary_choice-date">
						<input type="date" value={firstDate} onChange={e => setFirstDate(e.target.value)}/>
						<input type="date" value={lastDate} onChange={e => setLastDate(e.target.value)}/>
						<button onClick={() => {
							setFirstDate('')
							setLastDate('')
						}}>Очистить
						</button>
					</div>
					<div className="salary_chart">
						{!preload ? error ?
								<p>{error}</p> :
								<table>
									<thead>
									<tr>
										<th>Дата</th>
										<th>Продукт</th>
										<th>Тип</th>
										<th>Оплата</th>
									</tr>
									</thead>
									<tbody>
									{data.map(item => (
										<tr key={item.id}>
											<td data-label="Дата">{item.date}</td>
											<td data-label="Продукт">{item.product}</td>
											<td data-label="Тип">{item.info}</td>
											<td data-label="Оплата">{item.price} ₽</td>
										</tr>
									))}
									</tbody>
								</table>
							:
							<p>Загрузка данных</p>}
					</div>
				</div>
			</div>
		</div>
	);
};

