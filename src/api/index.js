import { 
    API, 
    API_ORDERLIST, 
    API_ORDERDETAILS, 
    API_CLOTHES } from '../config/const';

export const fetchOrdersAPI =  (token) => {
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

export const fetchOrdersDetailsAPI =  (token, id) => {
    const request = {
        method:'POST',
        body: JSON.stringify({
            "id": id,
            "from": "CarrierApp",
            "platform": "Android" //'platform: 'Android o Ios'
        }),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+token
      }
    };
    return fetch(API+API_ORDERDETAILS,request)
    .then(Response =>{ 
        return Promise.all([Response, Response.json()])
    })
}

export const fetchClothesAPI = () => {
    const request = {
        method:'POST',
        body: JSON.stringify({
            "from": "CarrierApp",
            "platform": "Android" //'platform: 'Android o Ios'
        }),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+token
      }
    };
    return fetch(API+API_CLOTHES,request)
    .then(Response =>{ 
        return Promise.all([Response, Response.json()])
    })
}