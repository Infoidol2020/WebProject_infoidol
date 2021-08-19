import { UPLOAD_VIDEO, UPLOAD_VIDEO_SUCCESS, UPLOAD_VIDEO_FAILURE } from './UploadVideoTypes'
const initialState = {
    UploadVideoGetApi:{
    UploadVideoInProgress: false,
    UploadVideoSuccess:false,
    UploadVideoFailed:false,
    UploadVideo: {},
    error: '',
    }
}

 const UploadVideoReducer = (state = initialState, action) => {
    switch(action.type){
        case UPLOAD_VIDEO:
            return{
                ...state,
                UploadVideoGetApi:{
                    UploadVideoInProgress: true,
                    UploadVideoSuccess:false,
                    UploadVideoFailed:false,
                    UploadVideo: {},
                    error: '',
                    }
               
            }
            case UPLOAD_VIDEO_SUCCESS:
                return{
                    ...state,
                    UploadVideoGetApi:{
                        UploadVideoInProgress: false,
                        UploadVideoSuccess:true,
                        UploadVideoFailed:false,
                        UploadVideo: action.payload,
                        error: '',
                        }
                   
                }
            case UPLOAD_VIDEO_FAILURE:
                return{
                    ...state,
                    UploadVideoGetApi:{
                        UploadVideoInProgress: false,
                        UploadVideoSuccess:false,
                        UploadVideoFailed:true,
                        UploadVideo: {},
                        error: '',
                        }
                   
                }
            default: return state 
    }
}

export default UploadVideoReducer
