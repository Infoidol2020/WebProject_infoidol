import axios from 'axios';
import { BASE_URL, DEVICE_ID, USER_ID } from '../Constants/ApiConstants';
import { GET_TOP_CATEGORY_VIDEOS, GET_TOP_CATEGORY_VIDEOS_SUCCESS, GET_TOP_CATEGORY_VIDEOS_FAILURE } from './TopVideosCategoryTypes'
export const getTopCategoryVideos = () => {
    return{
        type: GET_TOP_CATEGORY_VIDEOS
    }
}

export const getTopCategoryVideosSuccess = (videos) => {
    return{
        type: GET_TOP_CATEGORY_VIDEOS_SUCCESS,
        payload: videos
    }
}

export const getTopCategoryVideosFailure = (error) => {
    return{
        type: GET_TOP_CATEGORY_VIDEOS_FAILURE,
        payload: error
    }
}

export const fetchTopCategoryVideos = () => {
    // console.log('executed')
    return (dispatch) => {
        dispatch(getTopCategoryVideos)
        axios.post(`${BASE_URL}video_page`,{
            "device_id":DEVICE_ID,
            "user_id":USER_ID,
        }).then( response => {
            const allVideos = response.data.data
            dispatch(getTopCategoryVideosSuccess(allVideos))
        }).catch(error => {
            const errorMsg = error.message
            dispatch(getTopCategoryVideosFailure(errorMsg))
        })
    }
}