import React,{useEffect, useState} from 'react'
import {connect} from 'react-redux'

import Navbar from '../../Navbar/Navbar'
import Sidebar from '../../Sidebar/Sidebar'
import ReactAudioPlayer from 'react-audio-player';
import './AudioTrendingShow.css'

import FavoriteIcon from '@material-ui/icons/Favorite';
import CommentIcon from '@material-ui/icons/Comment';

// import {fetchAllComment} from '../../../redux/Comment/ActionComment'
import {fetchMusicCommentList} from '../../../redux/MusicDetailPage/ActionMusic'


import uuid from 'react-uuid'

const AudioTrendingShow = (props) => {

    // console.log('props from dashboard', props)
    const [commentInputField,setcommentInputField] = useState({
        CommentUserInput : '',
    });
    const particularAudio = props.location.element.element;
    const [musicElement, setmusicElement] =useState(particularAudio);
    const[musicTrending, setmusicTrending] =useState(props.location.element.element)
    const [elementId, setElementId] = useState()
    const [elementType, setElementType] = useState()


    const handleSubmitTAComment = (e) => {
        e.preventDefault();
        localStorage.setItem('VVP_Commkey', uuid())
        // console.log('pressed');
        props.fetchAllComment(commentInputField.CommentUserInput,elementId,elementType)
            setcommentInputField({CommentUserInput:''})
    }

    const handleChangeTAComment = (e) => {
        // console.log('e.target.value',e.target.value)
        setcommentInputField({...commentInputField,
        [e.target.name] : e.target.value})
        }

    const setAudio = (element) => {
        // console.log('music_link', element);
        setmusicElement(element);
    }
    

    // console.log('particular Audio',props.location.element.element)
    // console.log('whole state',props.location.element.element);


    // console.log('particular Audio element',musicElement)
    // console.log('Music Trending', musicTrending);

    const handleTrendingAudio = (element) => {
        setmusicElement(element);
        // console.log('Clicked and Recieved',musicElement)
    }

    useEffect(() => {
        const id = localStorage.getItem('id');
        props.fetchMusicCommentList(id);
    }, [])

    useEffect(() => {
        setElementType(props.location.Data.Data[0].type)
        setElementId(props.location.Data.Data[0].music_id)
    }, [])

    return (
        <div>
            <Sidebar/>
            <Navbar/>
            <div className="mp_Holder" style={{display:'flex'}}>
                <div className="musicPlayerContainer">
                    {
                        <div onClick={() => setAudio(musicElement.music_link)}>
                            <div id="SongInfos">
                                <div className="song_Playing">
                                    <img src={musicElement.cat_image_link} style={{}} />

                                    <div className="songDescription">
                                        <div className="song_details" style={{fontSize:'larger'}}>{musicElement.music_title}</div>
                                        <span className="song_details">{musicElement.user_name}</span>
                                        <span style={{color:'deeppink'}}>&nbsp;&nbsp;&nbsp;||&nbsp;&nbsp;</span>
                                        <span className="song_details">{musicElement.created_date}</span>
                                        <div  className="song_details" style={{marginTop:'0.5rem',    padding:' 0.5rem 0'}}>
                                            <span className="song_details" style={{color:'deeppink'}}>Connect&nbsp;&nbsp;&nbsp;</span>
                                            <span className="song_details" style={{color:'deeppink'}}>Subscribe&nbsp;&nbsp;&nbsp;</span>
                                            <span className="song_details" style={{color:'deeppink'}}>Customize&nbsp;&nbsp;&nbsp;</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="likeShare">
                                    <div className="like">
                                    {/* <div onClick = {() => setLike(!like)} >
                                        {
                                            like ? <span ><i class="fas fa-thumbs-up iconComment" style={{color: 'blue' }}/></span> 
                                            :
                                            <span ><i class="fas fa-thumbs-up iconComment" /> </span>
                                            
                                        }
                                    </div> */}
                                    </div>
                                    <div className="share">
                                        <i class="fas fa-share iconComment"/>
                                    </div>
                                    <div className="report">
                                        <i class="fas fa-exclamation-triangle iconComment"></i>
                                    </div>
                                </div>    
                            </div>
                        </div>
                    }
                <div className="ReactAudioPlayer" >
                    <ReactAudioPlayer           
                    autoPlay
                    controls
                    src={musicElement.music_link}
                    />
                </div>
                </div>

                <div className="TAcommentSection" >
                    <div className="TACommentBox"style={{marginTop:'12vh'}}>
                            <section className="VV_CommentProfile">
                                <div className="picProfileComment">
                                    <img src={props.location.Data.Data[0] && props.location.Data.Data[0].user_profile_pic} alt=""/>
                                </div>
                                <div className="followInCommentBtn">
                                    <button>Connect</button>
                                </div>
                                <div className="followInCommentBtn">
                                    <button>Customize</button>
                                </div>
                            </section>

                            <div className="TACommentList">
                                <div className="commentHeading">
                                    <div className="commentTitle">
                                        <div className="hgf">Comment</div>
                                
                                        <div className="hgf"><CommentIcon/></div>
                                    </div>
                                </div>
                        
                            </div>

                        <form onSubmit={handleSubmitTAComment} style={{marginLeft:'6vw'}}>
                            <div className="TA_commentTitle" style={{display:'flex'}}>
                                <div className="VideoDetail">
                                    <input type="text" 
                                    name="CommentUserInput" 
                                    value={commentInputField.CommentUserInput}
                                    autocomplete="off"
                                    onChange={ (e) => {handleChangeTAComment(e)}} 
                                    placeholder="Comment Here"  
                                    style={{color: 'Black', width:'22vw',borderRadius: '5px'}} 
                                    required/>
                                </div>

                            <div className="VideoDetailcommentLogo">
                                <button className="VideoDetail" style={{backgroundColor: 'skyblue'}}><CommentIcon/></button>
                            </div>
                            </div>
                        </form>
                    </div>
                    {/* <AudioTrendingComment/> */}

                </div>
            </div>

            <div className="AudioShowRecommend">
                    <h2 style={{color:'Black'}}>Recommended</h2>
                {
                    musicTrending && musicTrending.map((element, index) => {
                        return(
                            <div className="AT_subBlock_Wrrapper" style={{cursor: 'pointer',display:'inline-block',borderRadius:'10px'}}>
                                <div onClick={() => handleTrendingAudio(element)}>
                                    <div className="AudioPlayerBox"  >
                                        <section className="AP_catImg">
                                            <img src = {element.cat_image_link}></img>
                                        </section>
                                        <div className="audioPlayer_description">
                                            <div className="audioPlayer_title" style={{color:'white',font:'Arial'}}>
                                                {element.music_title.length > 10 ?
                                                element.music_title.slice(0,30):
                                                element.music_title}
                                            </div>
                                                <div className="user_name" >{element.user_name}</div>
                                                <div className="likes_AudioPlayer">
                                                <div className="audioLike"><span style={{color:'red'}}><FavoriteIcon/></span> {element.no_of_like}likes</div>        
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>   

                        )
                    })
                }
            </div>


        </div>
    )
}

// const mapStateToProps = (state) => {
    console.log('stateeeeee from Dashboardbnbvcvb', state);
//     return{ 
//         APIFromCommentList: state
//     }
// }

const mapDispatchToProps = dispatch => {
    return {
        // fetchAllComment : (data, image_id, type) => dispatch(fetchAllComment(data, image_id,type)),
        // fetchMusicCommentList :(id) => dispatch(fetchMusicCommentList(id))
        

    }
}
export default connect(null,mapDispatchToProps)(AudioTrendingShow)

// export default AudioTrendingShow
