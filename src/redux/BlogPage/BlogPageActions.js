import axios from 'axios';
import { BASE_URL, DEVICE_ID, USER_ID } from '../Constants/ApiConstants';
import { GET_ALL_BLOGS, GET_ALL_BLOGS_SUCCESS, GET_ALL_BLOGS_FAILURE } from './BlogPageTypes'
export const getAllBlogs = () => {
    return{
        type: GET_ALL_BLOGS
    }
}

export const getAllBlogsSuccess = (blogs) => {
    return{
        type: GET_ALL_BLOGS_SUCCESS,
        payload: blogs
    }
}
export const getAllBlogsFailure = (error) => {
    return{
        type: GET_ALL_BLOGS_FAILURE,
        payload: error
    }
}

export const fetchAllBlogs = (data) => {
    // console.log('blog page action executed',data);
    return (dispatch) => {
        dispatch(getAllBlogs())
        axios.post(`${BASE_URL}blog_page`,{
            "device_id":DEVICE_ID,
            "user_id":USER_ID,
      }).then( response => {
        //   console.log('responseeeeeeeeeeeeeee 1111', response.data.data)
            const allBlogs = response.data.data
            dispatch(getAllBlogsSuccess(allBlogs))
      }).catch(error => {
          const errorMsg = error.message
          dispatch(getAllBlogsFailure(errorMsg))
      })
    }
}
