import { GET_TRENDING_VIDEOS, GET_TRENDING_VIDEOS_SUCCESS, GET_TRENDING_VIDEOS_FAILURE } from './TrendingVideoTypes'
const initialState = {
    loading: false,
    trendingVideos: [],
    error: ''
}

 const TrendingVideoReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_TRENDING_VIDEOS:
            return{
                ...state,
                loading: true
            }
            case GET_TRENDING_VIDEOS_SUCCESS:
            return{
                loading: false,
                trendingVideos: action.payload,
                error: ''
            }
            case GET_TRENDING_VIDEOS_FAILURE:
            return{
                loading: false,
                users: [],
                error: action.payload
            }
            default: return state 
    }
}

export default TrendingVideoReducer