import axios from 'axios';
import { BASE_URL, USER_ID, DEVICE_ID } from '../Constants/ApiConstants'
import { GET_CONNECTION_LIST, GET_CONNECTION_LIST_SUCCESS, GET_CONNECTION_LIST_FAILURE, GET_CONNECTION_LIST_RESET } from './ConnectionRequestedListTypes'
export const connectionList = () => {
    return{
        type: GET_CONNECTION_LIST
    }
}

export const connectionListSuccess = (Feeds) => {
    return{
        type: GET_CONNECTION_LIST_SUCCESS,
        payload: Feeds
    }
}
export const connectionListFailure = (error) => {
    return{
        type: GET_CONNECTION_LIST_FAILURE,
        payload: error
    }
}

export const connectionListReset = () => {
    return{
        type: GET_CONNECTION_LIST_RESET
    }
}

export const fetchConnectionRequestedList = () => {
    // console.log('executed from connection list action ....')
    return (dispatch) => {
        dispatch(connectionList())
        axios.post(`${BASE_URL}connection_requested_list`,{
          "device_id": DEVICE_ID,
          "user_id": localStorage.getItem('WebAppUserKey'),
          "profile_id": localStorage.getItem('WebAppUserKey')
      }).then( response => {
        //   console.log('response from connection list action', response.data)
            const connectionList = response.data
            dispatch(connectionListSuccess(connectionList))
        //     setTimeout(function(){
        //         dispatch(connectionListReset()) 
        //    }, 1000);
      }).catch(error => {
          const errorMsg = error.message
          dispatch(connectionListFailure(errorMsg))
      })
    }
}
