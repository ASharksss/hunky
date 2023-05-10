import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {NavLink} from "react-router-dom";
import {requestHistory} from '../../actions/admin';

export const AdminStock = () => {
  const [stockVal, setStockVal] = useState(0)
  const dispatch = useDispatch()
  const stock = useSelector(state => state.admin.stock)
  const auth = useSelector(state => state.auth)
  const [data, setData] = useState(stock)
  useEffect(() => {
    dispatch(requestHistory())
  }, [])
  useEffect(() => {
    const array = stock
    array.sort(function (a, b) {
      if (a.product < b.product) {
        return -1;
      }
      if (a.product > b.product) {
        return 1;
      }
      return 0;
    })
    setData(array)
  }, [stock])
  return (
    <div className='adminStock'>
      <div className="container">
        <div className="admin_stock_container">
          <select onChange={e => setStockVal(e.target.value)} className='admin_stock_select'>
            <option value='0' defaultValue>Все</option>
            <option value='1'>Расходники</option>
            <option value='2'>Сформированные</option>
            <option value='5'>Очищенные</option>
            <option value='3'>Покрашенные</option>
            <option value='4'>Собранные</option>
          </select>
          {stockVal == '0' | stockVal == '1' ?
            <div className="stock_block">
              <div className="stock_title">
                <h1>Расходники</h1>

                {auth.isAuth & auth.role === 'Зритель' ?
                  <NavLink to='/admin/stock/shipped' className='link'>
                    <button className='stock_btn'>Отправленные</button>
                  </NavLink> : ''
                }


                {auth.isAuth & auth.role === 'Администратор' ?
                  <>
                    <NavLink to='/admin/stock/resume' className='link'>
                      <button className='stock_btn'>Пополнить</button>
                    </NavLink>
                    <NavLink to='/admin/stock/shipped' className='link'>
                      <button className='stock_btn'>Отправленные</button>
                    </NavLink>
                    <NavLink to='/admin/stock/accepted' className='link'>
                      <button className='stock_btn'>Принятые</button>
                    </NavLink>
                  </> : ''}
              </div>
              <div className="stock_list">
                <table>
                  <thead>
                  <tr>
                    <th>Продукт</th>
                    <th>Количество</th>
                  </tr>
                  </thead>
                  <tbody>
                  {data.map(item => {
                    if (item.type_id == 1) {
                      return (
                        <tr>
                          <td data-label="Продукт">{item.product}</td>
                          <td data-label="Количество">{item.count}</td>
                        </tr>
                      )
                    }
                  })}
                  </tbody>
                </table>
              </div>
            </div> : ''}

          {stockVal == '0' | stockVal == '2' ?
            <div className="stock_block">
              <h1>Сформированные</h1>
              <div className="stock_list">
                <table>
                  <thead>
                  <tr>
                    <th>Продукт</th>
                    <th>Тип</th>
                    <th>Количество</th>
                  </tr>
                  </thead>
                  <tbody>
                  {data.map(item => {
                    if (item.type_id == 2) {
                      return (
                        <tr>
                          <td data-label="Продукт">{item.product}</td>
                          <td data-label="Тип">{item.volume}</td>
                          <td data-label="Количество">{item.count}</td>
                        </tr>
                      )
                    }
                  })}
                  </tbody>
                </table>
              </div>
            </div> : ''}
          {stockVal == '0' | stockVal == '5' ?
            <div className="stock_block">
              <h1>Очищенные</h1>
              <div className="stock_list">
                <table>
                  <thead>
                  <tr>
                    <th>Продукт</th>
                    <th>Тип</th>
                    <th>Количество</th>
                  </tr>
                  </thead>
                  <tbody>
                  {data.map(item => {
                    if (item.type_id == 5) {
                      return (
                        <tr>
                          <td data-label="Продукт">{item.product}</td>
                          <td data-label="Тип">{item.volume}</td>
                          <td data-label="Количество">{item.count}</td>
                        </tr>
                      )
                    }
                  })}
                  </tbody>
                </table>
              </div>
            </div> : ''}
          {stockVal == '0' | stockVal == '3' ?
            <div className="stock_block">
              <h1>Покрашенные</h1>
              <div className="stock_list">
                <table>
                  <thead>
                  <tr>
                    <th>Продукт</th>
                    <th>Тип</th>
                    <th>Количество</th>
                  </tr>
                  </thead>
                  <tbody>
                  {data.map(item => {
                    if (item.type_id == 3) {
                      return (
                        <tr>
                          <td data-label="Продукт">{item.product}</td>
                          <td data-label="Тип">{item.volume}</td>
                          <td data-label="Количество">{item.count}</td>
                        </tr>
                      )
                    }
                  })}
                  </tbody>
                </table>
              </div>
            </div> : ''}
          {stockVal == '0' | stockVal == '4' ?
            <div className="stock_block">
              <h1>Собранные</h1>
              <div className="stock_list">
                <table>
                  <thead>
                  <tr>
                    <th>Продукт</th>
                    <th>Тип</th>
                    <th>Количество</th>
                  </tr>
                  </thead>
                  <tbody>
                  {data.map(item => {
                    if (item.type_id == 4) {
                      return (
                        <tr>
                          <td data-label="Продукт">{item.product}</td>
                          <td data-label="Тип">{item.volume}</td>
                          <td data-label="Количество">{item.count}</td>
                        </tr>
                      )
                    }
                  })}
                  </tbody>
                </table>
              </div>
            </div> : ''}
        </div>
      </div>
    </div>
  );
};

