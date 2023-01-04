import React from 'react';
import {NavLink} from "react-router-dom";

export const AddUser = () => {
	return (
		<div className='addUser'>
			<div className="container">
				<div className="addUser_container">
					<form className='add_user_form'>
						<h1 className='add_user_title'>Добавление пользователя</h1>
						<input type="text" placeholder='Имя' className='add_user_input'/>
						<input type="text" placeholder='Логин' className='add_user_input'/>
						<input type="text" placeholder='Пароль' className='add_user_input'/>
						<select className='add_user_select'>
							<option value="">Деятельность...</option>
							<option value="">Формирование</option>
							<option value="">Покраска</option>
							<option value="">Сборка</option>
						</select>
						<NavLink to='/admin/users' className='add_user_link'>
							<button className='add_user_submit'>
								Добавить
							</button>
						</NavLink>

					</form>
				</div>
			</div>
		</div>
	);
};