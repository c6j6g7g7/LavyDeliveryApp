import React, { Component } from 'react';

import { createStackNavigator } from 'react-navigation';


import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore, persistReducer } from 'redux-persist'
import { applyMiddleware, compose, createStore } from 'redux'

//Screens
import Home from './src/screens/Home';
import Login from './src/screens/LoginScreen';

//Reducers
import reducers from './src/redux/reducers'

//import { createLogger } from 'redux-logger'


const persistedReducer = persistReducer({ key: 'root', storage, blacklist: ['filter', 'modals'] }, reducers)

const AppNavigator = createStackNavigator({
  LoginScreen: { screen: Login },
  HomeScreen: { screen: Home },
  initialRouteName: 'LoginScreen',
  });

  function configureStore (initialState) {
    const enhancer = compose(
      //applyMiddleware(thunk, loggerMiddleware)
      applyMiddleware(thunk)
    )
    return createStore(persistedReducer, initialState, enhancer)
  }

const initialState = {}
/*const initialState = {
  user: {
    name: null,
    last_name: null,
    email: null,
    avatar: null,
    user_profile_id: null,
    api_token: null
  },
  orderList: [],
  order:{

  },
}*/

export const store = configureStore(initialState)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}
