import { UPLOADED_PICTURES, UPLOADED_PICTURES_SUCCESS, UPLOADED_PICTURES_FAILURE, UPLOADED_PICTURES_RESET } from './MyUploadedPicturesTypes'

const initialState = {
    MyUploadedPicturesApi:{
    MyUploadedPicturesInProgress: false,
    MyUploadedPicturesSuccess:false,
    MyUploadedPicturesFailed:false,
    MyUploadedPictures: [],
    }
}

const MyUploadedPicturesReducer = (state = initialState, action) => {
    switch(action.type){
        case UPLOADED_PICTURES:
            return{
                ...state,
                MyUploadedPicturesApi:{
                    MyUploadedPicturesInProgress: true,
                    MyUploadedPicturesSuccess:false,
                    MyUploadedPicturesFailed:false,
                    MyUploadedPictures: [],
                    }
            
            }
            case UPLOADED_PICTURES_SUCCESS:
                return{
                    ...state,
                    MyUploadedPicturesApi:{
                        MyUploadedPicturesInProgress: false,
                        MyUploadedPicturesSuccess:true,
                        MyUploadedPicturesFailed:false,
                        MyUploadedPictures: action.payload,
                        }
                
                }
            case UPLOADED_PICTURES_FAILURE:
                return{
                    ...state,
                    MyUploadedPicturesApi:{
                        MyUploadedPicturesInProgress: false,
                        MyUploadedPicturesSuccess:false,
                        MyUploadedPicturesFailed:true,
                        MyUploadedPictures: [],
                        }
                
                }

                case UPLOADED_PICTURES_RESET:
                    return{
                        ...state,
                        MyUploadedPicturesApi:{
                            MyUploadedPicturesInProgress: false,
                            MyUploadedPicturesSuccess:false,
                            MyUploadedPicturesFailed:false,
                            }
                    
                    }

            default: return state 
    }
}

export default MyUploadedPicturesReducer