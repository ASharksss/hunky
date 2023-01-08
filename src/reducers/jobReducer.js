const FEEDBACK_LIST = 'FEEDBACK_LIST';
const CHECK_EMAIL = 'CHECK_EMAIL';
const CHECK_USERNAME = 'CHECK_USERNAME';
const FAILED = 'FAILED';


const initialState = {
    data: []
}

export default function jobReducer(state = initialState, action) {
    switch (action.type) {
        case FAILED:
            return {
                ...state,
                data: []
            }
        default:
            return state
    }
}