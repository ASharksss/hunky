import React from 'react';;

export const Stock = () => {
  return (
    <div className='stock'>
      <div className="container">
        <div className="stock__wrapper">
          <div className="stock__filters">
            <input type="text" placeholder='Поиск' className='stock__search'/>
            <select className="stock_select">
              <option>Рыбки</option>
              <option>Расходники</option>
            </select>
          </div>
          <table>
            <thead>
            <tr>
              <th>Продукт</th>
              <th>Тип</th>
              <th>Количество</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td data-label="Продукт">Айма ратлин</td>
              <td data-label="Продукт">60мм 12гр</td>
              <td data-label="Количество">132</td>
            </tr>
            <tr>
              <td data-label="Продукт">Багет</td>
              <td data-label="Продукт"> 60м 17гр</td>
              <td data-label="Количество">2</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
