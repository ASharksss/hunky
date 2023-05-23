import React, {useEffect, useState} from 'react';
import {NavLink, useLocation} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { FcLike } from 'react-icons/fc'
import {requestUserInfo, requestDeleteProcess} from '../../actions/admin';

const id = window.location.pathname.split('/')[4]

export const UsersDetail = () => {
  const dispatch = useDispatch()
  const [f_date, setFirstDate] = useState('')
  const [s_date, setSecDate] = useState('')
  const [count, setCount] = useState(0)
  const [defect, setDefect] = useState(0)
  const [cancel, setCancel] = useState(0)
  const [myType, setType] = useState('0')
  const {user, user_name} = useSelector(state => state.admin)
  const [data, setData] = useState(user)
  const [search, setSearch] = useState('')
  const location = useLocation()
  const {state} = location

  useEffect(() => {
    dispatch(requestUserInfo(state.uId, f_date, s_date))
    setType('0')
  }, [])
  useEffect(() => {
    let arrayCount = [],
      arrayDefect = [],
      arrayCancel = []
    user.map(item => {
      arrayCount.push(parseInt(item.process.count, 10))
      arrayDefect.push(parseInt(item.process.defect, 10))
      if (item.process.status_id == 2)
        arrayCancel.push(parseInt(item.process.count, 10))
    })
    setCount(arrayCount.reduce((partialSum, a) => partialSum + a, 0))
    setDefect(arrayDefect.reduce((partialSum, a) => partialSum + a, 0))
    setCancel(arrayCancel.reduce((partialSum, a) => partialSum + a, 0))

  }, [user])
  useEffect(() => {
    dispatch(requestUserInfo(state.uId, f_date, s_date))
    setType('0')
  }, [f_date, s_date])
  useEffect(() => {
    setData(user)
  }, [user])
  const filteredData = data.filter(item => {
    return item.process.product.toLowerCase().includes(search)
  })
  const handleRemove = (id) => {
    const u_id = window.location.pathname.split('/')[4]
    const conf = window.confirm('Подтверждение на удаление')
    if (conf) {
      dispatch(requestDeleteProcess(id, u_id))
    }
  }
  return (
    <div className='user_detail'>
      <div className="container">
        <div className="user_detail_container">
          <h1>{user_name}</h1>
          <div className="user_filters">
            <input value={search} onChange={e => setSearch(e.target.value.toLowerCase())}
                   type="text" placeholder='Поиск'/>
            <input value={f_date} onChange={e => setFirstDate(e.target.value)} type="date"/>
            <input value={s_date} onChange={e => setSecDate(e.target.value)} type="date"/>
            <select onChange={e => setType(e.target.value)}>
              <option value='0' defaultValue='0'>Все</option>
              <option value='1'>Сделано</option>
              <option value='2'>Брак</option>
              <option value='3date.toISOString()'>Отмена</option>
            </select>
          </div>
          {myType == '1' | myType == '0' ?
            <div className="user_detail_block">
              <h2>Сделано количество: {count}</h2>
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
                {filteredData.map(item => {
                  return (
                    <tr>
                      <td data-label="Тип">{item.type}</td>
                      <td data-label="Продукт">{item.process.product}</td>
                      <td data-label="Информация">{item.info}</td>
                      <td data-label="Сделано">{item.process.count}</td>
                      <td>{item.process.is_holography == true ? <FcLike /> : ''}</td>
                      <td data-label="Дата добавления">{item.process.date}</td>
                      {item.process.remove ?
                        <td data-label="Кнопки">
                          Запись удалена
                        </td> :
                        <td data-label="Кнопки">
                          <NavLink to={'/history/' + item.process.id}>
                            <button className='history__btn'>Изменить</button>
                          </NavLink>
                          <button onClick={() => handleRemove(item.process.id)}
                                  className='history__btn'>Удалить
                          </button>
                        </td>
                      }
                    </tr>
                  )
                })}
                </tbody>
              </table>
            </div> : ''}
          {myType == '2' | myType == '0' ?
            <div className="user_detail_block">
              <h2> Брак количество: {defect}</h2>
              <table>
                <thead>
                <tr>
                  <th>Продукт</th>
                  <th>Тип</th>
                  <th>Брак</th>
                  <th>Дата добавления</th>
                  <th>Действия</th>
                </tr>
                </thead>
                <tbody>
                {filteredData.map(item => {
                  if (item.process.defect || item.process.status_id == 3) {
                    return (
                      <tr>
                        <td data-label="Продукт">{item.process.product}</td>
                        <td data-label="Тип">{item.info}</td>
                        <td data-label="Брак">{item.process.defect}</td>
                        <td data-label="Дата добавления">{item.process.date}</td>
                        <td data-label="Кнопки">
                          <NavLink to={'/history/' + item.process.id}>
                            <button className='history__btn'>Изменить</button>
                          </NavLink>
                          <button onClick={() => handleRemove(item.process.id)}
                                  className='history__btn'>Удалить
                          </button>
                        </td>
                      </tr>
                    )
                  }
                })}
                </tbody>
              </table>
            </div> : ''}
          {myType == 3 | myType == '0' ?
            <div className="user_detail_block">
              <h2>Отмена количество: {cancel}</h2>
              <table>
                <thead>
                <tr>
                  <th>Продукт</th>
                  <th>Тип</th>
                  <th>Отмена</th>
                  <th>Дата добавления</th>
                  <th>Действия</th>
                </tr>
                </thead>
                <tbody>
                {filteredData.map(item => {
                  if (item.process.status_id == 4) {
                    return (
                      <tr>
                        <td data-label="Продукт">{item.process.product}</td>
                        <td data-label="Тип">{item.info}</td>
                        <td data-label="Отменено">{item.process.count}</td>
                        <td data-label="Дата добавления">{item.process.date}</td>
                        <td data-label="Кнопки">
                          <NavLink to={'/history/' + item.process.id}>
                            <button className='history__btn'>Изменить</button>
                          </NavLink>
                          <button onClick={() => handleRemove(item.process.id)}
                                  className='history__btn'>Удалить
                          </button>
                        </td>
                      </tr>
                    )
                  }
                })}
                </tbody>
              </table>
            </div> : ''}
        </div>
      </div>
    </div>
  );
};
