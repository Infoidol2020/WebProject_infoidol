import { EDIT_VIDEO, EDIT_VIDEO_SUCCESS, EDIT_VIDEO_FAILURE,EDIT_VIDEO_RESET } from './EditVideoType'
const initialState = {
    editVideoApi:{
    editVideoProgress: false,
    editVideoSuccess:false,
    editVideoFailed:false,
    editVideo: {},
    }
}

const EditVideoReducer = (state = initialState, action) => {
    // console.log('editVideo reducer ok')
    switch(action.type){
        case EDIT_VIDEO:
            return{
                ...state,
                editVideoApi:{
                    editVideoProgress: true,
                    editVideoSuccess:false,
                    editVideoFailed:false,
                    editVideo: {},
                }
            }
            case EDIT_VIDEO_SUCCESS:
                return{
                    ...state,
                    editVideoApi:{
                        editVideoProgress: false,
                        editVideoSuccess:true,
                        editVideoFailed:false,
                        editVideo: action.payload,
                    }
                }
            case EDIT_VIDEO_FAILURE:
                return{
                    ...state,
                    editVideoApi:{
                        editVideoProgress: false,
                        editVideoSuccess:false,
                        editVideoFailed:true,
                        editVideo: {},
                    }
                }
            case EDIT_VIDEO_RESET:
                return{
                    ...state,
                    editVideoApi:{
                        editVideoProgress: false,
                        editVideoSuccess: false,
                        editVideoFailed: false,
                        editVideo: {},
                        // error: '',
                    }
                }

            default: return state 
    }
}

export default EditVideoReducer

