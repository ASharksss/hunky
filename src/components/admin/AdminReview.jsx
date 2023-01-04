import React from 'react';
import {NavLink} from "react-router-dom";

export const AdminReview = () => {
	return (
		<div className='adminReview'>
			<div className="container">
				<div className="adminReview_container">
					<h1>Отзывы и предложения</h1>
					<div className="review_block">
						<p>Аноним</p>
						<p>04.01.22</p>
						<p>Поднять зарплату программисту</p>
					</div>
					<div className="review_block">
						<p>Аноним</p>
						<p>04.01.22</p>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid autem culpa esse et expedita impedit ipsam laboriosam modi nisi nostrum nulla officia omnis, porro quibusdam quo soluta voluptas voluptate.</p>
					</div>
					<div className="review_block">
						<p>Аноним</p>
						<p>04.01.22</p>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid autem culpa esse et expedita impedit ipsam laboriosam modi nisi nostrum nulla officia omnis, porro quibusdam quo soluta voluptas voluptate.</p>
					</div>
				</div>
			</div>
		</div>
	);
};

