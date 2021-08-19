import axios from 'axios';
import { BASE_URL, USER_ID, DEVICE_ID } from '../Constants/ApiConstants'
import { SEARCH, SEARCH_SUCCESS, SEARCH_FAILURE, SEARCH_RESET } from './SearchTypes'
export const search = () => {
    return{
        type: SEARCH
    }
}

export const searchSuccess = (searchResponse) => {
    return{
        type: SEARCH_SUCCESS,
        payload: searchResponse
    }
}
export const searchFailure = (error) => {
    return{
        type: SEARCH_FAILURE,
        payload: error
    }
}

export const searchReset = () => {
    return{
        type: SEARCH_RESET
    }
}

export const searchData = (keyword) => {
    // console.log('executed from search action ....')
    return (dispatch) => {
        dispatch(search)
        axios.post(`${BASE_URL}searching`,{
          "device_id": DEVICE_ID,
          "user_id": USER_ID,
          "keyword": keyword
      }).then( response => {
        //   console.log('response from search action', response.data.data)
            const searchResponse = response.data.data
            dispatch(searchSuccess(searchResponse))
        //     setTimeout(function(){
        //         dispatch(searchReset()) 
        //    }, 1000);
      }).catch(error => {
          const errorMsg = error.message
          dispatch(searchFailure(errorMsg))
      })
    }
}
