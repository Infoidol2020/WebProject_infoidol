import axios from 'axios';
import { BASE_URL, USER_ID, DEVICE_ID } from '../Constants/ApiConstants'
import { GET_ALL_FEEDS, GET_ALL_FEEDS_SUCCESS, GET_ALL_FEEDS_FAILURE, GET_ALL_FEEDS_RESET } from './FeedPageTypes'
export const getAllFeeds = () => {
    return{
        type: GET_ALL_FEEDS
    }
}

export const getAllFeedsSuccess = (Feeds) => {
    return{
        type: GET_ALL_FEEDS_SUCCESS,
        payload: Feeds
    }
}
export const getAllFeedsReset = () => {
    return{
        type: GET_ALL_FEEDS_RESET,
    }
}
export const getAllFeedsFailure = (error) => {
    return{
        type: GET_ALL_FEEDS_FAILURE,
        payload: error
    }
}

export const fetchAllFeeds = (customizeId, offset) => {
    // console.log('executed from feed page actions')
    return (dispatch) => {
        dispatch(getAllFeeds()) //this function will not be called
        axios.post(`${BASE_URL}feed_page`,
        // axios.post('https://dev.infoidol.com/admin/WebApi/feed_page',
        {
        "device_id": DEVICE_ID,
        "user_id": USER_ID,
        "customize_id": customizeId,
        "offset": offset
    }).then( response => {
        //   console.log('response from feed page action', response)
            const allFeeds = response.data.data
            dispatch(getAllFeedsSuccess(allFeeds))
        //     setTimeout(function(){
        //         dispatch(getAllFeedsReset())
        //    }, 4000);
        }).catch(error => {
            const errorMsg = error.message
            dispatch(getAllFeedsFailure(errorMsg))
      })
    }
}


// export const fetchAllFeeds = () => {
//     return (dispatch) => {
//         dispatch(getAllFeeds)
        
//     try {
//         axios.post('https://infoidol.com/admin/WebApi/feed_page',{
//           "device_id":"SYSTEM",
//           "user_id":"2",
//           "customize_id":"0"
//       }).then( response => {
//           console.log('response from feed page action', response)
//             const allFeeds = response.data.data
//             dispatch(getAllFeedsSuccess(allFeeds))
//       })
//     }
    
//     catch(err) {
//         const errorMsg = err.message
//         dispatch(getAllFeedsFailure(errorMsg))
//     }
//     finally {
//         // dispatch(getAllFeedsReset())
//         setTimeout(function(){
//             dispatch(getAllFeedsReset())
//         }, 4000);

//     }
    
// }
// }


