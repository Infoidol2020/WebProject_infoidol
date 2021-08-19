import { GET_ALL_AUDIO_CATEGORIES, GET_ALL_AUDIO_CATEGORIES_SUCCESS, GET_ALL_AUDIO_CATEGORIES_FAILURE } from './AudioCategoriesTypes'
const initialState = {
    AudioCategoriesGetApi:{
    AudioCategoriesInProgress: false,
    AudioCategoriesSuccess:false,
    AudioCategoriesFailed:false,
    AudioCategories: [],
    error: '',
    }
}

 const AudioCategoriesReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_ALL_AUDIO_CATEGORIES:
            return{
                ...state,
                AudioCategoriesGetApi:{
                    AudioCategoriesInProgress: true,
                    AudioCategoriesSuccess:false,
                    AudioCategoriesFailed:false,
                    AudioCategories: [],
                    error: '',
                    }
               
            }
            case GET_ALL_AUDIO_CATEGORIES_SUCCESS:
                return{
                    ...state,
                    AudioCategoriesGetApi:{
                        AudioCategoriesInProgress: false,
                        AudioCategoriesSuccess:true,
                        AudioCategoriesFailed:false,
                        AudioCategories: action.payload,
                        error: '',
                        }
                   
                }
            case GET_ALL_AUDIO_CATEGORIES_FAILURE:
                return{
                    ...state,
                    AudioCategoriesGetApi:{
                        AudioCategoriesInProgress: false,
                        AudioCategoriesSuccess:false,
                        AudioCategoriesFailed:true,
                        AudioCategories: [],
                        error: '',
                        }
                   
                }
            default: return state 
    }
}

export default AudioCategoriesReducer
