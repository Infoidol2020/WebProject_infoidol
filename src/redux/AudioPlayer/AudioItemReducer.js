import { GET_ALL_AUDIOS_ITEMS, GET_ALL_AUDIOS_ITEMS_SUCCESS, GET_ALL_AUDIOS_ITEMS_FAILURE } from './AudioItemTypes'
const initialState = {
    AudioPlayerGetApi : {
        AudioPlayerInProgress : false,
        AudioPlayerSuccess : false,
        AudioPlayerFailed : false,
        allAudioPlayerApi : [],
        error : '',
    }
}

 const AudioItemReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_ALL_AUDIOS_ITEMS:
            return{
                ...state,
                AudioPlayerGetApi:{
                    AudioPlayerInProgress: true,
                    AudioPlayerSuccess:false,
                    AudioPlayerFailed:false,
                    allAudioPlayerApi: [],
                    error: '',
                    }            }
            case GET_ALL_AUDIOS_ITEMS_SUCCESS:
            return{
                ...state,
                    AudioPlayerGetApi:{
                        AudioPlayerInProgress: false,
                        AudioPlayerSuccess:true,
                        AudioPlayerFailed:false,
                        allAudioPlayerApi: action.payload,
                        error: '',
                        }
            }
            case GET_ALL_AUDIOS_ITEMS_FAILURE:
            return{
                ...state,
                    AudioPlayerGetApi:{
                        AudioPlayerInProgress: false,
                        AudioPlayerSuccess:false,
                        AudioPlayerFailed:true,
                        allAudioPlayerApi: [],
                        error: '',
                        }
            }
            default: return state 
    }
}

export default AudioItemReducer