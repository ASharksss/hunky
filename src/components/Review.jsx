import React from 'react';
import {NavLink} from "react-router-dom";

export const Review = () => {
  return (
    <div className='review'>
      <div className="container">
        <div className="review_container">
          <div className="review__title">
            <h1>Форма обратной связи</h1>
            <h3>Оставьте свой отзыв или полежание</h3>
          </div>
          <textarea cols="60" rows="5" placeholder='Не более 255 символов :)'></textarea>

          <NavLink to='/profile' className="link review_link">
            <button className='review_submit'>Отправить</button>
          </NavLink>

        </div>
      </div>
    </div>
  );
};

