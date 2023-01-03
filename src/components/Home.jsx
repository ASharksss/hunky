import React from 'react';
import {NavLink} from "react-router-dom";


export const Home = () => {
  return (
    <div className='home'>
      <div className="container">
        <div className="home__wrapper">
          <div className="btn_wrapper">
            <input type="text" placeholder='Поиск' className='home__search'/>
            <NavLink to="/product/id" className='home__btn_link'>
              <button className='home__btn'>
                Айма ратлин
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
