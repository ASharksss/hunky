import React from 'react';
import {NavLink} from "react-router-dom";

export const HomeDetail = () => {
	return (
		<div className='home_detail'>
			<div className="container">
				<div className="detail__wrapper">
					<form className='detail_form'>
						<label>Айма ратлин</label>
						<select className="home_detail__select">
							<option value="">Выберите вид...</option>
							<option value="">60мм 12гр</option>
							<option value="">75мм 15гр</option>
							<option value="">95мм 35гр</option>
						</select>
						<input type='text' placeholder='Количество сделано'/>
						<input type='text' placeholder='Количество брак'/>

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

