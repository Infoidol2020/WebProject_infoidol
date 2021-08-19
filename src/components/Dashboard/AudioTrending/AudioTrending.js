import React,{useState} from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite';
import './AudioTrending.css'
import {Link} from 'react-router-dom'

import miniLoader from '../../../assets/miniLoader.svg'

import { LazyLoadImage } from 'react-lazy-load-image-component';

const AudioTrending = (props) => {
    // const handleMusicClick = (music_id,user_id) =>{
    //     console.log('got image id', music_id);
    //     console.log('proooo', music_id)
    //     props.fetchMusicCommentList(music_id)
    //     localStorage.setItem('id', music_id);
    //     localStorage.setItem('UI',user_id)
    // }
    const [musicElement, setMusicElement] = useState({});
    const setAudio = (e) => {
        // console.log('music_link', e);
        setMusicElement(e);
        localStorage.setItem('id',e.music_id)
        localStorage.setItem('TYPE',e.type)
        localStorage.setItem('UI',e.user_id)
        window.scrollTo(0, 0)

    }
    return (
        <div>
            <div className="TrendingAudio_Styling" style={{width: '95%', marginLeft: '5vw', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <h2 style={{marginLeft:'3.5vh'}}>Trending Audios</h2>
                    <Link to="/trending-audios">
                        <div style={{marginRight: '5vw', color: 'rgb(16, 201, 230)'}}
                        onClick={sessionStorage.setItem('audioOffset', 0)}>View all</div>
                    </Link>
                </div>
            <div className="Audio_container" >
            <div style={{width:'100%',marginLeft:'6%',marginTop:'1vh'}}>
                {
                props.Data && props.Data.map((element, index) => {
                        if(index < 12)
                        return(
                            <div key ={index} className="Audio_Img"  
                            onClick={() => setAudio(element)}  
                            >
                            <Link to={{pathname:'/audio-details'}}>
                                <div className="AudioBox">
                                    <LazyLoadImage placeholder={<div><img src={miniLoader} /></div>} src={element.cat_image_link} />
                                    <section className="Trending_audio_Wrapper">
                                            <div className="Trending_audio_description">
                                                <div className="audio_title" style={{color:'white',font:'Arial'}}>
                                                    {element.music_title.length > 15 ?
                                                    element.music_title.slice(0,15):
                                                    element.music_title}
                                                </div>
                                                <div className="user_name_TA" style={{color: '#10C9E6', fontSize: '1rem'}}>{element.user_name}</div>
                                                <div className="likes_Audio">
                                                    <div className="audioLike"><span style={{color:'red'}}><FavoriteIcon/></span> <span className="TA_no_of_likes">{element.no_of_like}</span></div>
                                                    {/* <div className="audioComment" style={{marginLeft:'1.5rem'}}><span style={{color:'grey'}}><CommentIcon/></span> { element.no_of_comments}</div>
                                                    <div className="audioViews" style={{marginLeft:'1.5rem'}}><span style={{color:'blue'}}> <VisibilityIcon/></span>{ element.no_of_views}</div> */}
                                                </div>
                                            </div>
                                    </section>
                                </div>
                            </Link>
                            </div>
                        )
                    })    
                }   
        </div>
    </div>
        </div>
    )
}
export default AudioTrending