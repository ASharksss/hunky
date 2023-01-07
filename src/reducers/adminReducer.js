const FAILED = 'FAILED';
const ADMIN_STOCK = 'ADMIN_STOCK'
const PRODUCTS = 'PRODUCTS'
const USER_INFO = 'USER_INFO'

const initialState = {
    error: '',
    stock: [],
    products: [],
    user: [],
    user_name: ''
}

export default function adminReducer(state = initialState, action) {
    switch (action.type) {
        case FAILED:
            return {
                ...state,
                error: action.payload,
                stock: []
            }
        case ADMIN_STOCK:
            return {
                ...state,
                error: '',
                stock: action.payload
            }
        case USER_INFO:
            return {
                ...state,
                error: '',
                user: action.payload.user,
                user_name: action.payload.name
            }
        case PRODUCTS:
            return {
                ...state,
                error: '',
                products: action.payload
            }
        default:
            return state
    }
}

export const failed = error => ({ type: FAILED, payload: error })
export const stock = data => ({ type: ADMIN_STOCK, payload: data })
export const products = data => ({ type: PRODUCTS, payload: data })
export const user_info = data => ({ type: USER_INFO, payload: data })
