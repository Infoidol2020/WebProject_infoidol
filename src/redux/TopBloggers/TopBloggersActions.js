import axios from 'axios';
import { BASE_URL, USER_ID, DEVICE_ID } from '../Constants/ApiConstants'
import { GET_TOP_BLOGGERS, GET_TOP_BLOGGERS_SUCCESS, GET_TOP_BLOGGERS_FAILURE } from './TopBloggersTypes'
export const getTopBloggers = () => {
    return{
        type: GET_TOP_BLOGGERS
    }
}

export const getTopBloggersSuccess = (TopBloggers) => {
    return{
        type: GET_TOP_BLOGGERS_SUCCESS,
        payload: TopBloggers
    }
}

export const getTopBloggersFailure = (error) => {
    return{ 
        type: GET_TOP_BLOGGERS_FAILURE ,
        payload: error
    }
}

export const fetchTopBloggers = () => {
    return (dispatch) => {
        dispatch(getTopBloggers)
        axios.post(`${BASE_URL}blog_list`,{
          "device_id": DEVICE_ID,
          "user_id": USER_ID,
      }).then( response => {
          const allTopBloggers = response.data.data
          dispatch(getTopBloggersSuccess(allTopBloggers))
      }).catch(error => {
          const errorMsg = error.message
          dispatch(getTopBloggersFailure(errorMsg))
      })
    }
}