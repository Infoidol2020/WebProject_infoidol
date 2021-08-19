import axios from 'axios';
import { BASE_URL, USER_ID, DEVICE_ID } from '../Constants/ApiConstants'
import { PICTURE_RECOMMENDED, PICTURE_RECOMMENDED_SUCCESS, PICTURE_RECOMMENDED_FAILURE, PICTURE_RECOMMENDED_RESET } from './PictureRecommendedTypes'

export const PictureRecommended = () => {
    return{
        type: PICTURE_RECOMMENDED
    }
}

export const PictureRecommendedSuccess = (PictureRecommendedData) => {
    return{
        type: PICTURE_RECOMMENDED_SUCCESS,
        payload: PictureRecommendedData
    }
}
export const PictureRecommendedFailure = (error) => {
    return{
        type: PICTURE_RECOMMENDED_FAILURE,
        payload: error
    }
}

export const PictureRecommendedReset = () => {
    return{
        type: PICTURE_RECOMMENDED_RESET
    }
}



export const hitPictureRecommendedAPI = (offset, artist_id) => {
    // console.log('executed from PictureRecommended action', offset, artist_id)
    return (dispatch) => {
        dispatch(PictureRecommended())
            // axios.post(`${BASE_URL}recommended_video_detail_page`,{
            axios.post(`https://infoidol.com/admin/WebApi/recommended_picture_detail_page`,{
            "device_id": DEVICE_ID,
            "user_id": USER_ID,
            "offset": offset,
            "artist_id": artist_id
        }).then( response => {
        // console.log('response from PictureRecommended action', response.data.data)
            const PictureRecommendedResponse = response.data
            dispatch(PictureRecommendedSuccess(PictureRecommendedResponse))
        //     setTimeout(function(){
        //         dispatch(PictureRecommendedReset())
        //    }, 1000);
    }).catch(error => {
        const errorMsg = error.message
        dispatch(PictureRecommendedFailure(errorMsg))
    })
    }
}

