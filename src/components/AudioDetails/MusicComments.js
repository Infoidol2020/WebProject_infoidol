import React, {useState, useEffect, useRef} from 'react'
import CommentIcon from '@material-ui/icons/Comment';
import { useHistory } from 'react-router-dom';
import {Link} from 'react-router-dom'

import './MusicComments.css';

const MusicComments = (props) => {
    // console.log('props from video comments', props)
    
    // Profile Redirection Click
const handleProfileCommentAudioClick = (user_id) => {
    localStorage.setItem('userProfileId', user_id)
    props.fetchUserProfile(user_id)
            // console.log('elemIddd', user_id)
}
// Profile Redirection Click
const handleProfileReplyAudioClick = (user_id) => {
    localStorage.setItem('userProfileId', user_id)
    props.fetchUserProfile(user_id)
            // console.log('elemIddd', user_id)
}
    const history = useHistory();
    const [giveComment, setGiveComment] = useState()
    const [giveReply, setGiveReply] = useState()
    const [commentId, setCommentId] = useState()
    const commentInput = useRef()
    const replyInput = useRef()

    const handleComment = (e) => {
        e.preventDefault();
        if(localStorage.getItem('WebAppUserKey') === null || localStorage.getItem('WebAppUserKey') == '' ){
            history.push('/login');
            return
        }
        props.fetchAllComments(giveComment,props.musicDetails.music_detail.music_id,props.musicDetails.music_detail.type)
        commentInput.current.value=''
    }
    const handleCommentText = (e) => {
        setGiveComment(e.target.value);
    }

    const handleReply = (e) => {
        e.preventDefault();
        if(localStorage.getItem('WebAppUserKey') === null || localStorage.getItem('WebAppUserKey') == '' ){
            history.push('/login');
            return
        }
        props.fetchAllCommentsReply(giveReply, commentId)
        // replyInput.current.value="";
        document.getElementById('replyInput').value="";
    }

    const handleReplyText = (e, comment_id) => {
        setGiveReply(e.target.value)
        setCommentId(comment_id)
    }
    const handleReplyHideInput = (index) => {
        document.getElementById(`textInput${index}`).style.display="none"
        document.getElementById(`reply${index}`).style.display="block"
    }
    const handleReplyShowInput = (index) => {
        document.getElementById(`textInput${index}`).style.display="block"
        document.getElementById(`reply${index}`).style.display="none"
    }
    useEffect(() => {
        if(props.AllAudiosFromAPI.Comment.CommentsTrendingPageGetApi.CommentsTrendingPageSuccess ||
            props.AllAudiosFromAPI.ReplyComment.CommentsReplyGetApi.CommentsReplySuccess){
                props.fetchMusicCommentList(localStorage.getItem('id'))

            }
    }, [props.AllAudiosFromAPI.Comment.CommentsTrendingPageGetApi.CommentsTrendingPageSuccess, 
        props.AllAudiosFromAPI.ReplyComment.CommentsReplyGetApi.CommentsReplySuccess])
    return (
    <section>
        {

        <div style={{marginLeft: '3rem'}} className="Container_MusicComment">
            <div className="MusicComment_commentTitle">
                <div className="MusicComment_Title">Comment</div>
                <div className="MusicComment_CommentIcon"><CommentIcon style={{fontSize: 'xx-large',marginLeft: '-5rem', marginTop: '0.5rem'}}/></div>
            </div>
            <div className="MusicComment_CommentList">
            {
                props.musicDetails &&
                props.musicDetails.comments.map((comment, commentIndex) => {
                    return(
                        <>
                        <div className="MusicComment_Container" key ={commentIndex}>
                            <div className="MusicComment_CommentWrapper">
                            <div className="MusicComment_profileComment" style={{display:'flex'}}>
                            <Link to= '/userprofile'>
                                <img 
                                onClick={() => handleProfileCommentAudioClick(comment.user_id)}
                                src={comment.profile_pic} style={{width: '2rem', height: '2rem', borderRadius: '50%'}}/>
                                <span 
                                onClick={() => handleProfileCommentAudioClick(comment.user_id)}
                                style={{marginLeft:'1vw', whiteSpace: 'nowrap',color: '#006DB0'}}>{comment.user_name}</span>
                            </Link>
                                <div style={{marginLeft:'12vw',whiteSpace: 'nowrap', margin:'0px,0px,0px',color: '#006DB0'}}>{comment.comment_date}</div>
                            </div>

                                <div className="MusicComment_UserComment">{comment.comment}</div>
                                    <span className="MusicComment_ReplyButton">
                                        <button className={commentIndex} id={`reply${commentIndex}`} onClick={ () => handleReplyShowInput(commentIndex) }>Reply</button>
                                    </span>
                                <div>
                                    {
                                        comment.reply.map((reply, replyIndex) => {
                                            return(
                                                <section className="MusicComment_ReplyBlock">
                                                <div className="MusicComment_replyProfileComment" key={replyIndex}>
                                                <div style={{display:'flex'}}>
                                                    <Link to= '/userprofile'>
                                                        <img 
                                                        onClick={() => handleProfileReplyAudioClick(reply.user_id)}
                                                        src={reply.profile_pic} style={{width: '2rem', height: '2rem', borderRadius: '50%'}}/>
                                                        <span 
                                                        onClick={() => handleProfileReplyAudioClick(reply.user_id)}
                                                        style={{marginLeft:'1vw', whiteSpace: 'nowrap', color:'#006DB0'}}>
                                                            {reply.user_name}
                                                        </span>
                                                    </Link>
                                                    <div style={{marginLeft:'12vw',whiteSpace: 'nowrap', margin:'0px,0px,0px', color:'#006DB0'}}>{reply.reply_date}</div>
                                                </div>

                                                    <div>{reply.reply}</div>
                                                </div>
                                                </section>
                                            )
                                        })
                                    }
                                </div>
                                <form onSubmit={handleReply}>
                                        <p id={`textInput${commentIndex}`}  style={{display: 'none'}}>
                                            <textarea 
                                            rows="1" 
                                            cols="65"
                                            ref={replyInput} 
                                            id="replyInput"
                                            type="text" 
                                            required 
                                            onChange={(e) => handleReplyText(e, comment.comment_id)} />
                                            
                                            <div className="MusicComment_ButtonsReply">
                                            <button>Post</button>
                                            <button type="button" onClick={() => handleReplyHideInput(commentIndex)}>&times;</button>
                                            </div>
                                        </p>
                                    </form>
                            </div>
                        </div>
                        </>
                    )
                })
            }
            </div>

            {
                props.musicDetails &&
                <form onSubmit={handleComment}>
                <textarea className="audio-comment-input" ref={commentInput} 
                rows="2" 
                cols="61" 
                placeholder= "Comment Here"
                required  
                name="comment" 
                onChange={(e) => handleCommentText(e)} />
                <button>Comment</button>
                </form>
            }

        </div>
        }
    </section>
    )
}


export default MusicComments
