import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import { useHistory } from 'react-router-dom';


import Sidebar from '../Sidebar'
import Navbar from '../Navbar'
import Footer from '../NewFooter' 



import UserCover from './UserCover'
import UserDetails from './UserDetails'
import UserPortfolio from './UserPortfolio'
import LikeEmojis from './LikeEmojis'

import pageLoader from '../../assets/pageLoader.svg'
import { hitMyUserProfileAPI } from '../../redux/MyUserProfile/MyUserProfileActions'// fetch my profile
import { hitUpdateProfileApi } from '../../redux/UpdateProfile/UpdateProfileActions'
import { hituploadCoverPicAPI } from '../../redux/UploadCoverPic/UploadCoverPicActions'
import { hitsubscribeAPI } from '../../redux/Subscribe/SubscribeActions'
import { hitconnectAPI } from '../../redux/Connect/ConnectActions'
import { hitMakeCustomizeAPI } from '../../redux/MakeCustomize/MakeCustomizeActions'
 
const UserProfile = (props) => {
    
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
        // props.fetchUserProfile(localStorage.getItem('userProfileId'))
    }, [])

    // console.log('ryui',props.userProfileFromAPI.myUserProfile.myUserProfileApi.myUserProfileSuccess)

    useEffect(() => {

    // console.log('loggg',props.userProfileFromAPI.myUserProfile.myUserProfileApi.myUserProfile)
        if(props.userProfileFromAPI.myUserProfile.myUserProfileApi.myUserProfileSuccess &&
            props.userProfileFromAPI.myUserProfile.myUserProfileApi &&
            props.userProfileFromAPI.myUserProfile.myUserProfileApi.myUserProfile)
            {
                if(props.userProfileFromAPI.myUserProfile.myUserProfileApi.myUserProfile){
                    setProfile(props.userProfileFromAPI.myUserProfile.myUserProfileApi.myUserProfile)
                }
                if(props.userProfileFromAPI.myUserProfile.myUserProfileApi.myUserProfile.uploaded_video !== undefined){
                    setUploadedVideo(props.userProfileFromAPI.myUserProfile.myUserProfileApi.myUserProfile.uploaded_video)
                }else{
                    setUploadedVideo()
                }
                if(props.userProfileFromAPI.myUserProfile.myUserProfileApi.myUserProfile.uploaded_music !== undefined){
                    setUploadedMusic(props.userProfileFromAPI.myUserProfile.myUserProfileApi.myUserProfile.uploaded_music)

                }else{
                    setUploadedMusic()
                }
                if(props.userProfileFromAPI.myUserProfile.myUserProfileApi.myUserProfile.uploaded_picture !== undefined){
                    setUploadedPicture(props.userProfileFromAPI.myUserProfile.myUserProfileApi.myUserProfile.uploaded_picture)

                }else{
                    setUploadedPicture()
                }
                
                if(props.userProfileFromAPI.myUserProfile.myUserProfileApi.myUserProfile.uploaded_blog !== undefined){
                    setUploadedBlog(props.userProfileFromAPI.myUserProfile.myUserProfileApi.myUserProfile.uploaded_blog)
                    
                }else{
                    setUploadedBlog()
                }
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
                <UserDetails data={profile} setProfile={setProfile} {...props}  />
                <div>
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
        hitMakeCustomizeAPI: (profile_id, customize_id) => dispatch(hitMakeCustomizeAPI(profile_id, customize_id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)
