import React,{useEffect,useState} from 'react'
import {connect} from 'react-redux';

import { fetchAllPictureView } from '../../redux/PictureViewPage/PictureViewPageAction';
import {fetchAllComments} from '../../redux/CommentTrendingBlog/ActionComment';
import {fetchAllCommentsReply} from '../../redux/Reply/ActionReplyToComment';
import {hitLikeApi} from '../../redux/Like/LikeActions';
import {postReportAPI} from '../../redux/Report/ReportActions'
import {fetchReportCategories} from '../../redux/Report/ReportActions'
import {hitsubscribeAPI} from '../../redux/Subscribe/SubscribeActions'
import {hitconnectAPI} from '../../redux/Connect/ConnectActions'
import {hitMakeCustomizeAPI} from '../../redux/MakeCustomize/MakeCustomizeActions'
import {hitUnsubscribeAPI} from '../../redux/Subscribe/SubscribeActions'
import {hitconnectRejectAPI} from '../../redux/Connect/ConnectActions'
import {hitPictureRecommendedAPI} from '../../redux/PictureRecommended/PictureRecommendedActions'




import Navbar from '../Navbar';
import Sidebar from '../Sidebar/Sidebar';
// import CopyRight from '../CopyRight/CopyRight' 
import Footer from '../NewFooter'


import PictureViewRecommended from './PictureViewRecommended';
import './PictureViewDetail.css';
import PictureViewMain from './PictureViewMain';
import PictureViewComment from './PictureViewComment';
import { fetchUserProfile } from '../../redux/UserProfile/UserProfileActions';
// {AllPictureListFromAPI,fetchAllPictureView ,AllCommentFromAPI,fetchAllComment}
const PictureViewDetail = (props) => {

    // const [commentInputField,setcommentInputField] = useState({
    //     CommentUserInput : '',
    // });


    useEffect(() => {
        const id = localStorage.getItem('id');
        // console.log('id from local storage', id);
        props.fetchAllPictureView(id);
        // console.log('Picturee listtttt',props.AllPictureListFromAPI)

    },[])
    // useEffect(() => {
    //     const id = localStorage.getItem('id');
    //     props.fetchAllPictureView(id);
    //     console.log('executed', props.AllPictureListFromAPI.Comment.CommentsTrendingPageGetApi.CommentsTrendingPageSuccess)
    //     console.log('commentssss', props.AllPictureListFromAPI.PictureView.PictureDetailPageGetApi.allPictureDetail.comments)
    // }, [props.AllPictureListFromAPI.Comment.CommentsTrendingPageGetApi.CommentsTrendingPageSuccess])

  
    

    // useEffect(() => { 
    //     props.fetchReportCategories()
    // }, [])

    // useEffect(() => {
    //     setReportCategories(props.AllPictureListFromAPI.Report.ReportCategoriesGetApi.reportCategories)
    // },[props.AllPictureListFromAPI.Report.ReportCategoriesGetApi.ReportCategoriesSuccess])

    // console.log('report', props.AllPictureListFromAPI.Report.ReportCategoriesGetApi.reportCategories)

    return (
        <div>
            <Sidebar/>
            <Navbar/>
            <div className="PictureViewRecommended">
                <div className="PV_MainBlock">
                <PictureViewMain {...props}/>
                <PictureViewComment  {...props}  />
                </div>
                <PictureViewRecommended {...props}/>
            </div>
            {/* <CopyRight /> */}
            <Footer />
        </div>
    )
}

const mapStateToProps = (state) => {
    // console.log('stateeeeee from pictureview page', state);
    // console.log('state from comment Section', state.Comment.CommentsTrendingPageGetApi.allCommentsFromCommentApi);
    return{ 
        AllPictureListFromAPI: state,
        AllCommentFromAPI : state.Comment.CommentsTrendingPageGetApi.allCommentsFromCommentApi
    
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchAllPictureView: (image_id) => dispatch(fetchAllPictureView(image_id)),
        fetchAllComments : (data, image_id, type) => dispatch(fetchAllComments(data, image_id,type)),
        fetchAllCommentsReply: (state, commentId) => dispatch(fetchAllCommentsReply(state, commentId)),
        hitLikeApi : (elementId, elementType) => dispatch(hitLikeApi(elementId, elementType)),
        postReportAPI: (categoryName, elementId, elementType) => dispatch(postReportAPI(categoryName, elementId, elementType)),
        fetchReportCategories: () => dispatch(fetchReportCategories()),
        hitsubscribeAPI :(profile_id) => dispatch(hitsubscribeAPI(profile_id)),
        hitconnectAPI :(profile_id) => dispatch(hitconnectAPI(profile_id)),
        hitconnectRejectAPI :(profile_id) => dispatch(hitconnectRejectAPI(profile_id)),
        hitMakeCustomizeAPI:(profile_id, customize_id) => dispatch(hitMakeCustomizeAPI(profile_id, customize_id)),
        hitUnsubscribeAPI: (profile_id) => dispatch(hitUnsubscribeAPI(profile_id)),
        fetchUserProfile: (data) => dispatch(fetchUserProfile(data)),
        hitPictureRecommendedAPI: (offset, artistId) => dispatch(hitPictureRecommendedAPI(offset, artistId)),



    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PictureViewDetail)

// export default PictureViewDetail
