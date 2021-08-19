import axios from 'axios';
import { BASE_URL, USER_ID, DEVICE_ID } from '../Constants/ApiConstants'
import { ALL_VIDEO_PAGE, ALL_VIDEO_PAGE_SUCCESS, ALL_VIDEO_PAGE_FAILURE, ALL_VIDEO_PAGE_RESET } from './AllVideoPageTypes'

export const AllVideoPage = () => {
    return{
        type: ALL_VIDEO_PAGE
    }
}

export const AllVideoPageSuccess = (AllVideoPageData) => {
    return{
        type: ALL_VIDEO_PAGE_SUCCESS,
        payload: AllVideoPageData
    }
}
export const AllVideoPageFailure = (error) => {
    return{
        type: ALL_VIDEO_PAGE_FAILURE,
        payload: error
    }
}

export const AllVideoPageReset = () => {
    return{
        type: ALL_VIDEO_PAGE_RESET
    }
}



export const hitAllVideoPageAPI = (offset, type) => {
    // console.log('executed from AllVideoPage action', DEVICE_ID, USER_ID, offset, type)
    return (dispatch) => {
        dispatch(AllVideoPage())
            axios.post(`${BASE_URL}view_all_video_page`,{
            "device_id": DEVICE_ID,
            "user_id": USER_ID,
            "offset": offset, 
            "type": type
        }).then( response => {
        // console.log('response from AllVideoPage action', response.data)
            const AllVideoPageResponse = response.data
            dispatch(AllVideoPageSuccess(AllVideoPageResponse))
        //     setTimeout(function(){
        //         dispatch(AllVideoPageReset())
        //    }, 1000);
    }).catch(error => {
        const errorMsg = error.message
        dispatch(AllVideoPageFailure(errorMsg))
    })
    }
}

