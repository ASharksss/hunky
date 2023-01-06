import axios from "axios";
import {Navigate} from 'react-router-dom'
import {user_list, failed, job_list, get_job, history} from "../reducers/userReducer";


export const requestUserList = () => {
	return dispatch => {
		try {
			axios({
				method: 'get',
				url: '/user/list'
			}).then(response => {
				if (response.data.server_status == 1) {
					dispatch(user_list(response.data.users))
				} else {
					dispatch(failed('Произошла ошибка в обработке'))
				}
			})
		} catch (e) {
			dispatch(failed("Неизвестная ошибка"))
		}
	}
}

export const requestJobList = () => {
	return dispatch => {
		try {
			axios({
				method: 'get',
				url: '/job/'
			}).then(response => {
				if (response.data.server_status == 1) {
					dispatch(job_list(response.data.jobs))
				} else {
					dispatch(failed('Произошла ошибка в обработке'))
				}
			})
		} catch (e) {
			dispatch(failed("Неизвестная ошибка"))
		}
	}
}

export const requestAddJob = (data) => {
	return dispatch => {
		try {
			axios({
				method: 'post',
				url: '/job/create',
				data: {
					data: data
				}
			}).then(response => {
				if (response.data.server_status == 1) {
					alert('Задача добавлена')
					window.location.reload()
				} else {
					dispatch(failed(response.data.message))
				}
			})
			console.log(data)
		} catch (e) {
			dispatch(failed("Неизвестная ошибка"))
		}
	}
}

export const requestGetJob = (id) => {
	return dispatch => {
		try {
			axios({
				method: 'get',
				url: '/job/' + id
			}).then(response => {
				if (response.data.server_status == 1) {
					dispatch(get_job(response.data.job))
				} else {
					dispatch(failed('Произошла ошибка в обработке'))
				}
			})
		} catch (e) {
			dispatch(failed("Неизвестная ошибка"))
		}
	}
}

export const requestFeedbackSend = (data) => {
	return dispatch => {
		try {
			axios({
				method: 'post',
				url: '/other/create/feedback',
				data: data
			}).then(response => {
				if (response.data.server_status == 1) {
					alert(response.data.message)
				} else {
					dispatch(failed('Произошла ошибка в обработке'))
				}
			})
		} catch (e) {
			dispatch(failed("Неизвестная ошибка"))
		}
	}
}

export const requestAddUser = (data) => {
	return dispatch => {
		try {
			axios({
				method: 'post',
				url: '/admin/user/create',
				data: data
			}).then(response => {
				if (response.data.server_status == 1) {
					alert(response.data.message)
					return <Navigate relative to={'/admin/users'} />
				} else {
					alert(response.data.message)
				}
			})
		}catch (e) {
			alert("Неизвестная ошибка")
		}
	}
}

export const requestHistory = () => {
	return dispatch => {
		try {
			axios({
				method: 'get',
				url: '/user/history'
			}).then(response => {
				if (response.data.server_status == 1) {
					dispatch(history(response.data.history))
				} else {
					dispatch(failed('Произошла ошибка в обработке'))
				}
			})
		} catch (e) {
			dispatch(failed("Неизвестная ошибка"))
		}
	}
}