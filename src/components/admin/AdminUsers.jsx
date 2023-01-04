import React from 'react';
import {NavLink} from "react-router-dom";

export const AdminUsers = () => {
	return (
		<div className='admin_users'>
			<div className="container">
				<div className="users_container">
					<h1 className='admin_user_title'>Пользователи</h1>
					<NavLink to='add' className='users_resume' >
						<button className='add_user'>
							Добавить пользователя
						</button>
					</NavLink>
					<NavLink to='review' className='users_resume'>
						<button className='add_user'>
							Отзывы и предложения
						</button>
					</NavLink>
					<div className="history__table">
						<table>
							<thead>
							<tr>
								<th>Пользователь</th>
								<th>Логин</th>
								<th>Пароль</th>
								<th>Деятельность</th>
								<th>Кнопки</th>
							</tr>
							</thead>
							<tbody>
							<tr>
								<td data-label="Пользователь">Алексей</td>
								<td data-label="Логин">Alexey</td>
								<td data-label="Пароль">alexey12345</td>
								<td data-label="Деятельность">Формирование</td>
								<td data-label="Кнопки">
									<NavLink to='detail'>
										<button className='user_btn'>Подробнее</button>
									</NavLink>
								</td>
							</tr>
							<tr>
								<td data-label="Пользователь">Татьяна</td>
								<td data-label="Логин">Tatyana</td>
								<td data-label="Пароль">tatyana12346</td>
								<td data-label="Деятельность">Покраска</td>
								<td data-label="Кнопки">
									<NavLink to='detail'>
										<button className='user_btn'>Подробнее</button>
									</NavLink>
								</td>
							</tr>
							<tr>
								<td data-label="Пользователь">Вадим</td>
								<td data-label="Логин">Vadim</td>
								<td data-label="Пароль">vadim123</td>
								<td data-label="Деятельность">Покраска</td>
								<td data-label="Кнопки">
									<NavLink to='detail'>
										<button className='user_btn'>Подробнее</button>
									</NavLink>
								</td>
							</tr>
							<tr>
								<td data-label="Пользователь">Александр</td>
								<td data-label="Логин">alexander</td>
								<td data-label="Пароль">Alex777</td>
								<td data-label="Деятельность">Сборка</td>
								<td data-label="Кнопки">
									<NavLink to='detail'>
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