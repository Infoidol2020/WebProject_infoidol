import { UPLOAD_IMAGE, UPLOAD_IMAGE_SUCCESS, UPLOAD_IMAGE_FAILURE } from './UploadImageTypes'
const initialState = {
    UploadImageGetApi:{
    UploadImageInProgress: false,
    UploadImageSuccess:false,
    UploadImageFailed:false,
    UploadImage: [],
    error: '',
    }
}

 const UploadImageReducer = (state = initialState, action) => {
    switch(action.type){
        case UPLOAD_IMAGE:
            return{
                ...state,
                UploadImageGetApi:{
                    UploadImageInProgress: true,
                    UploadImageSuccess:false,
                    UploadImageFailed:false,
                    UploadImage: [],
                    error: '',
                    }
               
            }
            case UPLOAD_IMAGE_SUCCESS:
                return{
                    ...state,
                    UploadImageGetApi:{
                        UploadImageInProgress: false,
                        UploadImageSuccess:true,
                        UploadImageFailed:false,
                        UploadImage: action.payload,
                        error: '',
                        }
                   
                }
            case UPLOAD_IMAGE_FAILURE:
                return{
                    ...state,
                    UploadImageGetApi:{
                        UploadImageInProgress: false,
                        UploadImageSuccess:false,
                        UploadImageFailed:true,
                        UploadImage: [],
                        error: '',
                        }
                   
                }
            default: return state 
    }
}

export default UploadImageReducer
