import { TRENDING_VIDEOS, TRENDING_VIDEOS_SUCCESS, TRENDING_VIDEOS_FAILURE, TRENDING_VIDEOS_RESET } from './AllTrendingVideosTypes'

const initialState = {
    TrendingVideosApi:{
    TrendingVideosInProgress: false,
    TrendingVideosSuccess:false,
    TrendingVideosFailed:false,
    TrendingVideos: [],
    }
}

const TrendingVideosReducer = (state = initialState, action) => {
    switch(action.type){
        case TRENDING_VIDEOS:
            return{
                ...state,
                TrendingVideosApi:{
                    TrendingVideosInProgress: true,
                    TrendingVideosSuccess:false,
                    TrendingVideosFailed:false,
                    TrendingVideos: [],
                    }
            
            }
            case TRENDING_VIDEOS_SUCCESS:
                return{
                    ...state,
                    TrendingVideosApi:{
                        TrendingVideosInProgress: false,
                        TrendingVideosSuccess:true,
                        TrendingVideosFailed:false,
                        TrendingVideos: action.payload,
                        }
                
                }
            case TRENDING_VIDEOS_FAILURE:
                return{
                    ...state,
                    TrendingVideosApi:{
                        TrendingVideosInProgress: false,
                        TrendingVideosSuccess:false,
                        TrendingVideosFailed:true,
                        TrendingVideos: [],
                        }
                
                }

                case TRENDING_VIDEOS_RESET:
                    return{
                        ...state,
                        TrendingVideosApi:{
                            TrendingVideosInProgress: false,
                            TrendingVideosSuccess:false,
                            TrendingVideosFailed:false,
                            }
                    
                    }

            default: return state 
    }
}

export default TrendingVideosReducer