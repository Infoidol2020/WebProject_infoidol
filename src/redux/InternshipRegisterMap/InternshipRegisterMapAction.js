import axios from 'axios';
import { BASE_URL, USER_ID, DEVICE_ID } from '../Constants/ApiConstants'
import { INTERNSHIP_REGISTER_MAP, INTERNSHIP_REGISTER_MAP_SUCCESS, INTERNSHIP_REGISTER_MAP_FAILURE, INTERNSHIP_REGISTER_MAP_RESET } from './InternshipRegisterMapType'
export const internshipRegisterMap = () => {
    return{
        type: INTERNSHIP_REGISTER_MAP
    }
}

export const internshipRegisterMapSuccess = (internshipRegisterMapPayload) => {
    return{
        type: INTERNSHIP_REGISTER_MAP_SUCCESS,
        payload: internshipRegisterMapPayload
    }
}
export const internshipRegisterMapFailure = (error) => {
    return{
        type: INTERNSHIP_REGISTER_MAP_FAILURE,
        payload: error
    }
}

export const internshipRegisterMapReset = () => {
    return{
        type: INTERNSHIP_REGISTER_MAP_RESET
    }
}

export const fetchInternshipRegisterMap = (registerId,internshipOrderId) => {
    console.log('executed fromIntern Regd. Map action ....',registerId,internshipOrderId)
    return (dispatch) => {
        dispatch(internshipRegisterMap())
        var formData = new FormData();
        formData.append('register_id', registerId);
        formData.append('orderId', internshipOrderId);
        // axios.post(`${BASE_URL}generate_token_for_android_sdk`,{
            axios.post(`${BASE_URL}internship_register_map`,formData).then( response => {
        // console.log('response from VerifyReferral action', response)
            const internshipRegisterMapResponse = response.data
            dispatch(internshipRegisterMapSuccess(internshipRegisterMapResponse))
            setTimeout(function(){
                dispatch(internshipRegisterMapReset())
        }, 2000);
            console.log('internshipRegisterMapResponse',internshipRegisterMapResponse)
    }).catch(error => {
        const errorMsg = error.message
        dispatch(internshipRegisterMapFailure(errorMsg))
    })
}
}
    // return (dispatch) => {
    //     dispatch(internshipRegisterMap())
    //     var formData = new FormData();
    //     formData.append('register_id', register_id);
    //     formData.append('internshipOrderId', internshipOrderId);

    //     // axios.post(`${BASE_URL}order_detail`,{
    //     axios.post(`https://dev.infoidol.com/admin/WebApi/internship_register_map`,formData.then( response => {
    //             const internshipRegisterMapResponse = response.data
    //             dispatch(internshipRegisterMapSuccess(internshipRegisterMapResponse))
    //             console.log('internshipRegisterMapResponse',internshipRegisterMapResponse)
    //     }).catch(error => {
    //         const errorMsg = error.message
    //         dispatch(internshipRegisterMapFailure(errorMsg))
    //     })
    // }












// import axios from 'axios';
// import { BASE_URL, USER_ID, DEVICE_ID } from '../Constants/ApiConstants'
// import { INTERNSHIP_REGISTER_MAP, INTERNSHIP_REGISTER_MAP_SUCCESS, INTERNSHIP_REGISTER_MAP_FAILURE, INTERNSHIP_REGISTER_MAP_RESET } from './InternshipRegisterMapType'
// export const internshipRegisterMap = () => {
//     return{
//         type: INTERNSHIP_REGISTER_MAP
//     }
// }

// export const internshipRegisterMapSuccess = (internshipRegisterMapPayload) => {
//     return{
//         type: INTERNSHIP_REGISTER_MAP_SUCCESS,
//         payload: internshipRegisterMapPayload
//     }
// }
// export const internshipRegisterMapFailure = (error) => {
//     return{
//         type: INTERNSHIP_REGISTER_MAP_FAILURE,
//         payload: error
//     }
// }

// export const internshipRegisterMapReset = () => {
//     return{
//         type: INTERNSHIP_REGISTER_MAP_RESET
//     }
// }

// export const fetchInternshipRegisterMap = (register_id,order_id) => {
//     console.log('executed from Register Map action ....',register_id,order_id)
//     return (dispatch) => {
//         console.log('dispatch from IR map successfully',register_id,order_id)
//         dispatch(internshipRegisterMap)
//         axios.post(`${BASE_URL}order_detail`,{
//         axios.post(`https://dev.infoidol.com/admin/WebApi/internship_register_map`,{
//             "register_id": register_id,
//             "orderId": order_id,
//         }).then( response => {
//                 const internshipRegisterMapResponse = response.data
//                 console.log('response from IR Map ',internshipRegisterMapResponse)
//                 dispatch(internshipRegisterMapSuccess(internshipRegisterMapResponse))
//         }).catch(error => {
//             const errorMsg = error.message
//             dispatch(internshipRegisterMapFailure(errorMsg))
//         })
//     }
// }
