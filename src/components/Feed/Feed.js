import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import { useHistory } from 'react-router-dom';


import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import './Feed.css'
import FeedProfile from './FeedProfile';
import UserFeeds from './UserFeeds';
import FeedFriendSuggestions from './FeedFriendSuggestions';

import pageLoader from '../../assets/pageLoader.svg'

import {fetchAllFeeds} from '../../redux/Feeds/FeedPageActions'
//fetch categories api's
import { fetchAllVideoCategories } from '../../redux/GetCategories/VideoCategories/VideoCategoriesActions'
import { fetchAllAudioCategories } from '../../redux/GetCategories/AudioCategories/AudioCategoriesActions'
import { fetchAllPictureCategories } from '../../redux/GetCategories/PictureCategories/PictureCategoriesActions'
import {fetchAllBlogs} from '../../redux/BlogPage/BlogPageActions'
import { fetchAllBlogCategories } from '../../redux/GetCategories/BlogCategories/BlogCategoriesActions'

//upload api's
import { uploadVideoAPI } from '../../redux/UploadFiles/UploadVideo/UploadVideoActions'
import { uploadAudioAPI } from '../../redux/UploadFiles/UploadAudio/UploadAudioActions'
import { uploadImageAPI } from '../../redux/UploadFiles/UploadImage/UploadImageActions'
import { uploadBlogAPI } from '../../redux/UploadFiles/UploadBlog/UploadBlogActions'

//customize feeds
import { fetchCustomizedFeeds } from '../../redux/CustomizeFeeds/CustomizeFeedsActions'

//report list
// import { fetchReportCategories } from '../../redux/Report/ReportActions'

//post report

// import { postReportAPI } from '../../redux/Report/ReportActions'

//like
// import { hitLikeApi } from '../../redux/Like/LikeActions'

//comment list
// import { fetchCommentList } from '../../redux/CommentList/ActionCommentList'

//give comment
// import { fetchAllComments } from '../../redux/CommentTrendingBlog/ActionComment'

//comment reply
// import { fetchAllCommentsReply } from '../../redux/ReplyToComment/ActionReplyToComment'

import { fetchUserProfile } from '../../redux/UserProfile/UserProfileActions'// fetch other users profile
import { hitMyUserProfileAPI } from '../../redux/MyUserProfile/MyUserProfileActions'// fetch my profile

import {fetchAllPictureView} from '../../redux/PictureViewPage/PictureViewPageAction'// picture view page
import { fetchAllVideoView } from '../../redux/VideoViewPage/VideoPageViewAction' //video view page
import { fetchAllRecmBlogs } from '../../redux/BlogShowRecommended/ActionsRecommendedBlogs' // blog view page


const Feed = (props) => {
    const history = useHistory();
    const [profilePic, setProfilePic] = useState()
    const [noCustomizedFeeds, setNoCustomizedFeeds] = useState(false)
    if(localStorage.getItem('WebAppUserKey') == '' || localStorage.getItem('WebAppUserKey') == null ){
        history.push('/login')
        }
    // console.log('userFeedsData', userFeedsData)
    const [userFeeds, setUserFeeds] = useState([]);
    const [customizeList, setCustomizeList] = useState([]);

    // const [reportCategories, setReportCategories] = useState([])

    const handleCustomizeFeeds =  (customizeId) => {
        // props.fetchCustomizedFeeds(customizeId, 0) // was using this api before for customized feeds
        setUserFeeds([])
        props.fetchAllFeeds(customizeId, 0)

    }


    //all feeds
    useEffect(()=>{
        if(localStorage.getItem('WebAppUserKey') == '' || localStorage.getItem('WebAppUserKey') == null || 
        localStorage.getItem('WebAppUserKey') == undefined){
            history.push('/login')
            return
            }

            if(sessionStorage.getItem('feedOffset') == undefined || sessionStorage.getItem('feedOffset') == null){
                props.fetchAllFeeds(0, 0)
                sessionStorage.setItem('feedOffset', 0)
                sessionStorage.setItem('customize-type', 0)
            }
            else{
                props.fetchAllFeeds(sessionStorage.getItem('customize-type'), sessionStorage.getItem('feedOffset'))
            }


        props.hitMyUserProfileAPI()

        //video categories
        props.fetchAllVideoCategories()

        //audio categories
        props.fetchAllAudioCategories()

        //picture categories
        props.fetchAllPictureCategories()

        //blog categories
        props.fetchAllBlogs()
        props.fetchAllBlogCategories()

        // report categories
        // props.fetchReportCategories()
    },[])


    useEffect(() => {
        if(props.FeedsFromAPI.myUserProfile.myUserProfileApi.myUserProfileSuccess &&
            props.FeedsFromAPI.myUserProfile.myUserProfileApi &&
            props.FeedsFromAPI.myUserProfile.myUserProfileApi.myUserProfile){
                setProfilePic(props.FeedsFromAPI.myUserProfile.myUserProfileApi.myUserProfile.profile_pic)
            }
    }, [props.FeedsFromAPI.myUserProfile.myUserProfileApi.myUserProfileSuccess])


useEffect(() => {
    
    const userFeedsData = props.FeedsFromAPI.FeedPage.allFeeds;
    // console.log('helooooo',userFeedsData)

    if(props.FeedsFromAPI.FeedPage.FeedPageGetApi.FeedPageSuccess){
    // console.log('props.FeedsFromAPI.FeedPage.FeedPageGetApi.FeedPageSuccess', props.FeedsFromAPI.FeedPage.FeedPageGetApi.FeedPageSuccess, 
    // props.FeedsFromAPI.FeedPage.FeedPageGetApi.allFeeds.data_list)
    if(
        props.FeedsFromAPI.FeedPage.FeedPageGetApi.allFeeds.data_list.length > 0 &&
        props.FeedsFromAPI.FeedPage.FeedPageGetApi.allFeeds.customize.length > 0 ){
        // setUserFeeds(userFeeds => [...userFeeds, ...props.FeedsFromAPI.FeedPage.FeedPageGetApi.allFeeds.data_list])
        setUserFeeds(props.FeedsFromAPI.FeedPage.FeedPageGetApi.allFeeds.data_list)
        setCustomizeList(props.FeedsFromAPI.FeedPage.FeedPageGetApi.allFeeds.customize)
        setNoCustomizedFeeds(false)

    }
    else{
        setNoCustomizedFeeds(true)
    }
    }
}, [props.FeedsFromAPI.FeedPage.FeedPageGetApi.FeedPageSuccess])

// useEffect(()=>{
//     if(props.FeedsFromAPI.FeedPage.FeedPageGetApi.allFeeds.data_list!=undefined){
//     if(props.FeedsFromAPI.FeedPage.FeedPageGetApi.allFeeds.data_list.length>0){
//         setUserFeeds(userFeeds => [...userFeeds, ...props.FeedsFromAPI.FeedPage.FeedPageGetApi.allFeeds.data_list])
//         setNoCustomizedFeeds(false)

    
//     }}
// },[props.FeedsFromAPI.FeedPage.FeedPageGetApi.allFeeds.data_list])
// console.log('userfff', userFeeds)

// useEffect(()=>{
//     // console.log('props.FeedsFromAPI.CustomizeFeeds.CustomizeFeedsGetApi.customizedFeeds.data_list',
//     // props.FeedsFromAPI.CustomizeFeeds.CustomizeFeedsGetApi.customizedFeeds.data_list)
//     if(props.FeedsFromAPI.CustomizeFeeds.CustomizeFeedsGetApi.customizedFeeds.data_list!=undefined){
//     if(props.FeedsFromAPI.CustomizeFeeds.CustomizeFeedsGetApi.customizedFeeds.data_list.length>0){
//     setUserFeeds(props.FeedsFromAPI.CustomizeFeeds.CustomizeFeedsGetApi.customizedFeeds.data_list)
//     setNoCustomizedFeeds(false)
//     }
//     else{
//     setNoCustomizedFeeds(true)

//     }

// }
// },[props.FeedsFromAPI.CustomizeFeeds.CustomizeFeedsGetApi.customizedFeeds.data_list])





// useEffect(() => {
//     setReportCategories(props.FeedsFromAPI.Report.ReportCategoriesGetApi.reportCategories)
// }, [props.FeedsFromAPI.Report.ReportCategoriesGetApi.ReportCategoriesSuccess])

// console.log('userfeeds', userFeeds)
// console.log('propzzzzzzzzzzz',props.FeedsFromAPI.Report.ReportCategoriesGetApi);
// console.log('props.FeedsFromAPI.FeedPage.FeedPageGetApi.allFeeds.data_list',props.FeedsFromAPI.FeedPage.FeedPageGetApi.allFeeds.customize)
    return (
        <div>
            {
            // userFeeds.length == '0'  ?  
            // <>
            // <div style={{display: 'flex', justifyContent: 'center'}}>
            //     <img src={pageLoader} />
            // </div>  
            // </>
            // :
            <>
            <Sidebar />
            <Navbar  />
            <div className="feed-container" 
            style={{marginLeft: '5vw', width: '95.7%', height: '100vh', marginTop: '13vh'}}>
            <FeedProfile profilePic={profilePic}  {...props}/>
            <div className="FeedPge_MainBlock" style={{display: 'flex', justifyContent: 'space-around'}}>
            
                {
                    noCustomizedFeeds ? 
                    <div style={{
                    marginTop: '5vh',
                    background: 'brown',
                    color: '#fff',
                    height: '5vh',
                    width: '55.5%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',

                }}>No Feeds Found....</div>
                    :
                    (userFeeds.length == '0' || props.FeedsFromAPI.FeedPage.FeedPageGetApi.FeedPageInProgress)  ?  
                    <>
                    <div style={{textAlign: 'center'}}>
                        <img src={pageLoader} />
                    </div>  
                    </>
                    :

                    <UserFeeds setUserFeeds={setUserFeeds} data = {userFeeds}  {...props} />

            
                    
                }
                <FeedFriendSuggestions data = {customizeList} handleCustomizeFeeds={handleCustomizeFeeds}  />         
            </div>
            </div>
            </>
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    // console.log('state from feed page', state);
    return{
        FeedsFromAPI: state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        //all feeds
        fetchAllFeeds: (customizeId, offset) => dispatch(fetchAllFeeds(customizeId, offset)),
        //fetch categories
        fetchAllVideoCategories: () => dispatch(fetchAllVideoCategories()),
        fetchAllAudioCategories: () => dispatch(fetchAllAudioCategories()),
        fetchAllPictureCategories: () => dispatch(fetchAllPictureCategories()),
        fetchAllBlogCategories: () => dispatch(fetchAllBlogCategories()),
        fetchAllBlogs: () => dispatch(fetchAllBlogs()),

        //uploading
        uploadVideoAPI: (data) => dispatch(uploadVideoAPI(data)),
        uploadAudioAPI: (data) => dispatch(uploadAudioAPI(data)),
        uploadImageAPI: (data) => dispatch(uploadImageAPI(data)),
        uploadBlogAPI: (fields, data) => dispatch(uploadBlogAPI(fields, data)),

        //customize feeds
        fetchCustomizedFeeds: (data, offset) => dispatch(fetchCustomizedFeeds(data, offset)),

        //report list
        // fetchReportCategories: () => dispatch(fetchReportCategories()),

        // post report
        // postReportAPI: (categoryName, elementId, elementType) => dispatch(postReportAPI(categoryName, elementId, elementType)),
        
        //like api
        // hitLikeApi: (elementId, elementType) => dispatch(hitLikeApi(elementId, elementType)),

        //comment list
        // fetchCommentList: (element_id, elementType) => dispatch(fetchCommentList(element_id, elementType)),

        //give comment
        // fetchAllComments: (data, elementId, elementType) => dispatch(fetchAllComments(data, elementId, elementType)),

        //comment reply
        // fetchAllCommentsReply: (commentReply, commentId) => dispatch(fetchAllCommentsReply(commentReply, commentId)),

        //fetch uers profile
        fetchUserProfile: (data) => dispatch(fetchUserProfile(data)),

        hitMyUserProfileAPI: () => dispatch(hitMyUserProfileAPI()),

        fetchAllPictureView : (data) => dispatch(fetchAllPictureView(data)),

        fetchAllVideoView: (data) => dispatch(fetchAllVideoView(data)),

        fetchAllRecmBlogs: (data) => dispatch(fetchAllRecmBlogs(data))







    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed)
