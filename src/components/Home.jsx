import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";
import { requestJobList } from '../actions/user';


export const Home = () => {
  const dispatch = useDispatch()
  const jobs = useSelector(state => state.user.jobs)
  const [search, setSearch] = useState('')

  useEffect(() => {
    dispatch(requestJobList())
  }, [])

  let filteredJobs = jobs.filter(item => item.name.toLowerCase().includes(search))

  useEffect(() => {
    filteredJobs = jobs
  }, [jobs])

  return (
    <div className='home'>
      <div className="container">
        <div className="home__wrapper">
          <div className="btn_wrapper">
            <input value={search} onChange={e => setSearch(e.target.value.toLowerCase())}
              type="text" placeholder='Поиск' className='home__search' />
            {filteredJobs.map(item => {
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
