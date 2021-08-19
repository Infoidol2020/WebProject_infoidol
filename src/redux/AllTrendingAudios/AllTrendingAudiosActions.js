import axios from 'axios';
import { BASE_URL, USER_ID, DEVICE_ID } from '../Constants/ApiConstants'
import { TRENDING_AUDIOS, TRENDING_AUDIOS_SUCCESS, TRENDING_AUDIOS_FAILURE, TRENDING_AUDIOS_RESET } from './AllTrendingAudiosTypes'

export const AllTrendingAudios = () => {
    return{
        type: TRENDING_AUDIOS
    }
}

export const AllTrendingAudiosSuccess = (AllTrendingAudiosData) => {
    return{
        type: TRENDING_AUDIOS_SUCCESS,
        payload: AllTrendingAudiosData
    }
}
export const AllTrendingAudiosFailure = (error) => {
    return{
        type: TRENDING_AUDIOS_FAILURE,
        payload: error
    }
}

export const AllTrendingAudiosReset = () => {
    return{
        type: TRENDING_AUDIOS_RESET
    }
}



export const hitAllTrendingAudiosAPI = (offset) => {
    // console.log('executed from AllTrendingAudios action')
    return (dispatch) => {
        dispatch(AllTrendingAudios())
            axios.post(`${BASE_URL}view_all_tranding_music`,{
            "device_id": DEVICE_ID,
            "user_id": USER_ID,
            "offset": offset
        }).then( response => {
        // console.log('response from AllTrendingAudios action', response.data)
            const AllTrendingAudiosResponse = response.data
            dispatch(AllTrendingAudiosSuccess(AllTrendingAudiosResponse))
        //     setTimeout(function(){
        //         dispatch(AllTrendingAudiosReset())
        //    }, 1000);
    }).catch(error => {
        const errorMsg = error.message
        dispatch(AllTrendingAudiosFailure(errorMsg))
    })
    }
}

