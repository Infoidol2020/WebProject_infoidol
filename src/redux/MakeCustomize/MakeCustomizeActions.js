import axios from 'axios';
import { BASE_URL, USER_ID, DEVICE_ID } from '../Constants/ApiConstants'
import { MAKE_CUSTOMIZE, MAKE_CUSTOMIZE_SUCCESS, MAKE_CUSTOMIZE_FAILURE, MAKE_CUSTOMIZE_RESET } from './MakeCustomizeTypes'
export const makeCustomize = () => {
    return{
        type: MAKE_CUSTOMIZE
    }
}

export const makeCustomizeSuccess = (customizeData) => {
    return{
        type: MAKE_CUSTOMIZE_SUCCESS,
        payload: customizeData
    }
}
export const makeCustomizeFailure = (error) => {
    return{
        type: MAKE_CUSTOMIZE_FAILURE,
        payload: error
    }
}

export const makeCustomizeReset = () => {
    // console.log('poiuytrewq')
    return{
        type: MAKE_CUSTOMIZE_RESET,
    }
}

export const hitMakeCustomizeAPI = (profile_id, customize_id) => {
    // console.log('executed from make customize action')
    return (dispatch) => {
        dispatch(makeCustomize)
        axios.post(`${BASE_URL}make_customize`,{
          "device_id": DEVICE_ID,
          "user_id": USER_ID,
          "profile_id": profile_id,
          "customize_id": customize_id
      }).then( response => {
        //   console.log('response from make customize action', response.data)
            const customizeData = response.data
            dispatch(makeCustomizeSuccess(customizeData))
            setTimeout(function(){
            dispatch(makeCustomizeReset())
           }, 500);
      }).catch(error => {
          const errorMsg = error.message
          dispatch(makeCustomizeFailure(errorMsg))
      })
    }
}
