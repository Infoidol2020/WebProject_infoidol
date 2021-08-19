import { VERIFY_REFERRAL, VERIFY_REFERRAL_SUCCESS, VERIFY_REFERRAL_FAILURE, VERIFY_REFERRAL_RESET } from './VerifyReferralTypes'

const initialState = {
    VerifyReferralApi:{
    VerifyReferralInProgress: false,
    VerifyReferralSuccess:false,
    VerifyReferralFailed:false,
    VerifyReferral: [],
    }
}

const VerifyReferralReducer = (state = initialState, action) => {
    switch(action.type){
        case VERIFY_REFERRAL:
            return{
                ...state,
                VerifyReferralApi:{
                    VerifyReferralInProgress: true,
                    VerifyReferralSuccess:false,
                    VerifyReferralFailed:false,
                    VerifyReferral: [],
                    }
            
            }
            case VERIFY_REFERRAL_SUCCESS:
                return{
                    ...state,
                    VerifyReferralApi:{
                        VerifyReferralInProgress: false,
                        VerifyReferralSuccess:true,
                        VerifyReferralFailed:false,
                        VerifyReferral: action.payload,
                        }
                
                }
            case VERIFY_REFERRAL_FAILURE:
                return{
                    ...state,
                    VerifyReferralApi:{
                        VerifyReferralInProgress: false,
                        VerifyReferralSuccess:false,
                        VerifyReferralFailed:true,
                        VerifyReferral: [],
                        }
                
                }

                case VERIFY_REFERRAL_RESET:
                    return{
                        ...state,
                        VerifyReferralApi:{
                            VerifyReferralInProgress: false,
                            VerifyReferralSuccess:false,
                            VerifyReferralFailed:false,
                            }
                    
                    }

            default: return state 
    }
}

export default VerifyReferralReducer