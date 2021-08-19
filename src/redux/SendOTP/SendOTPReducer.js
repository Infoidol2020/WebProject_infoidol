import { SEND_OTP, SEND_OTP_SUCCESS, SEND_OTP_FAILURE } from './SendOTPTypes'
const initialState = {
    SendOtp:{
    SendOtpInProgress: false,
    SendOtpSuccess:false,
    SendOtpFailed:false,
    SendOtpResponse: {},
    }
}

 const SendOtpReducer = (state = initialState, action) => {
    switch(action.type){
        case SEND_OTP:
            return{
                ...state,
                SendOtp:{
                    SendOtpInProgress: true,
                    SendOtpSuccess:false,
                    SendOtpFailed:false,
                    SendOtpResponse: {},
                    }
               
            }
            case SEND_OTP_SUCCESS:
                return{
                    ...state,
                    SendOtp:{
                        SendOtpInProgress: false,
                        SendOtpSuccess:true,
                        SendOtpFailed:false,
                        SendOtpResponse: action.payload,
                        }
                   
                }
            case SEND_OTP_FAILURE:
                return{
                    ...state,
                    SendOtp:{
                        SendOtpInProgress: false,
                        SendOtpSuccess:false,
                        SendOtpFailed:true,
                        SendOtpResponse: {},
                        }
                   
                }
            default: return state 
    }
}

export default SendOtpReducer
