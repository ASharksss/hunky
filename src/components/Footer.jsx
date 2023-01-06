import React from 'react';
import {useDispatch} from "react-redux";
import {CiHome, CiLogout, CiUndo, CiFaceSmile, CiBoxList} from "react-icons/ci";
import {NavLink} from "react-router-dom";
import {requestLogout} from "../actions/auth";

export const Footer = () => {
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(requestLogout())
  };
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
          <NavLink to={'/logout'} className='home__btn_link' onClick={() => handleLogout()}>
            <button className='footer__button'>
              <CiLogout className='footer_icon' size={35}/>
              <p>Выход</p>
            </button>
          </NavLink>

        </div>
      </div>
    </div>
  );
};

