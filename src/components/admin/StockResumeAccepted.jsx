import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {FcLike} from "react-icons/fc";
import axios from "axios";

export const StockResumeAccepted = () => {
    const navigate = useNavigate()
    const [count, setCount] = useState(0)
    const [loading, setLoading] = useState(true)
    const [pId, setPId] = useState('')
    const [isHolography, setIsHolography] = useState(false)
    const [products, setProducts] = useState([])
    const getList = () => {
        setLoading(true)
        axios.get('/stock/add/accepted')
            .then(res => {
                if (res.data.server_status == 1) {
                    setProducts(res.data.list)
                    setLoading(false)
                }
            }).catch(err => {
            setLoading(false)
        })
    }
    useEffect(() => {
        getList()
    }, [])
    const handleSubmit = (event) => {
        event.preventDefault()
        if (count === 0 || pId === '') {
            alert('Не все поля заполнены!')
        } else {
            const data = {
                product: pId.split(',')[0],
                info: pId.split(',')[1],
                count: count,
                holography: isHolography
            }
            axios.post('/stock/add/accepted', data)
                .then(res => {
                    if (res.data.server_status == 1) {
                        alert('Добавлено')
                        navigate(-1)
                    } else {
                        alert(res.data.message)
                    }
                }).catch(err => {
                    console.log(err)
                    alert('Ошибка обработки данных')
            })
        }
    }
    if (loading) {
        return <h2>Loading ...</h2>
    }
    return (
        <div className='stockResume'>
            <div className="container">
                <div className="resume_container">
                    <form className='resume_form' onSubmit={handleSubmit}>
                        <h2 className='resume_stock_title'>Добавить принятые</h2>
                        <select onChange={e => setPId(e.target.value)} className='resume_input' required>
                            <option hidden>Выберите тип</option>
                            {products.map(item => (
                                <option key={item.id}
                                        value={item.product + ',' + item.volume}>{item.product} - {item.volume}, кол-во: {item.count} {item.is_holography === true && "★"}</option>
                            ))}
                        </select>
                        <input type="number" placeholder='Введите количество'
                               onChange={e => setCount(e.target.value)} className='resume_input' required/>
                        <div style={{display: 'flex'}}>
                            <input type="checkbox" onChange={() => setIsHolography(prev => !prev)} id="holography"
                                   name="holography" checked={isHolography}/>
                            <label htmlFor="holography">Голографический</label>
                        </div>
                        <div className="link resume_stock_link">
                            <button type='submit' className="resume_stock_submit">Добавить</button>
                        </div>
                        <div>
                            <span>Голографические помечены звездочкой "★"</span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

