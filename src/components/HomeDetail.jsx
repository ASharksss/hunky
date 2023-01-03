import React from 'react';
import {NavLink} from "react-router-dom";

export const HomeDetail = () => {
	return (
		<div className='home_detail'>
			<div className="container">
				<div className="detail__wrapper">
					<form className='detail_form'>
						<label>Айма ратлин 60мм 12гр</label>
						<input type='text' placeholder='Введите количество'/>

					</form>
					<div className="detail_btns">
						<NavLink to='/' className='home__btn_link'>
							<button className='detail_btn'>
								Сохранить
							</button>
						</NavLink>
					</div>


				</div>
			</div>
		</div>
	);
};

