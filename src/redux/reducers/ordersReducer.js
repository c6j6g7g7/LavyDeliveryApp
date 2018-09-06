import { SET_ORDERS, CLEAR_ORDERS } from '../ActionTypes.js'

const orders = (state = { }, action) => {
	switch (action.type) {
    case SET_ORDERS : {
      const { token, user, email } = action
      return {
        token,
        user,
        email
      }
    }
    case CLEAR_ORDERS: {
			return { };
		}

		default: {
      		return state
    	}
	}
}

export default ordersReducer;
