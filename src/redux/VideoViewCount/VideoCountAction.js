import axios from 'axios';
import { BASE_URL, DEVICE_ID, USER_ID } from '../Constants/ApiConstants';
import { GET_VIDEOCOUNT, GET_VIDEOCOUNT_SUCCESS, GET_VIDEOCOUNT_FAILURE } from './VideoCountType'
export const getVideoCount = () => {
    return{
        type: GET_VIDEOCOUNT
    }
}

export const getVideoCountSuccess = (videoCount) => {
    return{
        type: GET_VIDEOCOUNT_SUCCESS,
        payload: videoCount
    }
}

export const getVideoCountFailure = (error) => {
    return{
        type: GET_VIDEOCOUNT_FAILURE,
        payload: error
    }
}

export const fetchVideoCount = (video_id) => {
    // console.log('executed')
    return (dispatch) => {
        dispatch(getVideoCount)
        axios.post(`${BASE_URL}video_view_count`,{
            "user_id":USER_ID,
            "device_id":DEVICE_ID,
            "video_id":video_id
        }).then( response => {
            const allVideos = response.data.data
            dispatch(getVideoCountSuccess(allVideos))
        }).catch(error => {
            const errorMsg = error.message
            dispatch(getVideoCountFailure(errorMsg))
        })
    }
}