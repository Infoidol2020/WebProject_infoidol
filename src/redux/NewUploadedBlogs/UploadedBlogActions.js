import axios from 'axios';
import { BASE_URL, USER_ID, DEVICE_ID } from '../Constants/ApiConstants'
import { GET_UPLOADED_BLOGS, GET_UPLOADED_BLOGS_SUCCESS, GET_UPLOADED_BLOGS_FAILURE } from './UploadedBlogTypes'
export const getUploadedBlogs = () => {
    return{
        type: GET_UPLOADED_BLOGS
    }
}

export const getUploadedBlogsSuccess = (UploadedBlogs) => {
    return{
        type: GET_UPLOADED_BLOGS_SUCCESS,
        payload: UploadedBlogs
    }
}

export const getUploadedBlogsFailure = (error) => {
    return{
        type: GET_UPLOADED_BLOGS_FAILURE ,
        payload: error
    }
}

export const fetchUploadedBlogs = () => {
    return (dispatch) => {
        dispatch(getUploadedBlogs)
        axios.post(`${BASE_URL}blog_list`,{
          "device_id": DEVICE_ID,
          "user_id": USER_ID,
      }).then( response => {
          const allUploadedBlogs = response.data.data
          dispatch(getUploadedBlogsSuccess(allUploadedBlogs))
      }).catch(error => {
          const errorMsg = error.message
          dispatch(getUploadedBlogsFailure(errorMsg))
      })
    }
}