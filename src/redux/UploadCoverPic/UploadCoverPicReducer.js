import { UPLOAD_COVER_PIC, UPLOAD_COVER_PIC_SUCCESS, UPLOAD_COVER_PIC_FAILURE, UPLOAD_COVER_PIC_RESET } from './UploadCoverPicTypes'
const initialState = {
    uploadCoverPicApi:{
    uploadCoverPicInProgress: false,
    uploadCoverPicSuccess:false,
    uploadCoverPicFailed:false,
    uploadCoverPic: [],
    }
}

 const uploadCoverPicReducer = (state = initialState, action) => {
    switch(action.type){
        case UPLOAD_COVER_PIC:
            return{
                ...state,
                uploadCoverPicApi:{
                    uploadCoverPicInProgress: true,
                    uploadCoverPicSuccess:false,
                    uploadCoverPicFailed:false,
                    uploadCoverPic: [],
                    }
               
            }
            case UPLOAD_COVER_PIC_SUCCESS:
                return{
                    ...state,
                    uploadCoverPicApi:{
                        uploadCoverPicInProgress: false,
                        uploadCoverPicSuccess:true,
                        uploadCoverPicFailed:false,
                        uploadCoverPic: action.payload,
                        }
                   
                }
            case UPLOAD_COVER_PIC_FAILURE:
                return{
                    ...state,
                    uploadCoverPicApi:{
                        uploadCoverPicInProgress: false,
                        uploadCoverPicSuccess:false,
                        uploadCoverPicFailed:true,
                        uploadCoverPic: [],
                        }
                   
                }

                case UPLOAD_COVER_PIC_RESET:
                    return{
                        ...state,
                        uploadCoverPicApi:{
                            uploadCoverPicInProgress: false,
                            uploadCoverPicSuccess:false,
                            uploadCoverPicFailed:false,
                            }
                       
                    }
            default: return state 
    }
}

export default uploadCoverPicReducer