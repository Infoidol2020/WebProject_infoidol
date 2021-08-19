import React,{useState, useEffect, useRef} from 'react'
import axios from 'axios';
import VisibilityIcon from '@material-ui/icons/Visibility';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CommentIcon from '@material-ui/icons/Comment';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import './TrendingBlogs.css';
const TrendingBlogs = () => {
    const contentRef = useRef();

    
    const [videosTrending, setVideosTrending] = useState([]);
    const [musicTrending, setAudioTrending] = useState([]);
    const [pictureTrending, setpictureTrending] =useState([]);
    const [blogTrending, setblogTrending] = useState([]);
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
        setblogTrending(Trending_Blogs)
        const Trending_Videos = await dashboardTrendingListResponse && dashboardTrendingListResponse.trending_video;
        // console.log('trending Videos', Trending_Videos)
        setVideosTrending(Trending_Videos);
        const Trending_Music = await dashboardTrendingListResponse &&  dashboardTrendingListResponse.trending_music;
        setAudioTrending(Trending_Music);
        const Trending_picture = await dashboardTrendingListResponse && dashboardTrendingListResponse.trending_picture;
        setpictureTrending(Trending_picture);   
    }
      useEffect(() => {
        getTrendingList();
     }, [])
    return (
        <>
        { blogTrending && blogTrending.length !== 0 ?
        <div style={{ clear: 'both', marginLeft: '5%'}}>
            <div className="Heading">
                    <h4 style={{color:'black', marginLeft:'0.5rem'}}>Trending Blog</h4>
                    <h4 style={{color:'#2699FB',marginRight:'3.5rem'}}> View all</h4>
                </div>
            <div className="left" style={{height: '30vh'}}>
                <span onClick={handleLeft} id="left-button" 
                style={{ height: '100%',width: '100%' ,background: 'transparent'}}>
                <ChevronLeftIcon style={{fontSize: '6rem',marginTop:'-19vh',height: '100%'}}/>
                </span>
            </div>
            <div className="center" id="content" ref={contentRef}>
                
            <div className="Blog_Container">
               
                <div className="Blog_elems" >
                    {
                        blogTrending.map((element, index) => {
                            return(
                                <div className="internal_blog">
                                
                                {/* <div key ={index}> */}
                                    <div className="clv">
                                    <img src={element.cat_image_link}   alt=""/>
                                    <div className="likes_blog">
                                                <div className="blog_counts b1"><FavoriteIcon/> {element.no_of_like}</div>
                                                <div className="blog_counts b2"><CommentIcon/> { element.no_of_comments}</div>
                                                <div className="blog_counts b3"><VisibilityIcon/>{ element.no_of_views}</div>
                                    </div>
                                    </div>
                                    <div className="Profile_blog">
                                        <img src={element.cat_image_link} alt=""/>
                                        <div className="description_blog">
                                            <h4>
                                                {element.blog_title.length > 8 ?
                                                element.blog_title.slice(0,9) :
                                                element.blog_title}
                                            </h4>
                    
                                            <p > 
                                                {element.blog_description.length > 20 ? 
                                                element.blog_description.slice(0, 20).concat('......') : 
                                                element.blog_description}
                                            </p>
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
            <div className="right" style={{ height: '30vh'}}>
                <span onClick={handleRight} id="right-button"  style={{ height: '100%',width: '100%' ,background: 'transparent'}}>
                <ChevronRightIcon style={{fontSize: '6rem',marginTop:'-19vh',height: '100%'}}/>
                </span>
            </div>
            
        </div>
        : ''
        }
        </>
    )
}

export default TrendingBlogs
