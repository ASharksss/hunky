const FAILED= 'FAILED';
const STOCK_LIST = 'STOCK_LIST';


const initialState = {
	error: '',
    data: []
}

export default function stockReducer(state = initialState, action) {
	switch (action.type) {
		case FAILED:
			return {
				...state,
				error: action.payload,
				data: []
			}
		case STOCK_LIST:
			return {
				...state,
				data: action.payload
			}
		default:
			return state
	}
}

export const failed = error => ({type: FAILED, payload: error})
export const stock_list = data => ({type: STOCK_LIST, payload: data})
