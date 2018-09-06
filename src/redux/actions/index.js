import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from '../../config/const';
//import getDataApi from '../../API'

import { Alert } from 'react-native'

import { API, API_LOGIN, API_ORDERLIST } from '../../config/const';

import {
    SET_SESSION
} from '../ActionTypes';

export const getData = () => {
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

}

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
          user: responseJson.data.name,
          token: responseJson.api_token,
          email: responseJson.data.email,
        })
        return resolve(responseJson)
      }else {
        dispatch({
          type: CLEAR_SESION
        })
        return reject({ error : true, message : responseJson.data});
      }

       //return resolve(responseJson.data)

    })
    .catch( (err) =>  {

      Alert.alert("Error en action::",err.data)
      if(err && err.data)
          return reject(err.data)
      else
          return reject({ error : true, message : "Ocurrio un error por favor intenta más tarde."});



      });
  });
}


/*export const orderList = ({ token, date }) => (dispatch, getState) => {

  this.state = {
    data: ''

  }
  return new Promise((resolve, reject) => {
    fetch('http://test.lavy.com.co/api/CarrierApi/login', {
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
          user: responseJson.data.name,
          token: responseJson.api_token
        })
      }else {
        dispatch({
          type: CLEAR_SESION
        })
      }

       //return resolve(responseJson.data)
     return resolve(responseJson)
    })
    .catch( (err) => {
      if(err.response && err.response.data)
          return reject(err.response.data)
      else
          return reject({ error : true, message : "Ocurrio un error por favor intenta más tarde."});

      });
  });
}
*/
