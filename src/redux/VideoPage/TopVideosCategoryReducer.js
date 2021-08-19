import { GET_TOP_CATEGORY_VIDEOS, GET_TOP_CATEGORY_VIDEOS_SUCCESS, GET_TOP_CATEGORY_VIDEOS_FAILURE } from './TopVideosCategoryTypes'
const initialState = {
    VideoPageGetApi:{
    VideoPageInProgress: false,
    VideoPageSuccess:false,
    VideoPageFailed:false,
    allVideo: [],
    error: '',
    }
}
 const VideoPageReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_TOP_CATEGORY_VIDEOS:
            return{
                ...state,
                VideoPageGetApi:{
                    VideoPageInProgress: true,
                    VideoPageSuccess:false,
                    VideoPageFailed:false,
                    allVideo: [],
                    error: '',
                    }
            }
            case GET_TOP_CATEGORY_VIDEOS_SUCCESS:
                return{
                    ...state,
                    VideoPageGetApi:{
                        VideoPageInProgress: false,
                        VideoPageSuccess:true,
                        VideoPageFailed:false,
                        allVideo: action.payload,
                        error: '',
                        }
                }
            case GET_TOP_CATEGORY_VIDEOS_FAILURE:
                return{
                    ...state,
                    VideoPageGetApi:{
                        VideoPageInProgress: false,
                        VideoPageSuccess:false,
                        VideoPageFailed:true,
                        allVideo: [],
                        error: '',
                        }
                }
            default: return state 
    }
}
export default VideoPageReducer
// const initialState = {
//     loading: false,
//     topCategoryVideos: [],
//     error: ''
// }

//  const VideoPageReducer = (state = initialState, action) => {
//     switch(action.type){
//         case GET_TOP_CATEGORY_VIDEOS:
//             return{
//                 ...state,
//                 loading: true
//             }
//             case GET_TOP_CATEGORY_VIDEOS_SUCCESS:
//             return{
//                 loading: false,
//                 topCategoryVideos: action.payload,
//                 error: ''
//             }
//             case GET_TOP_CATEGORY_VIDEOS_FAILURE:
//             return{
//                 loading: false,
//                 topCategoryVideos: [],
//                 error: action.payload
//             }
//             default: return state 
//     }
// }

// export default VideoPageReducer




