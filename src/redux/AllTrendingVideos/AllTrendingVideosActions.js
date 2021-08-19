import axios from 'axios';
import { BASE_URL, USER_ID, DEVICE_ID } from '../Constants/ApiConstants'
import { TRENDING_VIDEOS, TRENDING_VIDEOS_SUCCESS, TRENDING_VIDEOS_FAILURE, TRENDING_VIDEOS_RESET } from './AllTrendingVideosTypes'

export const AllTrendingVideos = () => {
    return{
        type: TRENDING_VIDEOS
    }
}

export const AllTrendingVideosSuccess = (AllTrendingVideosData) => {
    return{
        type: TRENDING_VIDEOS_SUCCESS,
        payload: AllTrendingVideosData
    }
}
export const AllTrendingVideosFailure = (error) => {
    return{
        type: TRENDING_VIDEOS_FAILURE,
        payload: error
    }
}

export const AllTrendingVideosReset = () => {
    return{
        type: TRENDING_VIDEOS_RESET
    }
}



export const hitAllTrendingVideosAPI = (offset) => {
    // console.log('executed from AllTrendingVideos action')
    return (dispatch) => {
        dispatch(AllTrendingVideos())
            axios.post(`${BASE_URL}view_all_tranding_videos`,{
            "device_id": DEVICE_ID,
            "user_id": USER_ID,
            "offset": offset
        }).then( response => {
        // console.log('response from AllTrendingVideos action', response.data.data)
            const AllTrendingVideosResponse = response.data
            dispatch(AllTrendingVideosSuccess(AllTrendingVideosResponse))
        //     setTimeout(function(){
        //         dispatch(AllTrendingVideosReset())
        //    }, 1000);
    }).catch(error => {
        const errorMsg = error.message
        dispatch(AllTrendingVideosFailure(errorMsg))
    })
    }
}

