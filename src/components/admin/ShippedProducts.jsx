import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';

export const ShippedProducts = () => {
    const [data, setData] = useState([])
    const [preloader, setPreloader] = useState(false)
    const auth = useSelector(state => state.auth)
    useEffect(() => {
        setPreloader(true)
        axios.get('/admin/send/products')
            .then(res => {
                if (res.data.server_status == 1) {
                    setData(res.data.shipped)
                    setPreloader(false)
                } else {
                    alert('Ошибка обработки данных')
                    console.log(res)
                    setPreloader(false)
                }
            }).catch(err => {
                alert('Ошибка обработки данных')
                console.log(err)
                setPreloader(false)
            })
    }, [])
    return (
        <div className='admin_users'>
            <div className="container">
                <div className="users_container">
                    <h1 className='admin_user_title'>Заказы</h1>
                    {auth.isAuth & auth.role === 'Администратор' ?
                        <NavLink to='/admin/stock/sendShipped' className='link'>
                            <button className='stock_btn'>Оформить заказ</button>
                        </NavLink> : ''}
                    <div className="history__table">
                        {preloader ? 'Загрузка...' :
                            <table>
                                <thead>
                                    <tr>
                                        <th>Кто</th>
                                        <th>Товар</th>
                                        <th>Тип</th>
                                        <th>Количество</th>
                                        <th>Адрес</th>
                                        <th>Дата</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.length == 0 && <h2>Нет отправленных товаров</h2>}
                                    {data.map(item => {
                                        return (
                                            <tr key={item.id}>
                                                <td data-label="Кто">{item.user}</td>
                                                <td data-label="Товар">{item.product}</td>
                                                <td data-label="Тип">{item.info}</td>
                                                <td data-label="Кол-во">{item.count}</td>
                                                <td data-label="Адрес">{item.address}</td>
                                                <td data-label="Дата">{item.date}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>}
                    </div>
                </div>
            </div>

        </div>
    );
};