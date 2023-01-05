const USER_LIST = 'USER_LIST';
const FAILED = 'FAILED';
const USER_PROFILE = 'USER_PROFILE';


const initialState = {
	error: '',
	data: []
}

export default function authReduce(state = initialState, action) {
	switch (action.type) {
		case USER_LIST:
			return {
				...state,
				data: action.payload
			}
		case FAILED:
			return {
				...state,
				data: [],
				error: action.payload
			}
		default:
			return state
	}
}

export const user_list = data => ({type: USER_LIST, payload: data})
export const failed = data => ({type: FAILED, payload: data})
