import { FETCHING_DATA_PEOPLE_SUCCESS, FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from '../../config/const';

//import getDataApi from '../../API'
import { fetchOrdersAPI } from '../../api'


//import getDataApi from '../../API'
import { RECEIVE_ORDERS, CLEAR_ORDERS } from '../ActionTypes.js'

import { Alert } from 'react-native'

import { API, API_LOGIN, API_ORDERLIST } from '../../config/const';

import {
    SET_SESSION
} from '../ActionTypes';

/*export const getData = () => {
  return {
    type: 'FETCHING_DATA'
  }
}

export const getDataSuccess = data => {
  return {
    type: 'FETCHING_DATA_SUCCESS',
    data
  }
}


export const getDataFailure = () => {
  return {
    type: 'FETCHING_DATA_FAILURE'
  }
}

export const fetchData = () => {
  //return Function
  //npm install redux-thunk redux redux-native
  return (dispatch) => {
    dispatch(getData);
    getDataApi()
      .then(([response, json]) => {
        dispatch(getDataSuccess(json))
      })
      .catch((err) => console.log(err))
  }

}*/

export const login = ({ email, password }) => (dispatch, getState) => {

  /*this.state = {
    data: ''

  }*/


  return new Promise((resolve, reject) => {
    //fetch('http://test.lavy.com.co/api/CarrierApi/login', {
    fetch(API+API_LOGIN, {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "email": email,//"julian.giraldo@lavy.com.co",
        "password": password,//"dr#4JVnyD"//,dr#4JVnyDx
        "from": "CarrierApp",
        "platform": "Android" //'platform: 'Android o Ios'
      }),
    })
    .then((response) => response.json()).then((responseJson) => {

      //Alert.alert("sssss",this.getState());

      if(responseJson.status){
        //si todo sale bien guardamos el user y token en localstore
        dispatch({
          type: SET_SESSION,
          user: responseJson.data,
          //user: responseJson.data.name,
          token: responseJson.api_token
        })
        /*dispatch({
          type: SET_USER,
          user: responseJson.data.name,

          token: responseJson.api_token,
          email: responseJson.data.email,
        })*/
        //Alert.alert("Resolve action::",getState)
        return resolve(responseJson)
      }else {
        dispatch({
          type: CLEAR_SESION
        })
        //Alert.alert("Error en action::",getState)
        return reject({ error : true, message : responseJson.data});
      }

       //return resolve(responseJson.data)

    })
    .catch( (err) =>  {

      Alert.alert("Error en action::",getState)
      if(err && err.data)
          return reject(err.data)
      else
          return reject({ error : true, message : "Ocurrio un error por favor intenta más tarde."});



      });
  });
}



///ORDERS



export const getData = () => {
  return {type: FETCHING_DATA}
}

export const getDataSuccess = (data) => {
  return {type: FETCHING_DATA_SUCCESS, data}
}

export const getDataPeopleSuccess = (data, status, message) => {
  
  return {type: FETCHING_DATA_PEOPLE_SUCCESS,              
      data,
      status,
      message
  }
}

export const getDateFailure = (data) => {
  return {type: FETCHING_DATA_FAILURE}
}

export const fetchData = () => {
  return (dispatch) => {
      
      dispatch(getData())

      fetchSchedule()
      .then(([response, json]) => {
          dispatch(getDataSuccess(json))
      })
      .catch((error) => console.log(error))
  }

}

//export const fetchDataActors = () => {
  export const fetchOrders = (date) => {
  
    return (dispatch) => {
      
      dispatch(getData())

      //fetchPeople()
      fetchOrdersAPI()
      .then(([response, json]) => {
          console.log("fetchDataActors===>>"+JSON.stringify(json) )
          dispatch(getDataPeopleSuccess(json))
      })
      .catch((error) => console.log(error))
  }
}
