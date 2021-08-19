import { GET_REFER_WALLET, GET_REFER_WALLET_SUCCESS, GET_REFER_WALLET_FAILURE } from './ReferralWalletType'
const initialState = {
    makeReferWalletApi:{
    WalletProgress: false,
    WalletSuccess:false,
    WalletFailed:false,
    Wallet: {},
    }
}

 const ReferralWalletReducer = (state = initialState, action) => {
    //  console.log('referral reducer ok')
    switch(action.type){
        case GET_REFER_WALLET:
            return{
                ...state,
                makeReferWalletApi:{
                    WalletProgress: true,
                    WalletSuccess:false,
                    WalletFailed:false,
                    Wallet: {},
                }
            }
            case GET_REFER_WALLET_SUCCESS:
                return{
                    ...state,
                    makeReferWalletApi:{
                        WalletProgress: false,
                        WalletSuccess:true,
                        WalletFailed:false,
                        Wallet: action.payload,
                    }
                }
            case GET_REFER_WALLET_FAILURE:
                return{
                    ...state,
                    makeReferWalletApi:{
                        WalletProgress: false,
                        WalletSuccess:false,
                        WalletFailed:true,
                        Wallet: {},
                    }
                }

            default: return state 
    }
}

export default ReferralWalletReducer

// import {GET_REFER_WALLET, GET_REFER_WALLET_SUCCESS,GET_REFER_WALLET_FAILURE} from './ReferralWalletType'

// const initialState = {
//     GetReferWalletApi : {
//         WalletProgress: false,
//         WalletSuccess: false,
//         WalletFailure: false,
//         Wallet: {},
//         error: '',
//     }
// }

// const ReferralWalletReducer = (state = initialState, action) => {
//     console.log('inside wallet Reducer file')
//     switch(action.type){
//         case GET_REFER_WALLET: 
//         return{
//             ...state,
//             GetReferWalletApi : {
//                 WalletProgress: true,
//                 WalletSuccess: false,
//                 WalletFailure: false,
//                 Wallet: {},
//                 error: '',
//         }
//     }
//     case GET_REFER_WALLET_SUCCESS:
//         return{
//             ...state,
//             GetReferWalletApi : {
//                 WalletProgress: false,
//                 WalletSuccess: true,
//                 WalletFailure: false,
//                 Wallet: {},
//                 error: '',
//         }
//     }
//         case GET_REFER_WALLET_FAILURE:
//             return{
//                 ...state,
//                 GetReferWalletApi : {
// /  WalletProgress: false,
// /  WalletSuccess: false,
// /  WalletFailure: true,
// /  Wallet: {},
// /  error: '',
//             }
//         }
//         default: return state 
//     }
// }
// export default ReferralWalletReducer
