import { GET_ALL_VIDEOLIST, GET_ALL_VIDEOLIST_SUCCESS, GET_ALL_VIDEOLIST_FAILURE, GET_ALL_VIDEOLIST_RESET } from './VideoListTypes'
const initialState = {
    VideoListApi:{
    VideoListInProgress: false,
    VideoListSuccess:false,
    VideoListFailed:false,
    VideoListResponse: [],
    }
}

 const VideoListReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_ALL_VIDEOLIST:
            return{
                ...state,
                VideoListApi:{
                    VideoListInProgress: true,
                    VideoListSuccess:false,
                    VideoListFailed:false,
                    VideoListResponse: [],
                    }

            }
            case GET_ALL_VIDEOLIST_SUCCESS:
                return{
                    ...state,
                    VideoListApi:{
                        VideoListInProgress: false,
                        VideoListSuccess:true,
                        VideoListFailed:false,
                        VideoListResponse: action.payload,
                        }
                }
            case GET_ALL_VIDEOLIST_FAILURE:
                return{
                    ...state,
                    VideoListApi:{
                        VideoListInProgress: false,
                        VideoListSuccess:false,
                        VideoListFailed:true,
                        VideoListResponse: [],
                        }

                }
                case GET_ALL_VIDEOLIST_RESET:
                    return{
                        ...state,
                        VideoListApi:{
                            VideoListInProgress: false,
                            VideoListSuccess:false,
                            VideoListFailed:false,
                            }
                    }
            default: return state 
    }
}

export default VideoListReducer
