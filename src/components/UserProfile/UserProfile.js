import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import { useHistory } from 'react-router-dom';


import Sidebar from '../Sidebar'
import Navbar from '../Navbar'
// import CopyRight from '../CopyRight/CopyRight' 
import Footer from '../NewFooter'



import UserCover from './UserCover'
import UserDetails from './UserDetails'
import UserPortfolio from './UserPortfolio'
import LikeEmojis from './LikeEmojis'

import pageLoader from '../../assets/pageLoader.svg'
import './userProfile.css'

import { hitMyUserProfileAPI } from '../../redux/MyUserProfile/MyUserProfileActions'// fetch my profile
import { hitUpdateProfileApi } from '../../redux/UpdateProfile/UpdateProfileActions'
import { hituploadCoverPicAPI } from '../../redux/UploadCoverPic/UploadCoverPicActions'
import { hitsubscribeAPI } from '../../redux/Subscribe/SubscribeActions'
import { hitconnectAPI } from '../../redux/Connect/ConnectActions'
import { hitMakeCustomizeAPI } from '../../redux/MakeCustomize/MakeCustomizeActions'
import { hitdeleteDataAPI } from '../../redux/DeleteData';
import { hiteditVideoAPI } from '../../redux/EditVideo';
import { hiteditAudioAPI } from '../../redux/EditAudio';
import { hiteditPictureAPI } from '../../redux/EditPicture';
import { hiteditBlogAPI } from '../../redux/EditBlog'

import { hitMyUploadedVideosAPI } from '../../redux/MyUploadedVideos'
import { hitMyUploadedAudioAPI } from '../../redux/MyUploadedAudio'
import { hitMyUploadedPictureAPI } from '../../redux/MyUploadedPictures'
import { hitMyUploadedBlogAPI } from '../../redux/MyUploadedBlog'

 
const UserProfile = (props) => {
// console.log('uiuyuiu', props.userProfileFromAPI)
    const history = useHistory();

    const [profile, setProfile] = useState({}); 
    const [uploadedVideo, setUploadedVideo] = useState([]);
    const [uploadedMusic, setUploadedMusic] = useState([]);
    const [uploadedPicture, setUploadedPicture] = useState([]);
    const [uploadedBlog, setUploadedBlog] = useState([]);
    const [subscriber, setSubscriber] = useState([]);
    const [subscribed, setSubscribed] = useState([]);
    const [userCoverPic, setUserCoverPic] = useState();
    const [subscribeStatus, setSubscribeStatus] = useState();
    const [connectStatus, setConnectStatus] = useState();
    const [customizeList, setCustomizeList] = useState([]);
    const [customizeName, setCustomizeName] = useState();
    const [myWorksCount, setMyWorksCount] = useState();
    const [subscriberCount, setSubscriberCount] = useState();
    const [subscribedCount, setSubscribedCount] = useState();
    
    useEffect(() => {
        if(localStorage.getItem('WebAppUserKey') == '' || localStorage.getItem('WebAppUserKey') == null){
        history.push('/login')
        return
        }
        props.hitMyUserProfileAPI()
        if(sessionStorage.getItem('uploadedVideoOffset') == undefined || sessionStorage.getItem('uploadedVideoOffset') == null){
        props.hitMyUploadedVideosAPI(localStorage.getItem('WebAppUserKey'), 0)
        sessionStorage.setItem('uploadedVideoOffset', 0)
        }
        else{
            props.hitMyUploadedVideosAPI(localStorage.getItem('WebAppUserKey'), sessionStorage.getItem('uploadedVideoOffset'))
        }

        if(sessionStorage.getItem('uploadedAudioOffset') == undefined || sessionStorage.getItem('uploadedAudioOffset') == null){
            props.hitMyUploadedAudioAPI(localStorage.getItem('WebAppUserKey'), 0)
            sessionStorage.setItem('uploadedAudioOffset', 0)
            }
            else{
                props.hitMyUploadedAudioAPI(localStorage.getItem('WebAppUserKey'), sessionStorage.getItem('uploadedAudioOffset'))
            }
        if(sessionStorage.getItem('uploadedPictureOffset') == undefined || sessionStorage.getItem('uploadedPictureOffset') == null){
                props.hitMyUploadedPictureAPI(localStorage.getItem('WebAppUserKey'), 0)
                sessionStorage.setItem('uploadedPictureOffset', 0)
            }
            else{
                    props.hitMyUploadedPictureAPI(localStorage.getItem('WebAppUserKey'), sessionStorage.getItem('uploadedPictureOffset'))
            }
        if(sessionStorage.getItem('uploadedBlogOffset') == undefined || sessionStorage.getItem('uploadedBlogOffset') == null){
                props.hitMyUploadedBlogAPI(localStorage.getItem('WebAppUserKey'), 0)
                sessionStorage.setItem('uploadedBlogOffset', 0)
            }
            else{
                    props.hitMyUploadedBlogAPI(localStorage.getItem('WebAppUserKey'), sessionStorage.getItem('uploadedBlogOffset'))
            }
        // props.fetchUserProfile(localStorage.getItem('userProfileId'))
    }, [])

    // console.log('ryui',props.userProfileFromAPI.MyUploadedVideos.MyUploadedVideosApi.MyUploadedVideos.status)
    useEffect(() => {
        // console.log('yauuu', props.userProfileFromAPI.MyUploadedAudio.MyUploadedAudioApi.MyUploadedAudioSuccess)
        if(props.userProfileFromAPI.MyUploadedVideos.MyUploadedVideosApi.MyUploadedVideosSuccess &&
            props.userProfileFromAPI.MyUploadedVideos.MyUploadedVideosApi.MyUploadedVideos.status && 
            props.userProfileFromAPI.MyUploadedVideos.MyUploadedVideosApi.MyUploadedVideos.data.length > 0
            ){
                setUploadedVideo(props.userProfileFromAPI.MyUploadedVideos.MyUploadedVideosApi.MyUploadedVideos.data)
            }
        if(props.userProfileFromAPI.MyUploadedAudio.MyUploadedAudioApi.MyUploadedAudioSuccess &&
                props.userProfileFromAPI.MyUploadedAudio.MyUploadedAudioApi.MyUploadedAudio.status && 
                props.userProfileFromAPI.MyUploadedAudio.MyUploadedAudioApi.MyUploadedAudio.data.length > 0
                ){
                    setUploadedMusic(props.userProfileFromAPI.MyUploadedAudio.MyUploadedAudioApi.MyUploadedAudio.data)
                }
        if(props.userProfileFromAPI.MyUploadedPictures.MyUploadedPicturesApi.MyUploadedPicturesSuccess &&
            props.userProfileFromAPI.MyUploadedPictures.MyUploadedPicturesApi.MyUploadedPictures.status && 
            props.userProfileFromAPI.MyUploadedPictures.MyUploadedPicturesApi.MyUploadedPictures.data.length > 0
            ){
                setUploadedPicture(props.userProfileFromAPI.MyUploadedPictures.MyUploadedPicturesApi.MyUploadedPictures.data)
            }
        if(props.userProfileFromAPI.MyUploadedBlog.MyUploadedBlogApi.MyUploadedBlogSuccess &&
            props.userProfileFromAPI.MyUploadedBlog.MyUploadedBlogApi.MyUploadedBlog.status && 
            props.userProfileFromAPI.MyUploadedBlog.MyUploadedBlogApi.MyUploadedBlog.data.length > 0
            ){
                setUploadedBlog(props.userProfileFromAPI.MyUploadedBlog.MyUploadedBlogApi.MyUploadedBlog.data)
            }

    }, [props.userProfileFromAPI.MyUploadedVideos.MyUploadedVideosApi.MyUploadedVideosSuccess,
    props.userProfileFromAPI.MyUploadedAudio.MyUploadedAudioApi.MyUploadedAudioSuccess,
    props.userProfileFromAPI.MyUploadedPictures.MyUploadedPicturesApi.MyUploadedPicturesSuccess,
    props.userProfileFromAPI.MyUploadedBlog.MyUploadedBlogApi.MyUploadedBlogSuccess])

    useEffect(() => {

    // console.log('loggg',props.userProfileFromAPI.myUserProfile.myUserProfileApi.myUserProfile)
        if(props.userProfileFromAPI.myUserProfile.myUserProfileApi.myUserProfileSuccess &&
            props.userProfileFromAPI.myUserProfile.myUserProfileApi &&
            props.userProfileFromAPI.myUserProfile.myUserProfileApi.myUserProfile)
            {
                if(props.userProfileFromAPI.myUserProfile.myUserProfileApi.myUserProfile){
                    setProfile(props.userProfileFromAPI.myUserProfile.myUserProfileApi.myUserProfile)
                }
                // if(props.userProfileFromAPI.myUserProfile.myUserProfileApi.myUserProfile.uploaded_video !== undefined){
                //     setUploadedVideo(props.userProfileFromAPI.myUserProfile.myUserProfileApi.myUserProfile.uploaded_video)
                // }else{
                //     setUploadedVideo()
                // }
                // if(props.userProfileFromAPI.myUserProfile.myUserProfileApi.myUserProfile.uploaded_music !== undefined){
                //     setUploadedMusic(props.userProfileFromAPI.myUserProfile.myUserProfileApi.myUserProfile.uploaded_music)

                // }else{
                //     setUploadedMusic()
                // }
                // if(props.userProfileFromAPI.myUserProfile.myUserProfileApi.myUserProfile.uploaded_picture !== undefined){
                //     setUploadedPicture(props.userProfileFromAPI.myUserProfile.myUserProfileApi.myUserProfile.uploaded_picture)

                // }else{
                //     setUploadedPicture()
                // }
                
                // if(props.userProfileFromAPI.myUserProfile.myUserProfileApi.myUserProfile.uploaded_blog !== undefined){
                //     setUploadedBlog(props.userProfileFromAPI.myUserProfile.myUserProfileApi.myUserProfile.uploaded_blog)
                    
                // }else{
                //     setUploadedBlog()
                // }
                if(props.userProfileFromAPI.myUserProfile.myUserProfileApi.myUserProfile.subscriber !== undefined){
                    setSubscriber(props.userProfileFromAPI.myUserProfile.myUserProfileApi.myUserProfile.subscriber)
                    
                }else{
                    setSubscriber()
                }
                if(props.userProfileFromAPI.myUserProfile.myUserProfileApi.myUserProfile.subscribed !== undefined){
                    setSubscribed(props.userProfileFromAPI.myUserProfile.myUserProfileApi.myUserProfile.subscribed)
                    
                }else{
                    setSubscribed()
                }
                if(props.userProfileFromAPI.myUserProfile.myUserProfileApi.myUserProfile.cover_image !== undefined){
                    setUserCoverPic(props.userProfileFromAPI.myUserProfile.myUserProfileApi.myUserProfile.cover_image)
                    
                }else{
                    setUserCoverPic()
                }
                if(props.userProfileFromAPI.myUserProfile.myUserProfileApi.myUserProfile.subscribe_status !== undefined){
                    setSubscribeStatus(props.userProfileFromAPI.myUserProfile.myUserProfileApi.myUserProfile.subscribe_status)
                    
                }else{
                    setSubscribeStatus()
                }
                if(props.userProfileFromAPI.myUserProfile.myUserProfileApi.myUserProfile.connection_status !== undefined){
                    setConnectStatus(props.userProfileFromAPI.myUserProfile.myUserProfileApi.myUserProfile.connection_status)
                    
                }else{
                    setConnectStatus()
                }

                if(props.userProfileFromAPI.myUserProfile.myUserProfileApi.myUserProfile.customize_list !== undefined){
                    setCustomizeList(props.userProfileFromAPI.myUserProfile.myUserProfileApi.myUserProfile.customize_list)
                    
                }else{
                    setCustomizeList()
                }
                if(props.userProfileFromAPI.myUserProfile.myUserProfileApi.myUserProfile.customize_name !== undefined){
                    setCustomizeName(props.userProfileFromAPI.myUserProfile.myUserProfileApi.myUserProfile.customize_name)
                    
                }else{
                    setCustomizeName()
                }
                if(props.userProfileFromAPI.myUserProfile.myUserProfileApi.myUserProfile.uploaded_count !== undefined){
                    setMyWorksCount(props.userProfileFromAPI.myUserProfile.myUserProfileApi.myUserProfile.uploaded_count)
                    
                }else{
                    setMyWorksCount()
                }
                if(props.userProfileFromAPI.myUserProfile.myUserProfileApi.myUserProfile.no_of_subscriber !== undefined){
                    setSubscriberCount(props.userProfileFromAPI.myUserProfile.myUserProfileApi.myUserProfile.no_of_subscriber)
                    
                }else{
                    setSubscriberCount()
                }
                if(props.userProfileFromAPI.myUserProfile.myUserProfileApi.myUserProfile.no_of_subscribed !== undefined){
                    setSubscribedCount(props.userProfileFromAPI.myUserProfile.myUserProfileApi.myUserProfile.no_of_subscribed)
                    
                }else{
                    setSubscribedCount()
                }
        }
    }, [props.userProfileFromAPI.myUserProfile.myUserProfileApi.myUserProfileSuccess])

    return (
        <>
        <div className="Userprofile-container">
            {
            props.userProfileFromAPI.UserProfile.userProfileGetApi.userProfileInProgress ?  
            <>
            <div className="Userprofile-pageLoader" style={{display: 'flex', justifyContent: 'center'}}>
                <img src={pageLoader} />
            </div>
            </>
            :
            <>
            <Sidebar />
            <Navbar /> 
            <div className="Userprofile-UserPortfolio-container">
                <UserDetails data={profile} setProfile={setProfile} {...props}  />
                <div  className="Userprofile-UserPortfolio-wrapper">
                    <UserCover  userCoverPic={userCoverPic} setUserCoverPic={setUserCoverPic} {...props} />
                    <UserPortfolio 
                    profile={profile} 
                    uploadedVideo={uploadedVideo} 
                    uploadedMusic={uploadedMusic} 
                    uploadedPicture={uploadedPicture} 
                    uploadedBlog={uploadedBlog}
                    subscriber={subscriber}
                    subscribed={subscribed}
                    subscribeStatus={subscribeStatus}
                    setSubscribeStatus={setSubscribeStatus}
                    connectStatus={connectStatus}
                    setConnectStatus={setConnectStatus}
                    customizeList={customizeList}
                    setCustomizeList={setCustomizeList}
                    customizeName={customizeName}
                    setCustomizeName={setCustomizeName}
                    myWorksCount={myWorksCount}
                    subscriberCount={subscriberCount}
                    subscribedCount={subscribedCount}
                    {...props} />
                </div>
                {/* <LikeEmojis /> */}

            </div> 
            {/* <CopyRight /> */}
            <Footer />
            </>
                }
        </div>
        </>
    )
}


const mapStateToProps = (state) => {
    // console.log('stateeeeee from UserProfile PAGE', state);
    return{ 
        userProfileFromAPI: state
    }
}
const mapDispatchToProps = dispatch => {
    return {
        hitMyUserProfileAPI: () => dispatch(hitMyUserProfileAPI()),
        hitUpdateProfileApi: (data) => dispatch(hitUpdateProfileApi(data)),
        hituploadCoverPicAPI: (data) => dispatch(hituploadCoverPicAPI(data)),
        hitsubscribeAPI: (data) => dispatch(hitsubscribeAPI(data)),
        hitconnectAPI: (data) => dispatch(hitconnectAPI(data)),
        hitMakeCustomizeAPI: (profile_id, customize_id) => dispatch(hitMakeCustomizeAPI(profile_id, customize_id)),
        hitdeleteDataAPI: (id,dataType) => dispatch(hitdeleteDataAPI(id,dataType)),
        hiteditVideoAPI: (file, cat_id, title , caption, thumbnail, video_id) => dispatch(hiteditVideoAPI(file, cat_id, title , caption, thumbnail, video_id)),
        hiteditAudioAPI: (file, cat_id, title , caption, thumbnail, music_id) => dispatch(hiteditAudioAPI(file, cat_id, title , caption, thumbnail, music_id)),
        hiteditPictureAPI: (file, cat_id, title , caption, music_id) => dispatch(hiteditPictureAPI(file, cat_id, title , caption, music_id)),
        hiteditBlogAPI: (file, title , caption, blog_id, thumbnail, cat_id) => dispatch(hiteditBlogAPI(file, title , caption, blog_id, thumbnail, cat_id)),
        hitMyUploadedVideosAPI: (profile_id, offset) =>dispatch(hitMyUploadedVideosAPI(profile_id, offset)),
        hitMyUploadedAudioAPI: (profile_id, offset) =>dispatch(hitMyUploadedAudioAPI(profile_id, offset)),
        hitMyUploadedPictureAPI:(profile_id, offset) => dispatch(hitMyUploadedPictureAPI(profile_id, offset)),
        hitMyUploadedBlogAPI:(profile_id, offset) => dispatch(hitMyUploadedBlogAPI(profile_id, offset))



    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)
