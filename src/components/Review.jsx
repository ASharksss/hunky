import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { requestFeedbackSend } from '../actions/user';

export const Review = () => {
  const dispatch = useDispatch()
  const [text, setText] = useState('')
  function hanldeSubmit() {
    const data = {
      'text': text
    }
    if (text) {
      dispatch(requestFeedbackSend(data))
      setText('')
    } else {
      alert('Поле пустое :(')
    }
  }
  return (
    <div className='review'>
      <div className="container">
        <div className="review_container">
          <div className="review__title">
            <h1>Форма обратной связи</h1>
            <h3>Оставьте свой отзыв или полежание</h3>
          </div>
          <form onSubmit={e => {
            e.preventDefault()
            hanldeSubmit()
          }}>
            <textarea className='review_text'
              value={text} onChange={e => setText(e.target.value)}
              placeholder='Не более 255 символов :)'></textarea>
            <button type='submit' className='review_submit'>Отправить</button>
          </form>
        </div>
      </div>
    </div>
  );
};

