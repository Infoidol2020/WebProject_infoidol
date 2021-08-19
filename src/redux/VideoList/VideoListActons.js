import axios from 'axios';
import { BASE_URL, DEVICE_ID, USER_ID } from '../Constants/ApiConstants';
import { GET_ALL_VIDEOLIST, GET_ALL_VIDEOLIST_SUCCESS, GET_ALL_VIDEOLIST_FAILURE,GET_ALL_VIDEOLIST_RESET } from './VideoListTypes'
export const getAllVideoList= () => {
    return{
        type: GET_ALL_VIDEOLIST
    }
}

export const getAllVideoListSuccess = (VideoList) => {
    // console.log('qwertyuiokjhgvc', VideoList)
    return{
        type: GET_ALL_VIDEOLIST_SUCCESS,
        payload: VideoList
    }
}

export const getAllVideoListFailure = (error) => {
    return{
        type: GET_ALL_VIDEOLIST_FAILURE,
        payload: error
    }
}
export const VideoListReset = () => {
    return{
        type: GET_ALL_VIDEOLIST_RESET
    }
}

export const fetchAllVideoList = () => {
    // console.log('executed from VideoList actions')
    return (dispatch) => {
        dispatch(getAllVideoList);
        axios.post(`${BASE_URL}video_list`,{
            "device_id":DEVICE_ID,
            "user_id":USER_ID,
        }).then( response => {
            const allVideoList = response.data.data;
            // console.log('response from VideoList page', response.data.data);
            dispatch(getAllVideoListSuccess(allVideoList));
            // setTimeout(function(){
            //     dispatch(VideoListReset())
            // }, 1000);
        }).catch(error => {
            const errorMsg = error.message
            dispatch(getAllVideoListFailure(errorMsg))
        })
    }
}