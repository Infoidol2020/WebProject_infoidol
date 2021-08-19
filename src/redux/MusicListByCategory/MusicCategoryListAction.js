import axios from 'axios';
import { BASE_URL, DEVICE_ID, USER_ID } from '../Constants/ApiConstants';
import { GET_ALL_AUDIOCATLIST, GET_ALL_AUDIOCATLIST_SUCCESS, GET_ALL_AUDIOCATLIST_FAILURE } from './MusicCategoryListType'
export const getAllAudioCatList = () => {
    return{
        type: GET_ALL_AUDIOCATLIST
    }
}

export const getAllAudioCatListSuccess = (AudioCatList) => {
    return{
        type: GET_ALL_AUDIOCATLIST_SUCCESS,
        payload: AudioCatList
    }
}

export const getAllAudioCatListFailure = (error) => {
    return{
        type: GET_ALL_AUDIOCATLIST_FAILURE,
        payload: error
    }
}

export const fetchAllAudioCatList = (cat_id) => {
    // console.log('executed from Audio catlist actions',cat_id )
    return (dispatch) => {
        dispatch(getAllAudioCatList());
        // console.log('inside return');
        axios.post(`${BASE_URL}music_list_by_category`,{
            "device_id":DEVICE_ID,
            "user_id":USER_ID,
            "cat_id":cat_id
        }).then( response => {
            const allAudioCatList = response.data.data;
            console.log('response from Audio cat list page1111', response.data.data);
            dispatch(getAllAudioCatListSuccess(allAudioCatList));
        }).catch(error => {
            const errorMsg = error.message
            dispatch(getAllAudioCatListFailure(errorMsg))
        })
    }
}