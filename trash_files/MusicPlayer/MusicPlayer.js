import React,{useEffect, useState, useRef} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import ReactAudioPlayer from 'react-audio-player';
import loader from '../../assets/pageLoader.svg';
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';
import './MusicPlayer.css'
import marsh from '../../assets/tenor.gif'
import TopArtists from './TopArtists';
import RecentPlayed from './RecentPlayed';
import NewReleased from './NewReleased';
import uuid from 'react-uuid'


import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import { fetchAllAudios } from '../../redux/AudioPage';
import { hitLikeApi } from '../../redux/Like/LikeActions';
import ReportProblemIcon from '@material-ui/icons/ReportProblem';
import { fetchReportCategories, postReportAPI } from '../../redux/Report/ReportActions';
import { fetchAllAudiosItem } from '../../redux/AudioPlayer';
import MusicPlayerComment from './MusicPlayerComment';
import { fetchAllComments } from '../../redux/CommentTrendingBlog';
import { fetchAllCommentsReply } from '../../redux/Reply/ActionReplyToComment';
import { fetchMusicCommentList } from '../../redux/MusicDetailPage/ActionMusic';
import {hitsubscribeAPI} from '../../redux/Subscribe/SubscribeActions'
import {hitUnsubscribeAPI} from '../../redux/Subscribe/SubscribeActions'
import {hitconnectAPI} from '../../redux/Connect/ConnectActions'
import {hitconnectRejectAPI} from '../../redux/Connect/ConnectActions'
import {hitMakeCustomizeAPI} from '../../redux/MakeCustomize/MakeCustomizeActions'


// import {fetchMusicCommentList} from '../../redux/MusicDetailPage'
import ShareMedia from '../Feed/ShareMedia'
import NotificationsIcon from '@material-ui/icons/Notifications';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import LinkIcon from '@material-ui/icons/Link';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';





const MusicPlayer = (props) => {
    // console.log('props from music player',props)
    const mainMusicContainer = useRef()

    const [like, setLike] = useState(false);
    const [music_id, setmusic_id] = useState([]);
    const [type,settype] = useState([]);
    const [musicElement, setMusicElement] = useState({});
    const [message, setMessage] = useState(false)
    const [categoryName, setCategoryName] = useState()
    const [reportCategories, setreportCategories] = useState([])
    const [AllAudiosFromAPI, setAllAudiosFromAPI]= useState([])
    const [SubscribeStatus,setSubscribeStatus] = useState();
    const [connectStatus, setConnectStatus] =useState({})
    const [CustomizeName,setCustomizeName] =useState({})



    const handleReportSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('ReportKey', uuid())
        props.postReportAPI(categoryName, music_id, type)
    }

    const handleCategoryChange = (e) => {
        console.log('category value', e)
        setCategoryName(e.target.value);
        setMessage(false);
    }

    const handlePostData = (blog_id, type) => {
        setmusic_id(props.AllAudiosFromAPI.music_id)
        settype(type)
        // console.log(element_Id, element_Type);
    }

    const handleSubscribeClick =() =>{
        const UI = localStorage.getItem('UI');
        props.hitsubscribeAPI(UI)
    }
    const handleUnSubscribeClick = () =>{
        const UI = localStorage.getItem('UI');
        props.hitUnsubscribeAPI(UI)
    }

    const setAudio = (e) => {
        console.log('music_link', e);
        setMusicElement(e);
        localStorage.setItem('id',e.music_id)
        localStorage.setItem('TYPE',e.type)
        localStorage.setItem('UI',e.user_id)
        window.scrollTo(0, 0)

        
    }
    const handleConnectClick= () =>{
        const UI = localStorage.getItem('UI');
        props.hitconnectAPI(UI)
    }

    const handledisConnectClick = () =>{
        const UI = localStorage.getItem('UI');
        props.hitconnectRejectAPI(UI)

    }

    useEffect(() => {
        console.log('exec 121221',props)
        props.fetchAllAudios();
    },[])

    useEffect(()=> {
    console.log('executed from music playerrrrrrrrrrrrr')

    props.fetchMusicCommentList(localStorage.getItem('id'))
    console.log('prssssqwert', props.AllAudiosFromAPI.MusicPageComments.MusicCommentsListGetApi.allMusicCommentsList.connection_status)

}, [localStorage.getItem('MusicData'), localStorage.getItem('id')])

    useEffect(() => {
        if(props.AllAudiosFromAPI.Like.LikeApi.LikeApiSuccess){
            // props.fetchAllAudios();
            props.fetchMusicCommentList(localStorage.getItem('id'))
            console.log('prssssqwert', props.AllAudiosFromAPI.MusicPageComments.MusicCommentsListGetApi.allMusicCommentsList.music_detail)
        }
        console.log('prssss', props.AllAudiosFromAPI.MusicPageComments.MusicCommentsListGetApi.allMusicCommentsList.music_detail)
    },[props.AllAudiosFromAPI.Like .LikeApi.LikeApiSuccess])
    
    useEffect(() => {
        if(props.AllAudiosFromAPI.MusicPageComments.MusicCommentsListGetApi.MusicCommentsListSuccess){
            setMusicElement(props.AllAudiosFromAPI.MusicPageComments.MusicCommentsListGetApi.allMusicCommentsList && props.AllAudiosFromAPI.MusicPageComments.MusicCommentsListGetApi.allMusicCommentsList.music_detail)
            console.log('asdfmlk',props.AllAudiosFromAPI.MusicPageComments.MusicCommentsListGetApi.allMusicCommentsList.music_detail)
        }

    }, [props.AllAudiosFromAPI.MusicPageComments.MusicCommentsListGetApi.MusicCommentsListSuccess],localStorage.getItem('id'))
    // console.log('mudssssssssss',props.AllAudiosFromAPI.Like .LikeApi.LikeApiSuccess)

    useEffect(() => {
        console.log('changed the stateeee')
    }, [musicElement])
    useEffect(() => {
        if(props.AllAudiosFromAPI.Report.ReportPostApi.ReportPostSuccess){
            setMessage(!message)
        }
    }, [props.AllAudiosFromAPI.Report.ReportPostApi.ReportPostSuccess, localStorage.getItem('ReportKey')])

    useEffect(() => {
        if(props.AllAudiosFromAPI.AudioPage.AudioPageGetApi.AudioPageSuccess){
        setAllAudiosFromAPI(props.AllAudiosFromAPI.AudioPage.AudioPageGetApi.allAudioPageApi)
        }
    }, [props.AllAudiosFromAPI.AudioPage.AudioPageGetApi.AudioPageSuccess])

    useEffect(() => {
        setreportCategories(props.AllAudiosFromAPI.Report.ReportCategoriesGetApi.reportCategories)
    }, [props.AllAudiosFromAPI.Report.ReportCategoriesGetApi.ReportCategoriesSuccess])
    
    useEffect(() => {
        props.fetchReportCategories(props.AllAudiosFromAPI.Report.ReportCategoriesGetApi.reportCategories)
    }, [props.AllAudiosFromAPI.Report.ReportCategoriesGetApi.ReportCategoriesSuccess])
// console.log('aaa jaaa bhai',props.AllAudiosFromAPI.Report.ReportCategoriesGetApi.reportCategories)



    const handleLike = (music_id, type) => {
        console.log('youuuuuuuuu', music_id, type);
        props.hitLikeApi(music_id, type)
    }

    //share element 
    const [shareElementLink, setShareElementLink] = useState()
    const [shareElementTitle, setShareElementTitle] = useState()
    const [shareElementDescription, setShareElementDescription] = useState()
    const [shareElementThumbnail, setShareElementThumbnail] = useState()
    const [shareElementType, setShareElementType] = useState()

    //handle share
const handleAudioShareClick = (link, title, description, thumbnail, type) => {
    // console.log('twert', type)
    // setShareElementLink(link.split(''))
    console.log('element link',link)

    setShareElementLink(link)
    setShareElementTitle(title)
    setShareElementDescription(description)
    setShareElementThumbnail(thumbnail)
    setShareElementType(type)
    // console.log('elemIddd', id)
} 

const handleCustomizeClick= (e) =>{
    console.log('kl',e.target.value)
    const UI = localStorage.getItem('UI');
    props.hitMakeCustomizeAPI(props.AllAudiosFromAPI.MusicPageComments.MusicCommentsListGetApi.allMusicCommentsList.music_detail.user_id,e.target.value)

}

useEffect(() => {
    props.fetchMusicCommentList(localStorage.getItem('id'))
    // props.fetchAllVideoView(localStorage.getItem('UI'))
    if(props.AllAudiosFromAPI.MusicPageComments.MusicCommentsListGetApi.allMusicCommentsList){
        if(props.AllAudiosFromAPI.MusicPageComments.MusicCommentsListGetApi.allMusicCommentsList.subscribe_status !== undefined ){
            setSubscribeStatus(props.AllAudiosFromAPI.MusicPageComments.MusicCommentsListGetApi.allMusicCommentsList.subscribe_status)
        }
        if(props.AllAudiosFromAPI.MusicPageComments.MusicCommentsListGetApi.allMusicCommentsList.connection_status !== undefined ){
            setConnectStatus(props.AllAudiosFromAPI.MusicPageComments.MusicCommentsListGetApi.allMusicCommentsList.connection_status)
        }
        if(props.AllAudiosFromAPI.MusicPageComments.MusicCommentsListGetApi.allMusicCommentsList.customize_name !== undefined){
            setCustomizeName(props.AllAudiosFromAPI.MusicPageComments.MusicCommentsListGetApi.allMusicCommentsList.customize_name)
        }
    }
}, [props.AllAudiosFromAPI.Subscribe.subscribeApi.subscribeSuccess,
    props.AllAudiosFromAPI.Subscribe.unsubscribeApi.unsubscribeSuccess,
    props.AllAudiosFromAPI.connect.connectApi.connectSuccess,
    props.AllAudiosFromAPI.connect.connectRejectApi.connectRejectSuccess,
    props.AllAudiosFromAPI.makeCustomize.makeCustomizeApi.makeCustomizeSuccess,
])


console.log('prooooo', props.AllAudiosFromAPI.MusicPageComments.MusicCommentsListGetApi.MusicCommentsListInProgress)
    return (
        <>
        {/* {
            
            props.AllAudiosFromAPI.MusicPageComments.MusicCommentsListGetApi.MusicCommentsListInProgress ?
            <p>loading</p>
            : */}
        <div className="musicPlayerWrapper" ref={mainMusicContainer}>
        <div className="MusicPlayer_Share">
            <div className="modal fade" id="exampleModalCenter" style={{marginTop: '35vh'}} tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">Share Content</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <ShareMedia 
                    shareElementLink={shareElementLink} 
                    shareElementTitle={shareElementTitle} 
                    shareElementDescription={shareElementDescription} 
                    shareElementThumbnail={shareElementThumbnail}
                    shareElementType={shareElementType} />
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    {/* <button type="button" className="btn btn-primary">Save changes</button> */}
                </div>
                </div>
            </div>
            </div>
        </div>


            <div style={{marginTop: '10vh'}} class="modal fade" id="reportModalAudio" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel" style={{fontSize: '2rem'}}>Report</h5>
                    <button type="button" class="close" 
                    data-dismiss="modal" aria-label="Close"
                    onClick={() => {
                        setMessage(false)
                        setCategoryName('')
                    }}>
                    <span aria-hidden="true">&times;</span>
                    </button>
                    {
                        message &&
                        <div style={{textAlign: 'center'}}>
                            <p style={{color: '#B22222', fontSize : '2rem', fontWeight: 'bold' }}>Reported Successfully...</p>
                        </div>
                        
                    }
                </div>
                <div class="modal-body">
                <form  onSubmit={ (e) => handleReportSubmit(e)}>
                    {
                        props.AllAudiosFromAPI.Report.ReportCategoriesGetApi.reportCategories.map((element, index) => {
                            return(
                                <>
                                <div style={{display: 'flex'}}>
                                <input  required type = "radio" name="myGroupName" value={element.cat_name} style={{cursor: 'pointer'}} 
                                onChange={(e) => handleCategoryChange(e)} />
                                <p  style={{marginLeft: '2vw', fontWeight: 'bold', opacity: '0.7'}}>{element.cat_name}</p>
                                </div>
                                
                                </>
                            )
                        })
                    }
        <div style={{textAlign: 'center'}}>
            <button 
            style={{background: 'transparent linear-gradient(90deg, #1E9FC8 0%, #3C34AC 100%)', 
            width: '7vw',
            border: '0',
            height: '5vh',
            borderRadius: '10px',
            color: '#fff',
            fontWeight: 'bold',
            fontSize: '1.5rem',
            opacity: '0.8'}} >Submit</button>
        </div>
        </form>
                </div>
                <div class="modal-footer">
                    <button type="button" 
                    onClick={() => {
                        setMessage(false)
                        setCategoryName('')
                    }}
                    class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
            </div>
            <Sidebar/>
            <Navbar/>
            <div className="mp_Holder" >
                <div className="musicPlayerContainer">
                    <div className="PlayerBox">
                    {
                        musicElement &&
                        <div>
                            <div id="SongInfos">
                                <div className="song_Playing">
                                    <img src={musicElement.cat_image_link} style={{}} alt="Album_Img" />
                                    <div className="songDescription">
                                        <div className="song_details_title" style={{fontSize:'larger'}}>{musicElement.music_title}</div>

                                        <div style={{display: 'flex'}}>
                                            <span className="song_details">{musicElement.user_name}</span>
                                            <span style={{color:'deeppink'}}>&nbsp;&nbsp;&nbsp;||&nbsp;&nbsp;</span>
                                            <span className="song_details">{musicElement.created_date}</span>
                                        </div>

                                        <div  className="song_details" style={{marginTop:'0.5rem',padding:' 0.5rem 0',height: '4rem',width: '29vw',display: 'flex'}}>
                                            <span className="song_details_connect" style={{color:'deeppink', width: '9.5vw'}}>
                                                {
                                                    localStorage.getItem('WebAppUserKey') === localStorage.getItem('UI') ?
                                                    ''
                                                    :

                                                    (props.AllAudiosFromAPI.MusicPageComments.MusicCommentsListGetApi.allMusicCommentsList &&
                                                         props.AllAudiosFromAPI.MusicPageComments.MusicCommentsListGetApi.allMusicCommentsList.connection_status === 1) ?
                                                    <button
                                                        onClick={() => handleConnectClick()}  
                                                        style={{background: 'transparent linear-gradient(90deg, #1E9FC8 0%, #3C34AC 100%)', 
                                                        opacity: '0.8',
                                                        border: '0', 
                                                        outline: 'none', 
                                                        color: '#fff', 
                                                        width: '9vw', 
                                                        borderRadius: '10px'}} >Connect <LinkIcon/> </button>
                                                        :''
                                                }
                                                {
                                                    localStorage.getItem('WebAppUserKey') === localStorage.getItem('UI') ?
                                                    ''
                                                    :
                                                    (props.AllAudiosFromAPI.MusicPageComments.MusicCommentsListGetApi.allMusicCommentsList && 
                                                        props.AllAudiosFromAPI.MusicPageComments.MusicCommentsListGetApi.allMusicCommentsList.connection_status === 4) ?
                                                    <button  
                                                        onClick={() => handledisConnectClick()} 
                                                        style={{background: '#8FBC8F', 
                                                        opacity: '0.8',
                                                        border: '0', 
                                                        outline: 'none', 
                                                        color: '#fff', 
                                                        width: '9vw', 
                                                        borderRadius: '10px'}} >Connected <CheckCircleIcon/> </button>
                                                        :''
                                                }
                                                {
                                                    localStorage.getItem('WebAppUserKey') === localStorage.getItem('UI') ?
                                                    ''
                                                    :
                                                    ((props.AllAudiosFromAPI.MusicPageComments.MusicCommentsListGetApi.allMusicCommentsList && 
                                                        props.AllAudiosFromAPI.MusicPageComments.MusicCommentsListGetApi.allMusicCommentsList.connection_status === 2) ||
                                                        (props.AllAudiosFromAPI.MusicPageComments.MusicCommentsListGetApi.allMusicCommentsList && 
                                                        props.AllAudiosFromAPI.MusicPageComments.MusicCommentsListGetApi.allMusicCommentsList.connection_status === 3))  ?
                                                    <button  
                                                        disabled
                                                        style={{background: '#CCCC00', 
                                                        opacity: '0.8',
                                                        border: '0', 
                                                        outline: 'none', 
                                                        color: '#fff', 
                                                        width: '9vw', 
                                                        borderRadius: '10px'}} >Pending <RemoveCircleOutlineIcon/> </button>
                                                        :''
                                                }
                                            </span>
                                            <span className="song_details" style={{color:'deeppink'}}>
                                            {
                                            localStorage.getItem('WebAppUserKey') === localStorage.getItem('UI') ?
                                            ''
                                            :
                                            props.AllAudiosFromAPI.MusicPageComments.MusicCommentsListGetApi.allMusicCommentsList &&
                                            props.AllAudiosFromAPI.MusicPageComments.MusicCommentsListGetApi.allMusicCommentsList.subscribe_status === 0 ?
                                            <button  
                                            onClick={() => handleSubscribeClick()}
                                            style={{background: 'transparent linear-gradient(90deg, #1E9FC8 0%, #3C34AC 100%)', 
                                            border: '0', 
                                            outline: 'none', 
                                            color: '#fff', 
                                            width: '9vw',
                                            // marginLeft: '-2vw', 
                                            borderRadius: '10px'}} >Subscribe <NotificationsIcon/> 
                                            </button>
                                            :
                                            <button  
                                            onClick={() => handleUnSubscribeClick()}
                                            style={{background: '#A52A2A', 
                                            opacity: '0.8',
                                            border: '0', 
                                            outline: 'none', 
                                            color: '#fff', 
                                            width: '9vw',
                                            // marginLeft: '-2vw', 
                                            borderRadius: '10px'}} >Subscribed <NotificationsActiveIcon/> </button>
                                        }
                                    </span>
                                    <span className="song_details" style={{color:'deeppink'}}>
                                    {
                            localStorage.getItem('WebAppUserKey') === localStorage.getItem('UI') ?
                            ''
                            :
                            <div>
                                <select 
                                onChange={(e) => handleCustomizeClick(e)}
                                style={{
                                borderRadius: '10px',
                                opacity: '0.8',
                                border: '0', 
                                outline: 'none', 
                                color: '#fff', 
                                width: '9vw', 
                                background: 'transparent linear-gradient(90deg, #1E9FC8 0%, #3C34AC 100%)'}}>
                                        {
                                        (props.AllAudiosFromAPI.MusicPageComments.MusicCommentsListGetApi.allMusicCommentsList !== undefined || 
                                            props.AllAudiosFromAPI.MusicPageComments.MusicCommentsListGetApi.allMusicCommentsList.customize_name !== null) &&
                                            <option value={''}>{
                                                (props.AllAudiosFromAPI.MusicPageComments.MusicCommentsListGetApi.allMusicCommentsList && 
                                                props.AllAudiosFromAPI.MusicPageComments.MusicCommentsListGetApi.allMusicCommentsList.customize_name !== undefined) && 
                                                props.AllAudiosFromAPI.MusicPageComments.MusicCommentsListGetApi.allMusicCommentsList.customize_name}</option>
                                        }
                                {
                                    props.AllAudiosFromAPI.MusicPageComments.MusicCommentsListGetApi.allMusicCommentsList.customize_list && 
                                    props.AllAudiosFromAPI.MusicPageComments.MusicCommentsListGetApi.allMusicCommentsList.customize_list.map((element, index) => {
                                        return(
                                            <>
                                            {
                                                props.AllAudiosFromAPI.MusicPageComments.MusicCommentsListGetApi.allMusicCommentsList.customize_name !== element.name &&
                                                <option style={{background: '#555'}} value={element.customize_id}>{element.name}</option>
                                            }
                                            </>
                                        )
                                    })
                                }
                            </select>

                            </div>
                            
                        }

                                    </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="likeShare">
                                    <div className="like">
                                    <span>{musicElement.like_status}</span>
                                    <div onClick={() => { handleLike(musicElement.music_id, musicElement.type);}} 
                                        style={{ margin: '0.5rem', cursor: 'pointer'}} title="hit like">
                                            {
                                                musicElement.like_status ? 
                                                <ThumbUpIcon style={{color: 'blue',fontSize: 'x-large'}}/> :
                                                <ThumbUpIcon style={{color: 'gray',fontSize: 'x-large'}}/>
                                            }
                                            <span style={{marginLeft: '0.5vw'}}>{musicElement.no_of_like}</span>
                                    </div>
                                    </div>

                                    {/* Share Box */}
                                    <div style={{ margin: '0.5rem', cursor: 'pointer'}}>
                                        <span onClick={() => handleAudioShareClick(musicElement.music_link,
                                                musicElement.music_title, 
                                                musicElement.music_caption, 
                                                musicElement.music_thumbnail_link, 
                                                musicElement.type)} 
                                            style={{marginLeft: '0.5vw'}} data-toggle="modal" data-target="#exampleModalCenter">
                                            <i className="fas fa-share"></i>
                                        </span>
                                    </div>

                                    {/* Report Box */}
                                    <div className="TrendingBlogreport">
                                            <div style={{padding: '0.5rem'}}>
                                            <button data-toggle="modal" data-target="#reportModalAudio"
                                            style={{background: 'transparent', border: '0', outline: 'none'}} 
                                            onClick={() => handlePostData(musicElement.music_id, musicElement.type)}>
                                                <ReportProblemIcon  style={{color: 'gray',fontSize: 'x-large'}}/>
                                            </button>
                                        </div>
                                        </div>
                                </div>    
                                <div className="audioBanner">
                                    <img src={marsh} alt=""/>
                                </div>   
                            </div>
                        </div>
                    }
                        {
                            musicElement &&
                        <div className="ReactAudioPlayer" >
                        <ReactAudioPlayer           
                        autoPlay
                        controls
                        src={musicElement.music_link}
                        />
                        </div>
                        }
                    </div>
                    <div className="MusicCommentBox">
                        <MusicPlayerComment {...props}/>
                    </div>
                </div>
            </div>
                
                <div className="playListTopArtists_Wrapper">
                    <div className="musicPlayerDescriptions" >
                        <p style={{borderBottom: '1px solid lightpink'}}>
                            <h2>Playlist</h2>
                        </p>
                        {
                        AllAudiosFromAPI && AllAudiosFromAPI.map((element, index) => {
                            return(
                                <>
                                {
                                props.AllAudiosFromAPI ?
                                <div className="musicName" onClick={() => setAudio(element)}>
                                    <div style={{fontSize: 'medium',color:'white'}}>{element.music_title}</div>
                                    <div style={{fontSize: 'small',color:'grey'}}>{element.user_name}</div>
                                </div>
                                : <>
                                    <img src={loader} alt="loading..." />
                                </>
                                }
                                </>
                            )
                        })
                        }
                    </div> 
            <div className="Top_Artists_Block">
                <TopArtists {...props}/>
            </div>

                </div>
                <div className="New_Realesed_Block">
            <RecentPlayed {...props}/> 
            <NewReleased {...props} setMusicElement={setMusicElement}/>
            </div>

        </div>
        
                    {/* } */}
        </>
    )
}

const mapStateToProps = (state) => {
    console.log('stateeeeee', state.AudioPage.AudioPageGetApi.allAudioPageApi);
    return{
        // AllAudiosFromAPI: state.AudioPage.AudioPageGetApi.allAudioPageApi
        AllAudiosFromAPI :state
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchAllAudios: () => dispatch(fetchAllAudios()),
        fetchAllComments: (data, music_id, type) => dispatch(fetchAllComments(data, music_id, type)),
        fetchAllCommentsReply: (dataReply, commentId) => dispatch(fetchAllCommentsReply(dataReply, commentId)),
        fetchAllAudiosItem: () => dispatch(fetchAllAudiosItem()),
        hitLikeApi: (elementId, elementType) => dispatch(hitLikeApi(elementId, elementType)),
        fetchReportCategories: () => dispatch(fetchReportCategories()),
        postReportAPI: (categoryName,elementId, elementType) => dispatch(postReportAPI(categoryName,elementId, elementType)),
        fetchMusicCommentList: (musicData) => dispatch(fetchMusicCommentList(musicData)),
        hitsubscribeAPI :(profile_id) => dispatch(hitsubscribeAPI(profile_id)),
        hitUnsubscribeAPI: (profile_id) => dispatch(hitUnsubscribeAPI(profile_id)),
        hitconnectAPI :(profile_id) => dispatch(hitconnectAPI(profile_id)),
        hitconnectRejectAPI :(profile_id) => dispatch(hitconnectRejectAPI(profile_id)),
        hitMakeCustomizeAPI:(profile_id, customize_id) => dispatch(hitMakeCustomizeAPI(profile_id, customize_id))



        //music Page
        // fetchMusicCommentList: (music_data) => dispatch(fetchMusicCommentList(music_data))
        // fetchAllCommentsReply: (replyData,Comment_id)=> dispatch(fetchAllCommentsReply(replyData,Comment_id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MusicPlayer)
