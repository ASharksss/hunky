const FEEDBACK_LIST = 'FEEDBACK_LIST';
const CHECK_EMAIL = 'CHECK_EMAIL';
const CHECK_USERNAME = 'CHECK_USERNAME';
const FAILED = 'FAILED';


const initialState = {
	error: '',
	data: [],
	chEmail: true,
	chUsername: true
}

export default function otherReducer(state = initialState, action) {
	switch (action.type) {
		case FEEDBACK_LIST:
			return {
				...state,
				data: action.payload
			}
		case CHECK_EMAIL:
			return {
				...state,
				chEmail: action.payload
			}
		case CHECK_USERNAME:
			return {
				...state,
				chUsername: action.payload
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

export const feedback_list = data => ({type: FEEDBACK_LIST, payload: data})
export const check_username = data => ({type: CHECK_USERNAME, payload: data})
export const check_email = data => ({type: CHECK_EMAIL, payload: data})
export const failed = data => ({type: FAILED, payload: data})