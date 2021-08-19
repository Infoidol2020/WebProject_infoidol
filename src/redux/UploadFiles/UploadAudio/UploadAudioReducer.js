import { UPLOAD_AUDIO, UPLOAD_AUDIO_SUCCESS, UPLOAD_AUDIO_FAILURE } from './UploadAudioTypes'
const initialState = {
    UploadAudioGetApi:{
    UploadAudioInProgress: false,
    UploadAudioSuccess:false,
    UploadAudioFailed:false,
    UploadAudio: [],
    error: '',
    }
}

 const UploadAudioReducer = (state = initialState, action) => {
    switch(action.type){
        case UPLOAD_AUDIO:
            return{
                ...state,
                UploadAudioGetApi:{
                    UploadAudioInProgress: true,
                    UploadAudioSuccess:false,
                    UploadAudioFailed:false,
                    UploadAudio: [],
                    error: '',
                    }
               
            }
            case UPLOAD_AUDIO_SUCCESS:
                return{
                    ...state,
                    UploadAudioGetApi:{
                        UploadAudioInProgress: false,
                        UploadAudioSuccess:true,
                        UploadAudioFailed:false,
                        UploadAudio: action.payload,
                        error: '',
                        }
                   
                }
            case UPLOAD_AUDIO_FAILURE:
                return{
                    ...state,
                    UploadAudioGetApi:{
                        UploadAudioInProgress: false,
                        UploadAudioSuccess:false,
                        UploadAudioFailed:true,
                        UploadAudio: [],
                        error: '',
                        }
                   
                }
            default: return state 
    }
}

export default UploadAudioReducer
