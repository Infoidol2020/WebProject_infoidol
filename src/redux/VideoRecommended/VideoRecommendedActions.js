import axios from 'axios';
import { BASE_URL, USER_ID, DEVICE_ID } from '../Constants/ApiConstants'
import { VIDEO_RECOMMENDED, VIDEO_RECOMMENDED_SUCCESS, VIDEO_RECOMMENDED_FAILURE, VIDEO_RECOMMENDED_RESET } from './VideoRecommendedTypes'

export const VideoRecommended = () => {
    return{
        type: VIDEO_RECOMMENDED
    }
}

export const VideoRecommendedSuccess = (VideoRecommendedData) => {
    return{
        type: VIDEO_RECOMMENDED_SUCCESS,
        payload: VideoRecommendedData
    }
}
export const VideoRecommendedFailure = (error) => {
    return{
        type: VIDEO_RECOMMENDED_FAILURE,
        payload: error
    }
}

export const VideoRecommendedReset = () => {
    return{
        type: VIDEO_RECOMMENDED_RESET
    }
}



export const hitVideoRecommendedAPI = (offset, artist_id) => {
    // console.log('executed from VideoRecommended action', offset, artist_id)
    return (dispatch) => {
        dispatch(VideoRecommended())
            axios.post(`${BASE_URL}recommended_video_detail_page`,{
            "device_id": DEVICE_ID,
            "user_id": USER_ID,
            "offset": offset,
            "artist_id": artist_id
        }).then( response => {
        // console.log('response from VideoRecommended action', response.data.data)
            const VideoRecommendedResponse = response.data
            dispatch(VideoRecommendedSuccess(VideoRecommendedResponse))
        //     setTimeout(function(){
        //         dispatch(VideoRecommendedReset())
        //    }, 1000);
    }).catch(error => {
        const errorMsg = error.message
        dispatch(VideoRecommendedFailure(errorMsg))
    })
    }
}

