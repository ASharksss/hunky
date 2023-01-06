import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";
import { requestJobList } from '../actions/user';


export const Home = () => {
  const dispatch = useDispatch()
  const jobs = useSelector(state => state.user.jobs)
  console.log(jobs)

  useEffect(() => {
    dispatch(requestJobList())
  }, [])

  if (jobs) {
    return (
      <div className='home'>
        <div className="container">
          <div className="home__wrapper">
            <div className="btn_wrapper">
              <input type="text" placeholder='Поиск' className='home__search' />
              {jobs.map(item => {
                return (
                  <NavLink to={"/product/" + item.id} className='home__btn_link'>
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
  }
};
