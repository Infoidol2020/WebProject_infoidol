import React, {useState, useRef, useEffect} from 'react'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Popover from '@material-ui/core/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
// import Carousel from 'react-elastic-carousel'
// import NotificationsIcon from '@material-ui/icons/Notifications';
// import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
// import CheckCircleIcon from '@material-ui/icons/CheckCircle';
// import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
// import LinkIcon from '@material-ui/icons/Link';
import { Link } from 'react-router-dom'

import miniLoader from '../../assets/miniLoader.svg'

import { LazyLoadImage } from 'react-lazy-load-image-component';

import './UserPortfolio.css'
// import userImg from '../../assets/user.jpg'

const UserPortfolio = (props) => {
    // For Video
    const [title, setTitle] = useState()
    const [caption, setCaption] = useState()
    const [link, setLink] = useState()
    const [thumbnail, setThumbnail] = useState()
    const [cat, setCat] = useState()
    const [v_id, setV_id] = useState()
    // For Audio
    const [Audiotitle, setAudioTitle] = useState()
    const [Audiocaption, setAudioCaption] = useState()
    const [Audiolink, setAudioLink] = useState()
    const [Audiothumbnail, setAudioThumbnail] = useState()
    const [Audiocat, setAudioCat] = useState()
    const [Audioid, setAudioid] = useState()
 // For Picture
    const [Picturetitle, setPictureTitle] = useState()
    const [Picturecaption, setPictureCaption] = useState()
    const [Picturelink, setPictureLink] = useState()
    const [Picturecat, setPictureCat] = useState()
    const [Pictureid, setPictureid] = useState()
// For Blog
const [Blogtitle, setBlogTitle] = useState()
const [Blogcaption, setBlogCaption] = useState()
const [Bloglink, setBlogLink] = useState([])
const [Blogthumbnail, setBlogThumbnail] = useState()
const [Blogcat, setBlogCat] = useState()
const [Blogid, setBlogid] = useState()

    // console.log('props from Portfolio', props.userProfileFromAPI.myUserProfile.myUserProfileApi.myUserProfile)
    // console.log('props from Portfolio', props)
    const closeModalBtn = useRef()
    const myWorksSection = useRef()
    const follwersSection = useRef()
    const followingSection = useRef()
    const videoSection = useRef()
    const audioSection = useRef()
    const pictureSection = useRef()
    const blogSection = useRef()
    // Updated Msz
    const [updatedMsz,setupdatedMsz] = useState(false)
    // Video Edit Modal
    const videoTitle = useRef()
    const videoDescription = useRef()
    // Audio Edit Modal
    const audioTitle = useRef()
    const audioDescription = useRef()
    // Picture Edit Modal
    const pictureTitle = useRef()
    const pictureDescription = useRef()
    // Blog Edit Modal
    const blogTitle = useRef()
    const blogDescription = useRef()

    //video pagination
    const loadMoreVideos = () => {
        let offset = sessionStorage.getItem('uploadedVideoOffset')
        let newOffset = parseInt(offset) + 10
        sessionStorage.setItem('uploadedVideoOffset', newOffset)
        props.hitMyUploadedVideosAPI(localStorage.getItem('WebAppUserKey'),newOffset)

    }
    const prevVideos = () => {
        let offset = sessionStorage.getItem('uploadedVideoOffset')
        let newOffset = parseInt(offset) - 10
        sessionStorage.setItem('uploadedVideoOffset', newOffset)
        props.hitMyUploadedVideosAPI(localStorage.getItem('WebAppUserKey'),newOffset)

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
            props.hitMyUploadedAudioAPI(localStorage.getItem('WebAppUserKey'),newOffset)
    
        }
        const prevAudios = () => {
            let offset = sessionStorage.getItem('uploadedAudioOffset')
            let newOffset = parseInt(offset) - 10
            sessionStorage.setItem('uploadedAudioOffset', newOffset)
            props.hitMyUploadedAudioAPI(localStorage.getItem('WebAppUserKey'),newOffset)
    
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
        // props.fetchUserProfile(localStorage.getItem('userProfileId'))
    }

    const handleDeleteVideo = (id,dataType) => {
        props.hitdeleteDataAPI(id,dataType)
        // console.log('id & dataType from Up---video',id,dataType)
    }
    const handleDeleteAudio = (id,dataType) => {
        props.hitdeleteDataAPI(id,dataType)
        // console.log('id & dataType from Up---Audio',id,dataType)
    }
    const handleDeletePicture = (id,dataType) => {
        props.hitdeleteDataAPI(id,dataType)
        // console.log('id & dataType from Up---Pic',id,dataType)
    }
    const handleDeleteBlog = (id,dataType) => {
        props.hitdeleteDataAPI(id,dataType)
        // console.log('id & dataType from Up---Blog',id,dataType)
    }
    const handleVideoEdit = (title, caption, link, cat_id, video_id, thumbnail) => {
        setTitle(title)
        setCaption(caption)
        setLink(link)
        setThumbnail(thumbnail)
        setCat(cat_id)
        setV_id(video_id)

    }
    const handleAudioEdit = (title, caption, link, cat_id, music_id, thumbnail) => {
        setAudioTitle(title)
        setAudioCaption(caption)
        setAudioLink(link)
        setAudioThumbnail(thumbnail)
        setAudioCat(cat_id)
        setAudioid(music_id)

    }
    const handlePictureEdit = (title, caption, link, cat_id, picture_id) => {
        setPictureTitle(title)
        setPictureCaption(caption)
        setPictureLink(link)
        setPictureCat(cat_id)
        setPictureid(picture_id)

    }
    const handleBlogEdit = (link, title , caption, blog_id, thumbnail, cat_id) => {
        for (let i =0 ; i < link.length; i++) {
            // console.log(link.length)
            var blob = new Blob([link[i]], { type: 'text/plain' })
            var blog_file = new File([blob], `blog_file${i}`, {type: "text/plain"});
            // setBlogLink(...Bloglink, {
            //     blogFiles : blog_file
            // })
            // setBlogLink({ blogFiles: [...blogFiles, blog_file]})
            // setUserFeeds(userFeeds => [...userFeeds, ...props.FeedsFromAPI.FeedPage.FeedPageGetApi.allFeeds.data_list])
            // console.log('filexxxx', blog_file)

            setBlogLink(Bloglink => [...Bloglink, blog_file])
          }
        // console.log('linkkkk', link)
        setBlogTitle(title)
        setBlogCaption(caption)
        setBlogLink(link)
        setBlogThumbnail(thumbnail)
        setBlogCat(cat_id)
        setBlogid(blog_id)

    }
    const handleEditVideoSubmit = (e) => {
        e.preventDefault();
        var blob = new Blob([link], { type: 'text/plain' })
        var file = new File([blob], "video", {type: "text/plain"});
        if(thumbnail != ''){
            var thumbnail_blob = new Blob([thumbnail], { type: 'text/plain' })
            var thumbnail_file = new File([thumbnail_blob], "video", {type: "text/plain"});
        }
        props.hiteditVideoAPI(file, cat, title , caption, thumbnail_file, v_id)
    }

    const handleEditAudioSubmit = (e) => {
        e.preventDefault();
        var blob = new Blob([link], { type: 'text/plain' })
        var file = new File([blob], "audio", {type: "text/plain"});
        if(thumbnail != ''){
            var thumbnail_blob = new Blob([thumbnail], { type: 'text/plain' })
            var thumbnail_file = new File([thumbnail_blob], "audio", {type: "text/plain"});
        }
        props.hiteditAudioAPI(file, Audiocat, Audiotitle , Audiocaption, thumbnail_file, Audioid)
    }

    const handleEditPictureSubmit = (e) => {
        e.preventDefault();
        var blob = new Blob([link], { type: 'text/plain' })
        var file = new File([blob], "picture", {type: "text/plain"});
        // if(thumbnail != ''){
        //     var thumbnail_blob = new Blob([thumbnail], { type: 'text/plain' })
        //     var thumbnail_file = new File([thumbnail_blob], "picture", {type: "text/plain"});
        // }
        props.hiteditPictureAPI(file, Picturecat, Picturetitle , Picturecaption, Pictureid)
    }
    const handleEditBlogSubmit = (e) => {
        e.preventDefault();
        // var blob = new Blob([link], { type: 'text/plain' })
        // var file = new File([blob], "blog", {type: "text/plain"});
        if(thumbnail != ''){
            var thumbnail_blob_blog = new Blob([thumbnail], { type: 'text/plain' })
            var thumbnail_file_blog = new File([thumbnail_blob_blog], "blog", {type: "text/plain"});
        }
        props.hiteditBlogAPI(Bloglink, Blogtitle , Blogcaption, Blogid, thumbnail_file_blog, Blogcat)
    }
    useEffect(() => {
        if(props.userProfileFromAPI.Delete.deleteApi.deleteSuccess && props.userProfileFromAPI.Delete.deleteApi.deleteSuccess){
            props.hitMyUserProfileAPI()
            // console.log('after refresh ')
        }
    }, [props.userProfileFromAPI.Delete.deleteApi.deleteSuccess])
    useEffect(() => {
        if(props.userProfileFromAPI.EditVideo.editVideoApi.editVideoSuccess && props.userProfileFromAPI.EditVideo.editVideoApi.editVideoSuccess ||
            props.userProfileFromAPI.EditAudio.editAudioApi.editAudioSuccess ||
            props.userProfileFromAPI.EditBlog.editBlogApi.editBlogSuccess||
            props.userProfileFromAPI.EditPicture.editPictureApi.editPictureSuccess
            ){
                setupdatedMsz(true)
                setTimeout(() => {
                    setupdatedMsz(false)
                    closeModalBtn.current.click();
                }, 4000);
            props.hitMyUserProfileAPI()
            videoTitle.current.value = ''
            videoDescription.current.value = ''
                    pictureSection.current.value = ''
                    blogSection.current.value = ''
            // console.log('after video/audio edited ')
        }
    }, [props.userProfileFromAPI.EditVideo.editVideoApi.editVideoSuccess || props.userProfileFromAPI.EditAudio.editAudioApi.editAudioSuccess || props.userProfileFromAPI.EditBlog.editBlogApi.editBlogSuccess || props.userProfileFromAPI.EditPicture.editPictureApi.editPictureSuccess ])

    return (
        <div className="user-portfolio-container">
        <div className="portfolio-container">
            <div className="portfolio-myWorks" style={{display: 'flex', alignItems: 'center', height: '100%', justifyContent: 'space-between'}}>
            <div className="userPortfolio-left-buttons-wrapper">
                    <div  onClick={handleMyWorksClick} style={{cursor: 'pointer'}} className="userPortfolio-left-buttons-container">
                        <button  className="userPortfolio-left-buttons">My Works</button>
                        <div className="portfolio-myWorksCount" style={{textAlign: 'center', fontWeight: 'bold'}}>{
                        props.myWorksCount}</div>
                    </div>
                    <div style={{margin: '1rem'}}></div>

                    <div onClick={handleFollowersClick} className="userPortfolio-left-buttons-container" style={{cursor: 'pointer'}}>
                        <button  className="userPortfolio-left-buttons">Subscriber</button>
                        <div className="portfolio-subscriberCount" style={{textAlign: 'center', fontWeight: 'bold'}}>{
                            props.subscriberCount
                        }</div>
                    </div>
                    <div style={{margin: '1rem'}}></div>

                    <div onClick={handleFollowingClick} className="userPortfolio-left-buttons-container" style={{cursor: 'pointer'}}>
                        <button  className="userPortfolio-left-buttons">Subscribed</button>
                        <div className="portfolio-subscribedCount" style={{textAlign: 'center', fontWeight: 'bold'}}>
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
                            <div p={10} className="portfolio-customizeList-wrapper">
                                {
                                    props.customizeList.map((customizeElement, customizeElementIndex) => {
                                        return(
                                            <div 
                                            className="portfolio-customizeList"
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
        <div className="userPortfolio-content-container">
        <div className="userPortfolio-myWorksSection" ref={myWorksSection} id="my-works-section" >
            <div id="userPortfolio-myWorksTabs">
                
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
            <div  className="my-works-scrollable-container">
            <div className="my-works-scrollable-section" 
            ref={videoSection}>
                {
                    props.uploadedVideo.map((videoElement, videoIndex) => {
                        return(
                            <div
                            key={videoIndex} 
                            className="my-works-uploadedVideo-section">
                                <Link to='/video-details'>
                                {/* <video  src={videoElement.video_link} style={{width: '100%', height: '100%',}}
                                onClick={() => handleVideoRedirection(videoElement.video_id, videoElement.user_id)} /> */}
                                {
                                videoElement.video_thumbnail_link !== '' ?
                                <LazyLoadImage className="my-works-thumbnail_link" 
                                src={videoElement.video_thumbnail_link} placeholder={<div><img src={miniLoader} /></div>} 
                                onClick={() => handleVideoRedirection(videoElement.video_id, videoElement.user_id)}/>
                                :
                                <LazyLoadImage className="my-works-thumbnail_link" 
                                src={videoElement.cat_image_link} placeholder={<div><img src={miniLoader} /></div>} 
                                onClick={() => handleVideoRedirection(videoElement.video_id, videoElement.user_id)}/>
                                }
                                </Link>
                                <div className="UP_RenderBtns" style={{
                                    display:'flex',
                                    justifyContent: 'space-between'
                                    }}>
                                        <p className="myWork_VideoTitle">
                                            {videoElement.video_title.length>15 ?
                                            videoElement.video_title.slice(0,12).concat('..') :
                                            videoElement.video_title}
                                        </p>
                                    <div className="editDeleteBtnContainer editDeleteBtnVideo">
                                        <buttons 
                                        onClick={() => handleVideoEdit(videoElement.video_title, videoElement.video_caption, videoElement.video_link,videoElement.cat_id, videoElement.video_id , videoElement.video_thumbnail_link )} 
                                        data-toggle="modal" data-target="#exampleModalCenter"><i class="fas fa-edit" style={{color:'blue'}}></i></buttons>
                                        <buttons onClick={() => handleDeleteVideo(videoElement.video_id,videoElement.type)}><i class="fas fa-trash" style={{color:'red'}}></i></buttons>
                                    </div>
                                </div>
                                {/* <!-- Video Edit Modal  --> */}
                        <div className="editVideoModal">
                        <div class="modal fade" 
                        id="exampleModalCenter" 
                        tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered" role="document">
                            <div class="modal-content" style={{marginTop: '10rem'}}>
                            <div class="modal-header">
                                <h4 class="modal-title" id="exampleModalLongTitle"><b>Edit</b></h4>
                            </div>
                            <form className="" onSubmit={handleEditVideoSubmit}>
                            <div class="modal-body" className="VideoEditContainer">
                                <div>
                                {
                        updatedMsz && 
                        <div style={{width: '100%', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        height: '5vh', 
                        color: '#fff',
                        marginBottom: '2vh',
                        fontWeight: 'bold',
                        fontSize: '1.5rem',  
                        background: '#2E8B57'}}>Uploaded successfully</div>
                    }
                                    <div className="UP_editVideoTitle">
                                        <div>
                                            <label for="title">Title</label>
                                        </div>
                                        <textarea
                                        ref={videoTitle}
                                        onChange={(e) => setTitle(e.target.value)}
                                        placeholder={title} 
                                        id="title" 
                                        name="title" 
                                        cols="30" 
                                        rows="2">
                                        </textarea>
                                    </div>
    
                                    <div className="UP_editVideoDescription">
                                        <div>
                                            <label for="description">Description</label>
                                        </div>
                                        <textarea
                                        ref={videoDescription} 
                                        onChange={(e) => setCaption(e.target.value)}
                                        placeholder={caption}  
                                        id="description" name="description" cols="30" rows="4">
                                        </textarea>
                                    </div>
    
                                </div>
                                <div className="editVideoDp">
                                    <video controls src={link} className="videoEditorsDp" alt="" />
                                </div>
                            </div>
    
                            <div class="modal-footer">
                                <button class="btn btn-info">Upload</button>
                                <button
                                onClick={() => {setupdatedMsz(false)}} ref={closeModalBtn}
                                type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                            </form>
                            </div>
                        </div>
                        </div>
                    </div>
                            </div> 
                        )
                    })
                }

            {/* video pagination */}
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

            </div>
            
            {/* audio scroldivlable section */}
            <div className="my-works-scrollable-section"
            ref={audioSection}
            style={{display: 'none'}}>
                {
                    props.uploadedMusic.map((AudioElement, AudioIndex) => {
                        return(
                            <div 
                            key={AudioIndex} 
                            className="my-works-uploadedMusic-section"
                            >
                                {/* <audio  controls src={AudioElement.music_link} style={{width: '100%', height: '100%'}} /> */}
                                <div className="UP_RenderBtns" style={{
                                    background: '#dadada',
                                    display:'flex',
                                    padding: '1rem',
                                    borderRadius: '10px',
                                    justifyContent: 'space-around'
                                    }}>
                                        <Link to ="/audio-details">
                                        <p className="myWork_AudioTitle"
                                        onClick={() => handleAudioRedirection(AudioElement.music_id, AudioElement.user_id)}>
                                            {AudioElement.music_title.length>10 ?
                                            AudioElement.music_title.toLowerCase().slice(0,10).concat('..') :
                                            AudioElement.music_title.toLowerCase()}
                                        </p>
                                        </Link>
                                    <div className="editDeleteBtnContainer">
                                    <buttons 
                                        onClick={() => handleAudioEdit(AudioElement.music_title, AudioElement.music_caption, AudioElement.music_link,AudioElement.cat_id, AudioElement.music_id , AudioElement.music_thumbnail_link )} 
                                        data-toggle="modal" data-target="#exampleModalCenterAudio"><i class="fas fa-edit" style={{color:'blue'}}></i>
                                    </buttons>

                                    <buttons 
                                        onClick={() => handleDeleteAudio(AudioElement.music_id,AudioElement.type)}
                                        ><i class="fas fa-trash" style={{color:'red'}}></i>
                                    </buttons>
                                    </div>
                                </div>
                                {/* <!-- Audio Edit Modal  --> */}
                        <div className="editAudioModal">
                        <div class="modal fade" 
                        id="exampleModalCenterAudio" 
                        tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered" role="document">
                            <div class="modal-content" style={{marginTop: '10rem'}}>
                            <div class="modal-header">
                                <h4 class="modal-title" id="exampleModalLongTitle"><b>Edit</b></h4>
                            </div>
                            <form className="" onSubmit={handleEditAudioSubmit}>
                            <div class="modal-body" className="AudioEditContainer">
                                <div>
                                {
                        updatedMsz && 
                        <div style={{width: '100%', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        height: '5vh', 
                        color: '#fff',
                        marginBottom: '2vh',
                        fontWeight: 'bold',
                        fontSize: '1.5rem',  
                        background: '#2E8B57'}}>Uploaded successfully</div>
                    }
                                    <div className="UP_editAudioTitle">
                                        <div>
                                            <label for="title">Title</label>
                                        </div>
                                        <textarea
                                        ref={audioTitle}
                                        onChange={(e) => setAudioTitle(e.target.value)}
                                        placeholder={Audiotitle} 
                                        id="title" 
                                        name="title" 
                                        cols="30" 
                                        rows="2">
                                        </textarea>
                                    </div>
    
                                    <div className="UP_editAudioDescription">
                                        <div>
                                            <label for="description">Description</label>
                                        </div>
                                        <textarea
                                        ref={audioDescription} 
                                        onChange={(e) => setAudioCaption(e.target.value)}
                                        placeholder={Audiocaption}  
                                        id="description" name="description" cols="30" rows="4">
                                        </textarea>
                                    </div>
    
                                </div>
                                <div className="editAudioDp">
                                    <LazyLoadImage placeholder={<div><img src={miniLoader} /></div>} src={Audiothumbnail} className="AudioEditorsDp" alt="" />
                                </div>
                            </div>
    
                            <div class="modal-footer">
                                <button class="btn btn-info">Upload</button>
                                <button   onClick={() => {setupdatedMsz(false)}}
                                ref={closeModalBtn}
                                type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                            </form>
                            </div>
                        </div>
                        </div>
                    </div>
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
            
            {/* picture scrdivollable section */}
            <div className="my-works-scrollable-section"
            ref={pictureSection}
            style={{display: 'none'}}>
                {
                    props.uploadedPicture.map((PictureElement, PictureIndex) => {
                        return(
                            <div 
                            key={PictureIndex} 
                            // style={{width: '16vw', height: '20vh', display: 'inline-block', margin: '1rem', }}
                            className="my-works-uploadedPicture-section"
                            >
                                <Link to="/picture-details">
                                    <LazyLoadImage placeholder={<div><img src={miniLoader} /></div>} onClick={() => handlePictureRedirection(PictureElement.image_id, PictureElement.user_id)} src={PictureElement.picture_link} style={{width: '100%', height: '100%'}} />
                                </Link>
                                <div className="UP_RenderBtns" style={{
                                    display:'flex',
                                    justifyContent: 'space-between'
                                    }}>
                                        <p className="myWork_PictureTitle">
                                            {PictureElement.picture_title.length>20 ?
                                            PictureElement.picture_title.slice(0,20).concat('..') :
                                            PictureElement.picture_title}
                                        </p>
                                    <div className="editDeleteBtnContainer">
                                    <buttons 
                                        onClick={() => handlePictureEdit(PictureElement.picture_title, PictureElement.picture_caption, PictureElement.picture_link,PictureElement.cat_id, PictureElement.image_id )} 
                                        data-toggle="modal" data-target="#exampleModalCenterPicture"><i class="fas fa-edit" style={{color:'blue'}}></i>
                                    </buttons>

                                    <buttons 
                                        onClick={() => handleDeletePicture(PictureElement.image_id,PictureElement.type)}
                                        ><i class="fas fa-trash" style={{color:'red'}}></i>
                                    </buttons>
                                    </div>
                                </div>
                                {/* <!-- Picture Edit Modal  --> */}
                        <div className="editPictureModal">
                        <div class="modal fade" 
                        id="exampleModalCenterPicture" 
                        tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered" role="document">
                            <div class="modal-content" style={{marginTop: '10rem'}}>
                            <div class="modal-header">
                                <h4 class="modal-title" id="exampleModalLongTitle"><b>Edit</b></h4>
                            </div>
                            <form className="" onSubmit={handleEditPictureSubmit}>
                            <div class="modal-body" className="PictureEditContainer">
                                <div>
                                {
                        updatedMsz && 
                        <div style={{width: '100%', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        height: '5vh', 
                        color: '#fff',
                        marginBottom: '2vh',
                        fontWeight: 'bold',
                        fontSize: '1.5rem',  
                        background: '#2E8B57'}}>Uploaded successfully</div>
                    }
                                    <div className="UP_editPictureTitle">
                                        <div>
                                            <label for="title">Title</label>
                                        </div>
                                        <textarea
                                        ref={pictureTitle}
                                        onChange={(e) => setPictureTitle(e.target.value)}
                                        placeholder={Picturetitle} 
                                        id="title" 
                                        name="title" 
                                        cols="30" 
                                        rows="2">
                                        </textarea>
                                    </div>
    
                                    <div className="UP_editPictureDescription">
                                        <div>
                                            <label for="description">Description</label>
                                        </div>
                                        <textarea
                                        ref={pictureDescription} 
                                        onChange={(e) => setPictureCaption(e.target.value)}
                                        placeholder={Picturecaption}  
                                        id="description" name="description" cols="30" rows="4">
                                        </textarea>
                                    </div>
    
                                </div>
                                <div className="editPictureDp">
                                    <LazyLoadImage placeholder={<div><img src={miniLoader} /></div>} src={Picturelink} className="PictureEditorsDp" alt="" />
                                </div>
                            </div>
    
                            <div class="modal-footer">
                                <button class="btn btn-info">Upload</button>
                                <button 
                                onClick={() => {setupdatedMsz(false)}}
                                ref={closeModalBtn}
                                type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                            </form>
                            </div>
                        </div>
                        </div>
                    </div>
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

            {/* Blogs scroldivlable section */}
            <div className="my-works-scrollable-section"
            ref={blogSection}
            style={{display: 'none'}}>
                {
                    props.uploadedBlog.map((blogElement, blogIndex) => {
                        return(
                            <div className="MyWorks_BlogWrapper">
                                {
                                    blogElement.blog_link &&
                                    <div style={{width: '100%'}}>
                                        <div className="UP_RenderBtns" style={{
                                            display:'flex',
                                            justifyContent: 'space-between',
                                            marginTop: '1rem'
                                                }}>
                                                <p className="myWork_BlogTitle">
                                                    {blogElement.blog_title.length>40 ?
                                                    blogElement.blog_title.slice(0,40).concat('..') :
                                                    blogElement.blog_title}
                                                </p>
                                            <div className="editDeleteBtnContainer">
                                            <buttons 
                                                onClick={() => handleBlogEdit(blogElement.blog_link, blogElement.blog_title, blogElement.blog_description, blogElement.blog_id, blogElement.blog_thumbnail_link, blogElement.cat_id )} 
                                                data-toggle="modal" data-target="#exampleModalCenterBlog"><i class="fas fa-edit" style={{color:'blue'}}></i>
                                            </buttons>
                                            <buttons 
                                                onClick={() => handleDeleteBlog(blogElement.blog_id,blogElement.type)}
                                                ><i class="fas fa-trash" style={{color:'red'}}></i>
                                            </buttons>
                                            </div>
                                        </div>
                                        {/* <!-- Blog Edit Modal  --> */}
                        <div className="editBlogModal">
                        <div class="modal fade" 
                        id="exampleModalCenterBlog" 
                        tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered" role="document">
                            <div class="modal-content" style={{marginTop: '10rem'}}>
                            <div class="modal-header">
                                <h4 class="modal-title" id="exampleModalLongTitle"><b>Edit</b></h4>
                            </div>
                            <form className="" onSubmit={handleEditBlogSubmit}>
                            <div class="modal-body" className="BlogEditContainer">
                                <div>
                                {
                        updatedMsz && 
                        <div style={{width: '100%', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        height: '5vh', 
                        color: '#fff',
                        marginBottom: '2vh',
                        fontWeight: 'bold',
                        fontSize: '1.5rem',  
                        background: '#2E8B57'}}>Uploaded successfully</div>
                    }
                                    <div className="UP_editBlogTitle">
                                        <div>
                                            <label for="title">Title</label>
                                        </div>
                                        <textarea
                                        ref={blogTitle}
                                        onChange={(e) => setBlogTitle(e.target.value)}
                                        placeholder={Blogtitle} 
                                        id="title" 
                                        name="title" 
                                        cols="30" 
                                        rows="2">
                                        </textarea>
                                    </div>
    
                                    <div className="UP_editBlogDescription">
                                        <div>
                                            <label for="description">Description</label>
                                        </div>
                                        <textarea
                                        ref={blogDescription} 
                                        onChange={(e) => setBlogCaption(e.target.value)}
                                        placeholder={Blogcaption}  
                                        id="description" name="description" cols="30" rows="4">
                                        </textarea>
                                    </div>
    
                                </div>
                                <div className="editBlogDp">
                                    <LazyLoadImage placeholder={<div><img src={miniLoader} /></div>} src={Blogthumbnail} className="BlogEditorsDp" alt="" />
                                </div>
                            </div>
    
                            <div class="modal-footer">
                                <button class="btn btn-info">Upload</button>
                                <button   onClick={() => {setupdatedMsz(false)}}
                                ref={closeModalBtn}
                                type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                            </form>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* <Carousel itemsToShow={1} key={blogIndex} style={{ width: '100%'}} >
                    {
                        blogElement.blog_link.map((linkElement, linkIndex) => {
                        var extension = linkElement.split('.').pop();
                            return(
                                <div >
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
                    </Carousel> */}
                    <div>
                        {
                            blogElement.blog_thumbnail_link !== '' ?
                            <Link to="/blog-details">
                            <LazyLoadImage className="user-portfolio-blog_thumbnail" placeholder={<div><img src={miniLoader} /></div>} onClick={() => handleBlogRedirection(blogElement.blog_id, blogElement.user_id)} src={blogElement.blog_thumbnail_link}/>
                            </Link>
                            :
                            <Link to="/blog-details">
                            <LazyLoadImage className="user-portfolio-blog_thumbnail" placeholder={<div><img src={miniLoader} /></div>} onClick={() => handleBlogRedirection(blogElement.blog_id, blogElement.user_id)} src={blogElement.cat_image_link}/>
                            </Link>

                        }
                    </div>
                    </div>
                    }
                                
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
            props.subscriber.map((element, index) => {
                // console.log('subscriber', props.subscriber)
                return(
                    <div className="followers-scrollable-container" style={{display: 'inline-block', margin: '1rem', boxShadow: '3px 3px #dadada', borderRadius: '10px'}}>
                    
                    <div className="followers-scrollable-wrapper" >
                        <div 
                        className="followers-profile-container" 
                        style={{textAlign: 'center',display: 'inline-block',border: 'solid 1px #dadada',
                        borderRadius: '10px',padding: '0.5rem',
                        width: '15vw', cursor: 'pointer'}}
                            onClick={() => handleProfileClick(element.profile_id)}>       
                                    <Link to='/userprofile'>
                            <div className="followers-profile_pic-container">
                                <LazyLoadImage className="followers-profile_pic" placeholder={<div><img src={miniLoader} /></div>} src={element.profile_pic} 
                                style={{width: '8rem', 
                                height: '8rem', 
                                borderRadius: '50%',
                                border: '2px solid #624152', 
                            }} 
                                />
                            </div>
                            <div className="followers-user-profile" style={{ fontWeight: 'bold', opacity: '1', marginTop: '1vh'}}>
                                <p className="followers-profile_name" >{element.name}</p>
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
            <div className="subscribed-section-scrollable" ref={followingSection} id="Following-section" style={{display: 'none',height: '39vh',overflowY: 'scroll' }}>
                {/* <span>subscribed-section</span> */}
        {
            props.subscribed.map((element, index) => {
                return(
                    <div className="subscribed-section-container" style={{display: 'inline-block', margin: '1rem', boxShadow: '3px 3px #dadada', borderRadius: '10px'}}>
                        <div className="subscribed-profiles-container" style={{textAlign: 'center',display: 'inline-block',border: 'solid 1px #dadada',
                        borderRadius: '10px',padding: '0.5rem',
                        width: '15vw', cursor: 'pointer'}}
                        onClick={() => handleProfileClick(element.profile_id)}>
                        <Link to='/userprofile'>
                            <div  className="subscribed-profiles-pics-container">
                                <LazyLoadImage className="subscribed-profiles-profile_pic"
                                placeholder={<div><img src={miniLoader} /></div>} src={element.profile_pic} 
                                style={{width: '8rem', 
                                height: '8rem', 
                                borderRadius: '50%',
                                border: '1px solid #707070', 
                            }} 
                                />
                            </div>
                            <div className="subscribed-user-profile" style={{fontWeight: 'bold', opacity: '1', marginTop: '1vh'}}>
                                <p className="subscribed-profile-name" >{element.name}</p>
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
