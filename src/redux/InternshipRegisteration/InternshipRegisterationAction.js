import axios from 'axios';
import { BASE_URL, USER_ID, DEVICE_ID } from '../Constants/ApiConstants'
import { INTERNSHIP_REGISTERATION, INTERNSHIP_REGISTERATION_SUCCESS, INTERNSHIP_REGISTERATION_FAILURE, INTERNSHIP_REGISTERATION_RESET } from './InternshipRegisterationTypes'
export const internshipRegisteration = () => {
    return{
        type: INTERNSHIP_REGISTERATION
    }
}

export const internshipRegisterationSuccess = (internshipRegPayload) => {
    return{
        type: INTERNSHIP_REGISTERATION_SUCCESS,
        payload: internshipRegPayload
    }
}
export const internshipRegisterationFailure = (error) => {
    return{
        type: INTERNSHIP_REGISTERATION_FAILURE,
        payload: error
    }
}

export const internshipRegisterationReset = () => {
    return{
        type: INTERNSHIP_REGISTERATION_RESET
    }
}

export const hitInternshipRegistration = (data, internshipPackageId, emiStatus) => {
    console.log('executed from user order action ....', data,internshipPackageId, emiStatus)
    const raw_data = {
        "full_name": data.firstName,
        "mobile": data.phoneNo,
        "email": data.email,
        "gender": data.gender,
        "package_id": internshipPackageId,
        "emi_status" : emiStatus

    };
    console.log('jk',raw_data)
    return (dispatch) => {
        dispatch(internshipRegisteration)
        // axios.post(`${BASE_URL}internship_register_form`,{
        axios.post(`https://dev.infoidol.com/admin/LearningApi/studentRegister`,raw_data).then( response => {
                const internshipRegisteration = response.data
                console.log('response internship Registeration',internshipRegisteration)
                dispatch(internshipRegisterationSuccess(internshipRegisteration))
        }).catch(error => {
            const errorMsg = error.message
            dispatch(internshipRegisterationFailure(errorMsg))
        })
    }
}
