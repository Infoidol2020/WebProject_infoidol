import axios from 'axios';
import { BASE_URL, USER_ID, DEVICE_ID } from '../Constants/ApiConstants'
import { TRENDING_PICTURES, TRENDING_PICTURES_SUCCESS, TRENDING_PICTURES_FAILURE, TRENDING_PICTURES_RESET } from './AllTrendingPicturesTypes'

export const AllTrendingPictures = () => {
    return{
        type: TRENDING_PICTURES
    }
}

export const AllTrendingPicturesSuccess = (AllTrendingPicturesData) => {
    return{
        type: TRENDING_PICTURES_SUCCESS,
        payload: AllTrendingPicturesData
    }
}
export const AllTrendingPicturesFailure = (error) => {
    return{
        type: TRENDING_PICTURES_FAILURE,
        payload: error
    }
}

export const AllTrendingPicturesReset = () => {
    return{
        type: TRENDING_PICTURES_RESET
    }
}



export const hitAllTrendingPicturesAPI = (offset) => {
    // console.log('executed from AllTrendingPictures action')
    return (dispatch) => {
        dispatch(AllTrendingPictures())
            axios.post(`${BASE_URL}view_all_tranding_picture`,{
            "device_id": DEVICE_ID,
            "user_id": USER_ID,
            "offset": offset
        }).then( response => {
        // console.log('response from AllTrendingPictures action', response.data.data)
            const AllTrendingPicturesResponse = response.data
            dispatch(AllTrendingPicturesSuccess(AllTrendingPicturesResponse))
        //     setTimeout(function(){
        //         dispatch(AllTrendingPicturesReset())
        //    }, 1000);
    }).catch(error => {
        const errorMsg = error.message
        dispatch(AllTrendingPicturesFailure(errorMsg))
    })
    }
}

