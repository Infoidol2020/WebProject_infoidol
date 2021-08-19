import axios from 'axios';
import { BASE_URL, USER_ID, DEVICE_ID } from '../Constants/ApiConstants'
import { CONNECT, CONNECT_SUCCESS, CONNECT_FAILURE, CONNECT_RESET } from './ConnectTypes'
import { CONNECT_CONFIRM, CONNECT_CONFIRM_SUCCESS, CONNECT_CONFIRM_FAILURE, CONNECT_CONFIRM_RESET } from './ConnectTypes'
import { CONNECT_REJECT, CONNECT_REJECT_SUCCESS, CONNECT_REJECT_FAILURE, CONNECT_REJECT_RESET } from './ConnectTypes'

export const connect = () => {
    return{
        type: CONNECT
    }
}

export const connectSuccess = (connectData) => {
    return{
        type: CONNECT_SUCCESS,
        payload: connectData
    }
}
export const connectFailure = (error) => {
    return{
        type: CONNECT_FAILURE,
        payload: error
    }
}

export const connectReset = () => {
    return{
        type: CONNECT_RESET
    }
}


//connect confirmation actions
export const connectConfirm = () => {
    return{
        type: CONNECT_CONFIRM
    }
}

export const connectConfirmSuccess = (connectConfirmData) => {
    return{
        type: CONNECT_CONFIRM_SUCCESS,
        payload: connectConfirmData
    }
}

export const connectConfirmFailure = (error) => {
    return{
        type: CONNECT_CONFIRM_FAILURE,
        payload: error
    }
}

export const connectConfirmReset = () => {
    return{
        type: CONNECT_CONFIRM_RESET
    }
}


//connect rejection actions
export const connectReject = () => {
    return{
        type: CONNECT_REJECT
    }
}

export const connectRejectSuccess = (connectRejectData) => {
    console.log('received ,.', connectRejectData)
    return{
        type: CONNECT_REJECT_SUCCESS,
        payload: connectRejectData
    }
}

export const connectRejectFailure = (error) => {
    return{
        type: CONNECT_REJECT_FAILURE,
        payload: error
    }
}

export const connectRejectReset = () => {
    return{
        type: CONNECT_REJECT_RESET
    }
}

//connect API
export const hitconnectAPI = (profile_id) => {
    // console.log('executed from connection action', profile_id, localStorage.getItem('WebAppUserKey'), DEVICE_ID, USER_ID)
    return (dispatch) => {
        dispatch(connect())
        axios.post(`${BASE_URL}connection`,{
            "device_id": "SYSTEM",
            "user_id": localStorage.getItem('WebAppUserKey'),
            "profile_id": profile_id
        }).then( response => {
        //   console.log('response from connection action', response.data)
            const coverPicResponse = response.data
            dispatch(connectSuccess(coverPicResponse))
            setTimeout(function(){
                dispatch(connectReset())
           }, 1000);
      }).catch(error => {
          const errorMsg = error.message
          dispatch(connectFailure(errorMsg))
      })
    }
}

//connect confirmation API

export const hitconnectConfirmAPI = (profile_id) => {
    // console.log('executed from connection confirm action', profile_id,localStorage.getItem('WebAppUserKey'))
    return (dispatch) => {
        dispatch(connectReject())
        axios.post(`${BASE_URL}connection_confirm`,{
            "device_id": "SYSTEM",
            "user_id": localStorage.getItem('WebAppUserKey'),
            "profile_id": profile_id
        }).then( response => {
        //   console.log('response from connection confirm action', response.data)
            const coverPicResponse = response.data
            dispatch(connectConfirmSuccess(coverPicResponse))
            setTimeout(function(){
                dispatch(connectConfirmReset())
           }, 1000);
      }).catch(error => {
          const errorMsg = error.message
          dispatch(connectConfirmFailure(errorMsg))
      })
    }
}


//connect rejection API

export const hitconnectRejectAPI = (profile_id) => {
    // console.log('executed from connection Reject action', profile_id)
    return (dispatch) => {
        dispatch(connectReject())
        axios.post(`${BASE_URL}connection_reject`,{
            "device_id": DEVICE_ID,
            "user_id": localStorage.getItem('WebAppUserKey'),
            "profile_id": profile_id
        }).then( response => {
        //   console.log('response from connection Reject action', response.data)
            const rejectResponse = response.data
            dispatch(connectRejectSuccess(rejectResponse))
            setTimeout(function(){
                dispatch(connectRejectReset())
           }, 1000);
      }).catch(error => {
          const errorMsg = error.message
          dispatch(connectRejectFailure(errorMsg))
      })
    }
}
