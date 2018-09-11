//Constantaes
import { 
  FETCHING_DATA_PEOPLE_SUCCESS, 
  FETCHING_DATA, 
  FETCHING_DATA_SUCCESS, 
  FETCHING_DATA_FAILURE } from '../../config/const';
import { API, 
  API_LOGIN } from '../../config/const';

//Ejecucion del API
import { fetchOrdersAPI } from '../../api'

//import { RECEIVE_ORDERS, CLEAR_ORDERS } from '../ActionTypes.js'


import {
    SET_SESSION
} from '../ActionTypes';

//PARA PRUEBAS
import { Alert } from 'react-native'



//Actions Login
export const login = ({ email, password }) => (dispatch, getState) => {

  return new Promise((resolve, reject) => {
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
      if(responseJson.status){
        //si todo sale bien guardamos el user y token en localstore
        dispatch({
          type: SET_SESSION,
          user: responseJson.data,
          token: responseJson.api_token
        })
        return resolve(responseJson)
      }else {
        dispatch({
          type: CLEAR_SESION
        })
        return reject({ error : true, message : responseJson.data});
      }
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



// Actions ORDERS List
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
  export const fetchOrders = (date, token) => { 
    //console.log("ACTIONS-fetchOrders->"+token); 
    return (dispatch) => {
      
      dispatch(getData())

      //fetchPeople()
      fetchOrdersAPI(token)
      .then(([response, json]) => {
          //console.log("fetchDataActors===>>"+JSON.stringify(json) )
          dispatch(getDataPeopleSuccess(json))
      })
      .catch((error) => console.log(error))
  }
}
