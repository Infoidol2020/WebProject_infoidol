import axios from 'axios';
import { BASE_URL, USER_ID, DEVICE_ID } from '../Constants/ApiConstants'
import { BENEFICIARY_LIST, BENEFICIARY_LIST_SUCCESS, BENEFICIARY_LIST_FAILURE, BENEFICIARY_LIST_RESET } from './BeneficiaryListTypes'
export const  beneficiaryList = () => {
    return{
        type: BENEFICIARY_LIST
    }
}

export const  beneficiaryListSuccess = ( beneficiaryListPayload) => {
    return{
        type: BENEFICIARY_LIST_SUCCESS,
        payload:  beneficiaryListPayload
    }
}
export const  beneficiaryListFailure = (error) => {
    return{
        type: BENEFICIARY_LIST_FAILURE,
        payload: error
    }
}

export const  beneficiaryListReset = () => {
    return{
        type: BENEFICIARY_LIST_RESET
    }
}

export const hitBeneficiaryList = () => {
    // console.log('executed from user order action ....')
    return (dispatch) => {
        dispatch( beneficiaryList)
        // axios.post(`${BASE_URL}Internship_subject`,{
        axios.post(`https://dev.infoidol.com/admin/WebApi/beneficiary_list`,{
            "device_id": DEVICE_ID,
            "user_id": USER_ID,
        }).then( response => {
                const beneficiaryListresponse = response
                console.log('Beneficiary List',response)
                dispatch( beneficiaryListSuccess(beneficiaryListresponse))
                // setTimeout(() =>{
                //     dispatch(beneficiaryListReset())
                // }, 2000)
        }).catch(error => {
            const errorMsg = error.message
            dispatch( beneficiaryListFailure(errorMsg))
        })
    }
}
