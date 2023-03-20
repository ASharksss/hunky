import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {requestUserList} from "../../actions/user";

export const AdminUsers = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(requestUserList())
    }, [])
    const user = useSelector(state => state.user.data)
    return (
        <div className='admin_users'>
            <div className="container">
                <div className="users_container">
                    <h1 className='admin_user_title'>Пользователи</h1>
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
                            {user.map(item => {
                                return (
                                    <tr key={item.id}>
                                        <td data-label="Пользователь">{item.name}</td>
                                        <td data-label="Логин">{item.username}</td>
                                        <td data-label="Пароль">{item.job_title}</td>
                                        <td data-label="Деятельность">{item.role}</td>
                                        <td data-label="Кнопки">
                                            {item.role == 'Маляр' ?
                                                <>
                                                    <NavLink to={'/admin/user/detail/' + item.id}
                                                             state={{uId: item.id}}>
                                                        <button className='user_btn'>Подробнее</button>
                                                    </NavLink>
                                                    <NavLink to={'/user/salary/' + item.id}
                                                             state={{uId: item.id}}>
                                                        <button style={{marginTop: '5px'}} className='user_btn'>Оплата</button>
                                                    </NavLink>
                                                </>
                                                :
                                                <NavLink to={'/admin/user/detail/' + item.id} state={{uId: item.id}}>
                                                    <button className='user_btn'>Подробнее</button>
                                                </NavLink>
                                            }
                                        </td>
                                    </tr>
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