import React, {useRef, useState, useEffect, useContext} from 'react'
import { connect } from 'react-redux';
import { getVideos } from '../../redux'
import axios from 'axios';
import {Link} from 'react-router-dom';
import VideoPlayer from "./VideoPlayer";
import { fetchTrendingVideos } from '../../redux'
import './TrendingVideos.css';

import VideoImage from "../../assets/img.png";
import FavoriteIcon from '@material-ui/icons/Favorite';
import CommentIcon from '@material-ui/icons/Comment';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';


import ContextState from '../../context/ContextState';

const TrendingVideos = ({trendingVideosFromAPI, fetchTrendingVideos}) => {
    const contentRef = useRef();
    const {videosTrending,setVideosTrending} = useContext(ContextState);
    const {particularVideoTrendingElement,setParticularVideoTrendingElement} = useContext(ContextState);
    // const [videosTrending, setVideosTrending] = useState([]);
    const [musicTrending, setAudioTrending] = useState([]);
    const handleLeft = () => {
        scrollLeft(contentRef.current, -400, 1000);   
     }
     
     const handleRight  = () =>{
        scrollLeft(contentRef.current, 400, 1000);   
     }
         
     function scrollLeft(element, change, duration) {
         var start = element.scrollLeft,
             currentTime = 0,
             increment = 20;
             
            //  console.log(start)
             
         var animateScroll = function(){        
             currentTime += increment;
             var val = Math.easeInOutQuad(currentTime, start, change, duration);
             element.scrollLeft = val;
             if(currentTime < duration) {
                 setTimeout(animateScroll, increment);
             }
         };
         animateScroll();
     }
     
     //t = current time
     //b = start value
     //c = change in value
     //d = duration
     Math.easeInOutQuad = function (t, b, c, d) {
       t /= d/2;
         if (t < 1) return c/2*t*t + b;
         t--;
         return -c/2 * (t*(t-2) - 1) + b;
     };

     const getTrendingList = async () => {    
        const dashboardTrendingList = await axios.post('https://infoidol.com/admin/WebApi/dashboard',{
          "device_id":"SYSTEM",
          "user_id":"1",
          "latitude":"12.45645654",
          "longitude":"12.34554363"
      })
        // console.log('dashboardTrendingList', dashboardTrendingList);
        const dashboardTrendingListResponse = await dashboardTrendingList.data.data;
        // console.log('dataaaaa', dashboardTrendingListResponse);
        const Trending_Blogs = await dashboardTrendingListResponse && dashboardTrendingListResponse.trending_blog;
        // console.log('trending blogs', Trending_Blogs);
        const Trending_Videos = await dashboardTrendingListResponse && dashboardTrendingListResponse.trending_video;
        // console.log('trending Videos', Trending_Videos)
        setVideosTrending(Trending_Videos);
        const Trending_Music = await dashboardTrendingListResponse &&  dashboardTrendingListResponse.trending_music;
        setAudioTrending(Trending_Music);
        const Trending_picture = await dashboardTrendingListResponse && dashboardTrendingListResponse.trending_picture;
      }
      useEffect(() => {
        getTrendingList();
        fetchTrendingVideos()
        // console.log('videosssss trending', trendingVideosFromAPI)

     }, [])

    return (   
        
        <div style={{ marginLeft: '5%'}}>
                <div className="Heading_video">
                    <h4 style={{color:'black', marginLeft:'0.5rem'}}>Trending Video</h4>
                    <h4 style={{color:'#2699FB',marginRight:'5.5rem'}}> View all</h4>
                </div>
            <div className="left_video" style={{height: '30vh'}}>
                <span onClick={handleLeft} id="left-button" 
                style={{ height: '100%',width: '100%' ,background: 'transparent'}}>
                <ChevronLeftIcon style={{fontSize: '6rem',marginTop:'-7vh',height: '50%'}}/>
                </span>
            </div>
            <div className="center_video" id="content" ref={contentRef}>
                
            <div className="Video_Container">
                {/* <div className="Heading">
                    <h3>Trending Video</h3>
                    <h3 style={{color:'#2699FB',marginLeft:'5.5rem'}}> View all</h3>
                </div> */}
                <div className="Video_elems" >
                    {
                        videosTrending && videosTrending.map((element, index) => {
                            
                            return(
                                <div className="internal_video">
                                
                                {/* <div key ={index}> */}
                                <div className="sideSection">
                                {/* to={{pathname:'/VideoPlayer',
                                    element:{element: element}, videosTrending: {videosTrending: videosTrending}}} */}
                                <Link to = '/VideoPlayer'  >
                                        <video src={element.video_link}   alt="" onClick ={() => {setParticularVideoTrendingElement(element)}}/>
                                        </Link>                                    
                                    <div className="likes_video">
                                                <div className="videocount"><span style={{color:'red'}}><FavoriteIcon/></span> {element.no_of_like}</div>
                                                <div className="videocount" style={{marginLeft:'1.5rem'}}><span style={{color:'grey'}}><CommentIcon/></span> { element.no_of_comments}</div>
                                                <div className="videocount" style={{marginLeft:'1.5rem'}}><span style={{color:'blue'}}> <VisibilityIcon/></span>{ element.no_of_views}</div>
                                        </div>
                                        </div>
                                    <div className="Profile_video">
                                        <img src={VideoImage} alt=""/>
                                        
                                        <div className="description_video">
                                            <div style={{marginLeft:'3%'}}>Title:
                                            {element.video_title.length > 30 ? 
                                            element.video_title.slice(0, 20).concat('......') : 
                                            element.video_title}</div>
                                            
                                        </div>
                                        
                                    </div>
                                    
                                {/* </div>  */}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            </div>
            <div className="right_video" style={{ height: '30vh'}}>
                <span onClick={handleRight} id="right-button"  style={{ height: '100%',width: '100%' ,background: 'transparent'}}>
                <ChevronRightIcon style={{fontSize: '6rem',marginTop:'-7vh',height: '50%'}}/>
                </span>
            </div>
        </div>

    )
}

const mapStateToProps = (state) => {
    return{
        trendingVideosFromAPI: state.trendingVideos
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchTrendingVideos: () => dispatch(fetchTrendingVideos())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TrendingVideos)
