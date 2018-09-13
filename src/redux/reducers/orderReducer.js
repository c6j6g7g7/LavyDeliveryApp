//import * as Actions from '../ActionTypes'
import { COUNTER_INCREMENT, COUNTER_DECREMENT }  from '../ActionTypes'

const orderReducer = (state = {quantity: 0}, action) => {
    //console.log("STATE=>"+JSON.stringify(state.currentOrder));
    switch (action.type) {
        //case Actions.COUNTER_INCREMENT:
        
        case COUNTER_INCREMENT:
            console.log("REDUVCERS->>"+JSON.stringify(action.state));
            return Object.assign({}, state, {
                quantity: state.quantity + 1
            });
        case COUNTER_DECREMENT:
            console.log("REDUVCERS->>"+JSON.stringify(action.state));
            return Object.assign({}, state, {
               quantity: state.quantity - 1
            });
        default:
            return state;
    }
    console.log("PASO_REDUVCERS->>");
}

export default orderReducer;