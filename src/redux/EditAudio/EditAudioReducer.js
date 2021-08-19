import { EDIT_AUDIO, EDIT_AUDIO_SUCCESS, EDIT_AUDIO_FAILURE,EDIT_AUDIO_RESET } from './EditAudioType'
const initialState = {
    editAudioApi:{
    editAudioProgress: false,
    editAudioSuccess:false,
    editAudioFailed:false,
    editAudio: {},
    }
}

const EditAudioReducer = (state = initialState, action) => {
    // console.log('editAudio reducer ok')
    switch(action.type){
        case EDIT_AUDIO:
            return{
                ...state,
                editAudioApi:{
                    editAudioProgress: true,
                    editAudioSuccess:false,
                    editAudioFailed:false,
                    editAudio: {},
                }
            }
            case EDIT_AUDIO_SUCCESS:
                return{
                    ...state,
                    editAudioApi:{
                        editAudioProgress: false,
                        editAudioSuccess:true,
                        editAudioFailed:false,
                        editAudio: action.payload,
                    }
                }
            case EDIT_AUDIO_FAILURE:
                return{
                    ...state,
                    editAudioApi:{
                        editAudioProgress: false,
                        editAudioSuccess:false,
                        editAudioFailed:true,
                        editAudio: {},
                    }
                }
            case EDIT_AUDIO_RESET:
                return{
                    ...state,
                    editAudioApi:{
                        editAudioProgress: false,
                        editAudioSuccess: false,
                        editAudioFailed: false,
                        editAudio: {},
                        // error: '',
                    }
                }

            default: return state 
    }
}

export default EditAudioReducer

