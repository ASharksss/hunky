const USER_LIST = 'USER_LIST';
const FAILED = 'FAILED';
const USER_PROFILE = 'USER_PROFILE';
const JOB_LIST = 'JOB_LIST'
const GET_JOB = 'GET_JOB'
const GET_HISTORY = 'GET_HISTORY'


const initialState = {
	error: '',
	data: [],
	jobs: [],
	job: [],
	history: []
}

export default function authReduce(state = initialState, action) {
	switch (action.type) {
		case USER_LIST:
			return {
				...state,
				data: action.payload,
				error: ''
			}
		case FAILED:
			return {
				...state,
				data: [],
				jobs: [],
				error: action.payload
			}
		case JOB_LIST:
			return {
				...state,
				jobs: action.payload,
				error: ''
			}
		case GET_JOB:
			return {
				...state,
				job: action.payload,
				error: ''
			}
		case GET_HISTORY:
			return {
				...state,
				history: action.payload,
				error: ''
			}
		default:
			return state
	}
}

export const user_list = data => ({ type: USER_LIST, payload: data })
export const job_list = data => ({ type: JOB_LIST, payload: data })
export const history = data => ({ type: GET_HISTORY, payload: data })
export const get_job = data => ({ type: GET_JOB, payload: data })
export const failed = data => ({ type: FAILED, payload: data })
