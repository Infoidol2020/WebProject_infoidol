import { EDIT_PICTURE, EDIT_PICTURE_SUCCESS, EDIT_PICTURE_FAILURE,EDIT_PICTURE_RESET } from './EditPictureType'
const initialState = {
    editPictureApi:{
    editPictureProgress: false,
    editPictureSuccess:false,
    editPictureFailed:false,
    editPicture: {},
    }
}

const EditPictureReducer = (state = initialState, action) => {
    // console.log('editPicture reducer ok')
    switch(action.type){
        case EDIT_PICTURE:
            return{
                ...state,
                editPictureApi:{
                    editPictureProgress: true,
                    editPictureSuccess:false,
                    editPictureFailed:false,
                    editPicture: {},
                }
            }
            case EDIT_PICTURE_SUCCESS:
                return{
                    ...state,
                    editPictureApi:{
                        editPictureProgress: false,
                        editPictureSuccess:true,
                        editPictureFailed:false,
                        editPicture: action.payload,
                    }
                }
            case EDIT_PICTURE_FAILURE:
                return{
                    ...state,
                    editPictureApi:{
                        editPictureProgress: false,
                        editPictureSuccess:false,
                        editPictureFailed:true,
                        editPicture: {},
                    }
                }
            case EDIT_PICTURE_RESET:
                return{
                    ...state,
                    editPictureApi:{
                        editPictureProgress: false,
                        editPictureSuccess: false,
                        editPictureFailed: false,
                        editPicture: {},
                        // error: '',
                    }
                }

            default: return state 
    }
}

export default EditPictureReducer

