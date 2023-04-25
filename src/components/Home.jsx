import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";
import { requestJobList } from '../actions/user';
import axios from 'axios';


const array_test = [{ 'title': 'name', 'text': 'body', 'hash': '1727821f81nxjazdaso' }, { 'title': 'name1', 'text': 'body2', 'hash': '1768821f81nxjazdaso' }]


export const Home = () => {
  const dispatch = useDispatch()
  const jobs = useSelector(state => state.user.jobs)
  const notice = useSelector(state => state.user.notification)
  const [data, setData] = useState(jobs)
  const [search, setSearch] = useState('')
  const [array, setArray] = useState(notice)
  const [currentNotice, setCurrentNotice] = useState('')

  useEffect(() => {
    dispatch(requestJobList())
  }, [])
  useEffect(() => {
    setData(jobs)
  }, [jobs])
  useEffect(() => {
    if(notice.length > 0) {
      setCurrentNotice(notice[0]['hash'])
    }
  }, [notice])
  const filteredData = data.filter(item => item.name.toLowerCase().includes(search))

  const removeNotice = (hash) => {
    const notice = array.filter(x => x.hash !== hash)
    setArray(notice)
    if (notice.length > 0) {
      setCurrentNotice(notice[0]['hash'])
    }
    axios.post('/notice', {hash: hash})
  }

  const notification = () => {
    return (
      <div>
        {array.map(item => (
          item.hash === currentNotice ?
            <div key={item} className="notification">
              <button onClick={() => removeNotice(item.hash)} className="close-btn">&times;</button>
              <p>{item.title}</p>
              <p>{item.text}</p>
            </div> : ''
        ))}
      </div>
    )
  }

  return (
    <div className='home'>
      <div className="container">
        <div className="home__wrapper">
          {notification()}
          <div className="btn_wrapper">
            <input value={search} onChange={e => setSearch(e.target.value.toLowerCase())}
              type="text" placeholder='Поиск' className='home__search' />
            {filteredData.map(item => {
              return (
                <NavLink id={item.id} to={"/product/" + item.id} className='home__btn_link'>
                  <button className='home__btn'>
                    {item.name}
                  </button>
                </NavLink>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
