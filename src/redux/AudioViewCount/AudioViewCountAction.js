import axios from 'axios';
import { BASE_URL, DEVICE_ID, USER_ID } from '../Constants/ApiConstants';
import { GET_AUDIOCOUNT, GET_AUDIOCOUNT_SUCCESS, GET_AUDIOCOUNT_FAILURE } from './AudioViewCountType'
export const getAudioCount = () => {
    return{
        type: GET_AUDIOCOUNT
    }
}

export const getAudioCountSuccess = (AudioCount) => {
    return{
        type: GET_AUDIOCOUNT_SUCCESS,
        payload: AudioCount
    }
}

export const getAudioCountFailure = (error) => {
    return{
        type: GET_AUDIOCOUNT_FAILURE,
        payload: error
    }
}

export const fetchAudioCount = (Audio_id) => {
    // console.log('executed')
    return (dispatch) => {
        dispatch(getAudioCount)
        axios.post(`${BASE_URL}music_view_count`,{
            "user_id":USER_ID,
            "device_id":DEVICE_ID,
            "Audio_id":Audio_id
        }).then( response => {
            const allAudios = response.data.data
            dispatch(getAudioCountSuccess(allAudios))
        }).catch(error => {
            const errorMsg = error.message
            dispatch(getAudioCountFailure(errorMsg))
        })
    }
}