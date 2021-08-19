import { WITHDRAW_REFERRAL_AMOUNT, WITHDRAW_REFERRAL_AMOUNT_SUCCESS, WITHDRAW_REFERRAL_AMOUNT_FAILURE, WITHDRAW_REFERRAL_AMOUNT_RESET } from './WithdrawReferralAmountTypes'

const initialState = {
    WithdrawReferralAmountApi:{
    WithdrawReferralAmountInProgress: false,
    WithdrawReferralAmountSuccess:false,
    WithdrawReferralAmountFailed:false,
    WithdrawReferralAmount: [],
    }
}

const WithdrawReferralAmountReducer = (state = initialState, action) => {
    switch(action.type){
        case WITHDRAW_REFERRAL_AMOUNT:
            return{
                ...state,
                WithdrawReferralAmountApi:{
                    WithdrawReferralAmountInProgress: true,
                    WithdrawReferralAmountSuccess:false,
                    WithdrawReferralAmountFailed:false,
                    WithdrawReferralAmount: [],
                    }
            
            }
            case WITHDRAW_REFERRAL_AMOUNT_SUCCESS:
                return{
                    ...state,
                    WithdrawReferralAmountApi:{
                        WithdrawReferralAmountInProgress: false,
                        WithdrawReferralAmountSuccess:true,
                        WithdrawReferralAmountFailed:false,
                        WithdrawReferralAmount: action.payload,
                        }
                
                }
            case WITHDRAW_REFERRAL_AMOUNT_FAILURE:
                return{
                    ...state,
                    WithdrawReferralAmountApi:{
                        WithdrawReferralAmountInProgress: false,
                        WithdrawReferralAmountSuccess:false,
                        WithdrawReferralAmountFailed:true,
                        WithdrawReferralAmount: [],
                        }
                
                }

                case WITHDRAW_REFERRAL_AMOUNT_RESET:
                    return{
                        ...state,
                        WithdrawReferralAmountApi:{
                            WithdrawReferralAmountInProgress: false,
                            WithdrawReferralAmountSuccess:false,
                            WithdrawReferralAmountFailed:false,
                            }
                    
                    }

            default: return state 
    }
}

export default WithdrawReferralAmountReducer