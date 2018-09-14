import { 
    FETCHING_DATA_ORDER_DETAILS_SUCCESS,
    COUNTER_INCREMENT, 
    COUNTER_DECREMENT 
}  from '../ActionTypes'

const orderReducer = (state = {quantity: 0}, action) => {
    switch (action.type) {
        //case Actions.COUNTER_INCREMENT:
        case COUNTER_INCREMENT:
            return {
                ...state, 
                quantity: state.quantity + 1
            }
        case COUNTER_DECREMENT:
            return { 
                ...state, 
               quantity: state.quantity - 1
            }
        case FETCHING_DATA_ORDER_DETAILS_SUCCESS:
            return {
                ...state,
                orderDetails
            }
        default:
            return state;
    }
    
}

export default orderReducer;