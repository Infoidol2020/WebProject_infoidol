import { GET_AUDIOCOUNT, GET_AUDIOCOUNT_SUCCESS, GET_AUDIOCOUNT_FAILURE } from './AudioViewCountType'
const initialState = {
    AudioCountGetApi:{
    AudioCountInProgress: false,
    AudioCountSuccess:false,
    AudioCountFailed:false,
    allAudioCount: [],
    error: '',
    }
}
 const AudioViewCountReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_AUDIOCOUNT:
            return{
                ...state,
                AudioCountGetApi:{
                    AudioCountInProgress: true,
                    AudioCountSuccess:false,
                    AudioCountFailed:false,
                    allAudioCount: [],
                    error: '',
                    }
            }
            case GET_AUDIOCOUNT_SUCCESS:
                return{
                    ...state,
                    AudioCountGetApi:{
                        AudioCountInProgress: false,
                        AudioCountSuccess:true,
                        AudioCountFailed:false,
                        allAudioCount: action.payload,
                        error: '',
                        }
                }
            case GET_AUDIOCOUNT_FAILURE:
                return{
                    ...state,
                    AudioCountGetApi:{
                        AudioCountInProgress: false,
                        AudioCountSuccess:false,
                        AudioCountFailed:true,
                        allAudioCount: [],
                        error: '',
                        }
                }
            default: return state 
    }
}
export default AudioViewCountReducer
