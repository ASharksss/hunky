import React from 'react';

export const DefectDetail = () => {
	return (
		<div className='defect'>
			<div className="container">
				<div className="defect_container">

					<div className="defect_title">
						<h1>Информация о браке</h1>
					</div>

					<div className="history__filters">
						<input type="text" placeholder='Поиск' className='history__search'/>
						<select className="history_select">
							<option>День</option>
							<option>Неделя</option>
							<option>Месяц</option>
							<option>Год</option>
						</select>
					</div>
					<h2 className='history_count'>Общее число: мильен</h2>

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
							<tr>
								<td data-label="Продукт">Айма ратлин</td>
								<td data-label="Тип">60мм 12гр</td>
								<td data-label="Брак">2</td>
								<td data-label="Дата добавления">28/12/22</td>
							</tr>
							<tr>
								<td data-label="Продукт">Айма ратлин</td>
								<td data-label="Тип">60мм 12гр</td>
								<td data-label="Брак">2</td>
								<td data-label="Дата добавления">28/12/22</td>
							</tr>
							</tbody>
						</table>
					</div>

				</div>
			</div>

		</div>
	);
};

