import { GET_ALL_AUDIOS, GET_ALL_AUDIOS_SUCCESS, GET_ALL_AUDIOS_FAILURE } from './AudioPageTypes'
const initialState = {
    AudioPageGetApi : {
        AudioPageInProgress : false,
        AudioPageSuccess : false,
        AudioPageFailed : false,
        allAudioPageApi : [],
        error : '',
    }
}

 const AudioPageReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_ALL_AUDIOS:
            return{
                ...state,
                AudioPageGetApi:{
                    AudioPageInProgress: true,
                    AudioPageSuccess:false,
                    AudioPageFailed:false,
                    allAudioPageApi: [],
                    error: '',
                    }            }
            case GET_ALL_AUDIOS_SUCCESS:
            return{
                ...state,
                    AudioPageGetApi:{
                        AudioPageInProgress: false,
                        AudioPageSuccess:true,
                        AudioPageFailed:false,
                        allAudioPageApi: action.payload,
                        error: '',
                        }
            }
            case GET_ALL_AUDIOS_FAILURE:
            return{
                ...state,
                    AudioPageGetApi:{
                        AudioPageInProgress: false,
                        AudioPageSuccess:false,
                        AudioPageFailed:true,
                        allAudioPageApi: [],
                        error: '',
                        }
            }
            default: return state 
    }
}

export default AudioPageReducer