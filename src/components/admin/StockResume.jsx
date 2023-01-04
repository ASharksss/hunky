import React from 'react';
import {NavLink} from "react-router-dom";

export const StockResume = () => {
	return (
		<div className='stockResume'>
			<div className="container">
				<div className="resume_container">
					<form className='resume_form'>
						<h2 className='resume_stock_title'>Пополнение склада</h2>
						<select className='resume_input' >
							<option>Крючок</option>
							<option>Вкладыш</option>
							<option>Пластиковая коробочка</option>
							<option>Свинец чистый</option>
							<option>Кольцо</option>
							<option>Завводное кольцо</option>
						</select>
						<input type="text" placeholder='Введите количество' className='resume_input'/>
						<NavLink to='/admin/stock' className="link resume_stock_link">
							<button className="resume_stock_submit">Добавить</button>
						</NavLink>
					</form>
				</div>
			</div>
		</div>
	);
};

