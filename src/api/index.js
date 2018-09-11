import { API, API_ORDERLIST } from '../config/const';

const URL_ORDERS = 'http://test.lavy.com.co/api/CarrierApi/getOrders'


export const fetchOrdersAPI =  (token) => {
    //console.log("fetchOrdersAPI->"+token)
    const request = {
        method:'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+token
      }
    };
    return fetch(API+API_ORDERLIST,request)
    .then(Response =>{ 
        return Promise.all([Response, Response.json()])
    })
}