import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import './VideoPlayer.css'

import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
// import Footer from '../Footer/Footer' 
import Footer from '../NewFooter' 


import MainVideoSection from './MainVideoSection'
import VideoLikeShare from './VideoLikeShare'
import VideoConnectCustomize from './VideoConnectCustomize'
import VideoComments from './VideoComments'
import VideoRecommended from './VideoRecommended'


import {fetchVideoCount} from '../../redux/VideoViewCount/VideoCountAction' // video view count
import { fetchAllVideoView } from '../../redux/VideoViewPage/VideoPageViewAction'
import {hitsubscribeAPI} from '../../redux/Subscribe/SubscribeActions'
import {hitUnsubscribeAPI} from '../../redux/Subscribe/SubscribeActions'

import {hitLikeApi} from '../../redux/Like/LikeActions';
import {postReportAPI} from '../../redux/Report/ReportActions'
import {fetchReportCategories} from '../../redux/Report/ReportActions'

import {hitconnectAPI} from '../../redux/Connect/ConnectActions'
import {hitconnectRejectAPI} from '../../redux/Connect/ConnectActions'
import {hitMakeCustomizeAPI} from '../../redux/MakeCustomize/MakeCustomizeActions'

import {fetchAllComments} from '../../redux/CommentTrendingBlog/ActionComment'
import {fetchAllCommentsReply} from '../../redux/Reply/ActionReplyToComment'

import {hitVideoRecommendedAPI} from '../../redux/VideoRecommended/VideoRecommendedActions'
import { fetchUserProfile } from '../../redux/UserProfile/UserProfileActions'// fetch other users profile

const VideoPlayer = (props) => {
    
    const [videoDetails, setVideoDetails] = useState();
    const [video, setVideo] = useState()
    const [videoViews, setVideoViews] = useState();
    const [subscribeStatus, setSubscribeStatus] = useState();
    const [recommended, setRecommended] = useState();

    // console.log('props', props.VideoDetails.VideoRecommended.VideoRecommendedApi.VideoRecommended.data)
    useEffect(() => {
        props.fetchAllVideoView(localStorage.getItem('id'))
        props.fetchVideoCount(localStorage.getItem('id'))
        if(sessionStorage.getItem('videoRecommendedOffset') == undefined || sessionStorage.getItem('videoRecommendedOffset') == null){
            props.hitVideoRecommendedAPI(0, localStorage.getItem('UI'))
            sessionStorage.setItem('videoRecommendedOffset', 0)
        }
        else{
            props.hitVideoRecommendedAPI(sessionStorage.getItem('videoRecommendedOffset'), localStorage.getItem('UI'))
        }
        
    }, [])


    useEffect(() => {
        if(props.VideoDetails.VideoView.VideoDetailPageGetApi.VideoDetailPageSuccess){
            setVideoDetails(props.VideoDetails.VideoView.VideoDetailPageGetApi.allVideoDetail)
            setVideo(props.VideoDetails.VideoView.VideoDetailPageGetApi.allVideoDetail.video_detail.video_link)
            setVideoViews(props.VideoDetails.VideoView.VideoDetailPageGetApi.allVideoDetail.video_detail.no_of_views)
            setSubscribeStatus(props.VideoDetails.VideoView.VideoDetailPageGetApi.allVideoDetail.subscribe_status)

            // console.log('props.VideoDetails',props.VideoDetails.VideoView.VideoDetailPageGetApi.allVideoDetail)
        }
    }, [props.VideoDetails.VideoView.VideoDetailPageGetApi.VideoDetailPageSuccess])

    useEffect(() => {
        if(props.VideoDetails.VideoRecommended.VideoRecommendedApi.VideoRecommendedSuccess){
            setRecommended(props.VideoDetails.VideoRecommended.VideoRecommendedApi.VideoRecommended.data)
        }
    }, [props.VideoDetails.VideoRecommended.VideoRecommendedApi.VideoRecommendedSuccess])
    

    return (

        <div>
            <Sidebar />
            <Navbar />
            <div className="MainVideoSection">
            <MainVideoSection 
                video={video} 
                videoDetails={videoDetails} 
                setVideoDetails={setVideoDetails}  
                videoViews={videoViews}
                setVideoViews={setVideoViews}
                subscribeStatus={subscribeStatus}
                setSubscribeStatus={setSubscribeStatus}
                {...props} />
                <div className="VD_LikecommentSec">
                    <VideoLikeShare
                    videoDetails={videoDetails} 
                    {...props}/>
                    
                    <div>
                        <VideoConnectCustomize
                        videoDetails={videoDetails} 
                        {...props} />
                        <VideoComments                        
                        videoDetails={videoDetails} 
                        {...props}
                        />
                    </div>
                </div>
        </div>
        <h2 style={{marginLeft: '8rem'}}>Recommended</h2>
        <VideoRecommended
        // videoDetails={videoDetails} 
        recommended={recommended}
        {...props}/>
        <Footer />

        </div>
    )
}

const mapStateToProps = (state) => {
    // console.log('stateeeeee from video player page', state);
    return{ 
        VideoDetails: state

    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchAllVideoView: (video_id) => dispatch(fetchAllVideoView(video_id)),
        fetchAllComments : (data, video_id, type) => dispatch(fetchAllComments(data, video_id,type)),
        fetchAllCommentsReply: (state, commentId) => dispatch(fetchAllCommentsReply(state, commentId)),
        hitLikeApi : (elementId, elementType) => dispatch(hitLikeApi(elementId, elementType)),
        postReportAPI: (categoryName, elementId, elementType) => dispatch(postReportAPI(categoryName, elementId, elementType)),
        fetchReportCategories: () => dispatch(fetchReportCategories()),
        fetchVideoCount: (video_id) => dispatch(fetchVideoCount(video_id)),
        hitsubscribeAPI :(profile_id) => dispatch(hitsubscribeAPI(profile_id)),
        hitconnectAPI :(profile_id) => dispatch(hitconnectAPI(profile_id)),
        hitconnectRejectAPI :(profile_id) => dispatch(hitconnectRejectAPI(profile_id)),
        hitMakeCustomizeAPI:(profile_id, customize_id) => dispatch(hitMakeCustomizeAPI(profile_id, customize_id)),
        hitUnsubscribeAPI: (profile_id) => dispatch(hitUnsubscribeAPI(profile_id)),
        // fetchAllVideoList:() => dispatch(fetchAllVideoList())
        hitVideoRecommendedAPI: (offset, artist_id) => dispatch(hitVideoRecommendedAPI(offset, artist_id)),
        fetchUserProfile: (data) => dispatch(fetchUserProfile(data))


    }
}
export default connect(mapStateToProps, mapDispatchToProps)(VideoPlayer)
// export default VideoPlayer
