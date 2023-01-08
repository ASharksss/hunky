import axios from "axios";
import { failed, stock_list } from "../reducers/stockReducer";

export const requestStockList = () => {
    return dispatch => {
        try {
            axios({
                method: 'get',
                url: '/stock/'
            }).then(response => {
                if (response.data.server_status == 1) {
                    dispatch(stock_list(response.data.stocks))
                } else {
                    dispatch(failed('Произошла ошибка в обработке'))
                }
            })
        } catch (e) {
            dispatch(failed("Неизвестная ошибка"))
        }
    }
}

export const requestStockSearch = (val) => {
    return dispatch => {
        try {
            axios({
                method: 'get',
                url: '/stock/?cat=' + val
            }).then(response => {
                if (response.data.server_status == 1) {
                    dispatch(stock_list(response.data.stocks))
                } else {
                    dispatch(failed('Произошла ошибка в обработке'))
                }
            })
        } catch (e) {
            dispatch(failed("Неизвестная ошибка"))
        }
    }
}