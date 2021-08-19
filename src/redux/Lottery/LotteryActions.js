import axios from 'axios';
import { BASE_URL, USER_ID, DEVICE_ID } from '../Constants/ApiConstants';
import { GET_LOTTERY, GET_LOTTERY_SUCCESS, GET_LOTTERY_FAILURE} from './LotteryTypes'

export const lottery = () => {
    // console.log('from LOTTERY actionnnnn')
    return{
        type: GET_LOTTERY
    }
}

export const lotterySuccess = (LotteryPayloadSuccess) => {
    // console.log('from LOTTERY action suxxxx')
    return{
        type: GET_LOTTERY_SUCCESS,
        payload: LotteryPayloadSuccess
    }
}
export const lotteryFailure = (error) => {
    // console.log('from LOTTERY action errrrrrrr')
    return{
        type: GET_LOTTERY_FAILURE,
        payload: error
    }
}

export const hitlotteryAPI = (lotteryType) => {
    // console.log('executed from LOTTERY action---',lotteryType)
    return (dispatch) => {
        dispatch(lottery)
        axios.post(`${BASE_URL}daily_winner`,{
          "device_id": DEVICE_ID,
          "user_id": USER_ID,
          "type": lotteryType
      }).then( response => {
        //   console.log('response from LOTTERY action', response.data.data)
            const lottery_Response = response.data.data
            dispatch(lotterySuccess(lottery_Response));
      }).catch(error => {
          const errorMsg = error.message
          dispatch(lotteryFailure(errorMsg))
      })
    }
}
