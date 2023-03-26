import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const JobCost = () => {
    const navigate = useNavigate()
    const [price, setPrice] = useState('')
    const [data, setData] = useState([])
    const [pId, setPId] = useState(0)
    const [jobCost, setJobCost] = useState([])
    const [type, setType] = useState('')
    const [types, setTypes] = useState([])
    const [oldCost, setOldCost] = useState([])
    useEffect(() => {
        axios.get('/admin/job/price')
            .then(res => {
                if (res.data.server_status == 1) {
                    setData(res.data.jobs)
                    setJobCost(res.data.prices)
                } else {
                    console.log(res)
                }
            })
            .catch(err => console.log(err))
    }, [])
    function handleSubmit(e) {
        e.preventDefault()
        const data = {
            p_id: pId,
            info: type,
            price: price
        }
        if (oldCost[0] !== undefined) {
            axios.put('/admin/job/price', data)
                .then(res => {
                    if (res.data.server_status == 1) {
                        alert('Цена изменена')
                        navigate(-1)
                    } else {
                        alert('Произошла ошибка обработки данных')
                        console.log(res)
                    }
                }).catch(err => {
                    alert('Произошла ошибка обработки данных')
                    console.log(err)
                })
        } else {
            axios.post('/admin/job/price', data)
                .then(res => {
                    if (res.data.server_status == 1) {
                        alert('Цена добавлена')
                        navigate(-1)
                    } else {
                        alert('Произошла ошибка обработки данных')
                        console.log(res)
                    }
                }).catch(err => {
                    alert('Произошла ошибка обработки данных')
                    console.log(err)
                })
        }
    }
    return (
        <div className='stockResume'>
            <div className="container">
                <div className="resume_container">
                    <form className='resume_form' onSubmit={e => handleSubmit(e)}>
                        <h2 className='resume_stock_title'>Изменения цены</h2>
                        {data.length == 0 ? 'load...' :
                            <>
                                <select required onChange={e => {
                                    setTypes([])
                                    setOldCost([])
                                    setPId(e.target.value)
                                    setTypes(data.find(x => x.pid == e.target.value).info)
                                }} className='resume_input' >
                                    <option defaultChecked hidden>Выберите товар</option>
                                    {data.map(item => {
                                        return (
                                            <option key={item.pid} value={item.pid}>{item.name}</option>
                                        )
                                    })}
                                </select>
                                {types.length > 0 ?
                                    <select required onChange={e => {
                                        setOldCost([])
                                        setType(e.target.value)
                                        setOldCost([data.find(x => x.pid == pId).cost
                                            .find(x => x.info == e.target.value) || undefined] || [])
                                    }} className='resume_input'>
                                        <option defaultChecked hidden>Выберите тип</option>
                                        {types.map(item => {
                                            return (
                                                <option key={item} value={item}>{item}</option>
                                            )
                                        })}
                                    </select> : ''}
                                {oldCost[0] !== undefined ?
                                    <p>Старая цена: {oldCost[0].price} ₽/шт.</p>
                                    : ''}
                                <input required type="number" placeholder='Введите цену' value={price}
                                    onChange={e => setPrice(e.target.value)} className='resume_input' />
                                <div className="link resume_stock_link">
                                    <button type='submit' className="resume_stock_submit">{oldCost[0] !== undefined ? 'Изменить': 'Добавить'}</button>
                                </div>
                            </>}
                    </form>
                    {jobCost.length == 0 ? "" :
                        <div className="stock_list">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Продукт</th>
                                        <th>Тип</th>
                                        <th>Цена</th>
                                        <th>Старая цена</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {jobCost.map(item => (
                                        <tr key={item.id}>
                                            <td data-label="Продукт">{item.product}</td>
                                            <td data-label="Тип">{item.info}</td>
                                            <td data-label="Цена">{item.price} ₽/шт.</td>
                                            <td data-label="Старая цена">{item.old_price} ₽/шт.</td>
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

