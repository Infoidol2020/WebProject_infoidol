import React,{useEffect,useState} from 'react'
import {connect} from 'react-redux';

import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import VideoPageRecommend from './VideoPageRecommend';
import VideoViewPageComment from './VideoViewPageComment';
import './VideoViewPageDetail.css'
import VideoViewPageMain from './VideoViewPageMain';

// import VideoPlayer from '../VideoDetails'

import { fetchAllVideoView } from '../../redux/VideoViewPage/VideoPageViewAction'
import {fetchAllComments} from '../../redux/CommentTrendingBlog/ActionComment'
import {fetchAllCommentsReply} from '../../redux/Reply/ActionReplyToComment'
import {hitLikeApi} from '../../redux/Like/LikeActions';
import {postReportAPI} from '../../redux/Report/ReportActions'
import {fetchReportCategories} from '../../redux/Report/ReportActions'
import {fetchVideoCount} from '../../redux/VideoViewCount/VideoCountAction'
import {hitsubscribeAPI} from '../../redux/Subscribe/SubscribeActions'
import {hitconnectAPI} from '../../redux/Connect/ConnectActions'
import {hitMakeCustomizeAPI} from '../../redux/MakeCustomize/MakeCustomizeActions'
import {hitUnsubscribeAPI} from '../../redux/Subscribe/SubscribeActions'
import {hitconnectRejectAPI} from '../../redux/Connect/ConnectActions'
import {fetchAllVideoList} from '../../redux/VideoList/VideoListActons'




// {AllVideoFromAPI,fetchAllVideoView}
const VideoViewPageDetail = (props) => {
    // console.log('props from video detail recommended',props.VideoDetails.VideoView.VideoDetailPageGetApi.allVideoDetail.recommended)
    
console.log('props from video details', props);





const [recommend, setrecommend] =useState([])
// const [commentList,setCommentList]=useState([])







// useEffect(() => {
//     const id = localStorage.getItem('id');
//     console.log('id from local storage', id);
//     props.fetchAllVideoView(id)
//     props.fetchVideoCount(id)
    
// }, [])

// useEffect(() => {
//     const UI = localStorage.getItem('UI');
//     console.log('id from local storage', UI);
//     props.fetchAllVideoView(UI)
// },[])





    return (
        <div>
            <Sidebar/>
            <Navbar/>
            <div className="VideoViewBlock">
                <div className="VVmainBlock">
                    <VideoViewPageMain {...props}/>
                    <VideoViewPageComment  {...props}/>
                </div>
                <h2>Recommended</h2>
                <VideoPageRecommend  {...props}/>
            </div>
            
        {/* <VideoPlayer /> */}
        </div>
    )
}
const mapStateToProps = (state) => {
    console.log('stateeeeee from pictureview page', state);
    return{ 
        VideoDetails: state

    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchAllVideoView: (video_id) => dispatch(fetchAllVideoView(video_id)),
        fetchAllComments : (data, image_id, type) => dispatch(fetchAllComments(data, image_id,type)),
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
        fetchAllVideoList:() => dispatch(fetchAllVideoList())

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(VideoViewPageDetail)

// export default VideoViewPageDetail
