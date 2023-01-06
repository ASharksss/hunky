const FAILED_SIGNIN = 'FAILED_SIGNIN';
const SUCCESS_SIGNIN = 'SUCCESS_SIGNIN';
const LOGOUT = 'LOGOUT';

const initialState = {
	error: '',
	token: '',
	role: '',
	isAuth: false,
	user: {}
}

export default function authReduce(state = initialState, action) {
	switch (action.type) {
		case FAILED_SIGNIN:
			return {
				...state,
				error: action.payload,
				token: '',
				isAuth: false
			}
		case SUCCESS_SIGNIN:
			return {
				...state,
				error: '',
				token: action.payload.token,
				role: action.payload.role,
				user: {"name": action.payload.name, "job_title": action.payload.job_title},
				isAuth: true
			}
		case LOGOUT:
			localStorage.removeItem('token')
			return {
				...state,
				token: '',
				role: '',
				isAuth: false
			}
		default:
			return state
	}
}

export const success = data => ({type: SUCCESS_SIGNIN, payload: data})
export const failed = error => ({type: FAILED_SIGNIN, payload: error})
export const logout = () => ({type: LOGOUT})
