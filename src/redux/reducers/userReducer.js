/*import {apiGetPost, apiAddPost, apiDeletePost, apiUpdatePost} from
'../api/api';

//tipos de actions
import {
  SET_SESSION,
  SET_USER
} from '../ActionTypes.js'

const initialState = { user: {}, token: null};


export default (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return { ...state, posts:action.payload };
    case ADD_POST:
      return {...state,
        posts: [action.payload, ...state.posts]};
    case UPDATE_POST:
      return {...state,
        posts: [...state.posts.map((post) => post.id === action.payload.id ?
               action.payload:post)]}
    case DELETE_POST:
      return {...state,
        post: [...state.posts.filter(elem=>elem.id!==action.payload)]}
    default:
      return { ...state };}
}
*/
