import { GET_ALL_AUDIOCATLIST, GET_ALL_AUDIOCATLIST_SUCCESS, GET_ALL_AUDIOCATLIST_FAILURE } from './MusicCategoryListType'
const initialState = {
    AudioCatListPageGetApi:{
    AudioCatListPageInProgress: false,
    AudioCatListPageSuccess:false,
    AudioCatListPageFailed:false,
    allAudioCatList: [],
    error: '',
    }
}
 const AudioCategoryListReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_ALL_AUDIOCATLIST:
            return{
                ...state,
                AudioCatListPageGetApi:{
                    AudioCatListPageInProgress: true,
                    AudioCatListPageSuccess:false,
                    AudioCatListPageFailed:false,
                    allAudioCatList: [],
                    error: '',
                    }
            }
            case GET_ALL_AUDIOCATLIST_SUCCESS:
                return{
                    ...state,
                    AudioCatListPageGetApi:{
                        AudioCatListPageInProgress: false,
                        AudioCatListPageSuccess:true,
                        AudioCatListPageFailed:false,
                        allAudioCatList: action.payload,
                        error: '',
                        }
                }
            case GET_ALL_AUDIOCATLIST_FAILURE:
                return{
                    ...state,
                    AudioCatListPageGetApi:{
                        AudioCatListPageInProgress: false,
                        AudioCatListPageSuccess:false,
                        AudioCatListPageFailed:true,
                        allAudioCatList: [],
                        error: '',
                        }
                }
            default: return state 
    }
}
export default AudioCategoryListReducer
