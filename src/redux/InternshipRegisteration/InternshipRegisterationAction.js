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

export const hitInternshipRegistration = (data, internshipSubjectId, internshipPackageId) => {
    console.log('executed from user order action ....', data)
    return (dispatch) => {
        dispatch(internshipRegisteration)
        axios.post(`${BASE_URL}internship_register_form`,{
        // axios.post(`https://dev.infoidol.com/admin/WebApi/internship_register_form`,{
            "full_name": data.firstName,
            "email": data.email,
            "mobile": data.phoneNo,
            "gender": data.gender,
            // "usn": data.usn,
            // "college": data.college,
            // "university": data.university,
            // "semester": data.semester,
            // "branch": data.branch,
            // "degree": data.degree,
            "emi" : data.emi,
            "subject_id": internshipSubjectId,
            "package_id": internshipPackageId
        }).then( response => {
                const internshipRegisteration = response.data
                dispatch(internshipRegisterationSuccess(internshipRegisteration))
        }).catch(error => {
            const errorMsg = error.message
            dispatch(internshipRegisterationFailure(errorMsg))
        })
    }
}
