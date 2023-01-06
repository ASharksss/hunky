import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestStockList, requestStockSearch } from '../actions/stock';

export const Stock = () => {
  const dispatch = useDispatch()
  const stock = useSelector(state => state.stock.data)
  const [value, setValue] = useState(1)
  const [search, setSearch] = useState('')

  useEffect(() => {
    dispatch(requestStockList())
  }, [])

  function handleSearch(val, name) {
    dispatch(requestStockSearch(val, name))
  }

  return (
    <div className='stock' style={{marginBottom: '100px'}}>
      <div className="container">
        <div className="stock__wrapper">
          <div className="stock__filters">
            <input onChange={e => {setSearch(e.target.value); handleSearch(value, e.target.value)}}
              type="text" placeholder='Поиск' className='stock__search' />
            <select onChange={e => {setValue(e.target.value)
              handleSearch(e.target.value, search)}} className="stock_select">
              <option value='1'>Расходники</option>
              <option value='2'>Рыбки</option>
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
              {stock.map(item => {
                return (
                  <tr>
                    <td data-label="Продукт">{item.product}</td>
                    <td data-label="Продукт">{!item.volume ? '-' : item.volume}</td>
                    <td data-label="Количество">{item.count}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
