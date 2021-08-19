import { GET_ALL_CHANGEPASSWORD, GET_ALL_CHANGEPASSWORD_SUCCESS, GET_ALL_CHANGEPASSWORD_FAILURE } from './ChangePasswordTypes'
const initialState = {
    ChangePasswordPageGetApi:{
    ChangePasswordPageInProgress: false,
    ChangePasswordPageSuccess:false,
    ChangePasswordPageFailed:false,
    allChangepswd: [],
    error: '',
    }
}
 const ChangePasswordReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_ALL_CHANGEPASSWORD:
            return{
                ...state,
                ChangePasswordPageGetApi:{
                    ChangePasswordPageInProgress: true,
                    ChangePasswordPageSuccess:false,
                    ChangePasswordPageFailed:false,
                    allChangepswd: [],
                    error: '',
                    }
            }
            case GET_ALL_CHANGEPASSWORD_SUCCESS:
                return{
                    ...state,
                    ChangePasswordPageGetApi:{
                        ChangePasswordPageInProgress: false,
                        ChangePasswordPageSuccess:true,
                        ChangePasswordPageFailed:false,
                        allChangepswd: action.payload,
                        error: '',
                        }
                }
            case GET_ALL_CHANGEPASSWORD_FAILURE:
                return{
                    ...state,
                    ChangePasswordPageGetApi:{
                        ChangePasswordPageInProgress: false,
                        ChangePasswordPageSuccess:false,
                        ChangePasswordPageFailed:true,
                        allChangepswd: [],
                        error: '',
                        }
                }
            default: return state 
    }
}
export default ChangePasswordReducer
