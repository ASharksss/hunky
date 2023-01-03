import React from 'react';

export const AdminStock = () => {
	return (
		<div className='adminStock'>
			<div className="container">
				<div className="admin_stock_container">
					<select className='admin_stock_select'>
						<option>Все</option>
						<option>Расходники</option>
						<option>Сформированные</option>
						<option>Покрашенные</option>
						<option>Собранные</option>
					</select>
					<div className="stock_block">
						<div className="stock_title">
							<h1>Расходники</h1>
							<button className='stock_btn'>Пополнить</button>
						</div>

						<div className="stock_list">
							<table>
								<thead>
								<tr>
									<th>Продукт</th>
									<th>Количество</th>
								</tr>
								</thead>
								<tbody>
								<tr>
									<td data-label="Продукт">Крючок</td>
									<td data-label="Количество">132</td>
								</tr>
								<tr>
									<td data-label="Продукт">Кольцо</td>
									<td data-label="Количество">2</td>
								</tr>
								</tbody>
							</table>
						</div>
					</div>
					<div className="stock_block">
						<h1>Сформированные</h1>
						<div className="stock_list">
							<table>
								<thead>
								<tr>
									<th>Продукт</th>
									<th>Тип</th>
									<th>Количество</th>
								</tr>
								</thead>
								<tbody>
								<tr>
									<td data-label="Продукт">Айма ратлин</td>
									<td data-label="Тип">60мм 12гр</td>
									<td data-label="Количество">132</td>
								</tr>
								<tr>
									<td data-label="Продукт">Багет</td>
									<td data-label="Тип">60м 17гр</td>
									<td data-label="Количество">2</td>
								</tr>
								</tbody>
							</table>
						</div>
					</div>
					<div className="stock_block">
						<h1>Покрашенные</h1>
						<div className="stock_list">
							<table>
								<thead>
								<tr>
									<th>Продукт</th>
									<th>Тип</th>
									<th>Количество</th>
								</tr>
								</thead>
								<tbody>
								<tr>
									<td data-label="Продукт">Айма ратлин</td>
									<td data-label="Тип">60мм 12гр</td>
									<td data-label="Количество">132</td>
								</tr>
								<tr>
									<td data-label="Продукт">Багет</td>
									<td data-label="Тип">60м 17гр</td>
									<td data-label="Количество">2</td>
								</tr>
								</tbody>
							</table>
						</div>
					</div>
					<div className="stock_block">
					<h1>Собранные</h1>
					<div className="stock_list">
						<table>
							<thead>
							<tr>
								<th>Продукт</th>
								<th>Тип</th>
								<th>Количество</th>
							</tr>
							</thead>
							<tbody>
							<tr>
								<td data-label="Продукт">Айма ратлин</td>
								<td data-label="Тип">60мм 12гр</td>
								<td data-label="Количество">132</td>
							</tr>
							<tr>
								<td data-label="Продукт">Багет</td>
								<td data-label="Тип">60м 17гр</td>
								<td data-label="Количество">2</td>
							</tr>
							</tbody>
						</table>
					</div>
				</div>
				</div>
			</div>
		</div>
	);
};

