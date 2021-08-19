// import axios from 'axios'
// import { BASE_URL, USER_ID, DEVICE_ID } from '../Constants/ApiConstants'
// import {GET_REFER_WALLET, GET_REFER_WALLET_SUCCESS,GET_REFER_WALLET_FAILURE} from './ReferralWalletType'

// export const referralWallet = () => {
//     console.log('inside referral wallet ACTIONS')
//     return{
//         type: GET_REFER_WALLET
//     }
// }

// export const referralWalletSuccess = (WalletSuccess) => {
//     console.log('inside referral wallet ACTIONS Success')
//     return{
//         type: GET_REFER_WALLET_SUCCESS,
//         payload: WalletSuccess
//     }
// }
// export const referralWalletFailure = (error) => {
//     console.log('inside referral wallet ACTIONS error')
//     return{
//         type: GET_REFER_WALLET_FAILURE,
//         payload: error
//     }
// }
// export const ReferralWalletApi = () => {
//     console.log('from Referral Wallet')
//     return(dispatch) => {
//         dispatch(referralWallet())
//         axios.post(`${BASE_URL}wallet`,{
//             "device_id": DEVICE_ID,
//             "user_id": USER_ID
//         }).then(response => {
//             console.log('response from referral Wallet',response)
//             const referralWallet_Response = response.data
//             // console.log('response from referral Wallet referralWallet_Response',referralWallet_Response)
//             referralWallet_Response && dispatch(referralWalletSuccess(referralWallet_Response))
//         }).catch(error => {
//             const errorMsg = error.message
//             dispatch(referralWalletFailure(errorMsg))
//         })
//     }
// }
import axios from 'axios';
import { BASE_URL, USER_ID, DEVICE_ID } from '../Constants/ApiConstants';
import { GET_REFER_WALLET, GET_REFER_WALLET_SUCCESS, GET_REFER_WALLET_FAILURE} from './ReferralWalletType'

export const referralWallet = () => {
    // console.log('from Referral Wallet actionnnnn')
    return{
        type: GET_REFER_WALLET
    }
}

export const referralWalletSuccess = (WalletReferral) => {
    // console.log('from Referral Wallet action suxxxx')
    return{
        type: GET_REFER_WALLET_SUCCESS,
        payload: WalletReferral
    }
}
export const referralWalletFailure = (error) => {
    // console.log('from Referral Wallet action errrrrrrr')
    return{
        type: GET_REFER_WALLET_FAILURE,
        payload: error
    }
}

export const hitreferralWalletAPI = () => {
    // console.log('executed from Referral Wallet action',USER_ID)
    return (dispatch) => {
        dispatch(referralWallet)
        axios.post(`${BASE_URL}wallet`,{
        "device_id": DEVICE_ID,
        "user_id": localStorage.getItem('WebAppUserKey'),
    }).then( response => {
        //   console.log('response from Referral Wallet action', response.data.data)
            const referralWallet_Response = response.data.data
            dispatch(referralWalletSuccess(referralWallet_Response));
    }).catch(error => {
        const errorMsg = error.message
        dispatch(referralWalletFailure(errorMsg))
    })
    }
}
