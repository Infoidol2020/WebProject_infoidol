import axios from 'axios';
import { BASE_URL, USER_ID, DEVICE_ID } from '../Constants/ApiConstants'
import { UPLOADED_AUDIO, UPLOADED_AUDIO_SUCCESS, UPLOADED_AUDIO_FAILURE, UPLOADED_AUDIO_RESET } from './MyUploadedAudioTypes'

export const MyUploadedAudio = () => {
    return{
        type: UPLOADED_AUDIO
    }
}

export const MyUploadedAudioSuccess = (MyUploadedAudioData) => {
    return{
        type: UPLOADED_AUDIO_SUCCESS,
        payload: MyUploadedAudioData
    }
}
export const MyUploadedAudioFailure = (error) => {
    return{
        type: UPLOADED_AUDIO_FAILURE,
        payload: error
    }
}

export const MyUploadedAudioReset = () => {
    return{
        type: UPLOADED_AUDIO_RESET
    }
}



export const hitMyUploadedAudioAPI = (profile_id, offset) => {
    // console.log('executed from MyUploadedAudio action')
    return (dispatch) => {
        dispatch(MyUploadedAudio())
        // axios.post(`${BASE_URL}view_all_tranding_UPLOADED_AUDIO`,{
            axios.post(`https://dev.infoidol.com/admin/WebApi/uploaded_music`,{
            "user_id": USER_ID,
            "device_id": DEVICE_ID,
            "profile_id": profile_id,
            "offset": offset,
        }).then( response => {
        // console.log('response from MyUploadedAudio action', response.data)
            const MyUploadedAudioResponse = response.data
            dispatch(MyUploadedAudioSuccess(MyUploadedAudioResponse))
        //     setTimeout(function(){
        //         dispatch(MyUploadedAudioReset())
        //    }, 1000);
    }).catch(error => {
        const errorMsg = error.message
        dispatch(MyUploadedAudioFailure(errorMsg))
    })
    }
}

