import axios from 'axios';
import { BASE_URL, DEVICE_ID, USER_ID } from '../Constants/ApiConstants';
import { GET_ALL_AUDIOS_ITEMS, GET_ALL_AUDIOS_ITEMS_SUCCESS, GET_ALL_AUDIOS_ITEMS_FAILURE,GET_MUSIC_ITEMS_FROM_ALL_COMPONENTS } from './AudioItemTypes'

export const getAllAudiosItem = () => {
    return{
        type: GET_ALL_AUDIOS_ITEMS
    }
}

export const getAllAudiosItemSuccess = (Audios) => {
    return{
        type: GET_ALL_AUDIOS_ITEMS_SUCCESS,
        payload: Audios
    }
}

export const getAllAudiosItemFailure = (error) => {
    return{
        type: GET_ALL_AUDIOS_ITEMS_FAILURE,
        payload: error
    }
}


export const fetchAllAudiosItem = () => {
    // console.log('executed from AudioItemActions')
    return (dispatch) => {
        dispatch(getAllAudiosItem)
        axios.post(`${BASE_URL}music_page`,{
            "device_id": DEVICE_ID,
            "user_id": USER_ID,
        }).then( response => {
            const allAudios = response.data.data
            // console.log('allAudiossssssssssss', allAudios)
            allAudios && dispatch(getAllAudiosItemSuccess(allAudios))
        }).catch(error => {
            const errorMsg = error.message
            dispatch(getAllAudiosItemFailure(errorMsg))
        })
    }
}

