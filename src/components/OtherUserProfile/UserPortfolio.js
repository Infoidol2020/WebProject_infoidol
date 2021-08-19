import React, {useRef, useEffect} from 'react'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Popover from '@material-ui/core/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
// import Carousel from 'react-elastic-carousel'
import NotificationsIcon from '@material-ui/icons/Notifications';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import LinkIcon from '@material-ui/icons/Link';

import {Link} from 'react-router-dom'
import miniLoader from '../../assets/miniLoader.svg'

import { LazyLoadImage } from 'react-lazy-load-image-component';

import './UserPortfolio.css'
// import userImg from '../../assets/user.jpg'

const UserPortfolio = (props) => {

    // console.log('props from userPortfolio', props.connectStatus)
    const myWorksSection = useRef()
    const follwersSection = useRef()
    const followingSection = useRef()

    const videoSection = useRef()
    const audioSection = useRef()
    const pictureSection = useRef()
    const blogSection = useRef()

        //video pagination
        const loadMoreVideos = () => {
            let offset = sessionStorage.getItem('uploadedVideoOffset')
            let newOffset = parseInt(offset) + 10
            sessionStorage.setItem('uploadedVideoOffset', newOffset)
            props.hitMyUploadedVideosAPI(localStorage.getItem('userProfileId'),newOffset)
    
        }
        const prevVideos = () => {
            let offset = sessionStorage.getItem('uploadedVideoOffset')
            let newOffset = parseInt(offset) - 10
            sessionStorage.setItem('uploadedVideoOffset', newOffset)
            props.hitMyUploadedVideosAPI(localStorage.getItem('userProfileId'),newOffset)
    
        }
    
        const handleVideoRedirection = (video_id,user_id) =>{
            localStorage.setItem('id', video_id);
            localStorage.setItem('UI',user_id);
            window.scrollTo(0,0)
        
        }

        //Audio pagination
        const loadMoreAudios = () => {
            let offset = sessionStorage.getItem('uploadedAudioOffset')
            let newOffset = parseInt(offset) + 10
            sessionStorage.setItem('uploadedAudioOffset', newOffset)
            props.hitMyUploadedAudioAPI(localStorage.getItem('userProfileId'),newOffset)
    
        }
        const prevAudios = () => {
            let offset = sessionStorage.getItem('uploadedAudioOffset')
            let newOffset = parseInt(offset) - 10
            sessionStorage.setItem('uploadedAudioOffset', newOffset)
            props.hitMyUploadedAudioAPI(localStorage.getItem('userProfileId'),newOffset)
    
        }
    
        const handleAudioRedirection = (music_id,user_id) =>{
            localStorage.setItem('id', music_id);
            localStorage.setItem('UI',user_id);
            window.scrollTo(0,0)
        
        }
        //Picture pagination
        const loadMorePictures = () => {
            let offset = sessionStorage.getItem('uploadedPictureOffset')
            let newOffset = parseInt(offset) + 10
            sessionStorage.setItem('uploadedPictureOffset', newOffset)
            props.hitMyUploadedPictureAPI(localStorage.getItem('WebAppUserKey'),newOffset)
    
        }
        const prevPictures = () => {
            let offset = sessionStorage.getItem('uploadedPictureOffset')
            let newOffset = parseInt(offset) - 10
            sessionStorage.setItem('uploadedPictureOffset', newOffset)
            props.hitMyUploadedPictureAPI(localStorage.getItem('WebAppUserKey'),newOffset)
    
        }
    
        const handlePictureRedirection = (picture_id,user_id) =>{
            localStorage.setItem('id', picture_id);
            localStorage.setItem('UI',user_id);
            window.scrollTo(0,0)
        
        }
        //Blog pagination
        const loadMoreBlogs = () => {
            let offset = sessionStorage.getItem('uploadedBlogOffset')
            let newOffset = parseInt(offset) + 10
            sessionStorage.setItem('uploadedBlogOffset', newOffset)
            props.hitMyUploadedBlogAPI(localStorage.getItem('WebAppUserKey'),newOffset)
    
        }
        const prevBlogs = () => {
            let offset = sessionStorage.getItem('uploadedBlogOffset')
            let newOffset = parseInt(offset) - 10
            sessionStorage.setItem('uploadedBlogOffset', newOffset)
            props.hitMyUploadedBlogAPI(localStorage.getItem('WebAppUserKey'),newOffset)
    
        }
    
        const handleBlogRedirection = (blog_id,user_id) =>{
            localStorage.setItem('id', blog_id);
            localStorage.setItem('UI',user_id);
            window.scrollTo(0,0)
        
        }

    const handleMyWorksClick = () => {
        myWorksSection.current.style.display="block"
        follwersSection.current.style.display="none"
        followingSection.current.style.display="none"
    }
    const handleFollowersClick = () => {
        myWorksSection.current.style.display="none"
        follwersSection.current.style.display="block"
        followingSection.current.style.display="none"

    }
    const handleFollowingClick = () => {
        myWorksSection.current.style.display="none"
        follwersSection.current.style.display="none"
        followingSection.current.style.display="block"
    }
    const handleVideoSectionClick = () => {
        videoSection.current.style.display="block"
        audioSection.current.style.display="none"
        pictureSection.current.style.display="none"
        blogSection.current.style.display="none"
    }
    const handleAudioSectionClick = () => {
        videoSection.current.style.display="none"
        audioSection.current.style.display="block"
        pictureSection.current.style.display="none"
        blogSection.current.style.display="none"

    }
    const handlePictureSectionClick = () => {
        videoSection.current.style.display="none"
        audioSection.current.style.display="none"
        pictureSection.current.style.display="block"
        blogSection.current.style.display="none"

    }
    const handleBlogSectionClick = () => {
        videoSection.current.style.display="none"
        audioSection.current.style.display="none"
        pictureSection.current.style.display="none"
        blogSection.current.style.display="block"

    }
    const handleProfileClick = (profile_id) => {
        localStorage.setItem('userProfileId', profile_id)
        props.fetchUserProfile(localStorage.getItem('userProfileId'))
    }
    // console.log('props......mmmmm', props.userProfileFromAPI.UserProfile.userProfileGetApi.userProfile.subscribe_status)
    // console.log('tfcvbnm', props.userProfileFromAPI.makeCustomize.makeCustomizeApi.makeCustomizeSuccess)

    const handleSubscribeClick = () => {
        // console.log('props......mmmmm', props.userProfileFromAPI.UserProfile.userProfileGetApi.userProfile.subscribe_status)
        props.hitsubscribeAPI(props.userProfileFromAPI.UserProfile.userProfileGetApi.userProfile.profile_id)
    }
    // console.log('props......k', props.userProfileFromAPI.connect.connectApi.connectSuccess)
    const handleUnsubscribeClick = () => {
        props.hitUnsubscribeAPI(props.userProfileFromAPI.UserProfile.userProfileGetApi.userProfile.profile_id)
    }
    const handleConnectClick = () => {
        props.hitconnectAPI(props.userProfileFromAPI.UserProfile.userProfileGetApi.userProfile.profile_id)
    }
    const handleDisconnectClick = () => {
        props.hitconnectRejectAPI(props.userProfileFromAPI.UserProfile.userProfileGetApi.userProfile.profile_id)
    }
    const handleCustomizeClick = (e) => {
        // console.log('kl',e.target.value)
        props.hitMakeCustomizeAPI(props.userProfileFromAPI.UserProfile.userProfileGetApi.userProfile.profile_id, e.target.value)
    }
    // console.log('execcccccqwe', props.userProfileFromAPI.Subscribe.unsubscribeApi.unsubscribeSuccess) 

    useEffect(() => {
        // props.userProfileFromAPI.UserProfile.userProfileGetApi.userProfile.subscribe_status)
        props.fetchUserProfile(localStorage.getItem('userProfileId'))
        if(props.userProfileFromAPI.UserProfile.userProfileGetApi.userProfile){
        if(props.userProfileFromAPI.UserProfile.userProfileGetApi.userProfile.subscribe_status !== undefined ){
        props.setSubscribeStatus(props.userProfileFromAPI.UserProfile.userProfileGetApi.userProfile.subscribe_status)
        }
        if(props.userProfileFromAPI.UserProfile.userProfileGetApi.userProfile.connection_status !== undefined){
            props.setConnectStatus(props.userProfileFromAPI.UserProfile.userProfileGetApi.userProfile.connection_status)
        }
        if(props.userProfileFromAPI.UserProfile.userProfileGetApi.userProfile.customize_name !== undefined){
            props.setCustomizeName(props.userProfileFromAPI.UserProfile.userProfileGetApi.userProfile.customize_name)
        }
    }
    }, [props.userProfileFromAPI.Subscribe.subscribeApi.subscribeSuccess, 
        props.userProfileFromAPI.Subscribe.unsubscribeApi.unsubscribeSuccess,
        props.userProfileFromAPI.connect.connectApi.connectSuccess,
        props.userProfileFromAPI.connect.connectRejectApi.connectRejectSuccess,
        props.userProfileFromAPI.makeCustomize.makeCustomizeApi.makeCustomizeSuccess
    ])
    // console.log('tytytyytytytytyty', props.userProfileFromAPI.connect.connectRejectApi.connectRejectSuccess)
    return (
        <div>
            
        <div className="portfolio-container">
            <div style={{display: 'flex', alignItems: 'center', height: '100%', justifyContent: 'space-between'}}>
            <div className="userPortfolio-left-buttons-wrapper">
                    <div  onClick={handleMyWorksClick} style={{cursor: 'pointer',}} className="userPortfolio-left-buttons-container">
                        <button  className="userPortfolio-left-buttons">My&nbsp;Works&nbsp;
                        {props.userProfileFromAPI.UserProfile.userProfileGetApi.userProfile &&
                        props.userProfileFromAPI.UserProfile.userProfileGetApi.userProfile.uploaded_count}</button>
                        {/* <div style={{textAlign: 'center', fontWeight: 'bold'}}>{props.userProfileFromAPI.UserProfile.userProfileGetApi.userProfile &&
                         props.userProfileFromAPI.UserProfile.userProfileGetApi.userProfile.uploaded_count}</div> */}
                    </div>
                    <div style={{margin: '1rem'}}></div>

                    <div onClick={handleFollowersClick} className="userPortfolio-left-buttons-container" style={{cursor: 'pointer'}}>
                        <button  className="userPortfolio-left-buttons">Subscriber&nbsp;
                        {props.userProfileFromAPI.UserProfile.userProfileGetApi.userProfile && 
                        props.userProfileFromAPI.UserProfile.userProfileGetApi.userProfile.no_of_subscriber}</button>
                        {/* <div style={{textAlign: 'center', fontWeight: 'bold'}}>{props.userProfileFromAPI.UserProfile.userProfileGetApi.userProfile && 
                        props.userProfileFromAPI.UserProfile.userProfileGetApi.userProfile.no_of_subscriber}</div> */}
                    </div>
                    <div style={{margin: '1rem'}}></div>

                    <div onClick={handleFollowingClick} className="userPortfolio-left-buttons-container" style={{cursor: 'pointer'}}>
                        <button  className="userPortfolio-left-buttons">Subscribed&nbsp;
                        {props.userProfileFromAPI.UserProfile.userProfileGetApi.userProfile &&
                            props.userProfileFromAPI.UserProfile.userProfileGetApi.userProfile.no_of_subscribed}</button>
                        {/* <div style={{textAlign: 'center', fontWeight: 'bold'}}>
                            {props.userProfileFromAPI.UserProfile.userProfileGetApi.userProfile &&
                            props.userProfileFromAPI.UserProfile.userProfileGetApi.userProfile.no_of_subscribed}</div> */}
                    </div>
                    {
                        localStorage.getItem('userProfileId') !== localStorage.getItem('WebAppUserKey') &&
                        <>
                        {
                            props.subscribeStatus === 0 ?
                            <button  
                            onClick={() => handleSubscribeClick()}
                            style={{background: 'transparent linear-gradient(90deg, #1E9FC8 0%, #3C34AC 100%)', 
                            border: '0', 
                            outline: 'none', 
                            color: '#fff', 
                            width: '5vw',
                            marginLeft: '5vw', 
                            borderRadius: '10px'}} >Subscribe <NotificationsIcon/> </button>
                            :
                            <button  
                            onClick={() => handleUnsubscribeClick()}
                            style={{background: '#A52A2A', 
                            opacity: '0.8',
                            border: '0', 
                            outline: 'none', 
                            color: '#fff', 
                            width: '5vw',
                            marginLeft: '5vw', 
                            borderRadius: '10px'}} >Unsubscribe <NotificationsActiveIcon/> </button>

                        }

                        {
                            props.connectStatus === 1 &&
                            <button
                                onClick={() => handleConnectClick()}  
                                style={{background: 'transparent linear-gradient(90deg, #1E9FC8 0%, #3C34AC 100%)', 
                                border: '0', 
                                outline: 'none', 
                                color: '#fff', 
                                width: '5vw', 
                                marginLeft: '2vw', 
                                borderRadius: '10px'}} >Connect <LinkIcon/> </button>
                        }
                        {
                            props.connectStatus === 4 &&
                            <button  
                                // disabled
                                onClick ={() => handleDisconnectClick()}
                                style={{background: '#A52A2A', 
                                opacity: '0.8',
                                border: '0', 
                                outline: 'none', 
                                color: '#fff', 
                                width: '5vw',
                                marginLeft: '2vw', 
                                borderRadius: '10px'}} >Disconnect <CheckCircleIcon/> </button>
                        }
                        {
                            (props.connectStatus === 2 || props.connectStatus === 3)  &&
                            <button  
                                disabled
                                style={{background: '#CCCC00', 
                                opacity: '0.8',
                                border: '0', 
                                outline: 'none', 
                                color: '#fff', 
                                width: '4.5vw',
                                marginLeft: '2vw', 
                                borderRadius: '10px'}} >Pending <RemoveCircleOutlineIcon/> </button>
                        }

                        {/* {
                            props.customizeName &&
                            <button
                            disabled
                            style={{background: '#2F4F4F', 
                            border: '0', 
                            outline: 'none', 
                            color: '#fff', 
                            width: '7vw', 
                            marginLeft: '2vw', 
                            borderRadius: '10px'}}> Customized as: {props.customizeName}</button>
                        } */}
                            {/* <button
                                onClick={() => handleCustomizeClick()}  
                                style={{background: 'transparent linear-gradient(90deg, #1E9FC8 0%, #3C34AC 100%)', 
                                border: '0', 
                                outline: 'none', 
                                color: '#fff', 
                                width: '5vw', 
                                marginLeft: '2vw', 
                                borderRadius: '10px'}} >Customize</button> */}
                        
                            <select 
                            onChange={(e) => handleCustomizeClick(e)}
                            style={{
                                marginLeft: '2vw', 
                                color: '#fff',
                                border: '0',
                                borderRadius: '10px',
                                outline: 'none',
                                width: '5vw',
                                background: 'transparent linear-gradient(90deg, #1E9FC8 0%, #3C34AC 100%)'}}>
                                        {
                                        (props.customizeName !== null) &&
                                            <>
                                            <option value={''}>{props.customizeName}</option>
                                            </>

                                        // :
                                        // <option value={''}>Customize</option>
                                        }

                                {
                                    props.customizeList && props.customizeList.map((element, index) => {
                                        return(
                                            <>

                                            {
                                                props.customizeName !== element.name &&
                                                <option key={index} style={{background: '#555'}} value={element.customize_id}>{element.name}</option>


                                            }
                                            </>
                                        )
                                    })
                                }
                            </select>
                        </>
                        
                    }
                    
            </div>
            <div>
                    <PopupState variant="popover" popupId="demo-popup-popover">
                    {(popupState) => (
                        <div>

                        <button 
                        {...bindTrigger(popupState)}
                                style={{background: 'transparent', alignItems: 'center', display: 'flex', border: '0', outline:'none', borderRadius: '40%', background: '#d6d6d6', marginRight: '0.5vw'}} 
                                >
                            <MoreVertIcon style={{fontSize: '2.5rem'}} />
                        </button>
                        <Popover
                            {...bindPopover(popupState)}
                            anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                            }}
                            transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                            }}
                            style={{width: '25vw'}}
                        >
                            <div p={10} style={{width: '20vw' ,padding:'1rem', background :'#dadada'}}>
                                {
                                    props.customizeList && props.customizeList.map((customizeElement, customizeElementIndex) => {
                                        return(
                                            <div 
                                            style={{display: 'flex',
                                            borderTop: 'solid 1px #555', 
                                            justifyContent: 'space-between', 
                                            alignItems: 'center',
                                            fontWeight: 'bold',}}>
                                                   <p>{customizeElement.name}</p>
                                                   <p>{customizeElement.count}</p>
                                         </div>
                                        )
                                    })
                                }

                            </div>
                        </Popover>
                        </div>
                    )}
                    </PopupState>
            </div>
            </div>
    </div>
    
        <div id="" className="userPortfolio-content-container" style={{ marginLeft: '1rem'}}>
           <div ref={myWorksSection} id="my-works-section" >
              <div style={{ marginTop: '1vh', display: 'flex',justifyContent: 'center', width: '100%', height: '6vh', alignItems: 'center'}}>
                   
                    <div className="work-section-sub-header" onClick={handleVideoSectionClick} >Videos&nbsp;
                    <span style={{color: 'brown'}}>{props.uploadedVideo && props.uploadedVideo.length}</span>
                    </div>
                    <div className="work-section-sub-header" onClick={handleAudioSectionClick} >Audios&nbsp;
                    <span style={{color: 'brown'}}>{props.uploadedMusic && props.uploadedMusic.length}</span>
                    </div>
                    <div className="work-section-sub-header" onClick={handlePictureSectionClick} >Pictures&nbsp;
                    <span style={{color: 'brown'}}>{props.uploadedPicture && props.uploadedPicture.length}</span>
                    </div>
                    <div className="work-section-sub-header" onClick={handleBlogSectionClick} >Blogs&nbsp;
                    <span style={{color: 'brown'}}>{props.uploadedBlog && props.uploadedBlog.length}</span>
                    </div>   
              </div> 

              {/* video scrollable section */}
            <>
            <div className="my-works-scrollable-section" 
            ref={videoSection}
            style={{height: '32vh', overflowY: 'scroll'}}>
                {
                    props.uploadedVideo && props.uploadedVideo.map((videoElement, videoIndex) => {
                        return(
                            <div key={videoIndex} style={{width: '16vw', height: '20vh', display: 'inline-block', margin: '1rem', }}>
                                <Link to="/video-details">
                                {/* <video   src={videoElement.video_link} style={{width: '100%', height: '100%', border: 'solid 1px #dadada', borderRadius: '10px'}} 
                                onClick={() => handleVideoRedirection(videoElement.video_id, videoElement.user_id)}/> */}
                                {
                                videoElement.video_thumbnail_link !== '' ?
                                <LazyLoadImage style={{width: '14vw', height: '15vh', margin: '0.5rem', objectFit: 'cover', borderRadius: '10px'}} 
                                src={videoElement.video_thumbnail_link} placeholder={<div><img src={miniLoader} /></div>} 
                                onClick={() => handleVideoRedirection(videoElement.video_id, videoElement.user_id)}/>
                                :
                                <LazyLoadImage style={{width: '14vw', height: '15vh', margin: '0.5rem', objectFit: 'cover', borderRadius: '10px'}} 
                                src={videoElement.cat_image_link} placeholder={<div><img src={miniLoader} /></div>} 
                                onClick={() => handleVideoRedirection(videoElement.video_id, videoElement.user_id)}/>
                                }
                                </Link>
                            </div>
                        )
                    })
                }
            {/* pagination */}
            <div style={{width: '86%', textAlign: 'center', marginTop: '2vh', 
            marginBottom: '5vh', margin: 'auto',
            display: 'flex', justifyContent: 'center', alignItems: 'center', height: '15vh'}}>
            {
                sessionStorage.getItem('uploadedVideoOffset') != '0' &&
                <div 
                onClick={prevVideos}
                style={{display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#999',
                color: '#fff', 
                border: '0',
                borderRadius: '10px',
                marginRight: '4vw',
                cursor: 'pointer',
                width: '5vw',
                height: '5vh'}}>
                <i class="fas fa-angle-double-left" style={{fontSize: '2rem'}}></i>
                
            </div>
            }
            <div>
                <button 
                onClick={loadMoreVideos}
                style={{
                // background: 'linear-gradient(130deg,#ff7a18,#af002d 41.07%,#319197 76.05%)', 
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: '#999',
                color: '#fff', 
                border: '0',
                borderRadius: '10px',
                cursor: 'pointer', 
                width: '5vw',
                height: '5vh'}}>
                    <i class="fas fa-angle-double-right" style={{fontSize: '2rem'}}></i>

                </button>
            </div>

            </div>
            </div>

            </>
            
            {/* audio scrollable section */}
            <div className="my-works-scrollable-section"
            ref={audioSection}
            style={{height: '32vh', overflowY: 'scroll', display: 'none'}}>
                {
                    props.uploadedMusic && props.uploadedMusic.map((AudioElement, AudioIndex) => {
                        return(
                            <div key={AudioIndex} style={{width: '16vw', height: '10vh', display: 'inline-block', margin: '1rem', }}>
                                {/* <audio  controls src={AudioElement.music_link} style={{width: '100%', height: '100%'}} /> */}
                                <Link to ="/audio-details">
                                <div
                                style={{
                                color: '#fff',
                                height: '3vw',
                                width: '8vw',
                                padding: '1rem',
                                borderRadius: '10px',
                                background: 'transparent linear-gradient(270deg, #CCBEBE 0%, #070808 100%)'}}
                                onClick={() => handleAudioRedirection(AudioElement.music_id, AudioElement.user_id)}>
                                {AudioElement.music_title.length>10 ?
                                AudioElement.music_title.toLowerCase().slice(0,10).concat('..') :
                                AudioElement.music_title.toLowerCase()}
                                </div>
                                </Link>
                            </div>
                        )
                    })
                }

            {/*Audio  pagination */}
            <div style={{width: '86%', textAlign: 'center', marginTop: '2vh', 
            marginBottom: '5vh', margin: 'auto',
            display: 'flex', justifyContent: 'center', alignItems: 'center', height: '15vh'}}>
            {
                sessionStorage.getItem('uploadedAudioOffset') != '0' &&
                <div 
                onClick={prevAudios}
                style={{display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#999',
                color: '#fff', 
                border: '0',
                borderRadius: '10px',
                marginRight: '4vw',
                cursor: 'pointer',
                width: '5vw',
                height: '5vh'}}>
                <i class="fas fa-angle-double-left" style={{fontSize: '2rem'}}></i>
                
            </div>
            }
            <div>
                <button 
                onClick={loadMoreAudios}
                style={{
                // background: 'linear-gradient(130deg,#ff7a18,#af002d 41.07%,#319197 76.05%)', 
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: '#999',
                color: '#fff', 
                border: '0',
                borderRadius: '10px',
                cursor: 'pointer', 
                width: '5vw',
                height: '5vh'}}>
                    <i class="fas fa-angle-double-right" style={{fontSize: '2rem'}}></i>

                </button>
            </div>

            </div>
            </div>
            
            {/* picture scrollable section */}
            <div className="my-works-scrollable-section"
            ref={pictureSection}
            style={{height: '32vh', overflowY: 'scroll', display: 'none'}}>
                {
                    props.uploadedPicture && props.uploadedPicture.map((PictureElement, PictureIndex) => {
                        return(
                            <div key={PictureIndex} style={{width: '16vw', height: '20vh', display: 'inline-block', margin: '1rem', }}>
                                <Link to="/picture-details">
                                    <LazyLoadImage placeholder={<div><img src={miniLoader} /></div>} onClick={() => handlePictureRedirection(PictureElement.image_id, PictureElement.user_id)} src={PictureElement.picture_link} style={{width: '100%', height: '100%'}} />
                                </Link>
                            </div>
                        )
                    })
                }
                {/*Picture  pagination */}
            <div style={{width: '86%', textAlign: 'center', marginTop: '2vh', 
            marginBottom: '5vh', margin: 'auto',
            display: 'flex', justifyContent: 'center', alignItems: 'center', height: '15vh'}}>
            {
                sessionStorage.getItem('uploadedPictureOffset') != '0' &&
                <div 
                onClick={prevPictures}
                style={{display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#999',
                color: '#fff', 
                border: '0',
                borderRadius: '10px',
                marginRight: '4vw',
                cursor: 'pointer',
                width: '5vw',
                height: '5vh'}}>
                <i class="fas fa-angle-double-left" style={{fontSize: '2rem'}}></i>
                
            </div>
            }
            <div>
                <button 
                onClick={loadMorePictures}
                style={{
                // background: 'linear-gradient(130deg,#ff7a18,#af002d 41.07%,#319197 76.05%)', 
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: '#999',
                color: '#fff', 
                border: '0',
                borderRadius: '10px',
                cursor: 'pointer', 
                width: '5vw',
                height: '5vh'}}>
                    <i class="fas fa-angle-double-right" style={{fontSize: '2rem'}}></i>

                </button>
            </div>

            </div>
            </div>

            {/* Blogs scrollable section */}
            <div className="my-works-scrollable-section"
            ref={blogSection}
            style={{height: '32vh', overflowY: 'scroll', display: 'none'}}>
                {
                    props.uploadedBlog && props.uploadedBlog.map((blogElement, blogIndex) => {
                        return(
                            <div style={{border: 'solid 1px #dadada',borderRadius: '10px', margin: '1rem', width: '48%',padding: '1rem', height: '22vh', display: 'inline-block'}}>
                                {/* {
                                    blogElement.blog_link &&
                                    <div style={{width: '100%'}}>
                                        <Carousel itemsToShow={1} key={blogIndex} style={{ width: '100%'}}>
                                        {
                                            blogElement.blog_link.map((linkElement, linkIndex) => {
                                            var extension = linkElement.split('.').pop();
                                                return(
                                                    <div>
                                                        {
                                                            (extension === 'jpg'|| extension === 'png' || extension === 'jpeg' || extension === 'jfif') &&
                                                            <img src={linkElement} style={{width: '20vw', height: '20vh'}} />

                                                        }
                                                        {
                                                            (extension === 'mp4'|| extension === 'mkv' || extension === 'webm') &&
                                                            <video controls src={linkElement} style={{width: '20vw', height: '20vh'}} />
                                                        }


                                                    </div>
                                                )
                                            })
                                        }
                                        </Carousel>
                                    </div>
                                } */}
                        <div>
                        {
                            blogElement.blog_thumbnail_link !== '' ?
                            <Link to="/blog-details">
                            <LazyLoadImage placeholder={<div><img src={miniLoader} /></div>} onClick={() => handleBlogRedirection(blogElement.blog_id, blogElement.user_id)} src={blogElement.blog_thumbnail_link} style={{width: '20vw', height: '20vh'}} />
                            </Link>
                            :
                            <Link to="/blog-details">
                            <LazyLoadImage placeholder={<div><img src={miniLoader} /></div>} onClick={() => handleBlogRedirection(blogElement.blog_id, blogElement.user_id)} src={blogElement.cat_image_link} style={{width: '20vw', height: '20vh'}} />
                            </Link>

                        }
                    </div>
                            </div>
                        
                       
                            
                        )
                    })
                }
            {/*Blog  pagination */}
            <div style={{width: '86%', textAlign: 'center', marginTop: '2vh', 
            marginBottom: '5vh', margin: 'auto',
            display: 'flex', justifyContent: 'center', alignItems: 'center', height: '15vh'}}>
            {
                sessionStorage.getItem('uploadedBlogOffset') != '0' &&
                <div 
                onClick={prevBlogs}
                style={{display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#999',
                color: '#fff', 
                border: '0',
                borderRadius: '10px',
                marginRight: '4vw',
                cursor: 'pointer',
                width: '5vw',
                height: '5vh'}}>
                <i class="fas fa-angle-double-left" style={{fontSize: '2rem'}}></i>
                
            </div>
            }
            <div>
                <button 
                onClick={loadMoreBlogs}
                style={{
                // background: 'linear-gradient(130deg,#ff7a18,#af002d 41.07%,#319197 76.05%)', 
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: '#999',
                color: '#fff', 
                border: '0',
                borderRadius: '10px',
                cursor: 'pointer', 
                width: '5vw',
                height: '5vh'}}>
                    <i class="fas fa-angle-double-right" style={{fontSize: '2rem'}}></i>

                </button>
            </div>

            </div>
            </div>

            </div>
            <div className="followers-section-scrollable" ref={follwersSection} id="Followers-section" style={{display: 'none',height: '39vh', overflowY: 'scroll' }}>
                {/* <span>subscribers-section</span> */}
            {
               props.subscriber && props.subscriber.map((element, index) => {
                   console.log('subscriber', props.subscriber)
                   return(
                    <div style={{display: 'inline-block', margin: '1rem', boxShadow: '3px 3px #dadada', borderRadius: '10px'}}>

                       <div >
                           <div 
                           style={{textAlign: 'center',display: 'inline-block',border: 'solid 1px #dadada',
                           borderRadius: '10px',padding: '0.5rem',
                           width: '15vw', cursor: 'pointer'}}
                           onClick={() => handleProfileClick(element.profile_id)}>
                            <div>
                                <LazyLoadImage placeholder={<div><img src={miniLoader} /></div>} src={element.profile_pic} 
                                style={{width: '8rem', 
                                height: '8rem', 
                                borderRadius: '50%',
                                border: '2px solid #624152', 
                            }} 
                                />
                            </div>
                            <div style={{fontWeight: 'bold', opacity: '1', marginTop: '1vh'}}>
                                <p>{element.name}</p>
                                {/* <p style={{color: '#2A00FF'}}>{array[0].profession}</p> */}
                            </div>
                            </div>
                            {/* <div>
                                <button className="userPortfolio-follow-buttons" style={{marginRight: '2vw'}}>connect</button>
                                <button className="userPortfolio-follow-buttons" style={{marginRight: '2vw'}}>customize</button>
                            </div> */}
                       </div>
                       </div>
                   )
               })     
            }
            </div>
            <div class="subscribed-section-scrollable" ref={followingSection} id="Following-section" style={{display: 'none',height: '39vh',overflowY: 'scroll' }}>
                {/* <span>subscribed-section</span> */}
            {
               props.subscribed && props.subscribed.map((element, index) => {
                   return(
                       <>
                       <div style={{display: 'inline-block', margin: '1rem', boxShadow: '3px 3px #dadada', borderRadius: '10px'}}>
                       <div style={{ alignItems: 'center',justifyContent: 'space-between'}}>
                           <div style={{
                           textAlign: 'center',
                           border: 'solid 1px #dadada',
                           borderRadius: '10px',
                           padding: '0.5rem',
                           display: 'inline-block !important',
                           width: '15vw', 
                           cursor: 'pointer'}} onClick={() => handleProfileClick(element.profile_id)}>
                            <div style={{}}>
                                <LazyLoadImage placeholder={<div><img src={miniLoader} /></div>} src={element.profile_pic} 
                                style={{width: '8rem', 
                                height: '8rem', 
                                borderRadius: '50%',
                                border: '1px solid #707070', 
                            }} 
                                />
                            </div>
                            <div style={{ fontWeight: 'bold', opacity: '1', marginTop: '1vh'}}>
                                <p>{element.name}</p>
                                {/* <p style={{color: '#2A00FF'}}>{array[0].profession}</p>  */}
                            </div>
                            </div>
                            {/* <div>
                                <button className="userPortfolio-follow-buttons" style={{marginRight: '2vw'}}>connect</button>
                                <button className="userPortfolio-follow-buttons" style={{marginRight: '2vw'}}>customize</button>
                            </div> */}
                       </div>
                       </div>
                       </>
                   )
               })     
            }
            </div>
        </div>
    </div>
    )
}

export default UserPortfolio
