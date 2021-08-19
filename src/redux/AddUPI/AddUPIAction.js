import axios from 'axios';
import { BASE_URL, USER_ID, DEVICE_ID } from '../Constants/ApiConstants'
import { ADD_UPI, ADD_UPI_SUCCESS, ADD_UPI_FAILURE, ADD_UPI_RESET } from './AddUPITypes'
export const addUPI = () => {
    return{
        type: ADD_UPI
    }
}

export const addUPISuccess = (addUPIPayload) => {
    return{
        type: ADD_UPI_SUCCESS,
        payload: addUPIPayload
    }
}
export const addUPIFailure = (error) => {
    return{
        type: ADD_UPI_FAILURE,
        payload: error
    }
}

export const addUPIReset = () => {
    return{
        type: ADD_UPI_RESET
    }
}

export const fetchUPIInfomation = (User) => {
    console.log('executed from add upi action ....', User)
    return (dispatch) => {
        dispatch(addUPI)
        // axios.post(`${BASE_URL}Internship_subject`,{
        axios.post(`https://dev.infoidol.com/admin/WebApi/add_upi`,{
            "user_id": USER_ID,
            "name": User.name,
            "email": User.email,
            "phone": User.phone,
            "vpa":User.vpa,
            "address1": User.address1
        }).then( response => {
                const addUPIresponse = response.data
                console.log('Response of ADDupi',response)
                dispatch(addUPISuccess(addUPIresponse))
        }).catch(error => {
            const errorMsg = error.message
            dispatch(addUPIFailure(errorMsg))
        })
    }
}
