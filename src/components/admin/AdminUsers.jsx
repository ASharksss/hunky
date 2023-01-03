import React from 'react';
import {NavLink} from "react-router-dom";

export const AdminUsers = () => {
	return (
		<div className='admin_users'>
			<div className="container">
				<div className="users_container">
					<h1 className='admin_user_title'>Пользователи</h1>
					<button className='add_user'>
						Добавить пользователя
					</button>
					<div className="history__table">
						<table>
							<thead>
							<tr>
								<th>Пользователь</th>
								<th>Деятельность</th>
								<th>Сводка за сегодня</th>
								<th>Кнопки</th>
							</tr>
							</thead>
							<tbody>
							<tr>
								<td data-label="Пользователь">Алексей</td>
								<td data-label="Деятельность">Создание форм и грузов</td>
								<td data-label="Сводка за сегодня">100</td>
								<td data-label="Кнопки">
									<NavLink to='admin/users/detail'>
										<button className='user_btn'>Подробнее</button>
									</NavLink>
								</td>
							</tr>
							<tr>
								<td data-label="Пользователь">Татьяна</td>
								<td data-label="Деятельность">Покраска изделий</td>
								<td data-label="Дата добавления">100</td>
								<td data-label="Кнопки">
									<NavLink to='admin/users/detail'>
										<button className='user_btn'>Подробнее</button>
									</NavLink>
								</td>
							</tr>
							<tr>
								<td data-label="Пользователь">Вадим</td>
								<td data-label="Деятельность">Покраска изделий</td>
								<td data-label="Дата добавления">100</td>
								<td data-label="Кнопки">
									<NavLink to='admin/users/detail'>
										<button className='user_btn'>Подробнее</button>
									</NavLink>
								</td>
							</tr>
							<tr>
								<td data-label="Пользователь">Александр</td>
								<td data-label="Деятельность">Сборка изделий</td>
								<td data-label="Дата добавления">100</td>
								<td data-label="Кнопки">
									<NavLink to='admin/users/detail'>
										<button className='user_btn'>Подробнее</button>
									</NavLink>
								</td>
							</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>

		</div>
	);
};