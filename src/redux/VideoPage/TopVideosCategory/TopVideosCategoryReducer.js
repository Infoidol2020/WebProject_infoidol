import { GET_TOP_CATEGORY_VIDEOS, GET_TOP_CATEGORY_VIDEOS_SUCCESS, GET_TOP_CATEGORY_VIDEOS_FAILURE } from './TopVideosCategoryTypes'
const initialState = {
    loading: false,
    topCategoryVideos: [],
    error: ''
}

 const VideoPageReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_TOP_CATEGORY_VIDEOS:
            return{
                ...state,
                loading: true
            }
            case GET_TOP_CATEGORY_VIDEOS_SUCCESS:
            return{
                loading: false,
                topCategoryVideos: action.payload,
                error: ''
            }
            case GET_TOP_CATEGORY_VIDEOS_FAILURE:
            return{
                loading: false,
                topCategoryVideos: [],
                error: action.payload
            }
            default: return state 
    }
}

export default VideoPageReducer