import axios from 'axios';
import { BASE_URL, USER_ID, DEVICE_ID } from '../Constants/ApiConstants'
import { GET_TRENDING_VIDEOS, GET_TRENDING_VIDEOS_SUCCESS, GET_TRENDING_VIDEOS_FAILURE } from './TrendingVideoTypes'
export const getTrendingVideos = () => {
    return{
        type: GET_TRENDING_VIDEOS
    }
}

export const getTrendingVideosSuccess = (trendingVideos) => {
    return{
        type: GET_TRENDING_VIDEOS_SUCCESS,
        payload: trendingVideos
    }
}

export const getTrendingVideosFailure = (error) => {
    return{
        type: GET_TRENDING_VIDEOS_FAILURE,
        payload: error
    }
}

export const fetchTrendingVideos = () => {
    // console.log('executed')
    return (dispatch) => {
        dispatch(getTrendingVideos)
        axios.post(`${BASE_URL}dashboard`,{
          "device_id": DEVICE_ID,
          "user_id": USER_ID,
          "latitude":"12.45645654",
          "longitude":"12.34554363"
      }).then( response => {
          const trendingvideos = response.data.data
          dispatch(getTrendingVideosSuccess(trendingvideos))
      }).catch(error => {
          const errorMsg = error.message
          dispatch(getTrendingVideosFailure(errorMsg))
      })
    }
}