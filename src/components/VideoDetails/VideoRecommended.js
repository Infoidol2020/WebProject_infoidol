import React from 'react'

import miniLoader from '../../assets/miniLoader.svg'

import { LazyLoadImage } from 'react-lazy-load-image-component';

import './VideoRecommended.css'

const VideoRecommended = (props) => {
    // console.log('props from video recommended',  props)
    const handleRecommended = (recommendedVideoId) => {
        localStorage.setItem('id', recommendedVideoId)
        props.fetchAllVideoView(recommendedVideoId)
        window.scrollTo(0, 0)

    }
    const loadMoreVideos = () => {
        let offset = sessionStorage.getItem('videoRecommendedOffset')
        let newOffset = parseInt(offset) + 10
        sessionStorage.setItem('videoRecommendedOffset', newOffset)
        props.hitVideoRecommendedAPI(newOffset, localStorage.getItem('UI'))

    }
    const prevVideos = () => {
        let offset = sessionStorage.getItem('videoRecommendedOffset')
        let newOffset = parseInt(offset) - 10
        sessionStorage.setItem('videoRecommendedOffset', newOffset)
        props.hitVideoRecommendedAPI(newOffset, localStorage.getItem('UI'))

    }
    return (
        <>
        <div className="VideoRecommended_Container">
            {
                props.recommended && props.recommended.map((recommendedVideo, recommendedIndex) => {
                    return(
                        <div className="VideoRecommended_RecomWrapper">
                            {/* <video onClick={() => handleRecommended(recommendedVideo.video_id)} src={recommendedVideo.video_link}  /> */}
                            {
                                recommendedVideo.video_thumbnail_link !== '' ?
                                <LazyLoadImage 
                                className="thumbnails"
                                onClick={() => handleRecommended(recommendedVideo.video_id)} 
                                style={{ margin: '0.5rem', objectFit: 'cover'}} src={recommendedVideo.video_thumbnail_link} placeholder={<div><img src={miniLoader} /></div>} />
                                :
                                <LazyLoadImage 
                                className="thumbnails"
                                onClick={() => handleRecommended(recommendedVideo.video_id)}
                                style={{ margin: '0.5rem', objectFit: 'cover'}} src={recommendedVideo.cat_image_link} placeholder={<div><img src={miniLoader} /></div>} />
                                }
                            <div className="VideoRecommended_ContentContainer">
                                <div className="VideoRecommended_UploaderPic">
                                    <LazyLoadImage className="VD_RecommendUserprofile" placeholder={<div><img src={miniLoader} /></div>} src={recommendedVideo.user_profile_pic}
                                    // style={{width: '5rem', height: '5rem', borderRadius: '50%', objectFit: 'cover'}} 
                                    />
                                </div>
                                <div className="VideoRecommended_ContentDetails">
                                    <div className="VideoRecommended_VideoTitle">{recommendedVideo.video_title.length > 20 ? 
                                    recommendedVideo.video_title.toLowerCase().slice(0,20).concat('...') : 
                                    recommendedVideo.video_title.toLowerCase()}</div>
                                    <div className="VideoRecommended_VideoViews">{recommendedVideo.no_of_views} Views</div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

        <div style={{width: '86%', textAlign: 'center', marginTop: '2vh', 
            marginBottom: '5vh', margin: 'auto',
            display: 'flex', justifyContent: 'center', alignItems: 'center', height: '15vh'}}>
            {
                sessionStorage.getItem('videoRecommendedOffset') != '0' &&
                <div className="VD_prevVideo"
                onClick={prevVideos}
                // style={{display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#999',
                // color: '#fff', 
                // border: '0',
                // borderRadius: '10px',
                // marginRight: '4vw',
                // cursor: 'pointer',
                // width: '5vw',
                // height: '5vh'}}
                >
                <i class="fas fa-angle-double-left" style={{fontSize: '2rem'}}></i>
                
            </div>
            }
            <div className="VD_loadmore">
                <button style={{border:'none',background:'none'}}
                onClick={loadMoreVideos}
                // style={{
                // display: 'flex', alignItems: 'center', justifyContent: 'center',
                // background: '#999',
                // color: '#fff', 
                // border: '0',
                // borderRadius: '10px',
                // cursor: 'pointer', 
                // width: '5vw',
                // height: '5vh'}}
                >
                    <i class="fas fa-angle-double-right" style={{fontSize: '2rem'}}></i>

                </button>
            </div>

            </div>
        </div>

        </>
    )
}

export default VideoRecommended
