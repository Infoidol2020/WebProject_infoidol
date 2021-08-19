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
// import LikeEmojis from './LikeEmojis'

import pageLoader from '../../assets/pageLoader.svg'
import { fetchUserProfile } from '../../redux/UserProfile/UserProfileActions'// fetch other users profile
// import { hitUpdateProfileApi } from '../../redux/UpdateProfile/UpdateProfileActions'
import { hituploadCoverPicAPI } from '../../redux/UploadCoverPic/UploadCoverPicActions'
import { hitsubscribeAPI } from '../../redux/Subscribe/SubscribeActions'
import { hitUnsubscribeAPI } from '../../redux/Subscribe/SubscribeActions'
import { hitconnectAPI } from '../../redux/Connect/ConnectActions'
import { hitconnectRejectAPI } from '../../redux/Connect/ConnectActions'
import { hitMakeCustomizeAPI } from '../../redux/MakeCustomize/MakeCustomizeActions'

import {hitMyUploadedVideosAPI} from '../../redux/MyUploadedVideos'
import { hitMyUploadedAudioAPI } from '../../redux/MyUploadedAudio'
import { hitMyUploadedPictureAPI } from '../../redux/MyUploadedPictures'
import { hitMyUploadedBlogAPI } from '../../redux/MyUploadedBlog'




 
const UserProfile = (props) => {
    const history = useHistory();
    if(localStorage.getItem('WebAppUserKey') == '' || localStorage.getItem('WebAppUserKey') == null){
        history.push('/login')
        }

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


    useEffect(() => {
        // console.log('execccc from use1', props.userProfileFromAPI.UserProfile.userProfileGetApi.userProfileInProgress)
        if(localStorage.getItem('WebAppUserKey') == '' || localStorage.getItem('WebAppUserKey') == null){
            history.push('/login')
            }
        props.fetchUserProfile(localStorage.getItem('userProfileId'))
        
        if(sessionStorage.getItem('uploadedVideoOffset') == undefined || sessionStorage.getItem('uploadedVideoOffset') == null){
            props.hitMyUploadedVideosAPI(localStorage.getItem('userProfileId'), 0)
            sessionStorage.setItem('uploadedVideoOffset', 0)
            }
            else{
                props.hitMyUploadedVideosAPI(localStorage.getItem('userProfileId'), sessionStorage.getItem('uploadedVideoOffset'))
            }
        if(sessionStorage.getItem('uploadedAudioOffset') == undefined || sessionStorage.getItem('uploadedAudioOffset') == null){
            props.hitMyUploadedAudioAPI(localStorage.getItem('userProfileId'), 0)
            sessionStorage.setItem('uploadedAudioOffset', 0)
            }
            else{
                props.hitMyUploadedAudioAPI(localStorage.getItem('userProfileId'), sessionStorage.getItem('uploadedAudioOffset'))
            }
        if(sessionStorage.getItem('uploadedPictureOffset') == undefined || sessionStorage.getItem('uploadedPictureOffset') == null){
            props.hitMyUploadedPictureAPI(localStorage.getItem('userProfileId'), 0)
            sessionStorage.setItem('uploadedPictureOffset', 0)
        }
        else{
                props.hitMyUploadedPictureAPI(localStorage.getItem('userProfileId'), sessionStorage.getItem('uploadedPictureOffset'))
            }
        if(sessionStorage.getItem('uploadedBlogOffset') == undefined || sessionStorage.getItem('uploadedBlogOffset') == null){
            props.hitMyUploadedBlogAPI(localStorage.getItem('userProfileId'), 0)
            sessionStorage.setItem('uploadedBlogOffset', 0)
            }
        else{
            props.hitMyUploadedBlogAPI(localStorage.getItem('userProfileId'), sessionStorage.getItem('uploadedBlogOffset'))
            }
    }, [])

    useEffect(() => {
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
        // console.log('execccc from use2')
        if(props.userProfileFromAPI.UserProfile.userProfileGetApi.userProfileSuccess &&
            props.userProfileFromAPI.UserProfile.userProfileGetApi &&
            props.userProfileFromAPI.UserProfile.userProfileGetApi.userProfile)
            {
                if(props.userProfileFromAPI.UserProfile.userProfileGetApi.userProfile){
                    setProfile(props.userProfileFromAPI.UserProfile.userProfileGetApi.userProfile)
                }
                // if(props.userProfileFromAPI.UserProfile.userProfileGetApi.userProfile.uploaded_video !== undefined){
                //     setUploadedVideo(props.userProfileFromAPI.UserProfile.userProfileGetApi.userProfile.uploaded_video)
                // }else{
                //     setUploadedVideo()
                // }
                // if(props.userProfileFromAPI.UserProfile.userProfileGetApi.userProfile.uploaded_music !== undefined){
                //     setUploadedMusic(props.userProfileFromAPI.UserProfile.userProfileGetApi.userProfile.uploaded_music)

                // }else{
                //     setUploadedMusic()
                // }
                // if(props.userProfileFromAPI.UserProfile.userProfileGetApi.userProfile.uploaded_picture !== undefined){
                //     setUploadedPicture(props.userProfileFromAPI.UserProfile.userProfileGetApi.userProfile.uploaded_picture)

                // }else{
                //     setUploadedPicture()
                // }
                
                // if(props.userProfileFromAPI.UserProfile.userProfileGetApi.userProfile.uploaded_blog !== undefined){
                //     setUploadedBlog(props.userProfileFromAPI.UserProfile.userProfileGetApi.userProfile.uploaded_blog)
                    
                // }else{
                //     setUploadedBlog()
                // }
                if(props.userProfileFromAPI.UserProfile.userProfileGetApi.userProfile.subscriber !== undefined){
                    setSubscriber(props.userProfileFromAPI.UserProfile.userProfileGetApi.userProfile.subscriber)
                    
                }else{
                    setSubscriber()
                }
                if(props.userProfileFromAPI.UserProfile.userProfileGetApi.userProfile.subscribed !== undefined){
                    setSubscribed(props.userProfileFromAPI.UserProfile.userProfileGetApi.userProfile.subscribed)
                    
                }else{
                    setSubscribed()
                }
                if(props.userProfileFromAPI.UserProfile.userProfileGetApi.userProfile.cover_image !== undefined){
                    setUserCoverPic(props.userProfileFromAPI.UserProfile.userProfileGetApi.userProfile.cover_image)
                    
                }else{
                    setUserCoverPic()
                }
                if(props.userProfileFromAPI.UserProfile.userProfileGetApi.userProfile.subscribe_status !== undefined){
                    setSubscribeStatus(props.userProfileFromAPI.UserProfile.userProfileGetApi.userProfile.subscribe_status)
                    
                }else{
                    setSubscribeStatus()
                }
                if(props.userProfileFromAPI.UserProfile.userProfileGetApi.userProfile.connection_status !== undefined){
                    setConnectStatus(props.userProfileFromAPI.UserProfile.userProfileGetApi.userProfile.connection_status)
                    
                }else{
                    setConnectStatus()
                }

                if(props.userProfileFromAPI.UserProfile.userProfileGetApi.userProfile.customize_list !== undefined){
                    setCustomizeList(props.userProfileFromAPI.UserProfile.userProfileGetApi.userProfile.customize_list)
                    
                }else{
                    setCustomizeList()
                }
                if(props.userProfileFromAPI.UserProfile.userProfileGetApi.userProfile.customize_name !== undefined){
                    setCustomizeName(props.userProfileFromAPI.UserProfile.userProfileGetApi.userProfile.customize_name)
                    
                }else{
                    setCustomizeName()
                }


        }
    }, [props.userProfileFromAPI.UserProfile.userProfileGetApi.userProfileSuccess, localStorage.getItem('userProfileId')])
    // console.log('yulu!!!',props.userProfileFromAPI)


    return (
        <div>
             {
            props.userProfileFromAPI.UserProfile.userProfileGetApi.userProfileInProgress ?  
            <>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <img src={pageLoader} />
            </div>
            </>
            :
            <>
            <Sidebar />
            <Navbar /> 
            <div style={{marginLeft: '5vw', marginTop: '12.5vh',display: 'flex'}}>
                <UserDetails data={props.userProfileFromAPI.UserProfile.userProfileGetApi.userProfile} setProfile={setProfile} {...props}  />
                <div>
                    {
                        (props.userProfileFromAPI && props.userProfileFromAPI.UserProfile !== undefined &&
                            props.userProfileFromAPI.UserProfile.userProfileGetApi.userProfile !== undefined) &&
                            <>
                    <UserCover  userCoverPic={props.userProfileFromAPI.UserProfile.userProfileGetApi.userProfile.cover_image} setUserCoverPic={setUserCoverPic} {...props} />

                    
                    <UserPortfolio 
                        profile={props.userProfileFromAPI.UserProfile.userProfileGetApi.userProfile} 
                        // uploadedVideo={props.userProfileFromAPI.UserProfile.userProfileGetApi.userProfile.uploaded_video} 
                        uploadedVideo = {uploadedVideo}
                        uploadedMusic={uploadedMusic} 
                        uploadedPicture={uploadedPicture} 
                        uploadedBlog={uploadedBlog}
                        subscriber={props.userProfileFromAPI.UserProfile.userProfileGetApi.userProfile.subscriber}
                        subscribed={props.userProfileFromAPI.UserProfile.userProfileGetApi.userProfile.subscribed}
                        subscribeStatus={props.userProfileFromAPI.UserProfile.userProfileGetApi.userProfile.subscribe_status}
                        setSubscribeStatus={setSubscribeStatus}
                        connectStatus={props.userProfileFromAPI.UserProfile.userProfileGetApi.userProfile.connection_status}
                        setConnectStatus={setConnectStatus}
                        customizeList={props.userProfileFromAPI.UserProfile.userProfileGetApi.userProfile.customize_list}
                        setCustomizeList={setCustomizeList}
                        customizeName={customizeName}
                        setCustomizeName={setCustomizeName}
                        {...props} />
                        </>
                    }
                </div>
                {/* <LikeEmojis /> */}
            </div> 
            {/* <CopyRight /> */}
            <Footer />
            </>
                }
        </div>
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
        fetchUserProfile: (data) => dispatch(fetchUserProfile(data)),
        hituploadCoverPicAPI: (data) => dispatch(hituploadCoverPicAPI(data)),
        hitsubscribeAPI: (data) => dispatch(hitsubscribeAPI(data)),
        hitUnsubscribeAPI: (data) => dispatch(hitUnsubscribeAPI(data)),
        hitconnectAPI: (data) => dispatch(hitconnectAPI(data)),
        hitMakeCustomizeAPI: (profile_id, customize_id) => dispatch(hitMakeCustomizeAPI(profile_id, customize_id)),
        hitconnectRejectAPI: (data) => dispatch(hitconnectRejectAPI(data)),
        hitMyUploadedVideosAPI: (profile_id, offset) =>dispatch(hitMyUploadedVideosAPI(profile_id, offset)),
        hitMyUploadedAudioAPI: (profile_id, offset) =>dispatch(hitMyUploadedAudioAPI(profile_id, offset)),
        hitMyUploadedPictureAPI:(profile_id, offset) => dispatch(hitMyUploadedPictureAPI(profile_id, offset)),
        hitMyUploadedBlogAPI:(profile_id, offset) => dispatch(hitMyUploadedBlogAPI(profile_id, offset))

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)
