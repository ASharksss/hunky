import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestStockList, requestStockSearch } from '../actions/stock';

export const Stock = () => {
  const dispatch = useDispatch()
  const stock = useSelector(state => state.stock.data)
  const [data, setData] = useState(stock)
  const [search, setSearch] = useState('')

  useEffect(() => {
    dispatch(requestStockList())
  }, [])

  useEffect(() => {
  	const array = stock
  	array.sort(function(a, b){
	    if(a.product < b.product) { return -1; }
	    if(a.product > b.product) { return 1; }
	    return 0;
	})
    setData(array)
  }, [stock])

  function handleSearch(val) {
    dispatch(requestStockSearch(val))
    setSearch('')
  }

  const filteredData = data.filter(item => {
    return item.product.toLowerCase().includes(search)
  })

  return (
    <div className='stock' style={{marginBottom: '100px'}}>
      <div className="container">
        <div className="stock__wrapper">
          <div className="stock__filters">
            <input value={search} onChange={e => setSearch(e.target.value.toLowerCase())}
              type="text" placeholder='Поиск' className='stock__search' />
            <select onChange={e => handleSearch(e.target.value)} className="stock_select">
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
                <th>Склад</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map(item => {
                return (
                  <tr>
                    <td data-label="Продукт">{item.product}</td>
                    <td data-label="Продукт">{!item.volume ? '-' : item.volume}</td>
                    <td data-label="Количество">{item.count}</td>
                    <td data-label='Склад'>{item.type}</td>
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
