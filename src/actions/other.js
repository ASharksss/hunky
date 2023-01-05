import axios from "axios";
import {failed, feedback_list, check_username, check_email} from "../reducers/otherReducer";


export const requestFeedbackList = () => {
	return dispatch => {
		try {
			axios({
				method: 'get',
				url: '/other/feedback/list'
			}).then(response => {
				if (response.data.server_status == 1) {
					dispatch(feedback_list(response.data.feedback))
				} else {
					dispatch(failed('Произошла ошибка в обработке'))
				}
			})
		} catch (e) {
			dispatch(failed("Неизвестная ошибка"))
		}
	}
}

export const requestCheckUsername = (username) => {
	return dispatch => {
		try {
			axios({
				method: 'get',
				url: '/admin/user/check/name/?name=' + username
			}).then(response => {
				dispatch(check_username(response.data.server_status === 1));
			})
		} catch (e) {
			dispatch(failed("Неизвестная ошибка"))
		}
	}
}

export const requestCheckEmail = (email) => {
	return dispatch => {
		try {
			axios({
				method: 'get',
				url: '/admin/user/check/email/?email=' + email
			}).then(response => {
				dispatch(check_email(response.data.server_status === 1));
			})
		} catch (e) {
			dispatch(failed("Неизвестная ошибка"))
		}
	}
}
