import { API, API_ORDERLIST } from '../config/const';

const URL_ORDERS = 'http://test.lavy.com.co/api/CarrierApi/getOrders'


export const fetchOrdersAPI =  () => {
    
    const request = {
        method:'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer wOOQg0hY2SXva4slj0lUOHafj8V16fpIxwRtPeKtXRTZziqf2qFelcMka9t5'
      }
    };
    //return fetch(URL_ORDERS,request)
    return fetch(API+API_ORDERLIST,request)
    .then(Response =>{ 
        return Promise.all([Response, Response.json()])
    })
}