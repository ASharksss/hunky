import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestGetJob, requestAddJob } from '../actions/user';

export const HomeDetail = () => {
	const [count, setCount] = useState('')
	const [defect, setDefect] = useState('')
	const [detail, setDetail] = useState('')
	const [isHolography, setIsHolography] = useState(false)

	const dispatch = useDispatch()
	const job = useSelector(state => state.user.job)
	const error = useSelector(state => state.user.error)
	const auth = useSelector(state => state.auth)
	useEffect(() => {
		const id = window.location.pathname.split('/')[2]
		dispatch(requestGetJob(id))
	}, [])

	const handleSubmit = async () => {
		const data = {
			'name': job.name,
			'type': detail,
			'count': count,
			'defect': defect,
			'is_holography': isHolography
		}
		if (detail) {
			if (count > 0) {
				await dispatch(requestAddJob(data))
			} else if (defect > 0) {
				await dispatch(requestAddJob(data))
			} else {
				alert('Поля значений пустые')
			}
		} else {
			alert('Не все поля заполнены')
		}
	}

	const errorDetails = () => {
		const values = error.consum.reduce((acc, obj) => {
			Object.keys(obj).forEach(key => {
				if (!acc[key]) {
					acc[key] = [];
				}
				acc[key].push(obj[key]);
			});
			return acc;
		}, {});
		const array = error.array.map(obj => obj['product'])
		const filtered = Object.keys(values).filter(x => !array.includes(x))
		return filtered.map(item => <span>{item}</span>)
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
							{auth.role === 'Маляр' & job.name.split(', ')[1] === 'Покраска' ?
								<div style={{display: 'flex'}}>
									<input type="checkbox" onChange={() => setIsHolography(prev => !prev)} id="holography" name="holography" checked={isHolography} />
									<label for="holography">Голографический</label>
								</div> : ''
							}
							<div className="detail_btns">
								<button type='submit' className='detail_btn'>
									Сохранить
								</button>
							</div>
							{error.message ? <p className="error">{error.message}</p> : ''}
							{error.message ? <p style={{ display: 'flex', flexDirection: 'column' }}>{errorDetails()}</p> : ''}
						</form>
					</div>
				</div>
			</div>
		);
	}
};

