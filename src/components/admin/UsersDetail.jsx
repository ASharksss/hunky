import React from 'react';

export const UsersDetail = () => {
	return (
		<div className='user_detail'>
			<div className="container">
				<div className="user_detail_container">
					<h1>Alsu Kurbanalieva</h1>
					<div className="user_detail_block">
						<h2>Сделано количество: мильен</h2>
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
							<tr>
								<td data-label="Продукт">Айма ратлин</td>
								<td data-label="Тип">60мм 12гр</td>
								<td data-label="Сделано">2</td>
								<td data-label="Дата добавления">28/12/22</td>
							</tr>
							<tr>
								<td data-label="Продукт">Айма ратлин</td>
								<td data-label="Тип">60мм 12гр</td>
								<td data-label="Сделано">2</td>
								<td data-label="Дата добавления">28/12/22</td>
							</tr>
							</tbody>
						</table>
					</div>
					<div className="user_detail_block">
						<h2> Брак количество: нуль</h2>
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
					<div className="user_detail_block">
						<h2>Отмена количество: нуль</h2>
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
							<tr>
								<td data-label="Продукт">Айма ратлин</td>
								<td data-label="Тип">60мм 12гр</td>
								<td data-label="Отмена">2</td>
								<td data-label="Дата добавления">28/12/22</td>
							</tr>
							<tr>
								<td data-label="Продукт">Айма ратлин</td>
								<td data-label="Тип">60мм 12гр</td>
								<td data-label="Отмена">2</td>
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
