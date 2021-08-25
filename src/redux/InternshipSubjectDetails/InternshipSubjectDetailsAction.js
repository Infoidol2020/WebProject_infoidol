import axios from 'axios';
import { BASE_URL, USER_ID, DEVICE_ID } from '../Constants/ApiConstants'
import { INTERNSHIP_SUBJECTS_DETAILS, INTERNSHIP_SUBJECTS_DETAILS_SUCCESS, INTERNSHIP_SUBJECTS_DETAILS_FAILURE, INTERNSHIP_SUBJECTS_DETAILS_RESET } from './InternshipSubjectDetailsType'
export const internshipSubjectDetails = () => {
    return{
        type: INTERNSHIP_SUBJECTS_DETAILS
    }
}

export const internshipSubjectDetailsSuccess = (internshipSubDetailsPayload) => {
    return{
        type: INTERNSHIP_SUBJECTS_DETAILS_SUCCESS,
        payload: internshipSubDetailsPayload
    }
}
export const internshipSubjectDetailsFailure = (error) => {
    return{
        type: INTERNSHIP_SUBJECTS_DETAILS_FAILURE,
        payload: error
    }
}

export const internshipSubjectDetailsReset = () => {
    return{
        type: INTERNSHIP_SUBJECTS_DETAILS_RESET
    }
}

export const fetchInternshipCoursesDetails = (Subject_Id) => {
    console.log('executed from user order action ....',Subject_Id)
    return (dispatch) => {
        dispatch(internshipSubjectDetails)
        // axios.post(`${BASE_URL}internship_package`,{
        axios.post(`https://dev.infoidol.com/admin/LearningApi/packageList`,{
            // "user_id": USER_ID,    
            // "device_id": DEVICE_ID,
            "subject_id": Subject_Id,
        }).then( response => {
                const internshipSubjectDetailResponse = response.data.data
                dispatch(internshipSubjectDetailsSuccess(internshipSubjectDetailResponse))
                setTimeout(function(){ 
                    dispatch(internshipSubjectDetailsReset())
                    }, 3000);
        }).catch(error => {
            const errorMsg = error.message
            dispatch(internshipSubjectDetailsFailure(errorMsg))
        })
    }
}
