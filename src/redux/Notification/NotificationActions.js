import axios from 'axios';
import { BASE_URL, USER_ID, DEVICE_ID } from '../Constants/ApiConstants'
import { NOTIFICATION, NOTIFICATION_SUCCESS, NOTIFICATION_FAILURE, NOTIFICATION_RESET } from './NotificationTypes'

export const Notification = () => {
    return{
        type: NOTIFICATION
    }
}

export const NotificationSuccess = (NotificationData) => {
    return{
        type: NOTIFICATION_SUCCESS,
        payload: NotificationData
    }
}
export const NotificationFailure = (error) => {
    return{
        type: NOTIFICATION_FAILURE,
        payload: error
    }
}

export const NotificationReset = () => {
    return{
        type: NOTIFICATION_RESET
    }
}



export const hitNotificationAPI = () => {
    // console.log('executed from Notification action')
    return (dispatch) => {
        dispatch(Notification())
        axios.post(`${BASE_URL}notification`,{
            "device_id": DEVICE_ID,
            "user_id": localStorage.getItem('WebAppUserKey')
        }).then( response => {
        //   console.log('response from Notification action', response.data.data)
            const NotificationResponse = response.data
            dispatch(NotificationSuccess(NotificationResponse))
        //     setTimeout(function(){
        //         dispatch(NotificationReset())
        //    }, 1000);
    }).catch(error => {
        const errorMsg = error.message
        dispatch(NotificationFailure(errorMsg))
    })
    }
}

