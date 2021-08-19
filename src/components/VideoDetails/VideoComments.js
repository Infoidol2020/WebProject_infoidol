import React, {useState, useEffect, useRef} from 'react'
import CommentIcon from '@material-ui/icons/Comment';
import { useHistory } from 'react-router-dom';
import {Link} from 'react-router-dom'

import './VideoComments.css'

import miniLoader from '../../assets/miniLoader.svg'

import { LazyLoadImage } from 'react-lazy-load-image-component';

const VideoComments = (props) => {
     // Profile Redirection Click
 const handleProfileCommentVideoClick = (user_id) => {
    localStorage.setItem('userProfileId', user_id)
    props.fetchUserProfile(user_id)
            console.log('elemIddd', user_id)
}
// Profile Redirection Click
const handleProfileReplyVideoClick = (user_id) => {
    localStorage.setItem('userProfileId', user_id)
    props.fetchUserProfile(user_id)
            console.log('elemIddd', user_id)
}
    // console.log('props from video comments', props)
    const history = useHistory();
    const [giveComment, setGiveComment] = useState()
    const [giveReply, setGiveReply] = useState()
    const [commentId, setCommentId] = useState()
    const commentInput = useRef()
    const replyInput = useRef()

    const handleComment = (e) => {
        e.preventDefault();
        if(localStorage.getItem('WebAppUserKey') === null || localStorage.getItem('WebAppUserKey') == '' ){
            history.push('/login')
            return
        }
        props.fetchAllComments(giveComment,props.videoDetails.video_detail.video_id,props.videoDetails.video_detail.type)
        commentInput.current.value=''
    }
    const handleCommentText = (e) => {
        setGiveComment(e.target.value);
    }


    const handleReply = (e) => {
        e.preventDefault();
        if(localStorage.getItem('WebAppUserKey') === null || localStorage.getItem('WebAppUserKey') == '' ){
            history.push('/login')
            return
        }
        props.fetchAllCommentsReply(giveReply, commentId)
        // replyInput.current.value=''
        document.getElementById('replyInput').value= "";
    }

    const handleReplyText = (e, comment_id) => {
        setGiveReply(e.target.value)
        setCommentId(comment_id)
    }
const handleReplyShowInput = (index) => {
    document.getElementById(`textInput${index}`).style.display="block"
    document.getElementById(`reply${index}`).style.display="none"


}
const handleReplyHideInput = (index) => {
    document.getElementById(`textInput${index}`).style.display="none"
    document.getElementById(`reply${index}`).style.display="block"

    

}
    useEffect(() => {
        props.fetchAllVideoView(localStorage.getItem('id'))
    }, [props.VideoDetails.Comment.CommentsTrendingPageGetApi.CommentsTrendingPageSuccess, 
        props.VideoDetails.ReplyComment.CommentsReplyGetApi.CommentsReplySuccess])

    return (
        
        <div className="VideoCommentSectionWrapper">
            <div className="VideoComment_commentTitle">
                <div className="VideoComment_Title">Comment</div>
                <div className="VideoComment_CommentIcon"><CommentIcon style={{fontSize: 'xx-large',marginLeft: '-5rem', marginTop: '0.5rem'}}/></div>
            </div>
            <div className="VideoComment_CommentList">
            {
                props.videoDetails &&
                props.videoDetails.comments.map((comment, commentIndex) => {
                    return(
                        <section className="VideoComment_Container">
                            <div className="VideoComment_Wrapper" key ={commentIndex}>
                            <div 
                            className="VideoComment_profileComment" style={{display:'flex'}}>
                            <Link to= '/userprofile'>
                                <LazyLoadImage  className="VD_CommenterDp"
                                placeholder={<div><img src={miniLoader} /></div>} 
                                onClick={() => handleProfileCommentVideoClick(comment.user_id)}
                                src={comment.profile_pic} alt=""/>
                                
                                <span 
                                onClick={() => handleProfileCommentVideoClick(comment.user_id)}
                                className="VideoComment_Usernamecommented">{comment.user_name}
                                </span>
                            </Link>
                                <div  className="VideoComment_UsercommentedTime">{comment.comment_date}</div>
                            </div>


                                <div className="VideoComment_UserComment">{comment.comment}</div>
                                
                                <div className="VideoComment_UserCommentReply">
                                    {
                                        comment.reply.map((reply, replyIndex) => {
                                            return(
                                                <>
                                                <div className="VideoComment_ParticularReply" key={replyIndex}>
                                                <div className="rplyProfileComment" style={{display:'flex'}}>
                                                <Link to= '/userprofile'>
                                                <LazyLoadImage placeholder={<div><img src={miniLoader} /></div>}
                                                onClick={() => handleProfileReplyVideoClick(reply.user_id)}
                                                src={reply.profile_pic} style={{width: '2rem', height: '2rem', borderRadius: '50%'}}/>
                                                <span 
                                                onClick={() => handleProfileReplyVideoClick(reply.user_id)}
                                                style={{margin:'0px', whiteSpace: 'nowrap', color:'#006DB0'}}>{reply.user_name}
                                                </span>
                                                </Link>
                                                <div style={{marginLeft: '12vw', whiteSpace: 'nowrap', color:'#006DB0'}}>{reply.reply_date}</div>
                                                </div>
                                                <div className="VideoComment_ReplyReply">{reply.reply}</div>
                                                </div>
                                                </>
                                            )
                                        })
                                    }
                                </div>

                                <form onSubmit={handleReply}>
                                    <p id={`textInput${commentIndex}`}  style={{display: 'none'}}>
                                        <textarea className="VD_ReplyBox"
                                        rows="2" 
                                        cols="58"
                                        ref={replyInput} 
                                        id="replyInput"
                                        type="text" 
                                        required 
                                        onChange={(e) => handleReplyText(e, comment.comment_id)} />
                                        <button>Post</button>
                                        <button type="button" onClick={() => handleReplyHideInput(commentIndex)}>&times;</button>
                                    </p>
                                </form>

                                <span className="VideoComment_ReplyButton">
                                    <button className={commentIndex} id={`reply${commentIndex}`} onClick={ () => handleReplyShowInput(commentIndex) }>Reply</button>
                                </span>

                            </div>
                        </section>
                    )
                })
            }
            </div>
            {
                props.videoDetails &&
                <form onSubmit={handleComment}>

                <textarea className="VD_Commentbox" ref={commentInput} 
                rows="3" 
                cols="60" 
                placeholder= "Comment Here"
                required 
                name="comment" 
                onChange={(e) => handleCommentText(e)} 
                />
                <br/>
                <button className="VideoComment_PostBtn">Post</button>
                </form>
            }
        </div>
    )
}

export default VideoComments
