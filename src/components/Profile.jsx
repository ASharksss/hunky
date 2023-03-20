import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import user_avatar from './../user_avatar.png'
import {NavLink} from "react-router-dom";
import { requestProfile } from '../actions/user';

export const Profile = () => {
  const {profile, profile_defect, profile_cancel, profile_salary} = useSelector(state => state.user)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(requestProfile())
  }, [])
  return (
    <div className='profile'>
      <div className="container">
        <div className="profile__wrapper">
          <div className="profile__user_info">
            <img src={user_avatar} alt="avatar" className='profile__avatar'/>
            <p className='user_info'>{profile.name}</p>
            <p className='user_info'>{profile.job_title}</p>
          </div>
          <div className="result">
            <NavLink to='/profile/defect' className='link result__block'>
              <div>
                <h2 className="result_title">
                  Брак
                </h2>
                <h3 className='result_count'>{profile_defect}</h3>
              </div>
            </NavLink>

            <NavLink to='/profile/cancel' className='link result__block'>
              <div>
                <h2 className="result_title">
                  Отмены
                </h2>
                <h3 className='result_count'>{profile_cancel}</h3>
              </div>
            </NavLink>

            {/*<NavLink to='/profile/salary' className='link result__block'>*/}
            <NavLink to='#' className='link result__block'>
              <div>
                <h2 className="result_title">
                  Моя зарплата
                </h2>
                <h3 className='result_count'>{profile_salary.salary}</h3>
              </div>
            </NavLink>
          </div>
          <NavLink to='/profile/review' className='review_block'>
            <button className='review_button'>Оставить пожелание или отзыв</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

