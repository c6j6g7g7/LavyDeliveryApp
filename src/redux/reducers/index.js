import { combineReducers } from 'redux';
import session from './session';
import dataReducer from './dataReducer'

//import userReducer from './userReducer';
//import ordersReducer from './ordersReducer';
//import orderReducer from './orderReducer';
//https://rosolutions.com.mx/blog/index.php/2018/07/19/consumir-api-con-react-redux/
const reducers = combineReducers({
  session,
  dataReducer
  //user: userReducer,
  //orders: ordersReducer,
  //currentOrder: currentOrderReducer
});

export default reducers;
