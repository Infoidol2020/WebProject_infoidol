import axios from 'axios';
import { BASE_URL, USER_ID, DEVICE_ID } from '../Constants/ApiConstants'
import { SUBSCRIBE, SUBSCRIBE_SUCCESS, SUBSCRIBE_FAILURE, SUBSCRIBE_RESET } from './SubscribeTypes'
import { UNSUBSCRIBE, UNSUBSCRIBE_SUCCESS, UNSUBSCRIBE_FAILURE, UNSUBSCRIBE_RESET } from './SubscribeTypes'

//subscribe actions
export const subscribe = () => {
    return{
        type: SUBSCRIBE
    }
}

export const subscribeSuccess = (subscribeData) => {
    return{
        type: SUBSCRIBE_SUCCESS,
        payload: subscribeData
    }
}
export const subscribeFailure = (error) => {
    return{
        type: SUBSCRIBE_FAILURE,
        payload: error
    }
}

export const subscribeReset = () => {
    return{
        type: SUBSCRIBE_RESET
    }
}

// unsubscribe actions

export const unsubscribe = () => {
    return{
        type: UNSUBSCRIBE
    }
}

export const unsubscribeSuccess = (unsubscribeData) => {
    return{
        type: UNSUBSCRIBE_SUCCESS,
        payload: unsubscribeData
    }
}
export const unsubscribeFailure = (error) => {
    return{
        type: UNSUBSCRIBE_FAILURE,
        payload: error
    }
}

export const unsubscribeReset = () => {
    return{
        type: UNSUBSCRIBE_RESET
    }
}


//subscribe api
export const hitsubscribeAPI = (profile_id) => {
    // console.log('executed from subscribe action', profile_id)
    return (dispatch) => {
        dispatch(subscribe())
        axios.post(`${BASE_URL}subscribe`,{
            "device_id": "SYSTEM",
            "user_id": localStorage.getItem('WebAppUserKey'),
            "profile_id": profile_id
        }).then( response => {
        //   console.log('response from subscribe action', response.data)
            const subscribeResponse = response.data
            dispatch(subscribeSuccess(subscribeResponse))
            setTimeout(function(){
                dispatch(subscribeReset())
           }, 1000);
      }).catch(error => {
          const errorMsg = error.message
          dispatch(subscribeFailure(errorMsg))
      })
    }
}

//unsubscribe api

export const hitUnsubscribeAPI = (profile_id) => {
    // console.log('executed from unsubscribe action', profile_id)
    return (dispatch) => {
        dispatch(unsubscribe())
        axios.post(`${BASE_URL}unsubscribe`,{
            "device_id": DEVICE_ID,
            "user_id": localStorage.getItem('WebAppUserKey'),
            "profile_id": profile_id
        }).then( response => {
        //   console.log('response from unsubscribe action', response.data)
            const unsubscribeResponse = response.data
            dispatch(unsubscribeSuccess(unsubscribeResponse))
            setTimeout(function(){
                dispatch(unsubscribeReset())
           }, 1000);
      }).catch(error => {
          const errorMsg = error.message
          dispatch(unsubscribeFailure(errorMsg))
      })
    }
}
