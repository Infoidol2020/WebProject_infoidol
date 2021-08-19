import React, {useState, useRef, useEffect} from 'react'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Popover from '@material-ui/core/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import Carousel from 'react-elastic-carousel'
import NotificationsIcon from '@material-ui/icons/Notifications';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import LinkIcon from '@material-ui/icons/Link';
import { Link } from 'react-router-dom'

import './UserPortfolio.css'
import userImg from '../../assets/user.jpg'

const UserPortfolio = (props) => {

    // console.log('props from Portfolio', props.userProfileFromAPI.myUserProfile.myUserProfileApi.myUserProfile)
    const myWorksSection = useRef()
    const follwersSection = useRef()
    const followingSection = useRef()

    const videoSection = useRef()
    const audioSection = useRef()
    const pictureSection = useRef()
    const blogSection = useRef()

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
        // props.fetchUserProfile(localStorage.getItem('userProfileId'))
    }



    return (
        <div>
            
        <div className="portfolio-container">
            <div style={{display: 'flex', alignItems: 'center', height: '100%', justifyContent: 'space-between'}}>
            <div className="userPortfolio-left-buttons-wrapper">
                    <div  onClick={handleMyWorksClick} style={{cursor: 'pointer'}} className="userPortfolio-left-buttons-container">
                        <button  className="userPortfolio-left-buttons">My Works</button>
                        <div style={{textAlign: 'center', fontWeight: 'bold'}}>{
                        props.myWorksCount}</div>
                    </div>
                    <div style={{margin: '1rem'}}></div>

                    <div onClick={handleFollowersClick} className="userPortfolio-left-buttons-container" style={{cursor: 'pointer'}}>
                        <button  className="userPortfolio-left-buttons">Subscriber</button>
                        <div style={{textAlign: 'center', fontWeight: 'bold'}}>{
                            props.subscriberCount
                        }</div>
                    </div>
                    <div style={{margin: '1rem'}}></div>

                    <div onClick={handleFollowingClick} className="userPortfolio-left-buttons-container" style={{cursor: 'pointer'}}>
                        <button  className="userPortfolio-left-buttons">Subscribed</button>
                        <div style={{textAlign: 'center', fontWeight: 'bold'}}>
                            {
                                props.subscribedCount
                            }
                            </div>
                    </div>

                    
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
                                    props.customizeList.map((customizeElement, customizeElementIndex) => {
                                        return(
                                            <div 
                                            key={customizeElementIndex}
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
            <div className="my-works-scrollable-section" 
            ref={videoSection}
            style={{height: '32vh', overflowY: 'scroll'}}>
                {
                    props.uploadedVideo.map((videoElement, videoIndex) => {
                        return(
                            <div key={videoIndex} style={{width: '16vw', height: '20vh', display: 'inline-block', margin: '1rem', }}>
                                <video controls src={videoElement.video_link} style={{width: '100%', height: '100%'}} />
                            </div>
                        )
                    })
                }
            </div>
            
            {/* audio scrollable section */}
            <div className="my-works-scrollable-section"
            ref={audioSection}
            style={{height: '32vh', overflowY: 'scroll', display: 'none'}}>
                {
                    props.uploadedMusic.map((AudioElement, AudioIndex) => {
                        return(
                            <div key={AudioIndex} style={{width: '16vw', height: '10vh', display: 'inline-block', margin: '1rem', }}>
                                <audio  controls src={AudioElement.music_link} style={{width: '100%', height: '100%'}} />
                            </div>
                        )
                    })
                }
            </div>
            
            {/* picture scrollable section */}
            <div className="my-works-scrollable-section"
            ref={pictureSection}
            style={{height: '32vh', overflowY: 'scroll', display: 'none'}}>
                {
                    props.uploadedPicture.map((PictureElement, PictureIndex) => {
                        return(
                            <div key={PictureIndex} style={{width: '16vw', height: '20vh', display: 'inline-block', margin: '1rem', }}>
                                <img src={PictureElement.picture_link} style={{width: '100%', height: '100%'}} />
                            </div>
                        )
                    })
                }
            </div>

            {/* Blogs scrollable section */}
            <div className="my-works-scrollable-section"
            ref={blogSection}
            style={{height: '32vh', overflowY: 'scroll', display: 'none'}}>
                {
                    props.uploadedBlog.map((blogElement, blogIndex) => {
                        return(
                            <div style={{border: 'solid 1px #dadada',borderRadius: '10px', margin: '1rem', width: '48%',padding: '1rem', height: '22vh', display: 'inline-block'}}>
                                {
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

                                                        {/* {
                                                            (extension === 'mp3'|| extension === 'm4a' || extension === 'mp4') &&
                                                            <audio controls src={linkElement} style={{width: '20vw', height: '20vh'}} />
                                                        } */}
                                                    </div>
                                                )
                                            })
                                        }
                                        </Carousel>
                                    </div>
                                }
                            </div>
                        
                    
                            
                        )
                    })
                }
            </div>

            </div>
            <div className="followers-section-scrollable" ref={follwersSection} id="Followers-section" style={{display: 'none',height: '39vh', overflowY: 'scroll' }}>
                {/* <span>subscribers-section</span> */}
            {
            props.subscriber.map((element, index) => {
                // console.log('subscriber', props.subscriber)
                return(
                    <div style={{display: 'inline-block', margin: '1rem', boxShadow: '3px 3px #dadada', borderRadius: '10px'}}>
                    
                    <div>
                        <div style={{textAlign: 'center',display: 'inline-block',border: 'solid 1px #dadada',
                        borderRadius: '10px',padding: '0.5rem',
                        width: '15vw', cursor: 'pointer'}}
                            onClick={() => handleProfileClick(element.profile_id)}>       
                                    <Link to='/userprofile'>
                            <div>
                                <img src={element.profile_pic} 
                                style={{width: '8rem', 
                                height: '8rem', 
                                borderRadius: '50%',
                                border: '2px solid #624152', 
                            }} 
                                />
                            </div>
                            <div style={{ fontWeight: 'bold', opacity: '1', marginTop: '1vh'}}>
                                <p>{element.name}</p>
                                {/* <p style={{color: '#2A00FF'}}>{array[0].profession}</p> */}
                            </div>
                            </Link>
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
            props.subscribed.map((element, index) => {
                return(
                    <div style={{display: 'inline-block', margin: '1rem', boxShadow: '3px 3px #dadada', borderRadius: '10px'}}>
                        <div style={{textAlign: 'center',display: 'inline-block',border: 'solid 1px #dadada',
                        borderRadius: '10px',padding: '0.5rem',
                        width: '15vw', cursor: 'pointer'}}
                        onClick={() => handleProfileClick(element.profile_id)}>
                        <Link to='/userprofile'>
                            <div >
                                <img src={element.profile_pic} 
                                style={{width: '8rem', 
                                height: '8rem', 
                                borderRadius: '50%',
                                border: '1px solid #707070', 
                            }} 
                                />
                            </div>
                            <div style={{fontWeight: 'bold', opacity: '1', marginTop: '1vh'}}>
                                <p>{element.name}</p>
                                {/* <p style={{color: '#2A00FF'}}>{array[0].profession}</p>  */}
                            </div>
                            </Link>
                            </div>
                            {/* <div>
                                <button className="userPortfolio-follow-buttons" style={{marginRight: '2vw'}}>connect</button>
                                <button className="userPortfolio-follow-buttons" style={{marginRight: '2vw'}}>customize</button>
                            </div> */}
                    </div>
                )
            })     
            }
            </div>
        </div>
    </div>
    )
}

export default UserPortfolio
