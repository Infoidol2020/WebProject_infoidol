import axios from 'axios';
import { BASE_URL, DEVICE_ID, USER_ID } from '../Constants/ApiConstants';
import { GET_ALL_VIDEOVIEW, GET_ALL_VIDEOVIEW_SUCCESS, GET_ALL_VIDEOVIEW_FAILURE } from './VideoViewPageTypes'
export const getAllVideoView = () => {
    return{
        type: GET_ALL_VIDEOVIEW
    }
}

export const getAllVideoViewSuccess = (VideoView) => {
    return{
        type: GET_ALL_VIDEOVIEW_SUCCESS,
        payload: VideoView
    }
}

export const getAllVideoViewFailure = (error) => {
    return{
        type: GET_ALL_VIDEOVIEW_FAILURE,
        payload: error
    }
}

export const fetchAllVideoView = (video_id) => {
    // console.log('executed from video page actions', video_id)
    return (dispatch) => {
        dispatch(getAllVideoView());
        // console.log('inside return');
        axios.post(`${BASE_URL}video_detail_page`,{
            "device_id":DEVICE_ID,
            "user_id":USER_ID,
            "video_id": video_id
        }).then( response => {
            const allVideoView = response.data.data;
            // console.log('response from Video View page1111', response);
            dispatch(getAllVideoViewSuccess(allVideoView));
        }).catch(error => {
            const errorMsg = error.message
            dispatch(getAllVideoViewFailure(errorMsg))
      })
    }
}