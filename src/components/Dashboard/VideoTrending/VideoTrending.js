import React,{useEffect,useState} from 'react'
import {connect} from 'react-redux'
import FavoriteIcon from '@material-ui/icons/Favorite';
import CommentIcon from '@material-ui/icons/Comment';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Carousel from 'react-elastic-carousel'
import {Link} from 'react-router-dom';

import Slider from "react-slick";

import miniLoader from '../../../assets/miniLoader.svg'

import { LazyLoadImage } from 'react-lazy-load-image-component';


import './VideoTrending.css'


const VideoTrending = (props) => {

    const [settings, setSetting] = useState()
    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 500px)')
        if(mediaQuery.matches){
            setSetting ( {
                // dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 1.1,
                slidesToScroll: 1,
                adaptiveHeight: true,
                arrows: true,
                // className: 'VideoTrendingsliderStyles'
                }
            )
        }
        else{
            setSetting ( {
                // dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 4,
                slidesToScroll: 3,
                adaptiveHeight: true,
                arrows: true,
                className: 'VideoTrendingsliderStyles'
                })
        }
    }, [])


    // const settings = {
    //     // dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 4,
    //     slidesToScroll: 3,
    //     adaptiveHeight: true,
    //     arrows: true,
    //     className: 'VideoTrendingsliderStyles'
    //     };

    const handleVideoClick = (video_id,user_id) =>{
        // console.log('got video id', video_id);
        props.fetchAllVideoView(video_id)
        localStorage.setItem('id', video_id);
        localStorage.setItem('UI',user_id);
        window.scrollTo(0, 0)

    } 

    return (
        <div>
            <div className="Video_Container" style={{marginLeft:'5vw'}}>
            <div className="TrendingVideo_Styling">
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <h2 style={{marginLeft:'3.5vh'}}>Trending Videos</h2>
                    <Link to="/trending-videos">
                        <div style={{marginRight: '5vw', color: 'rgb(16, 201, 230)'}} 
                        onClick={sessionStorage.setItem('videoOffset', 0)}>View all</div>
                    </Link>
                </div>

                    <Slider {...settings}>
                        {
                            props.data && props.data.map((element, index) => {
                                return(
                                    <div className="internal_video">
                                    <div className="sideSection"    onClick={() => handleVideoClick(element.video_id,element.user_id)} >
                                            <Link to={{pathname:'/video-details',
                                            element:{element:element}}}>
                                                {/* <video  src={element.video_link}   alt=""/> */}
                                                {
                                                    element.video_thumbnail_link !== '' ?
                                                    <LazyLoadImage className="VT_ThumbnailImg"  src={element.video_thumbnail_link} placeholder={<div><img src={miniLoader} /></div>} />
                                                    :
                                                    <LazyLoadImage className="VT_ThumbnailImg"  src={element.cat_image_link} placeholder={<div><img src={miniLoader} /></div>} />
                                                }
                                            </Link>
                                            {/* <div className="likes_video">
                                                    <span className="videocount" ><span style={{color:'red'}}><FavoriteIcon/></span> {element.no_of_like}</span>
                                                    <span className="videocount" ><span style={{color:'grey'}}><CommentIcon/></span> { element.no_of_comments}</span>
                                                    <span className="videocount"><span style={{color:'blue'}}> <VisibilityIcon/></span>{ element.no_of_views}</span>
                                            </div> */}
                                    </div>
                                        <div className="Profile_video">
                                            <LazyLoadImage placeholder={<div><img src={miniLoader} /></div>} src={element.user_profile_pic} alt=""/>
                                            
                                            <div className="description_video">
                                                <h4 className="description_videoTitle">
                                                {element.video_title.length > 10 ? 
                                                element.video_title.slice(0, 15).concat('..') : 
                                                element.video_title}</h4>

                                                <div className="VideoTrending_Container">
                                                    <span className="videocount" ><span style={{color:'red'}}><FavoriteIcon/></span> {element.no_of_like}</span>
                                                    <span className="videocount" ><span style={{color:'grey'}}><CommentIcon/></span> { element.no_of_comments}</span>
                                                    <span className="videocount"><span style={{color:'blue'}}> <VisibilityIcon/></span>{ element.no_of_views}</span>
                                            </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                )
                            })
                        }
                    {/* </Carousel> */}
                    </Slider>

                    {/* </div>  */}
            </div>
        
                
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    // console.log('stateeeeee from Trending Video page', state.Dashboard.DashboardGetApi.allDashboard);
    return{ 
        APIFromDashboard: state.Dashboard.DashboardGetApi.allDashboard
    }
}
export default connect(mapStateToProps)(VideoTrending)
// export default TrendingVideo
