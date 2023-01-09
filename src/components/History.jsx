import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { requestDeleteProcess, requestHistory } from '../actions/user';

export const History = () => {
  const dispatch = useDispatch()
  const [date, setDate] = useState(1)
  const [sum, setSum] = useState(0)
  const [page, setPage] = useState(1)
  const { history } = useSelector(state => state.user)
  const [data, setData] = useState(history)
  const [search, setSearch] = useState('')
  useEffect(() => {
    dispatch(requestHistory(date, page))
  }, [])
  useEffect(() => {
    setData(history)
  }, [history])
  const filteredData = data.filter(item => item.process.product.toLowerCase().includes(search))
  const handleRemove = (id) => {
    const conf = window.confirm('Подтверждение на удаление')
    if (conf) {
      dispatch(requestDeleteProcess(id))
    }
  }
  function handleChangeDate(e) {
    setDate(e.target.value);
    setSearch('')
    dispatch(requestHistory(e.target.value, page))
  }
  useEffect(() => {
    let array = []
    history.map(item => {
      array.push(parseInt(item.process.count, 10))
    })
    setSum(array.reduce((partialSum, a) => partialSum + a, 0))
  }, [history])
  return (
    <div className='profile' style={{ marginBottom: '100px' }}>
      <div className="container">
        <div className="history__wrapper">
          <div className="history__filters">
            <input value={search} onChange={e => setSearch(e.target.value.toLowerCase())}
              type="text" placeholder='Поиск' className='history__search' />
            <select onChange={e => handleChangeDate(e)}
              className="history_select">
              <option value='1'>День</option>
              <option value='2'>Неделя</option>
              <option value='3'>Месяц</option>
              <option value='4'>Год</option>
            </select>
          </div>
          <h2 className='history_count'>Общее число: {sum}</h2>
          <div className="history__table">

            <table>
              <thead>
                <tr>
                  <th>Продукт</th>
                  <th>Тип</th>
                  <th>Сделано</th>
                  <th>Брак</th>
                  <th>Дата добавления</th>
                  <th>Кнопки</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map(item => {
                  return (
                    <tr key={item.process.id}>
                      <td data-label="Продукт">{item.process.product}</td>
                      <td data-label="Тип">{item.info}</td>
                      <td data-label="Сделано">{item.process.count}</td>
                      <td data-label="Брак">{item.process.defect}</td>
                      <td data-label="Дата добавления">{item.process.date}</td>
                      <td data-label="Кнопки">
                        <NavLink to={'/history/' + item.process.id}>
                          <button className='history__btn' >Изменить</button>
                        </NavLink>
                        <button onClick={() => handleRemove(item.process.id)}
                          className='history__btn'>Удалить</button>
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

