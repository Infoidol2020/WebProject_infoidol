import axios from 'axios';
import { BASE_URL, USER_ID, DEVICE_ID } from '../Constants/ApiConstants'
import { ALL_MUSIC_PAGE, ALL_MUSIC_PAGE_SUCCESS, ALL_MUSIC_PAGE_FAILURE, ALL_MUSIC_PAGE_RESET } from './AllMusicPageTypes'

export const AllMusicPage = () => {
    return{
        type: ALL_MUSIC_PAGE
    }
}

export const AllMusicPageSuccess = (AllMusicPageData) => {
    return{
        type: ALL_MUSIC_PAGE_SUCCESS,
        payload: AllMusicPageData
    }
}
export const AllMusicPageFailure = (error) => {
    return{
        type: ALL_MUSIC_PAGE_FAILURE,
        payload: error
    }
}

export const AllMusicPageReset = () => {
    return{
        type: ALL_MUSIC_PAGE_RESET
    }
}



export const hitAllMusicPageAPI = (offset, type) => {
    // console.log('executed from AllMusicPage action', DEVICE_ID, USER_ID, offset, type)
    return (dispatch) => {
        dispatch(AllMusicPage())
            axios.post(`${BASE_URL}view_all_music_page`,{
            "device_id": DEVICE_ID,
            "user_id": USER_ID,
            "offset": offset, 
            "type": type
        }).then( response => {
        // console.log('response from AllMusicPage action', response.data)
            const AllMusicPageResponse = response.data
            dispatch(AllMusicPageSuccess(AllMusicPageResponse))
        //     setTimeout(function(){
        //         dispatch(AllMusicPageReset())
        //    }, 1000);
    }).catch(error => {
        const errorMsg = error.message
        dispatch(AllMusicPageFailure(errorMsg))
    })
    }
}

