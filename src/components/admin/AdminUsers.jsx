import React, { useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { requestUserList } from "../../actions/user";

export const AdminUsers = () => {
    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)
    const current_user = useSelector(state => state.auth.user)
    useEffect(() => {
        dispatch(requestUserList())
    }, [])
    const user = useSelector(state => state.user.data)
    const changeClass = (event) => {
      event.currentTarget.className += ' active'
    }
    return (
        <div className='admin_users'>
            <div className="container">
                <div className="users_container">
                    <h1 className='admin_user_title'>Пользователи</h1>
                    {auth.isAuth & auth.role === 'Администратор' ?
                        <>
                            <NavLink to='add' className='users_resume'>
                                <button className='add_user'>
                                    Добавить пользователя
                                </button>
                            </NavLink>
                            <NavLink to='review' className='users_resume'>
                                <button className='add_user'>
                                    Отзывы и предложения
                                </button>
                            </NavLink>
                            <button className='add_user' onClick={changeClass}>
                                Тест
                            </button>
                            {current_user.name === 'Алсу' ?
                                <NavLink to='/admin/notification' className='users_resume'>
                                    <button className='add_user'>
                                        Создать уведомление
                                    </button>
                                </NavLink> : ''}
                        </> : ''}
                    <div className="history__table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Пользователь</th>
                                    <th>Логин</th>
                                    <th>Должность</th>
                                    <th>Права</th>
                                    <th>Кнопки</th>
                                </tr>
                            </thead>
                            <tbody>
                            {auth.role === 'Администратор' &&
                            <tr>
                                <td data-label="Пользователь" colspan="4" style={{textAlign: 'center'}}>Все пользователи</td>
                                <td data-label="Кнопки">
                                    <NavLink to={'/admin/users/details'}>
                                        <button className='user_btn'>Подробнее</button>
                                    </NavLink>
                                </td>
                            </tr>}
                                {user.map(item => {
                                    return (
                                        item.role !== 'Администратор' && item.role !== 'Зритель' ?
                                            <tr key={item.id}>
                                                <td data-label="Пользователь">{item.name}</td>
                                                <td data-label="Логин">{item.username}</td>
                                                <td data-label="Должность">{item.job_title}</td>
                                                <td data-label="Деятельность">{item.role}</td>
                                                <td data-label="Кнопки">
                                                    <NavLink to={'/admin/user/detail/' + item.id}
                                                        state={{ uId: item.id }}>
                                                        <button className='user_btn'>Подробнее</button>
                                                    </NavLink>
                                                    <NavLink to={'/user/salary/' + item.id}
                                                        state={{ uId: item.id, fio: item.name }}>
                                                        <button style={{ marginTop: '5px' }} className='user_btn'>Оплата</button>
                                                    </NavLink>
                                                </td>
                                            </tr> : ''
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    );
};