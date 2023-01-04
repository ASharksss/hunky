import React from 'react';
import {NavLink} from "react-router-dom";

export const Auth = () => {
	return (
		<div className='auth'>
			<div className="container">
				<div className="auth_container">
					<h1>Авторизация</h1>
					<form className='auth_form'>
						<input type="text" placeholder='Логин'/>
						<input type="text" placeholder='Пароль'/>
						<NavLink to='/' className='auth_link'>
							<button>Войти</button>
						</NavLink>

					</form>
				</div>
			</div>

		</div>
	);
};

