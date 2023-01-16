import axios from "axios";
import { Navigate, redirect } from 'react-router-dom'
import {
	user_list, failed, update_process,
	job_list, get_job, history, profile,
	profile_defects, profile_canceled
} from "../reducers/userReducer";


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
		} catch (e) {
			alert("Неизвестная ошибка")
		}
	}
}

export const requestHistory = (date, page) => {
	return dispatch => {
		try {
			axios({
				method: 'get',
				url: '/user/history?date=' + date + '&page=' + page
			}).then(response => {
				if (response.data.server_status == 1) {
					const data = {
						history: response.data.history,
						pages: response.data.pages
					}
					dispatch(history(data))
				} else {
					dispatch(failed('Произошла ошибка в обработке'))
				}
			})
		} catch (e) {
			dispatch(failed("Неизвестная ошибка"))
		}
	}
}

export const requestProfile = () => {
	return dispatch => {
		try {
			axios({
				method: 'get',
				url: '/user/profile'
			}).then(response => {
				if (response.data.server_status == 1) {
					const data = {
						user: response.data.user,
						cancel: response.data.cancel,
						defect: response.data.defect
					}
					dispatch(profile(data))
				} else {
					dispatch(failed('Произошла ошибка в обработке'))
				}
			})
		} catch (e) {
			dispatch(failed("Неизвестная ошибка"))
		}
	}
}

export const requestProfileDefects = (date) => {
	return dispatch => {
		try {
			axios({
				method: 'get',
				url: '/user/profile/defect?date=' + date
			}).then(response => {
				if (response.data.server_status == 1) {
					dispatch(profile_defects(response.data.defects))
				} else {
					dispatch(failed('Произошла ошибка в обработке'))
				}
			})
		} catch (e) {
			dispatch(failed("Неизвестная ошибка"))
		}
	}
}

export const requestProfileCanceled = (date) => {
	return dispatch => {
		try {
			axios({
				method: 'get',
				url: '/user/profile/cancel?date=' + date
			}).then(response => {
				if (response.data.server_status == 1) {
					dispatch(profile_canceled(response.data.cancel))
				} else {
					dispatch(failed('Произошла ошибка в обработке'))
				}
			})
		} catch (e) {
			dispatch(failed("Неизвестная ошибка"))
		}
	}
}

export const requestGetProcess = (id) => {
	return dispatch => {
		try {
			axios({
				method: 'get',
				url: '/user/history/update/' + id
			}).then(response => {
				if (response.data.server_status == 1) {
					dispatch(update_process(response.data.process))
				} else {
					dispatch(failed('Произошла ошибка в обработке'))
				}
			})
		} catch (e) {
			dispatch(failed("Неизвестная ошибка"))
		}
	}
}

export const requestUpdateProcess = (id, data) => {
	return dispatch => {
		try {
			axios({
				method: 'put',
				url: '/user/history/update/' + id,
				data: data
			}).then(response => {
				if (response.data.server_status == 1) {
					alert(response.data.message)
					redirect('/history')
				} else {
					dispatch(failed('Произошла ошибка в обработке'))
				}
			})
		} catch (e) {
			dispatch(failed("Неизвестная ошибка"))
		}
	}
}
