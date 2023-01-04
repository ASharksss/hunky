import React from 'react';
import { CiBoxList } from 'react-icons/ci'
import {CiHome} from "react-icons/ci";
import {CiUndo} from "react-icons/ci";
import {CiFaceSmile} from "react-icons/ci";
import {CiAlignBottom} from "react-icons/ci";
import {NavLink} from "react-router-dom";

export const AdminFooter = () => {
  return (
    <div className='footer'>
      <div className="container">
        <div className="footer_wrapper">
          <NavLink to='/admin/stock' className='home__btn_link'>
            <button className='footer__button'>
              <CiHome className='footer_icon' size={35}/>
              <p>Склад</p>
            </button>
          </NavLink>
          <NavLink to='/admin/users' className='home__btn_link'>
            <button className='footer__button'>
              <CiFaceSmile className='footer_icon' size={35}/>
              <p>Пользователи</p>
            </button>
          </NavLink>
          <NavLink to='/admin/products' className='home__btn_link'>
            <button className='footer__button'>
              <CiBoxList className='footer_icon' size={35}/>
              <p>Товары</p>
            </button>
          </NavLink>
          <NavLink to='/admin/analitic' className='home__btn_link'>
            <button className='footer__button'>
              <CiAlignBottom className='footer_icon' size={35}/>
              <p>Аналитика</p>
            </button>
          </NavLink>

        </div>
      </div>
    </div>
  );
};

