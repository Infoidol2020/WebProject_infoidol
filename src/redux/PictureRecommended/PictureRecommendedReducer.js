import { PICTURE_RECOMMENDED, PICTURE_RECOMMENDED_SUCCESS, PICTURE_RECOMMENDED_FAILURE, PICTURE_RECOMMENDED_RESET } from './PictureRecommendedTypes'

const initialState = {
    PictureRecommendedApi:{
    PictureRecommendedInProgress: false,
    PictureRecommendedSuccess:false,
    PictureRecommendedFailed:false,
    PictureRecommended: [],
    }
}

const PictureRecommendedReducer = (state = initialState, action) => {
    switch(action.type){
        case PICTURE_RECOMMENDED:
            return{
                ...state,
                PictureRecommendedApi:{
                    PictureRecommendedInProgress: true,
                    PictureRecommendedSuccess:false,
                    PictureRecommendedFailed:false,
                    PictureRecommended: [],
                    }
            
            }
            case PICTURE_RECOMMENDED_SUCCESS:
                return{
                    ...state,
                    PictureRecommendedApi:{
                        PictureRecommendedInProgress: false,
                        PictureRecommendedSuccess:true,
                        PictureRecommendedFailed:false,
                        PictureRecommended: action.payload,
                        }
                
                }
            case PICTURE_RECOMMENDED_FAILURE:
                return{
                    ...state,
                    PictureRecommendedApi:{
                        PictureRecommendedInProgress: false,
                        PictureRecommendedSuccess:false,
                        PictureRecommendedFailed:true,
                        PictureRecommended: [],
                        }
                
                }

                case PICTURE_RECOMMENDED_RESET:
                    return{
                        ...state,
                        PictureRecommendedApi:{
                            PictureRecommendedInProgress: false,
                            PictureRecommendedSuccess:false,
                            PictureRecommendedFailed:false,
                            }
                    
                    }

            default: return state 
    }
}

export default PictureRecommendedReducer