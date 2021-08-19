import axios from 'axios';
import { BASE_URL, USER_ID, DEVICE_ID } from '../Constants/ApiConstants'
import { ADD_BENEFICIARY, ADD_BENEFICIARY_SUCCESS, ADD_BENEFICIARY_FAILURE, ADD_BENEFICIARY_RESET } from './AddBeneficiaryTypes'

export const AddBeneficiary = () => {
    return{
        type: ADD_BENEFICIARY
    }
}

export const AddBeneficiarySuccess = (AddBeneficiaryData) => {
    return{
        type: ADD_BENEFICIARY_SUCCESS,
        payload: AddBeneficiaryData
    }
}
export const AddBeneficiaryFailure = (error) => {
    return{
        type: ADD_BENEFICIARY_FAILURE,
        payload: error
    }
}

export const AddBeneficiaryReset = () => {
    return{
        type: ADD_BENEFICIARY_RESET
    }
}



export const hitAddBeneficiaryAPI = (UserAddBeneficiary) => {
    // console.log('executed from AddBeneficiary action', DEVICE_ID, USER_ID, appId, customerName, customerEmail, customerPhone, orderAmount, orderCurrency, returnUrl, notifyUrl, orderId)
    return (dispatch) => {
        dispatch(AddBeneficiary())
            // axios.post(`${BASE_URL}generate_signature`,{
            axios.post(`https://dev.infoidol.com/admin/WebApi/add_beneficiary`,{
            "user_id": USER_ID,
            // "device_id": DEVICE_ID,
            "name": UserAddBeneficiary.name,
            "email":UserAddBeneficiary.email,
            "phone":UserAddBeneficiary.phone,
            "bankAccount": UserAddBeneficiary.bankAccount,
            "ifsc": UserAddBeneficiary.ifsc,
            "address1": UserAddBeneficiary.address1

        }).then( response => {
        console.log('response from AddBeneficiary action', response.data)
            const AddBeneficiaryResponse = response.data
            dispatch(AddBeneficiarySuccess(AddBeneficiaryResponse))
        //     setTimeout(function(){
        //         dispatch(AddBeneficiaryReset())
        //    }, 1000);
    }).catch(error => {
        const errorMsg = error.message
        dispatch(AddBeneficiaryFailure(errorMsg))
    })
    }
}

