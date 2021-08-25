import axios from 'axios';
import { BASE_URL, USER_ID, DEVICE_ID } from '../Constants/ApiConstants'
import { TOKEN_GENERATION, TOKEN_GENERATION_SUCCESS, TOKEN_GENERATION_FAILURE, TOKEN_GENERATION_RESET } from './TokenGenerationTypes'

export const TokenGeneration = () => {
    return{
        type: TOKEN_GENERATION
    }
}

export const TokenGenerationSuccess = (TokenGenerationData) => {
    return{
        type: TOKEN_GENERATION_SUCCESS,
        payload: TokenGenerationData
    }
}
export const TokenGenerationFailure = (error) => {
    return{
        type: TOKEN_GENERATION_FAILURE,
        payload: error
    }
}

export const TokenGenerationReset = () => {
    return{
        type: TOKEN_GENERATION_RESET
    }
}



export const hitTokenGenerationAPI = (appId, customerName, customerEmail, customerPhone, orderAmount, orderCurrency, returnUrl, notifyUrl, orderId) => {
    // console.log('executed from TokenGeneration action', DEVICE_ID, USER_ID, appId, customerName, customerEmail, customerPhone, orderAmount, orderCurrency, returnUrl, notifyUrl, orderId)
    return (dispatch) => {
        dispatch(TokenGeneration())
            // axios.post(`${BASE_URL}generate_signature`,{
            axios.post(`https://dev.infoidol.com/admin/LearningApi/generateSignature`,{
            "device_id": DEVICE_ID,
            "user_id": USER_ID,
            "appId": appId,
            "customerName": customerName,
            "customerEmail": customerEmail,
            "customerPhone": customerPhone,
            "orderAmount": orderAmount,
            "orderCurrency": orderCurrency, 
            "returnUrl": returnUrl,
            "notifyUrl": notifyUrl,
            "orderId": orderId

        }).then( response => {
        // console.log('response from TokenGeneration action', response.data)
            const TokenGenerationResponse = response.data
            dispatch(TokenGenerationSuccess(TokenGenerationResponse))
        //     setTimeout(function(){
        //         dispatch(TokenGenerationReset())
        //    }, 1000);
    }).catch(error => {
        const errorMsg = error.message
        dispatch(TokenGenerationFailure(errorMsg))
    })
    }
}

