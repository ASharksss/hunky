import axios from "axios";
import {Navigate} from 'react-router-dom'
import {user_list, failed} from "../reducers/userReducer";


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
