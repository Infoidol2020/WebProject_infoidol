import React, {useState, useEffect} from 'react';
import axios from 'axios';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CommentIcon from '@material-ui/icons/Comment';
import VisibilityIcon from '@material-ui/icons/Visibility';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import './TrendingAudio.css'

const TrendingAudio = () => {
    // const message = () => {
    // alert("Play") 
    //    }
    const [musicTrending, setAudioTrending] = useState([]);

    const getTrendingList = async () => {    
      const dashboardTrendingList = await axios.post('https://infoidol.com/admin/WebApi/dashboard',{
        "device_id":"SYSTEM",
        "user_id":"1",
        "latitude":"12.45645654",
        "longitude":"12.34554363"
    })
    //   console.log('dashboardTrendingList', dashboardTrendingList);
      const dashboardTrendingListResponse = await dashboardTrendingList.data.data;
    //   console.log('dataaaaa', dashboardTrendingListResponse);
     
      const Trending_Music = await dashboardTrendingListResponse &&  dashboardTrendingListResponse.trending_music;
      setAudioTrending(Trending_Music);
      
    }
    useEffect(() => { 
      getTrendingList();
    }, [])
    return (
        <>
        {musicTrending && musicTrending.length !== 0 ?
        <div style={{clear: 'both'}}>
            <div className="Audio_container" >
            <div className="Audio_viewall">
            <h4 style={{color:'black', marginLeft:'0.5rem'}}>Trending Audio</h4>
                    <h4 style={{color:'#2699FB',marginRight:'3.5rem'}}> View all</h4>
            </div>
            <div style={{width:'100%',marginLeft:'2%'}}>
                {
                    musicTrending.map((element, index) => {
                        if(index < 12)
                        return(
                            <div key ={index} className="Audio_Img"  style={{width: '20%',display: 'inline-block', margin: '0.5rem 1.5%'}}>
                                <div className="AudioBox">
                                    <img src={element.cat_image_link}></img>
                                    <section className="poi">
                                            <div className="audio-description">
                                                <div className="audio_title" style={{color:'white',font:'Arial'}}>
                                                    {element.music_title.length > 10 ?
                                                    element.music_title.slice(0,25):
                                                    element.music_title}
                                                </div>
                                        
                                             <div className="user_name" style={{color: '#10C9E6'}}>{element.user_name}</div>
                                        
                                             <div className="likes_Audio">
                                                <div className="audioLike"><span style={{color:'red'}}><FavoriteIcon/></span> {element.no_of_like}likes</div>
                                                {/* <div className="audioComment" style={{marginLeft:'1.5rem'}}><span style={{color:'grey'}}><CommentIcon/></span> { element.no_of_comments}</div>
                                                <div className="audioViews" style={{marginLeft:'1.5rem'}}><span style={{color:'blue'}}> <VisibilityIcon/></span>{ element.no_of_views}</div> */}
                                            </div>
                                            </div>
                                        
                                        {/* <div className="doticon">
                                            <button onClick={message}>
                                                    <MoreVertIcon/>
                                                    </button>
                                        </div> */}
                                        
                                   </section>
                                </div>
                            </div>
                            
                        )
                    })    
                }   
        </div>
    </div>
    </div>
    : ''
    }
    </>
    
    )
}

export default TrendingAudio
