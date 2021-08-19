import { DELETE_DATA, DELETE_DATA_SUCCESS, DELETE_DATA_FAILURE,DELETE_DATA_RESET } from './DeleteDataType'
const initialState = {
    deleteApi:{
    deleteProgress: false,
    deleteSuccess:false,
    deleteFailed:false,
    delete: {},
    }
}

const DeleteReducer = (state = initialState, action) => {
    // console.log('Delete reducer ok')
    switch(action.type){
        case DELETE_DATA:
            return{
                ...state,
                deleteApi:{
                    deleteProgress: true,
                    deleteSuccess:false,
                    deleteFailed:false,
                    delete: {},
                }
            }
            case DELETE_DATA_SUCCESS:
                return{
                    ...state,
                    deleteApi:{
                        deleteProgress: false,
                        deleteSuccess:true,
                        deleteFailed:false,
                        delete: action.payload,
                    }
                }
            case DELETE_DATA_FAILURE:
                return{
                    ...state,
                    deleteApi:{
                        deleteProgress: false,
                        deleteSuccess:false,
                        deleteFailed:true,
                        delete: {},
                    }
                }
            case DELETE_DATA_RESET:
                return{
                    ...state,
                    deleteApi:{
                        deleteProgress: false,
                        deleteSuccess: false,
                        deleteFailed: false,
                        delete: {},
                        // error: '',
                    }
                }

            default: return state 
    }
}

export default DeleteReducer

