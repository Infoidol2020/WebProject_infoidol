import axios from 'axios';
import { BASE_URL, USER_ID, DEVICE_ID } from '../Constants/ApiConstants'
import { GET_CUSTOMIZED_FEEDS, GET_CUSTOMIZED_FEEDS_SUCCESS, GET_CUSTOMIZED_FEEDS_FAILURE } from './CustomizeFeedsTypes'
export const getCustomizedFeeds = () => {
    return{
        type: GET_CUSTOMIZED_FEEDS
    }
}

export const getCustomizedFeedsSuccess = (Feeds) => {
    return{
        type: GET_CUSTOMIZED_FEEDS_SUCCESS,
        payload: Feeds
    }
}
export const getCustomizedFeedsFailure = (error) => {
    return{
        type: GET_CUSTOMIZED_FEEDS_FAILURE,
        payload: error
    }
}

export const fetchCustomizedFeeds = (data, offset) => {
    // console.log('executed from feed page actions')
    return (dispatch) => {
        dispatch(getCustomizedFeeds())
        // axios.post(`${BASE_URL}customize_feed_page`,
        axios.post('https://dev.infoidol.com/admin/WebApi/customize_feed_page',
        {
        "device_id": DEVICE_ID,
        "user_id": USER_ID,
        "customize_id": data,
        "offset": offset,
    }).then( response => {
        //   console.log('response from customized feed page action', response.data.data)
            const CustomizedFeeds = response.data.data
            dispatch(getCustomizedFeedsSuccess(CustomizedFeeds))
      }).catch(error => {
          const errorMsg = error.message
          dispatch(getCustomizedFeedsFailure(errorMsg))
      })
    }
}
