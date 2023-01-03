import React from 'react';
import user_avatar from './../user_avatar.png'
import {NavLink} from "react-router-dom";

export const Profile = () => {
  return (
    <div className='profile'>
      <div className="container">
        <div className="profile__wrapper">
          <div className="profile__user_info">
            <img src={user_avatar} alt="avatar" className='profile__avatar'/>
            <p className='user_info'>Alsu Kurbanalieva</p>
            <p className='user_info'>Web-developer</p>
          </div>
          <div className="result">
            <NavLink to='/profile/defect' className='link result__block'>
              <div>
                <h2 className="result_title">
                  Брак
                </h2>
                <h3 className='result_count'>0</h3>
              </div>
            </NavLink>

            <NavLink to='/profile/cancel' className='link result__block'>
              <div>
                <h2 className="result_title">
                  Отмены
                </h2>
                <h3 className='result_count'>0</h3>
              </div>
            </NavLink>

            <NavLink to='/profile/salary' className='link result__block'>
              <div>
                <h2 className="result_title">
                  Моя зарплата
                </h2>
                <h3 className='result_count'>скоро</h3>
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

