import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {NavLink} from "react-router-dom";
import { FcLike } from 'react-icons/fc'
import axios from "axios";

export const AdminStockAccepted = () => {
    const auth = useSelector(state => state.auth)
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])
    const getList = () => {
        setLoading(true)
        axios.get('/stock/accepted')
            .then(res => {
                if (res.data.server_status == 1) {
                    setData(res.data.list)
                    setLoading(false)
                }
            }).catch(err => {
            console.log(err)
            setLoading(false)
        })
    }
    useEffect(() => {
        getList()
    }, [])
    if (loading) {
        return <h2>Loading ...</h2>
    }

    const handleReset = (product_id, name, type, itemCount, id) => {
        const check = window.confirm(`Вы действительно хотите сделать возврат на покраску ${name} - ${type}?`)
        if (check) {
            const count = window.prompt('Введите кол-во')
            if (parseInt(count) > 0) {
                if (count > itemCount) {
                    alert('Значение превышает допустимое')
                } else {
                    const data = {
                        "id": product_id,
                        "info": type,
                        "count": count,
                        'sId': id
                    }
                    axios.post('/stock/reset', data)
                        .then(res => {
                            alert('Возврат прошел успешно')
                            window.location.reload()
                        }).catch(err => {
                        alert('Ошибка обработки данных')
                        console.log(err)
                    })
                }

            } else {
                alert("Введите число")
            }
        }
    }

    return (
        <div className='adminStock'>
            <div className="container">
                <div className="admin_stock_container">
                    <div className="stock_block">
                        <div className="stock_title">
                            <h1>Склад АйМаНи</h1>
                            {auth.user.name === 'Алсу' ?
                                <NavLink to='/busya/stock/accepted' className='link'>
                                    <button className='stock_btn'>Отметить приход без расходный</button>
                                </NavLink> : ''}
                            <NavLink to='/admin/stock/accepted/resume' className='link'>
                                <button className='stock_btn'>Отметить приход</button>
                            </NavLink>
                            <NavLink to='/admin/stock/shipped' className='link'>
                                <button className='stock_btn'>Заказы</button>
                            </NavLink>
                        </div>
                        <div className="stock_list">
                            <table>
                                <thead>
                                <tr>
                                    <th>Продукт</th>
                                    <th>Тип</th>
                                    <th>Количество</th>
                                    {auth.isAuth & auth.role === 'Администратор' ?
                                        <th>Действия</th> : ''}
                                </tr>
                                </thead>
                                <tbody>
                                {data.map(item => !item.is_holography ? (
                                    <tr>
                                        <td data-label="Продукт">{item.product}</td>
                                        <td data-label="Тип">{item.volume}</td>
                                        <td data-label="Количество">{item.count}</td>
                                        {auth.isAuth & auth.role === 'Администратор' ?
                                            <td data-label="Действия">
                                                <button
                                                    onClick={() => handleReset(item.product_id, item.product, item.volume, item.count, item.id)}
                                                    className='stock_btn'>Возврат
                                                </button>
                                            </td> : null}
                                    </tr>
                                ) : null)}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

