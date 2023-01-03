import React from 'react';
import { CiBoxList } from 'react-icons/ci'
import {CiHome} from "react-icons/ci";
import {CiUndo} from "react-icons/ci";
import {CiFaceSmile} from "react-icons/ci";
import {NavLink} from "react-router-dom";

export const Footer = () => {
  return (
    <div className='footer'>
      <div className="container">
        <div className="footer_wrapper">
          <NavLink to='/' className='home__btn_link'>
            <button className='footer__button'>
              <CiHome className='footer_icon' size={35}/>
              <p>Главная</p>
            </button>
          </NavLink>

          <NavLink to='/stock' className='home__btn_link'>
            <button className='footer__button'>
              <CiBoxList className='footer_icon' size={35}/>
              <p>Склад</p>
            </button>
          </NavLink>

          <NavLink to='/history' className='home__btn_link'>
            <button className='footer__button' >
              <CiUndo className='footer_icon' size={35}/>
              <p>История</p>
            </button>
          </NavLink>

          <NavLink to='/profile' className='home__btn_link'>
            <button className='footer__button'>
              <CiFaceSmile className='footer_icon' size={35}/>
              <p>Профиль</p>
            </button>
          </NavLink>

        </div>
      </div>
    </div>
  );
};

