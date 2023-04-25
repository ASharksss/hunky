import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const Notification = () => {
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState([])
    const [ulist, setUList] = useState([])

    useEffect(() => {
        setLoading(true)
        axios.get('/admin/notice')
            .then(res => {
                if (res.data.server_status == 1) {
                    setUsers(res.data.users)
                    setLoading(false)
                }
            })
    }, [])

    const handleSubmit = () => {
        const data = {
            title: title,
            text: text,
            users: ulist
        }
        axios.post('/admin/notice', data)
            .then(res => {
                if (res.data.server_status == 1) {
                    alert(res.data.message)
                }
            })
    }

    const collectUser = (id) => {
        const check = ulist.includes(id)
        if (!check) {
            setUList(ulist.concat(id))
        } else {
            setUList(ulist.filter(x => x !== id))
        }
    }

    return (
        <div className='review'>
            <div className="container">
                <div className="review_container">
                    <div className="review__title">
                        <h1>Создание уведомления</h1>
                    </div>
                    {!loading ?
                        <form onSubmit={e => {
                            e.preventDefault()
                            handleSubmit()
                        }}>
                            <input type="text" value={title} onChange={e => setTitle(e.target.value)}
                                placeholder='Название' className='add_user_input' />
                            <textarea className='review_text'
                                value={text} onChange={e => setText(e.target.value)}
                                placeholder='Не более 255 символов :)'></textarea>
                            <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'justify' }}>
                                {users.length > 0 ? users.map(item =>
                                    <label key={item.id}>
                                        <input onChange={() => collectUser(item.id)} type="checkbox" value={item.id} /> {item.name}
                                    </label>
                                ) : ''}
                            </div>
                            <button type='submit' className='review_submit'>Отправить</button>
                        </form> : <p>Загрузка...</p>}
                </div>
            </div>
        </div>
    )

}