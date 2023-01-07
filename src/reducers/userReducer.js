const USER_LIST = 'USER_LIST';
const FAILED = 'FAILED';
const USER_PROFILE = 'USER_PROFILE';
const PROFILE_DEFECTS = 'PROFILE_DEFECTS';
const JOB_LIST = 'JOB_LIST'
const GET_JOB = 'GET_JOB'
const GET_HISTORY = 'GET_HISTORY'


const initialState = {
	error: '',
	data: [],
	jobs: [],
	job: [],
	history: [],
	history_pages: 0,
	profile: [],
	profile_defects: [],
	profile_defect: 0,
	profile_cancel: 0
}

export default function authReduce(state = initialState, action) {
	switch (action.type) {
		case USER_LIST:
			return {
				...state,
				data: action.payload,
				error: ''
			}
		case USER_PROFILE:
			return {
				...state,
				profile: action.payload.user,
				profile_cancel: action.payload.cancel,
				profile_defect: action.payload.defect
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

		case PROFILE_DEFECTS:
			return {
				...state,
				profile_defects: action.payload,
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
				history: action.payload.history,
				history_pages: action.payload.pages,
				error: ''
			}
		default:
			return state
	}
}

export const user_list = data => ({ type: USER_LIST, payload: data })
export const job_list = data => ({ type: JOB_LIST, payload: data })
export const history = data => ({ type: GET_HISTORY, payload: data })
export const profile = data => ({ type: USER_PROFILE, payload: data })
export const profile_defects = data => ({ type: PROFILE_DEFECTS, payload: data })
export const get_job = data => ({ type: GET_JOB, payload: data })
export const failed = data => ({ type: FAILED, payload: data })
