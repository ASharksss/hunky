import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FcLike } from 'react-icons/fc'
import axios from 'axios';

export const JobCost = () => {
    const navigate = useNavigate()
    const [price, setPrice] = useState('')
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    const [pId, setPId] = useState(0)
    const [jobCost, setJobCost] = useState([])
    const [type, setType] = useState('')
    const [isHolography, setIsHolography] = useState(false)
    const [stype, setSType] = useState('')
    const [types, setTypes] = useState([])
    const [oldCost, setOldCost] = useState([])
    
    useEffect(() => {
        setLoading(true)
        axios.get('/admin/job/price')
            .then(res => {
                if (res.data.server_status == 1) {
                    setData(res.data.jobs)
                    setJobCost(res.data.prices)
                    setLoading(false)
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
            price: price,
            isHolography: isHolography,
            type: stype
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
    useEffect(() => {
        if (type) {
            setOldCost([data.find(x => x.pid == pId).cost
                .find(x => x.info == type && x.type == stype && x.isHolography == isHolography) || undefined] || [])
        }
    }, [isHolography])

    if (loading) {
        return <p>Загрузка...</p>
    }

    const jobs = data.filter((value, index, self) => index === self.findIndex((v) => v.name === value.name))
    return (
        <div className='stockResume'>
            <div className="container">
                <div className="resume_container">
                    <form className='resume_form' onSubmit={e => handleSubmit(e)}>
                        <h2 className='resume_stock_title'>Изменения цены</h2>
                        {jobs.length == 0 ? 'load...' :
                            <>
                                <select defaultValue={pId} required onChange={e => {
                                    setTypes([])
                                    setOldCost([])
                                    setType('')
                                    setPId(e.target.value)
                                    setTypes(jobs.find(x => x.pid == e.target.value).info)
                                }} className='resume_input' >
                                    <option defaultChecked hidden>Выберите товар</option>
                                    {jobs.map(item => {
                                        return (
                                            <option key={item.pid} value={item.pid}>{item.name}</option>
                                        )
                                    })}
                                </select>
                                {types.length > 0 ?
                                    <select defaultValue={stype} required onChange={e => {
                                        setSType(e.target.value)
                                        setOldCost([])
                                        setType('')
                                    }} className='resume_input'>
                                        <option defaultChecked hidden>Выберите работу</option>
                                        <option value='Формовка'>Формовка</option>
                                        <option value='Покраска'>Покраска</option>
                                        <option value='Сборка'>Сборка</option>
                                        <option value='Очистка'>Очистка</option>
                                    </select> : ''}

                                {types.length > 0 && stype === 'Покраска'?
                                    <label>
                                        <input type="checkbox" onChange={() => setIsHolography(!isHolography)} /> Голографическая
                                    </label>
                                    : ''}
                                {stype ?
                                    <select required onChange={e => {
                                        setOldCost([])
                                        setType(e.target.value)
                                        setOldCost([data.find(x => x.pid == pId).cost
                                            .find(x => x.info == e.target.value && x.type == stype && x.isHolography == isHolography) || undefined] || [])
                                    }} className='resume_input'>
                                        <option defaultChecked hidden>Выберите тип</option>
                                        {types.map(item => {
                                            return (
                                                <option key={item} value={item}>{item}</option>
                                            )
                                        })}
                                    </select> : ''}
                                {oldCost[0] !== undefined ?
                                    <p>Текущая цена: {oldCost[0].price} ₽/шт.</p>
                                    : ''}
                                <input required type="number" placeholder='Введите цену' value={price}
                                    onChange={e => setPrice(e.target.value)} className='resume_input' />
                                <div className="link resume_stock_link">
                                    <button type='submit' className="resume_stock_submit">{oldCost[0] !== undefined ? 'Изменить' : 'Добавить'}</button>
                                </div>
                            </>}
                    </form>
                    {jobCost.length == 0 ? "" :
                        <div className="stock_list">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Работа</th>
                                        <th>Продукт</th>
                                        <th>Тип</th>
                                        <th>Голография</th>
                                        <th>Цена</th>
                                        <th>Старая цена</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {jobCost.map(item => (
                                        <tr key={item.id}>
                                            <td data-label="Работа">{item.type}</td>
                                            <td data-label="Продукт">{item.product}</td>
                                            <td data-label="Тип">{item.info}</td>
                                            <td data-label="Голография" style={{ textAlign: 'center' }}>{item.isHolography == true ? <FcLike /> : ''}</td>
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

