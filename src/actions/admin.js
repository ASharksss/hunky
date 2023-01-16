import axios from "axios";
import { stock, failed, products, user_info, add_products } from "../reducers/adminReducer";

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

export const requestUserInfo = (id, date) => {
    return dispatch => {
        axios({
            method: 'get',
            url: '/stock/admin/user/' + id + '?date=' + date
        }).then(response => {
            if (response.data.server_status == 1) {
                const data = {
                    user: response.data.process,
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

export const requestProductList = () => {
    return dispatch => {
        axios({
            method: 'get',
            url: '/admin/product/list',
        }).then(response => {
            if (response.data.server_status == 1) {
                dispatch(products(response.data.products))
            } else {
                dispatch(failed('Произошла ошибка в обработке'))
            }
        })
    }
}

export const requestAddProduct = (data) => {
    return dispatch => {
        axios({
            method: 'post',
            url: '/admin/product/add',
            data: data
        }).then(response => {
            if (response.data.server_status == 1) {
                alert('Товар добавлен')
                window.location.reload()
            } else {
                alert(response.data.message)
                dispatch(failed('Произошла ошибка в обработке'))
            }
        })
    }
}

export const requestDeleteProcess = (id, u_id) => {
    return dispatch => {
        try {
            axios({
                method: 'delete',
                url: '/user/history/remove/' + id
            }).then(response => {
                if (response.data.server_status == 1) {
                    alert(response.data.message)
                    dispatch(requestUserInfo(u_id, 1))
                } else {
                    dispatch(failed('Произошла ошибка в обработке'))
                }
            })
        } catch (e) {
            dispatch(failed("Неизвестная ошибка"))
        }
    }
}
