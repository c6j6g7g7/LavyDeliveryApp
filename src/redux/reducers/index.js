import { combineReducers } from 'redux';
import session from './session';
import dataReducer from './dataReducer'

//import userReducer from './userReducer';
import ordersReducer from './ordersReducer';
import orderReducer from './orderReducer';
//https://rosolutions.com.mx/blog/index.php/2018/07/19/consumir-api-con-react-redux/
//https://medium.com/@debian789/implementaci%C3%B3n-de-redux-en-react-native-6324e2a8c4aa
//https://github.com/debian789/redux-example
const reducers = combineReducers({
  session,
  dataReducer,
  //user: userReducer,
  fetchOrders: ordersReducer,
  currentOrder: orderReducer//currentOrderReducer
});

export default reducers;
