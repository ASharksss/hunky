import React, {useEffect, useState} from 'react';
import axios from "axios";
import {FcLike} from "react-icons/fc";
import {NavLink} from "react-router-dom";

export const AdminAllUserLogs = () => {
    const [stockVal, setStockVal] = useState(0)
    const [users, setUsers] = useState([])
    const [data, setData] = useState([])
    const [title, setTitle] = useState('')
    const [username, setUsername] = useState('')
    const [loading, setLoading] = useState(false)
    const getUsers = async () => {
        setLoading(true)
        setTitle('')
        setUsername('')
        setData([])
        axios.get('/admin/users/details')
            .then(res => {
                setUsers(res.data.users)
                setLoading(false)
                setTitle(res.data.title)
            })
    }
    useEffect(() => {
        getUsers()
    }, [])
    const getUserInfo = (event) => {
        if (parseInt(event.target.value) > 0) {
            let index = event.target.selectedIndex;
            setUsername(event.target[index].text)
            setLoading(true)
            setTitle('')
            setData([])
            axios.post(`/admin/user/${parseInt(event.target.value)}/details`)
                .then(res => {
                    setData(res.data.data)
                    setLoading(false)
                    setTitle(res.data.title)
                    console.log(res)
                }).catch(err => {
                console.log(err)
            })
        }
    }
    if (loading) {
        return (
            <div className='adminStock'>
                <div className="container">
                    <div className="admin_stock_container">
                        <h1>Загрузка</h1>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className='adminStock'>
            <div className="container">
                <div className="admin_stock_container">
                    <select className='admin_stock_select' onChange={getUserInfo}>
                        <option hidden>Выбрать...</option>
                        {users.map(item => (
                            <option key={item.id} value={item.id}>{item.name}</option>
                        ))}
                    </select>
                    {title === 'worker' &&
                        <div className="stock_block">
                            <h1>{username}</h1>
                            <div className="stock_list">
                                <table>
                                    <thead>
                                    <tr>
                                        <th>Тип</th>
                                        <th>Продукт</th>
                                        <th>Информация</th>
                                        <th>Сделано</th>
                                        <th>Голография</th>
                                        <th>Дата добавления</th>
                                        <th>Действия</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {data.map(item => {
                                        return (
                                            <tr>
                                                <td data-label="Тип">{item.type}</td>
                                                <td data-label="Продукт">{item.process.product}</td>
                                                <td data-label="Информация">{item.info}</td>
                                                <td data-label="Сделано">{item.process.count}</td>
                                                <td>{item.process.is_holography == true ? <FcLike/> : ''}</td>
                                                <td data-label="Дата добавления">{item.process.date}</td>
                                                {item.process.remove ?
                                                    <td data-label="Действия">
                                                        Запись удалена
                                                    </td> : <td data-label="Действия"></td>}
                                            </tr>
                                        )
                                    })}
                                    </tbody>
                                </table>
                            </div>
                        </div>}
                    {title === 'admin' &&
                        <div className="stock_block">
                            <h1>{username}</h1>
                            <div className="stock_list">
                                <table>
                                    <thead>
                                    <tr>
                                        <th>Товар</th>
                                        <th>Тип</th>
                                        <th>Количество</th>
                                        <th>Адрес</th>
                                        <th>Дата</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {data.map(item => {
                                        return (
                                            <tr key={item.id}>
                                                <td data-label="Товар">{item.product}</td>
                                                <td data-label="Тип">{item.info}</td>
                                                <td data-label="Кол-во">{item.count}</td>
                                                <td data-label="Адрес">{item.address}</td>
                                                <td data-label="Дата">{item.date}</td>
                                            </tr>
                                        )
                                    })}
                                    </tbody>
                                </table>
                            </div>
                        </div>}
                </div>
            </div>
        </div>
    );
};

