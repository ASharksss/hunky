const USER_LIST = 'USER_LIST';
const FAILED = 'FAILED';
const USER_PROFILE = 'USER_PROFILE';
const PROFILE_DEFECTS = 'PROFILE_DEFECTS';
const PROFILE_CANCELED = 'PROFILE_CANCELED';
const JOB_LIST = 'JOB_LIST'
const GET_JOB = 'GET_JOB'
const UPDATE_PROCESS = 'UPDATE_PROCESS'
const GET_HISTORY = 'GET_HISTORY'
const PRELOADER = 'PRELOADER'


const initialState = {
	error: '',
	data: [],
	jobs: [],
	job: [],
	history: [],
	proces: [],
	notification: [],
	history_pages: 0,
	profile: [],
	profile_salary: [],
	profile_defects: [],
	profile_canceled: [],
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
				profile_salary: action.payload.salary,
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
				jobs: action.payload.jobs,
				notification: action.payload.notification,
				error: ''
			}
		case UPDATE_PROCESS:
			return {
				...state,
				process: action.payload,
				error: ''
			}
		case PROFILE_DEFECTS:
			return {
				...state,
				profile_defects: action.payload,
				error: ''
			}
		case PROFILE_CANCELED:
			return {
				...state,
				profile_canceled: action.payload,
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
		case PRELOADER:
			return {
				...state,
				preloader: action.payload
			}
		default:
			return state
	}
}

export const user_list = data => ({ type: USER_LIST, payload: data })
export const preloader = data => ({ type: PRELOADER, payload: data })
export const job_list = data => ({ type: JOB_LIST, payload: data })
export const history = data => ({ type: GET_HISTORY, payload: data })
export const profile = data => ({ type: USER_PROFILE, payload: data })
export const update_process = data => ({ type: UPDATE_PROCESS, payload: data })
export const profile_defects = data => ({ type: PROFILE_DEFECTS, payload: data })
export const profile_canceled = data => ({ type: PROFILE_CANCELED, payload: data })
export const get_job = data => ({ type: GET_JOB, payload: data })
export const failed = data => ({ type: FAILED, payload: data })
