import { FORGOT_PASSWORD, FORGOT_PASSWORD_SUCCESS, FORGOT_PASSWORD_FAILURE } from './ForgotPasswordTypes'
const initialState = {
    ForgotPassword:{
    ForgotPasswordInProgress: false,
    ForgotPasswordSuccess:false,
    ForgotPasswordFailed:false,
    ForgotPasswordData: {},
    }
}

 const ForgotPasswordReducer = (state = initialState, action) => {
    switch(action.type){
        case FORGOT_PASSWORD:
            return{
                ...state,
                ForgotPassword:{
                    ForgotPasswordInProgress: true,
                    ForgotPasswordSuccess:false,
                    ForgotPasswordFailed:false,
                    ForgotPasswordData: {},
                    }
               
            }
            case FORGOT_PASSWORD_SUCCESS:
                return{
                    ...state,
                    ForgotPassword:{
                        ForgotPasswordInProgress: false,
                        ForgotPasswordSuccess:true,
                        ForgotPasswordFailed:false,
                        ForgotPasswordData: action.payload,
                        }
                   
                }
            case FORGOT_PASSWORD_FAILURE:
                return{
                    ...state,
                    ForgotPassword:{
                        ForgotPasswordInProgress: false,
                        ForgotPasswordSuccess:false,
                        ForgotPasswordFailed:true,
                        ForgotPasswordData: {},
                        }
                   
                }
            default: return state 
    }
}

export default ForgotPasswordReducer
