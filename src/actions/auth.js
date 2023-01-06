import axios from "axios";
import {failed, success, logout} from "../reducers/authReducer";


export const requestLogin = (username, password) => {
    return dispatch => {
        try {
            axios({
                method: 'post',
                url: '/auth/login',
                data: {
                    username: username,
                    password: password
                }
            })
                .then(function (response) {
                    if (response.data.server_status == 1) {
                        const data = {
                            token: response.data.token,
                            role: response.data.role,
                            name: response.data.user.name,
                            job_title: response.data.user.job_title
                        }
                        dispatch(success(data))
                        axios.defaults.headers.common = {'Authorization': `Bearer ${response.data.token}`}
                    } else {
                        dispatch(failed(response.data.message))
                    }
                }).catch(error => {
                dispatch(failed("Ошибка связи с сервером!"))

            });
        } catch (e) {
            dispatch(failed("Неизвестная ошибка"))
        }
    }
}

export const requestLogout = () => {
    return dispatch => {
        try {
            localStorage.removeItem('persist:root')
            dispatch(logout())
        } catch (e) {
            alert("Неизвестная ошибка")
        }
    }
}
