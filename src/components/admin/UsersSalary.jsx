import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FcLike } from 'react-icons/fc'
import axios from "axios";

export const UserSalary = () => {
    const [firstDate, setFirstDate] = useState('')
    const [lastDate, setLastDate] = useState('')
    const [preload, setPreload] = useState(false)
    const [error, setError] = useState('')
    const [data, setData] = useState([])
    const [sum, setSum] = useState('')
    const [name, setName] = useState('')
    const location = useLocation()
    const { state } = location

    useEffect(() => {
        if (name == '') {
            setName(state.fio)
        }
    }, [])

    useEffect(() => {
        setPreload(true)
        axios.get('/admin/' + state.uId + '/salary?f_date=' + firstDate + '&s_date=' + lastDate)
            .then(res => {
                if (res.data.server_status == 1) {
                    setPreload(false)
                    setData(res.data.data)
                    setSum(res.data.sum)
                } else {
                    setPreload(false)
                    setError('Произошла ошибка')
                }
            })
            .catch(err => {
                setPreload(false)
                setError('Произошла ошибка')
                console.log(err)
            })

    }, [firstDate, lastDate])

    return (
        <div className='user_detail'>
            <div className="container">
                <div className="user_detail_container">
                    <div className="salary_choice-date">
                        <h1>{name}</h1>
                        <div className="user_filters">
                            <input type="date" value={firstDate} onChange={e => setFirstDate(e.target.value)} />
                            <input type="date" value={lastDate} onChange={e => setLastDate(e.target.value)} />
                            <button className='stock_btn' onClick={() => {
                                setFirstDate('')
                                setLastDate('')
                            }}>Очистить
                            </button>
                        </div>
                        <div className="user_detail_block">
                            <h2>Сделано: {!preload && error ? '' : sum.count + ' шт.'}</h2>
                            <h2>Общая стоимость: {!preload && error ? '' : sum.price + ' ₽'}</h2>
                            {!preload ? error ?
                            <p>{error}</p> :
                            <table>
                                <thead>
                                    <tr>
                                        <th>Тип</th>
                                        <th>Дата</th>
                                        <th>Продукт</th>
                                        <th>Информация</th>
                                        <th>Сделано</th>
                                        <th>Стоимость</th>
                                        <th>₽/шт</th>
                                        <th>Голография</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map(item => (
                                        <tr key={item.id}>
                                            <td data-label="Тип">{item.type}</td>
                                            <td data-label="Дата">{item.date}</td>
                                            <td data-label="Продукт">{item.product}</td>
                                            <td data-label="Информация">{item.info}</td>
                                            <td data-label="Сделано">{item.count} шт.</td>
                                            <td data-label="Стоимость">{item.price} ₽</td>
                                            <td data-label="₽/шт">{parseFloat(parseFloat(item.price) / parseFloat(item.count)).toFixed(2)}</td>
                                            <td>{item.is_holography == true ? <FcLike /> : ''}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            :
                            <p>Загрузка данных</p>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
