import React from 'react';

export const History = () => {
  return (
    <div className='profile'>
      <div className="container">
        <div className="history__wrapper">
          <div className="history__filters">
            <input type="text" placeholder='Поиск' className='history__search'/>
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
                <th>Количество</th>
                <th>Дата добавления</th>
                <th>Кнопки</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td data-label="Продукт">Айма ратлин 60мм 12гр</td>
                <td data-label="Количество">2</td>
                <td data-label="Дата добавления">28/12/22</td>
                <td data-label="Кнопки">
                  <button className='history__btn'>Брак</button>
                  <button className='history__btn'>Удалить</button>
                </td>
              </tr>
              <tr>
                <td data-label="Продукт">Айма ратлин 60мм 12гр</td>
                <td data-label="Количество">2</td>
                <td data-label="Дата добавления">29/12/22</td>
                <td data-label="Кнопки">
                  <button className='history__btn'>Брак</button>
                  <button className='history__btn'>Удалить</button>
                </td>
              </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>

    </div>
  );
};

