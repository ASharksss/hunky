import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const BusyaSendProducts = () => {
    const navigate = useNavigate()
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [types, setTypes] = useState([])
    const [info, setInfo] = useState('')
    const [isHolography, setIsHolography] = useState(false)
    const [infoDefault, setInfoDefault] = useState(0)
    const [product, setProduct] = useState('')
    const [count, setCount] = useState('')
    const getData = () => {
        axios.get('/stock/busya/accepted')
        .then(res => {
            if (res.data.server_status == 1) {
                setData(res.data.select)
                setLoading(false)
            } else {
                alert('Ошибка обработки данных')
                console.log(res)
                setLoading(false)
            }
        })
        .catch(err => console.log(err))
    }
    useEffect(() => {
        setLoading(true)
        getData()
    }, [])
    useEffect(() => {
        if(types.length < infoDefault) {
            setInfo(types[0])
            setInfoDefault(0)
        } else {
            setInfo(types[infoDefault])
        }
    }, [types])
    function handleSubmit(e) {
        setLoading(true)
        e.preventDefault()
        const data = {
            name: product,
            info: info,
            count: count,
            is_holography: isHolography
        }
        axios.post('/stock/busya/accepted', data)
        .then(res => {
            if (res.data.server_status == 1) {
                alert('Добавлено')
                setLoading(false)
                window.location.reload()
            } else {
                console.log(res)
                alert('Ошибка обработки данных...')
            }
        }).catch(err => {
            console.log(err)
            setLoading(false)
            alert('Ошибка обработки данных...')
        })
    }
    return (
        <div className='stockResume'>
            <div className="container">
                <div className="resume_container">
                    <form className='resume_form' onSubmit={e => handleSubmit(e)}>
                        <h2 className='resume_stock_title'>Отметить приход (Busya)</h2>
                        {loading ? 'load...' :
                            <>
                                <select required onChange={e => {
                                    setProduct(e.target.value)
                                    setTypes(data.find(x => x.name == e.target.value).info)
                                    setInfo('')
                                }} className='resume_input' >
                                    <option defaultChecked hidden>Выберите товар</option>
                                    {data.map((item, index) => (
                                        <option key={index} value={item.name}>{item.name}</option>
                                    ))}
                                </select>
                                {types.length > 0 ?
                                    <select required onChange={e => {
                                        setInfoDefault(e.target.options.selectedIndex - 1)
                                        setInfo(e.target.value)
                                    }} className='resume_input' >
                                        <option defaultChecked={types[0]} disabled>Выберите товар</option>
                                        {types.map((item, index) => (
                                            <option key={index} value={item}>{item}</option>
                                        ))}
                                </select>: ''}                          
                                <input required type="number" placeholder='Введите количество' value={count}
                                    onChange={e => setCount(e.target.value)} className='resume_input' />
                                <label>
                                    Голография
                                    <input type="checkbox" onChange={() => setIsHolography(!isHolography)} value={isHolography} />
                                </label>
                                <div className="link resume_stock_link">
                                    <button type='submit' className="resume_stock_submit">Отправить</button>
                                </div>
                            </>}
                    </form>
                </div>
            </div>
        </div>
    );
};

