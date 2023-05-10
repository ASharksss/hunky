import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import axios from "axios";

export const AdminStockAccepted = () => {
    const [stockVal, setStockVal] = useState(0)
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
    return (
        <div className='adminStock'>
            <div className="container">
                <div className="admin_stock_container">
                    <div className="stock_block">
                        <div className="stock_title">
                            <h1>Расходники</h1>
                            <NavLink to='/admin/stock/accepted/resume' className='link'>
                                <button className='stock_btn'>Добавить</button>
                            </NavLink>
                        </div>
                        <div className="stock_list">
                            <table>
                                <thead>
                                <tr>
                                    <th>Продукт</th>
                                    <th>Тип</th>
                                    <th>Количество</th>
                                </tr>
                                </thead>
                                <tbody>
                                {data.map(item => (
                                    <tr>
                                        <td data-label="Продукт">{item.product}</td>
                                        <td data-label="Тип">{item.volume}</td>
                                        <td data-label="Количество">{item.count}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

