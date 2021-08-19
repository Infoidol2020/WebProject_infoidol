import React ,{useEffect, useState} from 'react'
import {connect} from 'react-redux';
import Carousel from 'react-elastic-carousel'
import VisibilityIcon from '@material-ui/icons/Visibility';
import {Link} from 'react-router-dom';
import Slider from "react-slick";


import { fetchAllVideoView } from '../../redux/VideoViewPage/VideoPageViewAction'
import './VideoRelease.css';

import miniLoader from '../../assets/miniLoader.svg'

import { LazyLoadImage } from 'react-lazy-load-image-component';



const VideoRelease = (props) => {
    const [videoDetails, setVideoDetails] = useState({});
    const [settings, setSetting] = useState()
    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 500px)')
        if(mediaQuery.matches){
            setSetting ( {
                // dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                adaptiveHeight: true,
                arrows: true,
                }
            )
        }
        else{
            setSetting ( {
                // dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 4,
                slidesToScroll: 1,
                adaptiveHeight: true,
                arrows: true,
                })
        }
    }, [])


// console.log('praaappppp', props)
    const handleVideoClick = (video_id,user_id) =>{
        // console.log('got video id', video_id);
        props.fetchAllVideoView(video_id)
        localStorage.setItem('id', video_id);
        localStorage.setItem('UI',user_id);
        window.scrollTo(0,0)

        // setVideoDetails(props.AllVideoFromAPI.VideoView.VideoDetailPageGetApi.allVideoDetail.video_detail);
    }



    return (
        <div>
            <div style={{marginLeft: '4vw', display: 'flex', marginTop: '5vh', justifyContent: 'space-between', alignItems: 'center'}}>
            <div style={{marginLeft: '2vw'}}>
                <h2>New Released</h2>
            </div>
            <div>
                <Link to="/all-videos">
                <div style={{color: 'rgb(16, 201, 230)', marginRight: '2vw', cursor: 'pointer'}}
                onClick={() => { 
                    sessionStorage.setItem('video-page-type', 3)
                    sessionStorage.setItem('videoPageOffset', 0)
                }
                }>view all</div>
                </Link>
            </div>
        </div>
            <div className="styling_videoRelease">

                <Slider {...settings}>
                        {
                        props.newReleased && props.newReleased.map((e) => {
                            // console.log('video click element', e)
                            return(
                                
                                <div className="ReleaseBlock" onClick={() => handleVideoClick(e.video_id, e.user_id)} >
                                    <Link to={{pathname:'/video-details' ,
                                element: {element:e}}}>
                                    {/* <video src={e.video_link} alt=""/> */}
                                    {
                                    e.video_thumbnail_link !== '' ?
                                    <LazyLoadImage className="mobile-video-release-thumbnail" style={{width: '14vw', height: '7vw', margin: '0.5rem', objectFit: 'cover'}} src={e.video_thumbnail_link} placeholder={<div><img src={miniLoader} /></div>} />
                                    :
                                    <LazyLoadImage className="mobile-video-release-thumbnail" style={{width: '14vw', height: '7vw', margin: '0.5rem', objectFit: 'cover'}} src={e.cat_image_link} placeholder={<div><img src={miniLoader} /></div>} />
                                    }
                                    <div className="VideoRelease_description">
                                    <h4 > 
                                        {e.video_title && e.video_title.length > 15 ? 
                                        e.video_title.slice(0, 21).concat('..') : 
                                        e.video_title}
                                    </h4>

                                    <div className="RelesedView" style={{display:'flex'}}>
                                            <div><span style={{color: 'blue', marginLeft:'0.5rem'}}><VisibilityIcon/></span><span>&nbsp;&nbsp;</span>{e.no_of_views}</div>
                                            <div style={{marginLeft:'2.5rem'}}>{e.created_date}</div>
                                    </div>
                                    </div>
                                    </Link>
                                </div>
                            )
                        })
                    }
                    </Slider>
                {/* </Carousel> */}
            </div>
        </div>
    )
}


export default VideoRelease
