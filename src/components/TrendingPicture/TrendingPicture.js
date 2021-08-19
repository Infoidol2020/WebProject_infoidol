import React,{useState, useEffect, useRef} from 'react'
import axios from 'axios';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CommentIcon from '@material-ui/icons/Comment';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import './TrendingPicture.css';
const TrendingPicture = () => {
    const contentRef = useRef();

    
    const [videosTrending, setVideosTrending] = useState([]);
    const [musicTrending, setAudioTrending] = useState([]);
    const [pictureTrending, setpictureTrending] =useState([]);
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
        setpictureTrending(Trending_picture);   
    }
      useEffect(() => {
        getTrendingList();
     }, [])
    return (
        <>
        {pictureTrending && pictureTrending.length !== 0 ?
        <div style={{ marginLeft: '5%'}}>
            <div className="Heading_picture">
                    <h4 style={{color:'black', marginLeft:'0.5rem'}} >Trending Pictures</h4>
                    <h4 style={{color:'#2699FB',marginRight:'5.5rem'}}> View all</h4>
                </div>
            <div className="left_picture" style={{height: '30vh'}}>
                <span onClick={handleLeft} id="left-button" 
                style={{ height: '100%',width: '100%' ,background: 'transparent'}}>
                <ChevronLeftIcon style={{fontSize: '6rem',marginTop:'-7vh',height: '50%'}}/>
                </span>
            </div>
            <div className="center_picture" id="content" ref={contentRef}>
                
            <div className="Picture_Container">
               
                <div className="Picture_elems" >
                    {
                        pictureTrending.map((element, index) => {
                            return(
                                <div className="internal_picture">
                                
                                {/* <div key ={index}> */}
                                    <div className="Aside">
                                    <img src={element.picture_link}   alt=""/>
                                    <div className="likes_picture">
                                                <div className="pictureCount"><span style={{color:'red'}}><FavoriteIcon/></span> {element.no_of_like}</div>
                                                <div className="pictureCount"><span style={{color:'grey'}}><CommentIcon/></span> { element.no_of_comments}</div>
                                                <div className="pictureCount"><span style={{color:'blue'}}> <VisibilityIcon/></span> { element.no_of_views}</div>
                                    </div>
                                    </div>
                                    <div className="Profile_picture">
                                        <img src={element.picture_link} alt=""/>
                                        <div className="description_picture">
                                            <div style={{marginLeft:'3%'}}>Title:
                                            {element.picture_title.length > 30 ? 
                                            element.picture_title.slice(0, 20).concat('......') : 
                                            element.picture_title}</div>
                                            
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
            <div className="right_picture" style={{ height: '30vh'}}>
                <span onClick={handleRight} id="right-button"  style={{ height: '100%',width: '100%' ,background: 'transparent'}}>
                <ChevronRightIcon style={{fontSize: '6rem',marginTop:'-7vh',height: '50%'}}/>
                </span>
            </div>
            
        </div>
        : ''
        }
        </>
    )
}

export default TrendingPicture
