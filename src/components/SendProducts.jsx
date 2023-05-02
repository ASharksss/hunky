import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const SendProducts = () => {
    const navigate = useNavigate()
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [pCount, setPCount] = useState(undefined)
    const [pId, setPId] = useState(0)
    const [count, setCount] = useState('')
    const [address, setAddress] = useState('')
    useEffect(() => {
        setLoading(true)
        axios.get('/user/send/products')
            .then(res => {
                if (res.data.server_status == 1) {
                    setData(res.data.stock)
                    setLoading(false)
                } else {
                    alert('Ошибка обработки данных')
                    console.log(res)
                }
            })
            .catch(err => console.log(err))
    }, [])
    function handleSubmit(e) {
        e.preventDefault()
        const data = {
            p_name: pId.split(',')[0],
            info: pId.split(',')[1],
            count: count,
            address: address
        }
        axios.post('/user/send/products', data)
            .then(res => {
                if (res.data.server_status == 1) {
                    alert(res.data.message)
                    navigate(-1)
                } else {
                    if (res.data.message)
                        alert(res.data.message)
                    else
                        alert('Ошибка обработки данных')
                    console.log(res)
                }
            })
            .catch(err => console.log(err))
    }
    return (
        <div className='stockResume'>
            <div className="container">
                <div className="resume_container">
                    <form className='resume_form' onSubmit={e => handleSubmit(e)}>
                        <h2 className='resume_stock_title'>Отправка заказа</h2>
                        {loading ? 'load...' :
                            <>
                                <select required onChange={e => {
                                    setPId(e.target.value)
                                    setPCount(data.find(x => x.product == e.target.value.split(',')[0] && x.volume == e.target.value.split(',')[1]))
                                }} className='resume_input' >
                                    <option defaultChecked hidden>Выберите товар</option>
                                    {data.map(item => {
                                        return (
                                            <option key={item.product + item.volume}
                                                value={item.product + ',' + item.volume}>
                                                {item.product} - {item.volume}</option>
                                        )
                                    })}
                                </select>
                                {pCount !== undefined ?
                                    <p>На складе: {pCount.count} шт.</p>
                                    : ''}
                                <input required type="number" placeholder='Введите количество' value={count}
                                    onChange={e => setCount(e.target.value)} className='resume_input' />
                                <input required type="text" placeholder='Введите адрес' value={address}
                                    onChange={e => setAddress(e.target.value)} className='resume_input' />
                                <div className="link resume_stock_link">
                                    <button type='submit' className="resume_stock_submit">Отправить</button>
                                </div>
                            </>}
                    </form>
                    {loading ? "" :
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
                                        <tr key={item.id}>
                                            <td data-label="Продукт">{item.product}</td>
                                            <td data-label="Тип">{item.volume}</td>
                                            <td data-label="Кол-во">{item.count} шт.</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>}
                </div>
            </div>
        </div>
    );
};

