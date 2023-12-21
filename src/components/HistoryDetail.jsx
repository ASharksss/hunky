import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestGetProcess, requestUpdateProcess } from '../actions/user';

export const HistoryDetail = (props) => {
    const dispatch = useDispatch()
    const process = useSelector(state => state.user.process)
    const [count, setCount] = useState('')
    const [defect, setDefect] = useState('')

    useEffect(() => {
        const id = window.location.pathname.split('/')[2]
        dispatch(requestGetProcess(id))
    }, [])

    useEffect(() => {
        setCount(process.count)
        setDefect(process.defect)
    }, [process])

    const handleSubmit = (e) => {
        e.preventDefault()
        const id = window.location.pathname.split('/')[2]
        let data = {}
        if (count.length === 0 && defect.length === 0) {
            alert('Поля пустые')
        } else if (parseInt(process.count, 10) === parseInt(count, 10) &&
            parseInt(process.defect, 10) === parseInt(defect, 10)) {
            alert('Данные не изменены')
        } else if (parseInt(count, 10) < 0 || parseInt(defect, 10) < 0) {
            alert('Значение отрицательное')
        } else {
            if (parseInt(process.count, 10) !== parseInt(count, 10) && count.length !== 0) {
                data = {
                    'count': parseInt(count, 10)
                }
                if (parseInt(process.defect, 10) !== parseInt(defect, 10)
                    && defect.length !== 0 && count.length !== 0) {
                    data = {
                        'count': parseInt(count, 10),
                        'defect': parseInt(defect, 10)
                    }
                }
            } else if (parseInt(process.defect, 10) !== parseInt(defect, 10) && defect.length !== 0) {
                data = {
                    'defect': parseInt(defect, 10)
                }
            }
            console.log(data)
            dispatch(requestUpdateProcess(id, data))
        }
    }
    if (process) {
        return (
            <div className='home_detail'>
                <div className="container">
                    <div className="detail__wrapper">
                        <form style={{ marginTop: '50px' }} className='detail_form'
                            onSubmit={e => handleSubmit(e)}>
                            <label style={{ marginBottom: '10px' }}>{process.product}, {process.status}</label>
                            <label style={{ marginBottom: '10px' }}>Сделано</label>
                            <input type='text' value={count} onChange={e => setCount(e.target.value)}
                                placeholder='Количество сделано' />
                            <label style={{ marginBottom: '10px' }}>Брак</label>
                            <input type='text' value={defect} onChange={e => setDefect(e.target.value)}
                                placeholder='Количество брак' />
                            <label style={{ marginBottom: '10px' }}>Дата формирования</label>
                            <input type="datetime-local" value={process.date} />
                            <div className="detail_btns">
                                <button type='submit' className='detail_btn'>
                                    Изменить
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className='home_detail'>
                <div className="container">
                    <div className="detail__wrapper">
                        <p>Загрузка...</p>
                    </div>
                </div>
            </div>

        )
    }
}