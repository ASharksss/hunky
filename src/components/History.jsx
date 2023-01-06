import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestHistory } from '../actions/user';

export const History = () => {
  const dispatch = useDispatch()
  const history = useSelector(state => state.user.history)
  useEffect(() => {
    dispatch(requestHistory())
  }, [])
  return (
    <div className='profile' style={{marginBottom:'100px'}}>
      <div className="container">
        <div className="history__wrapper">
          <div className="history__filters">
            <input type="text" placeholder='Поиск' className='history__search' />
            <select className="history_select">
              <option>День</option>
              <option>Неделя</option>
              <option>Месяц</option>
              <option>Год</option>
            </select>
          </div>
          <h2 className='history_count'>Общее число: мильен</h2>
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
                {history.map(item => {
                  return (
                    <tr>
                      <td data-label="Продукт">{item.process.product}</td>
                      <td data-label="Тип">{item.info}</td>
                      <td data-label="Сделано">{item.process.count}</td>
                      <td data-label="Брак">{item.process.defect}</td>
                      <td data-label="Дата добавления">{item.process.date}</td>
                      <td data-label="Кнопки">
                        <button className='history__btn'>Изменить</button>
                        <button className='history__btn'>Удалить</button>
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

