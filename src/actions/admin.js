import axios from "axios";
import { stock, failed, products, user_info } from "../reducers/adminReducer";

export const requestHistory = () => {
    return dispatch => {
        axios({
            method: 'get',
            url: '/stock/admin'
        }).then(response => {
            if (response.data.server_status == 1) {
                dispatch(stock(response.data.stocks))
            } else {
                dispatch(failed('Произошла ошибка в обработке'))
            }
        })
    }
}

export const requestProducts = () => {
    return dispatch => {
        axios({
            method: 'get',
            url: '/stock/admin/add'
        }).then(response => {
            if (response.data.server_status == 1) {
                dispatch(products(response.data.products))
            } else {
                dispatch(failed('Произошла ошибка в обработке'))
            }
        })
    }
}

export const requestUserInfo = (id) => {
    return dispatch => {
        axios({
            method: 'get',
            url: '/stock/admin/user/' + id
        }).then(response => {
            if (response.data.server_status == 1) {
                const data = {
                    user: response.data.process,
                    count: response.data.count,
                    defect: response.data.defect,
                    cancel: response.data.cancel,
                    name: response.data.user
                }
                dispatch(user_info(data))
            } else {
                dispatch(failed('Произошла ошибка в обработке'))
            }
        })
    }
}

export const requestAddProducts = (data) => {
    return dispatch => {
        axios({
            method: 'post',
            url: '/stock/admin/add',
            data: data
        }).then(response => {
            if (response.data.server_status == 1) {
                alert(response.data.message)
                window.location.reload()
            } else {
                dispatch(failed('Произошла ошибка в обработке'))
            }
        })
    }
}