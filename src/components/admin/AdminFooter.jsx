import React from 'react';
import {useDispatch} from "react-redux";
import { redirect } from 'react-router-dom'
import {CiFaceSmile, CiAlignBottom, CiHome, CiBoxList, CiLogout} from "react-icons/ci";
import {NavLink} from "react-router-dom";
import {requestLogout} from "../../actions/auth";

export const AdminFooter = () => {
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(requestLogout())
    // const logout = dispatch(requestLogout())
    // if (!logout) {
    //   return redirect("/");
    // }
  };

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

