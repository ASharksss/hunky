import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";
import { requestGetJob, requestAddJob } from '../actions/user';

export const HomeDetail = () => {
	const [count, setCount] = useState(0)
	const [defect, setDefect] = useState(0)
	const [detail, setDetail] = useState('')

	const dispatch = useDispatch()
	const job = useSelector(state => state.user.job)
	const error = useSelector(state => state.user.error)
	useEffect(() => {
		const id = window.location.pathname.split('/')[2]
		dispatch(requestGetJob(id))
	}, [])

	const handleSubmit = async () => {
		const data = {
			'name': job.name,
			'type': detail,
			'count': count,
			'defect': defect
		}
		await dispatch(requestAddJob(data))
	}
	if (job.length !== 0) {
		return (
			<div className='home_detail'>
				<div className="container">
					<div className="detail__wrapper">
						<form className='detail_form' onSubmit={e => {
							e.preventDefault()
							handleSubmit()
						}}>
							<label>{job.name}</label>
							<select onChange={e => setDetail(e.target.value)} value={detail}
								className="home_detail__select">
								<option defaultValue hidden>Выберите вид...</option>
								{job.info.map(item => {
									return (
										<option key={item} value={item}>{item}</option>
									)
								})}
							</select>
							<input type='number' value={count} onChange={e => setCount(e.target.value)}
								placeholder='Количество сделано' />
							<input type='number' value={defect} onChange={e => setDefect(e.target.value)}
								placeholder='Количество брак' />

							<div className="detail_btns">
								<button type='submit' className='detail_btn'>
									Сохранить
								</button>
							</div>

							{error ? <p className="error">{error}</p> : ''}
						</form>
					</div>
				</div>
			</div>
		);
	}
};

