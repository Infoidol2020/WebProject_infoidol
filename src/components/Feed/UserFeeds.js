import React, {useRef} from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';

// import MusicNoteIcon from '@material-ui/icons/MusicNote';
// import VideocamIcon from '@material-ui/icons/Videocam';
// import ImageIcon from '@material-ui/icons/Image';
// import CreateIcon from '@material-ui/icons/Create';
import RefreshIcon from '@material-ui/icons/Refresh';
// import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
// import ReportProblemIcon from '@material-ui/icons/ReportProblem';
// import Carousel from 'react-elastic-carousel'
// import uuid from 'react-uuid'
import { Link } from 'react-router-dom'

import './UserFeeds.css'

import miniLoader from '../../assets/miniLoader.svg'

import { LazyLoadImage } from 'react-lazy-load-image-component';


// import ReactPlayer from 'react-player'
// import ShareMedia from './ShareMedia';

const UserFeeds = (props) => {

    const hoverOnVideoThumbnail = (videoThumbnail, videoGif) => {

        document.getElementById(videoThumbnail).style.display = 'none'
        document.getElementById(videoGif).style.display = 'block'
    }

    const hoverOutVideoGif = (videoThumbnail, videoGif) => {
        document.getElementById(videoThumbnail).style.display = 'block'
        document.getElementById(videoGif).style.display = 'none'
    }


    // console.log('poiuytrewq', props.data)
    // const [showSocial, setShowSocial] = useState(false);
    // const videoRef = useRef();
    
    //give comment
    // const [giveComment, setGiveComment] = useState()
    //comment list
    // const [commentList, setCommentList] = useState([])

    //comment {ElementId and Type}
    // const [elementIdComment, setElementIdComment] = useState()
    // const [elementTypeComment, setElementTypeComment] = useState()

    //post report states
    
    // const [elementId, setElementId] = useState()
    // const [elementType, setElementType] = useState()

    //report success message
    // const [message, setMessage] = useState(false)

    //share element 
    // const [shareElementLink, setShareElementLink] = useState()
    // const [shareElementTitle, setShareElementTitle] = useState()
    // const [shareElementDescription, setShareElementDescription] = useState()
    // const [shareElementThumbnail, setShareElementThumbnail] = useState()
    // const [shareElementType, setShareElementType] = useState()

    // const [userFeeds, setUserFeeds] = useState(data)
        //category id
    // const [categoryName, setCategoryName] = useState()
    // const handleCategoryChange = (e) => {
    //     setCategoryName(e.target.value);
    //     setMessage(false);
    // }

    // const handleReportSubmit = (e) => {
    //     e.preventDefault();
    //     localStorage.setItem('ReportUUID', uuid())
    //     props.postReportAPI(categoryName, elementId, elementType)
    // }

    // const handleVideoClick = (descriptionId, buttonId) => {
    //     //  console.log('clickeddd', descriptionId)
    //     document.getElementById(descriptionId).style.display="block"
    //     document.getElementById(buttonId).style.display="none"

    // }

    //  const handlePostData = (element_Id, element_Type) => {
    //     setElementId(element_Id)
    //     setElementType(element_Type)
    //     // console.log(element_Id, element_Type);
    //  }
    // const handleLike = (elementId, elementType) => {
    //     // console.log('wowwwwww',uuid());
    //     localStorage.setItem("feedId", elementId);
    //     localStorage.setItem("Feedkey", uuid())
    //     props.hitLikeApi(elementId, elementType)
    //     // console.log('clicked from user feed like', elementId, elementType)
    // }

    // const handleChangeComment = (e) => {
    //     // console.log(e.target.value)
    //     setGiveComment(e.target.value)
    // }

    // const handleCommentPost = (e) => {
    //     e.preventDefault()
    //     // console.log(elementIdComment, elementTypeComment)
    //     props.fetchAllComments(giveComment, elementIdComment, elementTypeComment)
    //     localStorage.setItem("CommentId", uuid());
    //     setGiveComment('')

    // }
    

    // const handleReplyCommentBlock = (replyCommentBlockId, replybuttonId) => {
    //     document.getElementById(replyCommentBlockId).style.display="block"
    //     document.getElementById(replybuttonId).style.display="none"

        
    // }

    //handle share
    // const handleShareClick = (link, title, description, thumbnail, type) => {
    //     // console.log('twert', type)
    //     setShareElementLink(link)
    //     setShareElementTitle(title)
    //     setShareElementDescription(description)
    //     setShareElementThumbnail(thumbnail)
    //     setShareElementType(type)
    //     // console.log('elemIddd', id)
    // }
    //comment id
    // const [commentId, setCommentId] = useState()
    //reply input 
    // const [replyInput, setReplyInput] = useState()
    // const handleReplyChange = (e, commentId) => {
    //     // console.log('e.target.value',commentId);
    //     setCommentId(commentId);
    //     setReplyInput(e.target.value);
    // }
    // const handleCommentReplySubmit = (e) => {
    //     e.preventDefault()
    //     // console.log('ppppppp',commentId, replyInput)
    //     props.fetchAllCommentsReply(replyInput, commentId)
    //     localStorage.setItem("CommentReplyId", uuid());
    //     setReplyInput('')

    // }
    
     //getcomment list
    //  const handleCommentList =  (commentElementId, commentElementType) => {
    //     props.fetchCommentList(commentElementId, commentElementType)

    //     //set for post comment
    //     setElementIdComment(commentElementId)
    //     setElementTypeComment(commentElementType)
    //  }

     // set user profile id
     const handleProfileClick = (profile_id) => {
        localStorage.setItem('userProfileId', profile_id)
        props.fetchUserProfile(localStorage.getItem('userProfileId'))
    }

    //show picture page
    const handlePicture = (image_id, user_id) => {
        props.fetchAllPictureView(image_id)
        localStorage.setItem('id', image_id);
        // console.log('video id gotit',image_id)
        localStorage.setItem('UI',user_id)
        window.scrollTo(0,0)
    }

    //show video page

    const handleVideoshowPageClick = (video_id,user_id) =>{
        // console.log('got video id', video_id);
        props.fetchAllVideoView(video_id)
        localStorage.setItem('id', video_id);
        localStorage.setItem('UI',user_id);
        window.scrollTo(0,0)
    
    } 

    //show blog page
    const handleBlogshowPageClick = (blog_id,user_id) =>{
        // console.log('gotchaaa ',blog_id);
        props.fetchAllRecmBlogs(blog_id)
        localStorage.setItem('id',blog_id);
        localStorage.setItem('UI',user_id)
        window.scrollTo(0,0)
    }

    const handleAudioshowPageClick = (e) => {
        localStorage.setItem('id',e.music_id)
        localStorage.setItem('TYPE',e.type)
        localStorage.setItem('UI',e.user_id)
        window.scrollTo(0, 0)

    }

    const seeMoreFeeds = () => {
        let offset = sessionStorage.getItem('feedOffset')
        let newOffset = parseInt(offset) + 10
        // console.log(parseInt(offset) + 10)
        sessionStorage.setItem('feedOffset', newOffset)
        props.fetchAllFeeds(sessionStorage.getItem('customize-type'), newOffset)
        window.scrollTo(0, 0)

    }
    const prevFeeds = () => {
        let offset = sessionStorage.getItem('feedOffset')
        let newOffset = parseInt(offset) - 10
        // console.log(parseInt(offset) + 10)
        sessionStorage.setItem('feedOffset', newOffset)
        props.fetchAllFeeds(sessionStorage.getItem('customize-type'), newOffset)
        window.scrollTo(0, 0)

    }

    const feedHome = () => {
        sessionStorage.setItem('feedOffset', 0)
        sessionStorage.setItem('customize-type', 0)
        props.fetchAllFeeds(0, 0)
        window.scrollTo(0, 0)
    }
    // console.log('props.FeedsFromAPI.FeedPage.FeedPageGetApi.FeedPageSuccess', props.FeedsFromAPI.FeedPage.FeedPageGetApi.FeedPageInProgress)


    // useEffect(()=>{
    //     if(props.FeedsFromAPI.Comment.CommentsTrendingPageGetApi.CommentsTrendingPageSuccess){
    //         props.fetchCommentList(elementIdComment, elementTypeComment)
    //         props.fetchAllFeeds()

    //     }
    //  }, [props.FeedsFromAPI.Comment.CommentsTrendingPageGetApi.CommentsTrendingPageSuccess])

    // useEffect(() => {
    //     // props.fetchCommentList(elementIdComment, elementTypeComment)
    //     props.fetchAllFeeds()

    //  }, [])



    //  useEffect(() => {
    //      if(props.FeedsFromAPI.Report.ReportPostApi.ReportPostSuccess){
    //         setMessage(!message)
    //      }
        
    //  }, [props.FeedsFromAPI.Report.ReportPostApi.ReportPostSuccess, localStorage.getItem('ReportUUID')])


    //  useEffect(()=>{
    //     if(props.FeedsFromAPI.Comment.CommentsTrendingPageGetApi.CommentsTrendingPageSuccess){
    //         props.fetchCommentList(elementIdComment, elementTypeComment)
    //         props.fetchAllFeeds()

    //     }
    //  }, [props.FeedsFromAPI.Comment.CommentsTrendingPageGetApi.CommentsTrendingPageSuccess])


    //  useEffect(() => {
    //     if(props.FeedsFromAPI.ReplyComment.CommentsReplyGetApi.CommentsReplySuccess){
    //         props.fetchCommentList(elementIdComment, elementTypeComment)
    //         props.fetchAllFeeds()

            
    //     }
    //  }, [props.FeedsFromAPI.ReplyComment.CommentsReplyGetApi.CommentsReplySuccess])

    //  useEffect(() => {
    //      if(props.FeedsFromAPI.Like.LikeApi.LikeApiSuccess){
    //         props.fetchAllFeeds()
    //      }
    //  }, [props.FeedsFromAPI.Like.LikeApi.LikeApiSuccess])


    //  useEffect(() => {
    //     props.fetchAllFeeds()
    //  }, [localStorage.getItem("feedId"),localStorage.getItem("Feedkey")])

    //  useEffect(() => {
    //     if(props.FeedsFromAPI.CommentList.CommentsListGetApi.allCommentsListFromCommentApi){
    //         setCommentList(props.FeedsFromAPI.CommentList.CommentsListGetApi.allCommentsListFromCommentApi)
    //     }
    //  }, [props.FeedsFromAPI.CommentList.CommentsListGetApi.allCommentsListFromCommentApi])

    return (
        <div>
            

            {/* comment modal */}
            {/* <div style={{marginTop: '10vh'}} className="modal fade" id="CommentFeedsModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel" style={{fontWeight: 'bold'}}>Comments</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body comments-scrollbar" style={{height: '50vh', overflowY: 'scroll'}}>
                    {
                        commentList.map((element, index) => {
                            return(
                                <>
                                <div  style={{display: 'flex',  alignItems: 'center'}}>
                                    <div>
                                        <img 
                                        style={{width: '6rem',
                                        height: '6rem',
                                        borderRadius: '50%',
                                        border: 'solid 2px #dadada' 
                                        }}
                                        src={element.profile_pic}  alt="pic"/>
                                    </div>
                                    <div style={{
                                        fontWeight: 'bold',
                                        marginLeft: '2vw', 
                                        fontSize: '1.8rem', 
                                        width: '20vw'}}>{element.user_name}</div>
                                    <div>{element.comment_date}</div>
                                </div>
                                <div >
                                    <div 
                                    style={{marginLeft: '7.2vw', 
                                    width: '73.3%', 
                                    textAlign: 'justify'}} >{element.comment}</div>
                                </div>
                                {
                                    element.reply.length > 0 && 
                                    <div className="comment-replies-scrollbar" style={{ height: '20vh',overflowY: 'scroll', marginTop: '2vh'}}>
                                        <div style={{marginLeft: '7vw', marginRight: '1vw'}}>
                                            {
                                                element.reply.map((elementReply, indexReply) => {
                                                    return(
                                                        <>
                                                        <div style={{display: 'flex', 
                                                        borderRadius :'10px',
                                                        alignItems: 'center',  
                                                        justifyContent: 'space-between'}}>
                                                            <div>
                                                                <img style={{width: '4rem', height: '4rem', borderRadius: '50%'}} src={elementReply.profile_pic} />
                                                            </div>
                                                            <div style={{textAlign: 'justify', fontWeight: 'bold'}}>{elementReply.user_name}</div>
                                                            <div>{elementReply.reply_date}</div>
                                                        </div>
                                                        <div style={{marginLeft: '2vw',
                                                        marginTop: '1vh', 
                                                        textAlign: 'justify',
                                                    
                                                        borderRadius :'10px',}}>{elementReply.reply}</div>
                                                        <hr />
                                                        </>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                }
                                
                                <div>
                                    <button
                                    id={`reply-comment-button${index}`}
                                    onClick={() => handleReplyCommentBlock(`reply-comment-block${index}`, `reply-comment-button${index}`)}
                                    style={{background: '#2697EC', 
                                    color: '#fff', border: '0', 
                                    outline: 'none', 
                                    height: '4vh', 
                                    width: '5vw', 
                                    marginLeft: '25vw'}}>Reply</button>
                                </div>
                                <div style={{marginTop: '1vh',height: '2vh'}}></div>
                                <div  id={`reply-comment-block${index}`} style={{display: 'none'}}>
                                    <div style={{marginLeft: '5vw'}}>
                                        <form onSubmit={handleCommentReplySubmit} style={{display: 'flex', alignItems: 'center'}}>
                                        <input 
                                        onChange={(e) => handleReplyChange(e, element.comment_id)}
                                        required
                                        style={{
                                        width: '20vw', 
                                        border: '0', 
                                        outline: 'none'}} 
                                        type="text" 
                                        placeholder="Type a comment..."  />
                                        <button style={{
                                        border: '0', 
                                        width: '5vw',
                                        height: '4vh', 
                                        background: '#2697EC', 
                                        color: '#fff',
                                        outline: 'none'}}>Post</button>
                                        </form>
                                    </div>
                                </div>
                                <hr />
                                </>
                            )
                        })
                    }
  
                </div>
                <div className="modal-footer">
                    <div >
                        <form onSubmit={handleCommentPost}>
                        <input type="text"  name="comment-box"
                        required
                        onChange={(e) => handleChangeComment(e)}
                        value={giveComment}
                        placeholder="Type a comment..."
                        style={{height: '5vh', width: '80%', left: '0', outline: 'none', border: '0'}}/>
                        <button style={{width: '20%', height: '5vh',background: '#2697EC', border: '0', 
                        outline: 'none', color: '#fff',
                        fontSize: '1.5rem',
                        fontWeight: 'bold'}}>Post</button>
                        </form>
                    </div>
                </div>
                </div>
            </div>
            </div> */}

            {/* report modal */}
            {/* <div style={{marginTop: '10vh'}} className="modal fade" id="reportModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel" style={{fontSize: '2rem'}}>Report</h5>
                    <button type="button" className="close" 
                    data-dismiss="modal" aria-label="Close"
                    onClick={() => {
                        setMessage(false)
                        setCategoryName('')
                    }}>
                    <span aria-hidden="true">&times;</span>
                    </button>
                    {
                        message ?
                        <div style={{textAlign: 'center'}}>
                            <p style={{color: '#B22222', fontSize : '2rem', fontWeight: 'bold' }}>Reported Successfully...</p>
                        </div>
                        : ''
                    }
                </div>
                <div className="modal-body">
                <form  onSubmit={ (e) => handleReportSubmit(e)}>
                    {
                        props.reportCategories.map((element, index) => {
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
                <div className="modal-footer">
                    <button type="button" 
                    onClick={() => {
                        setMessage(false)
                        setCategoryName('')
                    }}
                    className="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
            </div> */}
            

            
            {/* share media modal */}

            {/* <div className="modal fade" id="exampleModalCenter" style={{marginTop: '35vh'}} tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
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
                </div>
                </div>
            </div>
            </div> */}

            {
                sessionStorage.getItem('feedOffset') != '0' &&
                <div  style={{marginTop: '2vh',textAlign: 'center', width: '42vw', marginLeft: '10vw', marginTop: '3vh'}}>
                    <RefreshIcon style={{fontSize: '3rem', cursor: 'pointer'}} onClick={feedHome} /> 
                </div>
            }
            {
                props.data.map((element, index) => {
                return(
                    <>
                        {
                            element.type === '1' &&
                            <div style={{display: 'flex'}}>
                            <div className="feeds">
                                <div className="feed-block">
                                    <div className="feed-image-block" onClick={() => handleProfileClick(element.user_id)}>
                                        <Link to='/userprofile'>
                                        <LazyLoadImage placeholder={<div><img src={miniLoader} /></div>} src ={element.user_profile_pic}  style={{objectFit:'cover'}} className="feed-image" />
                                        </Link>
                                    </div>
                                <div className="feed-block-profile-info">
                                    <span style={{fontSize: '2rem', fontWeight: 'bold', padding: '3rem'}}>{element.user_name}</span>
                                    {/* <div className="profile-info-status"></div> */} 
                                    {/* online-offline status */}
                                    <div className="FeedPge_PostedTime" style={{fontSize: '1rem', opacity: '0.39', fontWeight :'bold', marginLeft: '2.4vw', marginTop: '1vh'}}>{element.created_date}</div>
                                </div>
                                {/* <div className="feed-block-button">
                                <button className="connect-btn">
                                    Connect
                                </button>
                                </div> */}
                                        
                                        
                        </div>
                                    <div className="FeedPge_Description" style={{width: '28vw', marginLeft: '7vw',  marginTop: '2vh',  textAlign: 'justify'}}>
                                    
                                        <span style={{ opacity: '0.58', fontWeight: 'bold'}}>
                                        {
                                            element.video_caption.length > 400 ?
                                            <> 
                                            {element.video_caption.slice(0, 400)}...
                                            {/* <button id={`detailsButton${index}`} style={{border: '0', background: 'transparent', color: 'red'}} 
                                            onClick ={ () =>  handleVideoClick(`details${index}`, `detailsButton${index}` ) }>
                                            <KeyboardArrowDownIcon style={{fontSize: '2rem'}} />
                                            </button> */}

                                            </>
                                            : 
                                            element.video_caption
                                        }
                                        </span>
                                        
                                        {/* <span  id={`details${index}`} style={{display: 'none', opacity: '0.58', fontWeight: 'bold'}}>
                                            {
                                                element.video_caption.length > 400 && 
                                                element.video_caption.slice(400, )
                                            }
                                        </span> */}
                                        
                                    </div>
                                        {
                                            <Link to={{pathname:'/video-details'}}>
                                            {/* <video controls  style={{ width: '30vw', height: '30vh'}} className="feed-block-video">
                                            <source src={element.video_link} />
                                            </video> */}
                                            <div 
                                            onClick={() => handleVideoshowPageClick(element.video_id,element.user_id)}
                                            className="" style={{ display: 'flex', justifyContent: 'center'}}>
                                                
                                                    {/* <audio style={{border: '1px solid rgba(255, 0, 0, .2)'}}  controls src={element.music_link}  className="feed-block-video">
                                                    </audio> */}
                                                    {/* <div><VideocamIcon style={{width: '3rem', height: '3rem', color: 'rgb(16, 201, 230)'}} /></div>
                                                    <div style={{marginLeft: '2vw', color:'#91E3FF'}}>
                                                        <p style={{marginTop: '1vh'}}>{element.video_title.length > 30 ?<> {element.video_title.slice(0,30)}...</> : element.video_title}</p>
                                                        <p>{element.video_caption.length > 300 ?<> {element.video_caption.slice(0,300)}...</> : element.video_caption}</p>
                                                    </div>   */}
                                                    {
                                                        element.video_thumbnail_link !== '' ?
                                                        <>
                                                        <LazyLoadImage className="FeedPge_VideoSection"
                                                            // ref={videoThumbnail}
                                                            id={`videoThumbnail`.concat(element.video_id)} 
                                                            onMouseEnter={() => hoverOnVideoThumbnail(`videoThumbnail`.concat(element.video_id), `videoGif`.concat(element.video_id))} 
                                                            // onMouseLeave={() => hoverOutVideoThumbnail()} 
                                                            style={{width: '25vw', height: '30vh', margin: '0.5rem', objectFit: 'cover', borderRadius: '10px'}} 
                                                            src={element.video_thumbnail_link} placeholder={<div><img src={miniLoader} /></div>} />
                                                        {
                                                            element.video_thumbnail_gif_link !== '' ?
                                                            <LazyLoadImage className="FeedPge_VideoGif" 
                                                            // ref={videoGif} 
                                                            id={`videoGif`.concat(element.video_id)}
                                                            // onMouseEnter={() => hoverOnVideoGif()} 
                                                            onMouseLeave={() => hoverOutVideoGif(`videoThumbnail`.concat(element.video_id), `videoGif`.concat(element.video_id))} 
                                                            style={{width: '25vw', height: '30vh', margin: '0.5rem', objectFit: 'cover', borderRadius: '10px', display: 'none'}} 
                                                            src={element.video_thumbnail_gif_link} placeholder={<div><img src={miniLoader} /></div>} />
                                                            : 
                                                            <LazyLoadImage FeedPge_VideoGif
                                                            // ref={videoThumbnail}
                                                            id={`videoGif`.concat(element.video_id)} 
                                                            onMouseLeave={() => hoverOutVideoGif(`videoThumbnail`.concat(element.video_id), `videoGif`.concat(element.video_id))} 
                                                            // onMouseLeave={() => hoverOutVideoThumbnail()} 
                                                            style={{width: '25vw', height: '30vh', margin: '0.5rem', objectFit: 'cover', borderRadius: '10px', display: 'none'}} 
                                                            src={element.video_thumbnail_link} placeholder={<div><img src={miniLoader} /></div>} />
                                                        }
                                                        </>
                                                        :
                                                        <LazyLoadImage style={{width: '25vw', height: '30vh', margin: '0.5rem', objectFit: 'cover', borderRadius: '10px'}} src={element.cat_image_link} placeholder={<div><img src={miniLoader} /></div>} />
                                                        }
                                            </div>
                                            </Link> 
                                            // <ReactPlayer  
                                            // controls
                                            // width='100%'
                                            // height='100%' url={element.video_link} />
                                        }
                                    <div className="FeedPge_VideoLikeSection"
                                    // style={{display : 'flex', 
                                    // marginLeft: '7vw', 
                                    // marginTop: '1vh',
                                    // width: '28vw',
                                    // justifyContent: 'space-around',
                                    // alignItems: 'center'}}
                                    >
                                        <div 
                                        // onClick={() => {
                                        //     handleLike(element.video_id, element.type);

                                        //     }} 
                                        style={{ margin: '0.5rem',}} >
                                            {/* {
                                                element.like_status ? 
                                                <FavoriteIcon style={{color: 'red'}}/> :
                                                <FavoriteIcon style={{color: 'black'}}/>
                                            } */}
                                                <FavoriteIcon style={{color: 'black'}}/>
                                            <span style={{marginLeft: '0.5vw'}}>{element.no_of_like}</span>
                                        </div>
                                        <div  className="FeedPge_VideoComment_section" style={{ margin: '0.5rem'}}>
                                            {/* <button onClick={() => handleCommentList(element.video_id, element.type)} style={{border: '0', background: 'transparent', outline: 'none'}} data-toggle="modal" data-target="#CommentFeedsModal"> */}
                                                <ChatBubbleIcon />
                                            {/* </button> */}
                                            <span style={{marginLeft: '0.5vw'}}>{element.no_of_comments}</span>
                                        </div>
                                        {/* <div style={{ margin: '0.5rem', cursor: 'pointer'}}>
                                            <span onClick={() => handleShareClick(element.video_link, element.video_title, element.video_caption, element.video_thumbnail_link, element.type)} style={{marginLeft: '0.5vw'}} data-toggle="modal" data-target="#exampleModalCenter"><i className="fas fa-share"></i></span>
                                        </div> */}
                                    
                                        
                                        {/* <div style={{ margin: '0.5rem',  
                                        padding: '0.5rem',}}>
                                            <button data-toggle="modal" data-target="#reportModal"
                                            style={{background: 'transparent', border: '0', outline: 'none'}} 
                                            onClick={() => handlePostData(element.video_id, element.type)}>report</button>
                                            <ReportProblemIcon/>
                                        </div> */}
                                    </div>
                                </div>
                                
                            </div>
                        }

                        {
                            element.type === '2' &&
                            <div style={{display: 'flex'}}>
                            <div className="feeds">
                                <div className="feed-block">
                                    <div className="feed-image-block" onClick={() => handleProfileClick(element.user_id)}>
                                        <Link to='./userprofile'>
                                        <LazyLoadImage placeholder={<div><img src={miniLoader} /></div>} src ={element.user_profile_pic} style={{objectFit:'cover'}} className="feed-image" />
                                        </Link>
                                    </div>
                                <div className="feed-block-profile-info">
                                    <span style={{fontSize: '2rem', fontWeight: 'bold', padding: '3rem'}}>{element.user_name}</span>
                                    {/* <div className="profile-info-status"></div> */} 
                                    {/* online-offline status */}
                                    <div className="FeedPge_PostedTime"style={{fontSize: '1rem', opacity: '0.39', fontWeight :'bold', marginLeft: '2.4vw', marginTop: '1vh'}}>{element.created_date}</div>
                                </div>
                                {/* <div className="feed-block-button">
                                <button className="connect-btn">
                                    Connect
                                </button>
                                </div>       */}
                                </div>
                                    <div className="Feedpge_MusicCaption" style={{width: '28vw', marginLeft: '7vw', marginTop: '2vh',  textAlign: 'justify'}}>
                                    <span style={{ opacity: '0.58', fontWeight: 'bold'}}>
                                        {
                                            element.music_caption.length > 400 ?
                                            <> 

                                            {element.music_caption.slice(0, 400)}...
                                            {/* <button id={`detailsButton${index}`} style={{border: '0', background: 'transparent', color: 'red'}} 
                                            onClick ={ () =>  handleVideoClick(`details${index}`, `detailsButton${index}` ) }>
                                            <KeyboardArrowDownIcon style={{fontSize: '2rem'}} />
                                            </button> */}

                                            </>
                                            : 
                                            element.music_caption
                                        }
                                        </span>
                                        
                                        {/* <span  id={`details${index}`} style={{display: 'none', opacity: '0.58', fontWeight: 'bold'}}>
                                            {
                                                element.music_caption.length > 400 && 
                                                element.music_caption.slice(400, )
                                            }
                                        </span> */}
                                        
                                        {/* <button className="feed-read-more-btn">read more</button> */}
                                    </div>
                                    <Link to={{pathname:'/audio-details'}}>
                                    <div 
                                    onClick={() => handleAudioshowPageClick(element)}
                                    style={{textAlign: 'center', cursor: 'pointer'}}>
                                        
                                            {/* <audio style={{border: '1px solid rgba(255, 0, 0, .2)'}}  controls src={element.music_link}  className="feed-block-video">
                                            </audio> */}
                                            {/* <div><MusicNoteIcon style={{width: '3rem', height: '3rem', color: 'rgb(16, 201, 230)'}} /></div>
                                            <div style={{marginLeft: '2vw', color:'#91E3FF'}}>
                                                <p style={{marginTop:'1vh'}}>{element.music_title.length > 30 ?<> {element.music_title.slice(0,30)}...</> : element.music_title}</p>
                                                <p>{element.music_caption.length > 300 ?<> {element.music_caption.slice(0,300)}...</> : element.music_caption}</p>
                                            </div>   */}
                                            {
                                            element.music_thumbnail_link !== '' ?
                                            <LazyLoadImage className="FeedPge_MusicSection" style={{width: '25vw', height: '30vh', margin: '0.5rem', objectFit: 'cover', borderRadius: '10px'}} src={element.music_thumbnail_link} placeholder={<div><img src={miniLoader} /></div>} />
                                            :
                                            <LazyLoadImage className="FeedPge_MusicSection" style={{width: '25vw', height: '30vh', margin: '0.5rem', objectFit: 'cover', borderRadius: '10px'}} src={element.cat_image_link} placeholder={<div><img src={miniLoader} /></div>} />
                                            }
                                    </div>
                                    </Link>                                             

                                    <div className="FeedPge_Audio_LikeSection"
                                    style={{display : 'flex', 
                                    marginLeft: '7vw', 
                                    marginTop: '1vh',
                                    width: '28vw',
                                    justifyContent: 'space-around',
                                    alignItems: 'center'}}>
                                        <div 
                                        // onClick={() => handleLike(element.music_id, element.type)} 
                                        style={{ margin: '0.5rem', }} >
                                            {/* {
                                                element.like_status ? 
                                                <FavoriteIcon style={{color: 'red'}}/> :
                                                <FavoriteIcon />
                                            } */}
                                                <FavoriteIcon />
                                            <span style={{marginLeft: '0.5vw'}}>{element.no_of_like}</span>
                                        </div>
                                        <div className="FeedPge_AudioComment_Section" style={{ margin: '0.5rem'}}>
                                            {/* <button onClick={() => handleCommentList(element.music_id, element.type)} style={{border: '0', background: 'transparent', outline: 'none'}} data-toggle="modal" data-target="#CommentFeedsModal"> */}
                                                <ChatBubbleIcon />
                                            {/* </button> */}
                                            <span style={{marginLeft: '0.5vw'}}>{element.no_of_comments}</span>
                                        </div>
                                        {/* <div style={{ margin: '0.5rem', cursor: 'pointer'}}>
                                            <span onClick={() => handleShareClick(element.music_link, element.music_title, element.music_caption,element.music_thumbnail_link,element.type)} style={{marginLeft: '0.5vw'}} data-toggle="modal" data-target="#exampleModalCenter"><i className="fas fa-share"></i></span>
                                        </div> */}
                                    
                                        
                                        {/* <div style={{ margin: '0.5rem',  
                                        padding: '0.5rem'}}>
                                        <button data-toggle="modal" data-target="#reportModal" 
                                        style={{background: 'transparent', border: '0', outline: 'none'}}
                                        onClick={() => handlePostData(element.music_id, element.type)}>report</button>
                                        <ReportProblemIcon/>
                                        </div> */}
                                    </div>
                                </div>
                                
                            </div>
                        }
                        {
                            element.type === '3' &&
                        <div style={{display: 'flex'}}>
                            <div className="feeds">
                                <div className="feed-block">
                                <div className="feed-image-block" onClick={() => handleProfileClick(element.user_id)}>
                                        <Link to='./userprofile'>
                                        <LazyLoadImage placeholder={<div><img src={miniLoader} /></div>} src ={element.user_profile_pic} style={{objectFit:'cover'}} className="feed-image" />
                                        </Link>
                                    </div>
                                <div className="feed-block-profile-info">
                                    <span style={{fontSize: '2rem', fontWeight: 'bold', padding: '3rem'}}>{element.user_name}</span>
                                    {/* <div className="profile-info-status"></div> */} 
                                    {/* online-offline status */}
                                    <div className="FeedPge_PostedTime"style={{fontSize: '1rem', opacity: '0.39', fontWeight :'bold', marginLeft: '2.4vw', marginTop: '1vh'}}>{element.created_date}</div>
                                </div>
                                {/* <div className="feed-block-button">
                                <button className="connect-btn">
                                    Connect
                                </button>
                                </div> */}
                                        
                                        
                        </div>
                                    <div className="FeedPge_PictureCaption" style={{width: '28vw', marginLeft: '7vw', marginTop: '2vh',}}>
                                    <span style={{ opacity: '0.58', fontWeight: 'bold'}}>
                                        {
                                            element.picture_caption.length > 400 ?
                                            <> 
                                            {element.picture_caption.slice(0, 400)}...
                                            {/* <button id={`detailsButton${index}`} style={{border: '0', background: 'transparent', color: 'red'}} 
                                            onClick ={ () =>  handleVideoClick(`details${index}`, `detailsButton${index}` ) }>
                                            <KeyboardArrowDownIcon style={{fontSize: '2rem'}} />
                                            </button> */}
                                            </>
                                            : 
                                            element.picture_caption
                                        }
                                        </span>
{/*                                         
                                        <span  id={`details${index}`} style={{display: 'none', opacity: '0.58', fontWeight: 'bold'}}>
                                            {
                                                element.picture_caption.length > 400 && 
                                                element.picture_caption.slice(400, )
                                            }
                                        </span> */}
                                    
                                        
                                    </div>
                                    <div className="feed-block-video-container" style={{textAlign: 'center'}} 
                                    onClick={() => handlePicture(element.image_id, element.user_id)} >
                                        <Link to="/picture-details">
                                            <LazyLoadImage className="FeedPge_Picture" placeholder={<div><img src={miniLoader} /></div>} style={{width: '25vw', height: '30vh', borderRadius :'10px', objectFit: 'cover'}} 
                                            src = {element.picture_link} alt="image" />
                                        </Link>
                                    </div>
                                    <div className="FeedPge_PictureLike_Section"
                                    style={{display : 'flex', 
                                    marginLeft: '7vw', 
                                    marginTop: '1vh',
                                    width: '28vw',
                                    justifyContent: 'space-around',
                                    alignItems: 'center'}}>
                                        <div 
                                        // onClick={() => handleLike(element.image_id, element.type)} 
                                        style={{ margin: '0.5rem',}} >
                                            {/* {
                                                element.like_status ? 
                                                <FavoriteIcon style={{color: 'red'}}/> :
                                                <FavoriteIcon />
                                            } */}
                                                <FavoriteIcon />

                                            
                                            <span style={{marginLeft: '0.5vw'}}>{element.no_of_like}</span>
                                        </div>
                                        <div className="FeedPge_PictureComment_section" style={{ margin: '0.5rem'}}>
                                            {/* <button onClick={() => handleCommentList(element.image_id, element.type)} style={{border: '0', background: 'transparent', outline: 'none'}} data-toggle="modal" data-target="#CommentFeedsModal"> */}
                                                <ChatBubbleIcon />
                                            {/* </button> */}
                                            <span style={{marginLeft: '0.5vw'}}>{element.no_of_comments}</span>
                                        </div>
                                        {/* <div style={{ margin: '0.5rem', cursor: 'pointer'}}>
                                            <span onClick={() => handleShareClick(element.picture_link, element.picture_title, element.picture_caption,element.cat_image_link, element.type)} style={{marginLeft: '0.5vw'}} data-toggle="modal" data-target="#exampleModalCenter"><i className="fas fa-share"></i></span>
                                        </div> */}
                                    
                                        
                                        {/* <div style={{ margin: '0.5rem',  
                                        padding: '0.5rem'}}>
                                        <button data-toggle="modal" data-target="#reportModal" 
                                        style={{background: 'transparent', border: '0', outline: 'none'}}
                                        onClick={() => handlePostData(element.image_id, element.type)}>report</button>
                                        <ReportProblemIcon/>
                                        </div> */}
                                    </div>
                                </div>
                                
                            </div>
                        }
                        {
                            element.type === '4' &&
                        <div style={{display: 'flex'}}>
                            <div className="feeds">
                                <div className="feed-block">
                                <div className="feed-image-block" onClick={() => handleProfileClick(element.user_id)}>
                                        <Link to='./userprofile'>
                                        <LazyLoadImage placeholder={<div><img src={miniLoader} /></div>} src ={element.user_profile_pic} style={{objectFit:'cover'}} className="feed-image" />
                                        </Link>
                                    </div>
                                <div className="feed-block-profile-info">
                                    <span style={{fontSize: '2rem', fontWeight: 'bold', padding: '3rem'}}>{element.user_name}</span>
                                    {/* <div className="profile-info-status"></div> */} 
                                    {/* online-offline status */}
                                    <div className="FeedPge_PostedTime"style={{fontSize: '1rem', opacity: '0.39', fontWeight :'bold', marginLeft: '2.4vw', marginTop: '1vh'}}>{element.created_date}</div>
                                </div>
                                {/* <div className="feed-block-button">
                                <button className="connect-btn">
                                    Connect
                                </button>
                                </div> */}
                                        
                                        
                        </div>
                                    <div className="FeedPge_BlogCaption" style={{width: '28vw', marginLeft: '7vw', marginTop: '2vh',}}>
                                    <span style={{ opacity: '0.58', fontWeight: 'bold'}}>
                                        {
                                            element.blog_description.length > 400 ?
                                            <> 
                                            {element.blog_description.slice(0, 400)}
                                            ...
                                            </>
                                            : 
                                            element.blog_description
                                        }
                                        </span>
                                        
                                    
                                        
                                    </div>
                                    {
                                    <div className="feed-block-video-container" onClick={() => handleBlogshowPageClick(element.blog_id,element.user_id)} style={{textAlign: 'center'}} >
                                            <Link to="/blog-details">
                                            {
                                                element.blog_thumbnail_link !== '' ?
                                                <LazyLoadImage className="FeedPge_BlogSection" placeholder={<div><img src={miniLoader} /></div>} style={{width: '25vw', height: '30vh', borderRadius :'10px', objectFit: 'cover'}} 
                                                src = {element.blog_thumbnail_link} alt="image" /> 
                                                : 
                                                <LazyLoadImage  className="FeedPge_BlogSection" placeholder={<div><img src={miniLoader} /></div>} style={{width: '25vw', height: '30vh', borderRadius :'10px',  objectFit: 'cover'}} 
                                                src = {element.cat_image_link} alt="image" />
                                            }
                                            </Link>
                                            
                                    </div>
                                    }
                                    <div className="FeedPge_BlogLikeSection"
                                    style={{display : 'flex', 
                                    marginLeft: '7vw', 
                                    marginTop: '1vh',
                                    width: '28vw',
                                    justifyContent: 'space-around',
                                    alignItems: 'center'}}>
                                        <div 
                                        // onClick={() => handleLike(element.blog_id, element.type)}  
                                        style={{ margin: '0.5rem'}} >
                                            {/* {
                                                element.like_status ? 
                                                <FavoriteIcon style={{color: 'red'}}/> :
                                                <FavoriteIcon />
                                            } */}
                                                <FavoriteIcon />                                            
                                            <span style={{marginLeft: '0.5vw'}}>{element.no_of_like}</span>
                                        </div>
                                        <div className="FeedPge_BlogComment_Section" style={{ margin: '0.5rem'}}>
                                            {/* <button onClick={() => handleCommentList(element.blog_id, element.type)} style={{border: '0', background: 'transparent', outline: 'none'}} data-toggle="modal" data-target="#CommentFeedsModal"> */}
                                                <ChatBubbleIcon />
                                            {/* </button> */}
                                            <span style={{marginLeft: '0.5vw'}}>{element.no_of_comments}</span>
                                        </div>
                                        {/* <div style={{ margin: '0.5rem', cursor: 'pointer'}}>
                                            <span onClick={() => handleShareClick(element.blog_thumbnail_link, element.blog_title, element.blog_description,element.cat_image_link, element.type)} style={{marginLeft: '0.5vw'}} data-toggle="modal" data-target="#exampleModalCenter"><i className="fas fa-share"></i></span>
                                        </div> */}
                                    
                                        
                                        {/* <div style={{ margin: '0.5rem',  
                                        padding: '0.5rem'}}>
                                            <button data-toggle="modal" data-target="#reportModal" 
                                            style={{background: 'transparent', border: '0', outline: 'none'}}
                                            onClick={() => handlePostData(element.blog_id, element.type)}>report</button>
                                            <ReportProblemIcon/>
                                        </div> */}
                                    </div>
                                </div>
                                
                            </div>
                        }

                    </>
                            )
                        })

                    }
                    <div 
                    style={{display: 'flex', marginLeft: '10vw', height: '15vh', justifyContent: 'center', alignItems: 'center'}}>
                    {
                        sessionStorage.getItem('feedOffset') != '0' &&
                        <div title="see previous feeds"
                        onClick={prevFeeds} style={{cursor: 'pointer', marginRight: '5vw'}}>
                            <i class="fas fa-angle-double-left" style={{fontSize: '2rem'}}></i>
                        </div>
                    }
                    <div title="see more feeds" onClick={seeMoreFeeds} style={{cursor: 'pointer'}}>
                    <i class="fas fa-angle-double-right" style={{fontSize: '2rem'}}></i> 
                    </div>
                    </div>

            
        </div>
    )
}

export default UserFeeds
