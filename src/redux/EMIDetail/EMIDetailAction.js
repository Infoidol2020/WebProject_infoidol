import axios from 'axios';
import { BASE_URL, USER_ID, DEVICE_ID } from '../Constants/ApiConstants'
import { EMI_DETAILS, EMI_DETAILS_SUCCESS, EMI_DETAILS_FAILURE, EMI_DETAILS_RESET } from './EMIDetailTypes'
export const emiDetails = () => {
    return{
        type: EMI_DETAILS
    }
}

export const emiDetailsSuccess = (internshipSubPayload) => {
    return{
        type: EMI_DETAILS_SUCCESS,
        payload: internshipSubPayload
    }
}
export const emiDetailsFailure = (error) => {
    return{
        type: EMI_DETAILS_FAILURE,
        payload: error
    }
}

export const emiDetailsReset = () => {
    return{
        type: EMI_DETAILS_RESET
    }
}

export const fetchemiDetail = (package_id) => {
    console.log('executed from emi detail action ....')
    return (dispatch) => {
        dispatch(emiDetails)
        // axios.post(`${BASE_URL}Internship_subject`,{
        axios.post(`https://dev.infoidol.com/admin/LearningApi/emiDetail`,{
            "package_id": package_id
        }).then( response => {
                const emiDetail = response.data.data
                console.log('sdf',response)
                dispatch(emiDetailsSuccess(emiDetail))
        }).catch(error => {
            const errorMsg = error.message
            dispatch(emiDetailsFailure(errorMsg))
        })
    }
}
