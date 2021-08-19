import { GET_ALL_VIDEOVIEW, GET_ALL_VIDEOVIEW_SUCCESS, GET_ALL_VIDEOVIEW_FAILURE } from './VideoViewPageTypes'
const initialState = {
    VideoDetailPageGetApi:{
    VideoDetailPageInProgress: false,
    VideoDetailPageSuccess:false,
    VideoDetailPageFailed:false,
    allVideoDetail: [],
    error: '',
    }
}
 const VideoViewPageReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_ALL_VIDEOVIEW:
            return{
                ...state,
                VideoDetailPageGetApi:{
                    VideoDetailPageInProgress: true,
                    VideoDetailPageSuccess:false,
                    VideoDetailPageFailed:false,
                    allVideoDetail: [],
                    error: '',
                    }
            }
            case GET_ALL_VIDEOVIEW_SUCCESS:
                return{
                    ...state,
                    VideoDetailPageGetApi:{
                        VideoDetailPageInProgress: false,
                        VideoDetailPageSuccess:true,
                        VideoDetailPageFailed:false,
                        allVideoDetail: action.payload,
                        error: '',
                        }
                }
            case GET_ALL_VIDEOVIEW_FAILURE:
                return{
                    ...state,
                    VideoDetailPageGetApi:{
                        VideoDetailPageInProgress: false,
                        VideoDetailPageSuccess:false,
                        VideoDetailPageFailed:true,
                        allVideoDetail: [],
                        error: '',
                        }
                }
            default: return state 
    }
}
export default VideoViewPageReducer
// const initialState = {
//     loading: false,
//     allVideoView: [],
//     error: ''
// }

//  const VideoViewPageReducer = (state = initialState, action) => {
//     switch(action.type){
//         case GET_ALL_VIDEOVIEW:
//             return{
//                 ...state,
//                 loading: true
//             }
//             case GET_ALL_VIDEOVIEW_SUCCESS:
//             return{
//                 loading: false,
//                 allVideoView: action.payload,
//                 error: ''
//             }
//             case GET_ALL_VIDEOVIEW_FAILURE:
//             return{
//                 loading: false,
//                 allVideoView: [],
//                 error: action.payload
//             }
//             default: return state 
//     }
// }

// export default VideoViewPageReducer