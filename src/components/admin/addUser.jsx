import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {requestAddUser} from "../../actions/user";
import {requestCheckEmail, requestCheckUsername} from "../../actions/other";

export const AddUser = () => {
	const {chEmail, chUsername} = useSelector(state => state.other)

	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [jobTitle, setJobTitle] = useState('')
	const [email, setEmail] = useState('')
	const [name, setName] = useState('')
	const [role, setRole] = useState(2)

	const dispatch = useDispatch()

	function handleSubmit(e) {
		e.preventDefault()
		const data = {
			"username": username,
			"password": password,
			"email": email,
			"name": name,
			"j_title": jobTitle,
			"role": role
		}
		dispatch(requestAddUser(data))
		setRole(2)
		setName('')
		setPassword('')
		setUsername('')
		setJobTitle('')
		setEmail('')
	}

	function handleCheckUsername() {
		if (username) {
			dispatch(requestCheckUsername(username))
			setEmail(username + '@vodenoi.shop')
		}
	}

	function handleCheckEmail() {
		if (email) {
			dispatch(requestCheckEmail(email))
		}
	}

	return (
		<div className='addUser'>
			<div className="container">
				<div className="addUser_container">
					<form className='add_user_form' onSubmit={e => handleSubmit(e)}>
						<h1 className='add_user_title'>Добавление пользователя</h1>
						<input type="text" value={name} onChange={e => setName(e.target.value)}
									 placeholder='Имя' className='add_user_input'/>
						<input type="text" value={jobTitle} onChange={e => setJobTitle(e.target.value)}
									 placeholder='Должность' className='add_user_input'/>
						<input type="text" value={username} onChange={e => setUsername(e.target.value)}
									 onBlur={() => handleCheckUsername()} placeholder='Логин' className='add_user_input'
									 style={!chUsername ? {border: 'solid red 2px'} : {border: '2px inset #EBE9ED'}} required/>
						<input type="email" value={email} onChange={e => setEmail(e.target.value)}
									 onBlur={() => handleCheckEmail()} placeholder='Почта' className='add_user_input'
									 style={!chEmail ? {border: 'solid red 2px'} : {border: '2px inset #EBE9ED'}} required/>
						<input type="password" value={password} onChange={e => setPassword(e.target.value)}
									 placeholder='Пароль' className='add_user_input' required/>
						<select onChange={e => setRole(e.target.value)} className='add_user_select'>
							<option hidden>Деятельность...</option>
							<option value="2">Формирование</option>
							<option value="3">Покраска</option>
							<option value="4">Сборка</option>
						</select>
						<div className='add_user_link'>
							<button className='add_user_submit'>
								Добавить
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};