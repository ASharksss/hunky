import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { CiFaceSmile, CiAlignBottom, CiHome, CiBoxList, CiLogout } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import { requestLogout } from "../../actions/auth";

export const AdminFooter = () => {
  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth)

  const handleLogout = () => {
    dispatch(requestLogout())
  };

  return (
    <div className='footer'>
      <div className="container">
        <div className="footer_wrapper">
          <NavLink to='/' className='home__btn_link'>
            <button className='footer__button'>
              <CiHome className='footer_icon' size={35} />
              <p>Склад</p>
            </button>
          </NavLink>
          <NavLink to='/admin/users' className='home__btn_link'>
            <button className='footer__button'>
              <CiFaceSmile className='footer_icon' size={35} />
              <p>Пользователи</p>
            </button>
          </NavLink>
          {auth.isAuth & auth.role === 'Администратор' ?
            <>
              <NavLink to='/admin/products' className='home__btn_link'>
                <button className='footer__button'>
                  <CiBoxList className='footer_icon' size={35} />
                  <p>Товары</p>
                </button>
              </NavLink>
              <NavLink to='/admin/analytics' className='home__btn_link'>
                <button className='footer__button'>
                  <CiAlignBottom className='footer_icon' size={35} />
                  <p>Аналитика</p>
                </button>
              </NavLink>
            </> : ''}
          <NavLink to={'/logout'} className='home__btn_link' onClick={() => handleLogout()}>
            <button className='footer__button'>
              <CiLogout className='footer_icon' size={35} />
              <p>Выход</p>
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

