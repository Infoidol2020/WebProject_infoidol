import axios from 'axios';
import { BASE_URL, USER_ID, DEVICE_ID } from '../Constants/ApiConstants';
import { DELETE_DATA, DELETE_DATA_SUCCESS, DELETE_DATA_FAILURE, DELETE_DATA_RESET} from './DeleteDataType'

export const deleteData = () => {
    console.log('from deleteData actionnnnn')
    return{
        type: DELETE_DATA
    }
}

export const deleteDataSuccess = (deleteDataPayloadSuccess) => {
    console.log('from deleteData action suxxxx')
    return{
        type: DELETE_DATA_SUCCESS,
        payload: deleteDataPayloadSuccess
    }
}
export const deleteDataReset = () => {
    console.log('from deleteData action reset')
    return{
        type: DELETE_DATA_RESET,
    }
}
export const deleteDataFailure = (error) => {
    console.log('from deleteData action errrrrrrr')
    return{
        type: DELETE_DATA_FAILURE,
        payload: error
    }
}

export const hitdeleteDataAPI = (data_id,data_type) => {
    console.log('executed from deleteData action---',data_id,data_type)
    return (dispatch) => {
        dispatch(deleteData)
        axios.post(`${BASE_URL}delete_data`,{
            "device_id": DEVICE_ID,
            "user_id": USER_ID,
            "data_id": data_id,
            "data_type": data_type
      }).then( response => {
          console.log('response from deleteData action', response.data)
            const deleteData_Response = response.data.data
            dispatch(deleteDataSuccess(deleteData_Response));
            dispatch(deleteDataReset())

      }).catch(error => {
          const errorMsg = error.message
          dispatch(deleteDataFailure(errorMsg))
      })
    }
}
