import React, {useState} from 'react';
import {HiEye, HiEyeOff} from 'react-icons/hi';
import {useDispatch, useSelector} from "react-redux";
import {requestLogin} from "../actions/auth";

export const Auth = () => {
	const authStore = useSelector(state => state.auth);
	const dispatch = useDispatch()

	const [showPassword, setShowPassword] = useState(false)
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	function handleShowPassword(){
		setShowPassword(prev => !prev)
	}

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
						<div style={{width: '103%', display: 'flex'}}>
							<input type={showPassword ? 'text' : "password"} value={password} onChange={e => setPassword(e.target.value)} placeholder='Пароль' required/>
							<button type='button' style={{width: '45px', marginLeft: '10px'}} onClick={() => handleShowPassword()}>
								{showPassword ? <HiEyeOff /> : <HiEye />}
							</button>
						</div>
						{authStore.error ? <p className="error">{authStore.error}</p> : ''}
						<button onClick={() => dispatch(requestLogin(username, password))}>Войти</button>
					</form>
				</div>
			</div>

		</div>
	);
};

