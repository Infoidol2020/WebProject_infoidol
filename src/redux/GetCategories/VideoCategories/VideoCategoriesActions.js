import axios from 'axios';
import { BASE_URL, USER_ID, DEVICE_ID } from '../../Constants/ApiConstants'
import { GET_ALL_VIDEO_CATEGORIES, GET_ALL_VIDEO_CATEGORIES_SUCCESS, GET_ALL_VIDEO_CATEGORIES_FAILURE } from './VideoCategoriesTypes'
export const getAllVideoCategories = () => {
    return{
        type: GET_ALL_VIDEO_CATEGORIES
    }
}

export const getAllVideoCategoriesSuccess = (VideoCategories) => {
    return{
        type: GET_ALL_VIDEO_CATEGORIES_SUCCESS,
        payload: VideoCategories
    }
}
export const getAllVideoCategoriesFailure = (error) => {
    return{
        type: GET_ALL_VIDEO_CATEGORIES_FAILURE,
        payload: error
    }
}

export const fetchAllVideoCategories = () => {
    // console.log('executed from video categories actions')
    return (dispatch) => {
        dispatch(getAllVideoCategories)
        axios.post(`${BASE_URL}video_page`,{
          "device_id": DEVICE_ID,
          "user_id": USER_ID,
      }).then( response => {
            // console.log('response from video categories action', response.data.data)
            const allVideoCategories = response.data.data
            dispatch(getAllVideoCategoriesSuccess(allVideoCategories))
      }).catch(error => {
          const errorMsg = error.message
          dispatch(getAllVideoCategoriesFailure(errorMsg))
      })
    }
}
