import { combineReducers } from 'redux';
import session from './session';
import dataReducer from './dataReducer'

const reducers = combineReducers({
  session,
  dataReducer

});

export default reducers;
