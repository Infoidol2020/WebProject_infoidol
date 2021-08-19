import axios from 'axios';
import { BASE_URL, DEVICE_ID, USER_ID } from '../Constants/ApiConstants';
import { UPDATE_MOB_EMAIL, UPDATE_MOB_EMAIL_SUCCESS, UPDATE_MOB_EMAIL_FAILURE } from './UpdateMob&EmailTypes'
export const getUpdatedMobileandEmail = () => {
    return{
        type: UPDATE_MOB_EMAIL
    }
}

export const getUpdatedMobileandEmailSuccess = (Mob_Email) => {
    return{
        type: UPDATE_MOB_EMAIL_SUCCESS,
        payload: Mob_Email
    }
}

export const getUpdatedMobileandEmailFailure = (error) => {
    return{
        type: UPDATE_MOB_EMAIL_FAILURE,
        payload: error 
    }
}

export const fetchUpdatedMobEmail = (usersUpdatedData,type) => {
    // console.log('update mob & email Actions',usersUpdatedData,type)
    
    return (dispatch) => {
        // console.log('inside update mob email',usersUpdatedData,type)
        var userData;
        if(type == '2'){
            userData = `91${usersUpdatedData}`
        }
        if(type == '1'){
            userData = usersUpdatedData
        }
        dispatch(getUpdatedMobileandEmail())
        axios.post(`${BASE_URL}update_email_and_mobile`,{
            "device_id": DEVICE_ID,
            "user_id": USER_ID,
            "data": userData,
            "type": type
    }).then( response => {
        // console.log('response of UPDATE_MOB_EMAIL is okkkkkkkkkkkkkkkkkkkk',response.data)
        const updateMobEmail = response.data.data
        dispatch(getUpdatedMobileandEmailSuccess(updateMobEmail))
        // console.log('dispatch mob email Successfull')
    }).catch(error => {
        const errorMsg = error.message
        dispatch(getUpdatedMobileandEmailFailure(errorMsg))
    })
    }
}