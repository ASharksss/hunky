import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { requestFeedbackList } from "../../actions/other";

export const AdminReview = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(requestFeedbackList())
	}, [])
	const data = useSelector(state => state.other.data)
	return (
		<div className='adminReview'>
			<div className="container">
				<div className="adminReview_container">
					<h1>Отзывы и предложения</h1>
					{data.map(item => {
						return (
							<div className="review_block">
								<p>{item.user}</p>
								<p>{item.date}</p>
								<p>{item.text}</p>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	);
};

