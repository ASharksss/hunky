import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {requestLogin} from "../actions/auth";

export const Auth = () => {
	const authStore = useSelector(state => state.auth);
	const dispatch = useDispatch()
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	return (
		<div className='auth'>
			<div className="container">
				<div className="auth_container">
					<h1>Авторизация</h1>
					<form className='auth_form' onSubmit={e => {
						e.preventDefault()
						dispatch(requestLogin(username, password))
					}}>
						<input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder='Логин' required/>
						<input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder='Пароль' required/>
						{authStore.error ? <p className="error">{authStore.error}</p> : ''}
						<button onClick={() => dispatch(requestLogin(username, password))}>Войти</button>
					</form>
				</div>
			</div>

		</div>
	);
};

