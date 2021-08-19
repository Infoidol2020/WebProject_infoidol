import { GET_VIDEOCOUNT, GET_VIDEOCOUNT_SUCCESS, GET_VIDEOCOUNT_FAILURE } from './VideoCountType'
const initialState = {
    VideoCountGetApi:{
    VideoCountInProgress: false,
    VideoCountSuccess:false,
    VideoCountFailed:false,
    allVideoCount: [],
    error: '',
    }
}
 const VideoCountReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_VIDEOCOUNT:
            return{
                ...state,
                VideoCountGetApi:{
                    VideoCountInProgress: true,
                    VideoCountSuccess:false,
                    VideoCountFailed:false,
                    allVideoCount: [],
                    error: '',
                    }
            }
            case GET_VIDEOCOUNT_SUCCESS:
                return{
                    ...state,
                    VideoCountGetApi:{
                        VideoCountInProgress: false,
                        VideoCountSuccess:true,
                        VideoCountFailed:false,
                        allVideoCount: action.payload,
                        error: '',
                        }
                }
            case GET_VIDEOCOUNT_FAILURE:
                return{
                    ...state,
                    VideoCountGetApi:{
                        VideoCountInProgress: false,
                        VideoCountSuccess:false,
                        VideoCountFailed:true,
                        allVideoCount: [],
                        error: '',
                        }
                }
            default: return state 
    }
}
export default VideoCountReducer
