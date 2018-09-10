import {createStore, compose, applyMiddleware} from 'redux';
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'

import { PersistGate } from 'redux-persist/integration/react'
import { persistStore, persistReducer } from 'redux-persist'

//import Reducers from './redux/reducers'
//Reducers
import reducers from './redux/reducers'


/*export default configureStore = () => {
    let store = createStore(Reducers, applyMiddleware(thunk))
    return store
}*/

const persistedReducer = persistReducer({ key: 'root', storage, blacklist: ['filter', 'modals'] }, reducers)

export default configureStore =  (initialState) => {
    const enhancer = compose(
      //applyMiddleware(thunk, loggerMiddleware)
      applyMiddleware(thunk)
    )
    return createStore(persistedReducer, initialState, enhancer)
  }