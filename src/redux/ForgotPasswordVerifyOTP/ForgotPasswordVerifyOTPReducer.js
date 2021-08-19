import { VERIFY_OTP, VERIFY_OTP_SUCCESS, VERIFY_OTP_FAILURE } from './ForgotPasswordVerifyOTPTypes'
const initialState = {
    VerifyOtp:{
    VerifyOtpInProgress: false,
    VerifyOtpSuccess:false,
    VerifyOtpFailed:false,
    VerifyOtpResponse: [],
    }
}

 const ForgotPasswordVerifyOtpReducer = (state = initialState, action) => {
    switch(action.type){
        case VERIFY_OTP:
            return{
                ...state,
                VerifyOtp:{
                    VerifyOtpInProgress: true,
                    VerifyOtpSuccess:false,
                    VerifyOtpFailed:false,
                    VerifyOtpResponse: [],
                    }
               
            }
            case VERIFY_OTP_SUCCESS:
                return{
                    ...state,
                    VerifyOtp:{
                        VerifyOtpInProgress: false,
                        VerifyOtpSuccess:true,
                        VerifyOtpFailed:false,
                        VerifyOtpResponse: action.payload,
                        }
                   
                }
            case VERIFY_OTP_FAILURE:
                return{
                    ...state,
                    VerifyOtp:{
                        VerifyOtpInProgress: false,
                        VerifyOtpSuccess:false,
                        VerifyOtpFailed:true,
                        VerifyOtpResponse: [],
                        }
                   
                }
            default: return state 
    }
}

export default ForgotPasswordVerifyOtpReducer
