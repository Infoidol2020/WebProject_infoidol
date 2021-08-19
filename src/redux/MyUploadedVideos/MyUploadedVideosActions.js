import axios from 'axios';
import { BASE_URL, USER_ID, DEVICE_ID } from '../Constants/ApiConstants'
import { UPLOADED_VIDEOS, UPLOADED_VIDEOS_SUCCESS, UPLOADED_VIDEOS_FAILURE, UPLOADED_VIDEOS_RESET } from './MyUploadedVideosTypes'

export const MyUploadedVideos = () => {
    return{
        type: UPLOADED_VIDEOS
    }
}

export const MyUploadedVideosSuccess = (MyUploadedVideosData) => {
    return{
        type: UPLOADED_VIDEOS_SUCCESS,
        payload: MyUploadedVideosData
    }
}
export const MyUploadedVideosFailure = (error) => {
    return{
        type: UPLOADED_VIDEOS_FAILURE,
        payload: error
    }
}

export const MyUploadedVideosReset = () => {
    return{
        type: UPLOADED_VIDEOS_RESET
    }
}



export const hitMyUploadedVideosAPI = (profile_id, offset) => {
    // console.log('executed from MyUploadedVideos action')
    return (dispatch) => {
        dispatch(MyUploadedVideos())
        // axios.post(`${BASE_URL}view_all_tranding_UPLOADED_VIDEOS`,{
            axios.post(`https://dev.infoidol.com/admin/WebApi/uploaded_video`,{
            "device_id": DEVICE_ID,
            "user_id": USER_ID,
            "offset": offset,
            "profile_id": profile_id,
        }).then( response => {
        // console.log('response from MyUploadedVideos action', response.data)
            const MyUploadedVideosResponse = response.data
            dispatch(MyUploadedVideosSuccess(MyUploadedVideosResponse))
        //     setTimeout(function(){
        //         dispatch(MyUploadedVideosReset())
        //    }, 1000);
    }).catch(error => {
        const errorMsg = error.message
        dispatch(MyUploadedVideosFailure(errorMsg))
    })
    }
}

