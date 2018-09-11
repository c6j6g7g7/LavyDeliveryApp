import {FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE, FETCHING_DATA_PEOPLE_SUCCESS} from '../../config/const'

const initialState =  {
    data: [],
    isFeching: false,
    error: false
}

export default ordersReducer = (state = initialState, action) => {
	switch(action.type) {
        case FETCHING_DATA:
            return {
                ...state,
                data: [],
                isFeching: true
            }
        case FETCHING_DATA_SUCCESS:
            return {
                ...state,
                data: action.data,
                isFeching: false
            }
        case FETCHING_DATA_PEOPLE_SUCCESS:
            //console.log("REDUVCERS->>"+JSON.stringify(action.data));
            return {
                ...state,
                data: action.data,
                status: action.status,
                message: action.message,
                isFeching: false
            }
        case FETCHING_DATA_FAILURE:
            return {
                ...state,
                isFeching: false,
                error: true 
            }
        default:
        return state
    }
}