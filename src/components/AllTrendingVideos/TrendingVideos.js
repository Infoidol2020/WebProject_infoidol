import React from 'react'
import {Link} from 'react-router-dom'

import VisibilityIcon from '@material-ui/icons/Visibility';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import CommentIcon from '@material-ui/icons/Comment';

import miniLoader from '../../assets/miniLoader.svg'

import { LazyLoadImage } from 'react-lazy-load-image-component';

const TrendingVideos = (props) => {
    // console.log('props from tv', props) 
    const videosTrending = props.allTrendingVideos

    const handleVideoClick = (video_id,user_id) =>{
        localStorage.setItem('id', video_id);
        localStorage.setItem('UI',user_id);
        window.scrollTo(0,0)
    
    }
    const loadMoreVideos = () => {
        let offset = sessionStorage.getItem('videoOffset')
        let newOffset = parseInt(offset) + 10
        sessionStorage.setItem('videoOffset', newOffset)
        props.hitAllTrendingVideosAPI(newOffset)

    }
    const prevVideos = () => {
        let offset = sessionStorage.getItem('videoOffset')
        let newOffset = parseInt(offset) - 10
        sessionStorage.setItem('videoOffset', newOffset)
        props.hitAllTrendingVideosAPI(newOffset)

    }
    return (
        videosTrending &&
        <div style={{textAlign: 'center'}}>
            {
                videosTrending.map((videoElement, videoIndex) => {
                    return(
                        <>
                        <Link to="/video-details">
                        <div 
                        onClick={() => handleVideoClick(videoElement.video_id,videoElement.user_id)}
                        style={{
                        display: 'inline-block', 
                        background: '#999999',
                        border: 'solid 1px rgba(0, 0, 0, 0.5)',
                        borderRadius: '10px', 
                        margin: '1rem', 
                        }}>
                            <div style={{width: '15vw', height: '15vh'}}>
                                {/* <video src={videoElement.video_link} style={{ padding: '1rem', width: '100%', height: '100%'}} /> */}
                                {
                                videoElement.video_thumbnail_link !== '' ?
                                <LazyLoadImage style={{width: '14vw', height: '7vw', margin: '0.5rem', objectFit: 'cover'}} src={videoElement.video_thumbnail_link} placeholder={<div><img src={miniLoader} /></div>} />
                                :
                                <LazyLoadImage style={{width: '14vw', height: '7vw', margin: '0.5rem', objectFit: 'cover'}} src={videoElement.cat_image_link} placeholder={<div><img src={miniLoader} /></div>} />
                                }
                            </div>
                            <div style={{border: 'solid 1px #CDCDCD', 
                            color: '#fff',
                            opacity: '0.8',
                            display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.5rem', borderRadius: '5px', margin: '0.5rem'}}>
                                <div style={{display: 'flex', alignItems: 'center'}}>
                                    <VisibilityIcon />
                                    <div>&nbsp; {videoElement.no_of_views}</div>
                                </div>
                                <div style={{display: 'flex', alignItems: 'center'}}>
                                    <ThumbUpAltIcon />
                                    <div>&nbsp; {videoElement.no_of_like}</div>
                                </div>
                                <div style={{display: 'flex', alignItems: 'center'}}>
                                    <CommentIcon />
                                    <div>&nbsp; {videoElement.no_of_comments}</div>
                                </div>
                            </div>
                            <div style={{border: 'solid 1px #CDCDCD', 
                            color: '#fff',
                            opacity: '0.8',
                            borderRadius: '5px', margin: '0.5rem'}}>{videoElement.video_title.length > 30 ? <div>{videoElement.video_title.slice(0,30).toLowerCase()}...</div>: videoElement.video_title.toLowerCase()}</div>
                        </div>
                        </Link>
                        </>
                    )
                })
            }
            <div style={{width: '86%', textAlign: 'center', marginTop: '2vh', 
            marginBottom: '5vh', margin: 'auto',
            display: 'flex', justifyContent: 'center', alignItems: 'center', height: '15vh'}}>
            {
                sessionStorage.getItem('videoOffset') != '0' &&
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
    )
}

export default TrendingVideos
