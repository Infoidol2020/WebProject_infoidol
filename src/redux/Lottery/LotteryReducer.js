import { GET_LOTTERY, GET_LOTTERY_SUCCESS, GET_LOTTERY_FAILURE } from './LotteryTypes'
const initialState = {
    lotteryApi:{
    LotteryProgress: false,
    LotterySuccess:false,
    LotteryFailed:false,
    Lottery: {},
    }
}

 const ReferralLotteryReducer = (state = initialState, action) => {
    //  console.log('referral reducer ok')
    switch(action.type){
        case GET_LOTTERY:
            return{
                ...state,
                lotteryApi:{
                    LotteryProgress: true,
                    LotterySuccess:false,
                    LotteryFailed:false,
                    Lottery: {},
                }
            }
            case GET_LOTTERY_SUCCESS:
                return{
                    ...state,
                    lotteryApi:{
                        LotteryProgress: false,
                        LotterySuccess:true,
                        LotteryFailed:false,
                        Lottery: action.payload,
                    }
                }
            case GET_LOTTERY_FAILURE:
                return{
                    ...state,
                    lotteryApi:{
                        LotteryProgress: false,
                        LotterySuccess:false,
                        LotteryFailed:true,
                        Lottery: {},
                    }
                }

            default: return state 
    }
}

export default ReferralLotteryReducer

