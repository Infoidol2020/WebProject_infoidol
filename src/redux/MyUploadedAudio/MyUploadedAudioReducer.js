import { UPLOADED_AUDIO, UPLOADED_AUDIO_SUCCESS, UPLOADED_AUDIO_FAILURE, UPLOADED_AUDIO_RESET } from './MyUploadedAudioTypes'

const initialState = {
    MyUploadedAudioApi:{
    MyUploadedAudioInProgress: false,
    MyUploadedAudioSuccess:false,
    MyUploadedAudioFailed:false,
    MyUploadedAudio: [],
    }
}

const MyUploadedAudioReducer = (state = initialState, action) => {
    switch(action.type){
        case UPLOADED_AUDIO:
            return{
                ...state,
                MyUploadedAudioApi:{
                    MyUploadedAudioInProgress: true,
                    MyUploadedAudioSuccess:false,
                    MyUploadedAudioFailed:false,
                    MyUploadedAudio: [],
                    }
            
            }
            case UPLOADED_AUDIO_SUCCESS:
                return{
                    ...state,
                    MyUploadedAudioApi:{
                        MyUploadedAudioInProgress: false,
                        MyUploadedAudioSuccess:true,
                        MyUploadedAudioFailed:false,
                        MyUploadedAudio: action.payload,
                        }
                
                }
            case UPLOADED_AUDIO_FAILURE:
                return{
                    ...state,
                    MyUploadedAudioApi:{
                        MyUploadedAudioInProgress: false,
                        MyUploadedAudioSuccess:false,
                        MyUploadedAudioFailed:true,
                        MyUploadedAudio: [],
                        }
                
                }

                case UPLOADED_AUDIO_RESET:
                    return{
                        ...state,
                        MyUploadedAudioApi:{
                            MyUploadedAudioInProgress: false,
                            MyUploadedAudioSuccess:false,
                            MyUploadedAudioFailed:false,
                            }
                    
                    }

            default: return state 
    }
}

export default MyUploadedAudioReducer