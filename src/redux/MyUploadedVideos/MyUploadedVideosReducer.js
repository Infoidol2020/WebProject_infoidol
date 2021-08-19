import { UPLOADED_VIDEOS, UPLOADED_VIDEOS_SUCCESS, UPLOADED_VIDEOS_FAILURE, UPLOADED_VIDEOS_RESET } from './MyUploadedVideosTypes'

const initialState = {
    MyUploadedVideosApi:{
    MyUploadedVideosInProgress: false,
    MyUploadedVideosSuccess:false,
    MyUploadedVideosFailed:false,
    MyUploadedVideos: [],
    }
}

const MyUploadedVideosReducer = (state = initialState, action) => {
    switch(action.type){
        case UPLOADED_VIDEOS:
            return{
                ...state,
                MyUploadedVideosApi:{
                    MyUploadedVideosInProgress: true,
                    MyUploadedVideosSuccess:false,
                    MyUploadedVideosFailed:false,
                    MyUploadedVideos: [],
                    }
            
            }
            case UPLOADED_VIDEOS_SUCCESS:
                return{
                    ...state,
                    MyUploadedVideosApi:{
                        MyUploadedVideosInProgress: false,
                        MyUploadedVideosSuccess:true,
                        MyUploadedVideosFailed:false,
                        MyUploadedVideos: action.payload,
                        }
                
                }
            case UPLOADED_VIDEOS_FAILURE:
                return{
                    ...state,
                    MyUploadedVideosApi:{
                        MyUploadedVideosInProgress: false,
                        MyUploadedVideosSuccess:false,
                        MyUploadedVideosFailed:true,
                        MyUploadedVideos: [],
                        }
                
                }

                case UPLOADED_VIDEOS_RESET:
                    return{
                        ...state,
                        MyUploadedVideosApi:{
                            MyUploadedVideosInProgress: false,
                            MyUploadedVideosSuccess:false,
                            MyUploadedVideosFailed:false,
                            }
                    
                    }

            default: return state 
    }
}

export default MyUploadedVideosReducer