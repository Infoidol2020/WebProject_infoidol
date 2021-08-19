import { VIDEO_RECOMMENDED, VIDEO_RECOMMENDED_SUCCESS, VIDEO_RECOMMENDED_FAILURE, VIDEO_RECOMMENDED_RESET } from './VideoRecommendedTypes'

const initialState = {
    VideoRecommendedApi:{
    VideoRecommendedInProgress: false,
    VideoRecommendedSuccess:false,
    VideoRecommendedFailed:false,
    VideoRecommended: [],
    }
}

const VideoRecommendedReducer = (state = initialState, action) => {
    switch(action.type){
        case VIDEO_RECOMMENDED:
            return{
                ...state,
                VideoRecommendedApi:{
                    VideoRecommendedInProgress: true,
                    VideoRecommendedSuccess:false,
                    VideoRecommendedFailed:false,
                    VideoRecommended: [],
                    }
            
            }
            case VIDEO_RECOMMENDED_SUCCESS:
                return{
                    ...state,
                    VideoRecommendedApi:{
                        VideoRecommendedInProgress: false,
                        VideoRecommendedSuccess:true,
                        VideoRecommendedFailed:false,
                        VideoRecommended: action.payload,
                        }
                
                }
            case VIDEO_RECOMMENDED_FAILURE:
                return{
                    ...state,
                    VideoRecommendedApi:{
                        VideoRecommendedInProgress: false,
                        VideoRecommendedSuccess:false,
                        VideoRecommendedFailed:true,
                        VideoRecommended: [],
                        }
                
                }

                case VIDEO_RECOMMENDED_RESET:
                    return{
                        ...state,
                        VideoRecommendedApi:{
                            VideoRecommendedInProgress: false,
                            VideoRecommendedSuccess:false,
                            VideoRecommendedFailed:false,
                            }
                    
                    }

            default: return state 
    }
}

export default VideoRecommendedReducer