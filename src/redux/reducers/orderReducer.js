import { 
    FETCHING_DATA_ORDER_DETAILS_SUCCESS,
    COUNTER_INCREMENT, 
    COUNTER_DECREMENT 
}  from '../ActionTypes'

const orderReducer = (state = {orderDetail:{}}, action) => {
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
        //console.log("FETCHING_DATA_ORDER_DETAILS_SUCCESS-ACTION=>"+JSON.stringify(action));
           //console.log("FETCHING_DATA_ORDER_DETAILS_SUCCESS=>"+JSON.stringify(action.data));
            return {
                ...state,
                orderDetail: action.data//.order
            }
        default:
            return state;
    }
    
}

export default orderReducer;