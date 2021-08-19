import React,{useState, useEffect }from 'react';
import { useHistory } from 'react-router-dom';
import {Link} from 'react-router-dom'
import './BlogViewComment.css';
// import Image from "../../assets/img.png";
// import pinky from '../../assets/img.png';
// import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import CommentIcon from '@material-ui/icons/Comment';
// import AccountCircleIcon from '@material-ui/icons/AccountCircle';
// import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
// import ReportProblemIcon from '@material-ui/icons/ReportProblem';
// import {fetchAllComments} from '../../redux/CommentTrendingBlog';
// import zIndex from '@material-ui/core/styles/zIndex';


import miniLoader from '../../assets/miniLoader.svg'

import { LazyLoadImage } from 'react-lazy-load-image-component';

const BlogViewComment = (props) => {
    // console.log('props checking from Blog show page', props)

 // Profile Redirection Click
 const handleProfileCommentBlogClick = (user_id) => {
    localStorage.setItem('userProfileId', user_id)
    props.fetchUserProfile(user_id)
            // console.log('elemIddd', user_id)
}
// Profile Redirection Click
const handleProfileReplyBlogClick = (user_id) => {
    localStorage.setItem('userProfileId', user_id)
    props.fetchUserProfile(user_id)
            console.log('elemIddd', user_id)
}
    // const [like, setLike] = useState(false);
    // const [commentList, setCommentList] = useState([])
    const history = useHistory();
    const [commentId, setCommentId] = useState();
    const [comments, setComments] = useState([])
    const [blogId, setBlogId] = useState()
    const [blogType, setBlogType] = useState()


    const [commentInputField,setcommentInputField] = useState({
        CommentUserInput : '',
    });

    const[commentReplyByUser,setcommentReplyByUser] = useState({
        CommentsReplyUserInput: '',
    });

// const [showReply, setShowReply] = useState(false)
//   const handleClick = () => setShowReply(!showReply)
    const handleChangeBlogComment = (e) => {
        // console.log ('e.target.value',e.target.value)
        setcommentInputField({...commentInputField,
            [e.target.name] : e.target.value})
    }

//For input
    const handleSubmitBlogComment = (e) => {
        // console.log('Blog Comment 123456789', props.RecomBlogsFromApi.RecomBlog.BlogShowPageGetApi.allBlogDetails.blog_detail.blog_id)
        e.preventDefault();
        if(localStorage.getItem('WebAppUserKey') === null || localStorage.getItem('WebAppUserKey') == '' ){
            history.push('/login')
            return
        }
        // console.log('pressed');
        props.fetchAllComments(commentInputField.CommentUserInput, props.RecomBlogsFromApi.RecomBlog.BlogShowPageGetApi.allBlogDetails.blog_detail.blog_id,
        props.RecomBlogsFromApi.RecomBlog.BlogShowPageGetApi.allBlogDetails.blog_detail.type)
        setcommentInputField({CommentUserInput: ''})
    }
//For Reply

const handleReplyChange = (e, id) => {
    // console.log ('e.target.value',e.target.value)
    setcommentReplyByUser({...commentReplyByUser,
        [e.target.name] : e.target.value})
    setCommentId(id)
}
    const handleSubmitReply = (e) => {
        e.preventDefault();
        if(localStorage.getItem('WebAppUserKey') === null || localStorage.getItem('WebAppUserKey') == '' ){
            history.push('/login')
            return

        }
        // console.log('replied',commentId)
        props.fetchAllCommentsReply(commentReplyByUser.CommentsReplyUserInput, commentId)
        setcommentReplyByUser({CommentsReplyUserInput: ''})
    }
    useEffect(() => {
        const id = localStorage.getItem('id');
        // console.log('id frm local storageee',id);
        props.fetchAllRecmBlogs(id);
        
    },[props.RecomBlogsFromApi.RecomBlog.BlogShowPageGetApi.BlogShowPageSuccess])

    useEffect(() => {
        const id = localStorage.getItem('id');
        props.fetchAllCommentsReply(commentReplyByUser.CommentsReplyUserInput,id);
    },[])
 //set Blog Id &Blog Type
    useEffect(() => {
        props.RecomBlogsFromApi.RecomBlog.BlogShowPageGetApi.allBlogDetails && 
        props.RecomBlogsFromApi.RecomBlog.BlogShowPageGetApi.allBlogDetails.comments && setComments(props.RecomBlogsFromApi.RecomBlog.BlogShowPageGetApi.allBlogDetails.comments)
        if(props.RecomBlogsFromApi.RecomBlog.BlogShowPageGetApi.allBlogDetails &&
            props.RecomBlogsFromApi.RecomBlog.BlogShowPageGetApi.allBlogDetails.blog_detail  ){
            setBlogId(props.RecomBlogsFromApi.RecomBlog.BlogShowPageGetApi.allBlogDetails.blog_detail.blog_id)
            setBlogType(props.RecomBlogsFromApi.RecomBlog.BlogShowPageGetApi.allBlogDetails.blog_detail.type)
        }
    }, [props.RecomBlogsFromApi.RecomBlog.BlogShowPageGetApi.BlogShowPageSuccess])
    
    // comment auto update  
    useEffect(() => {
        if(props.RecomBlogsFromApi.Comment.CommentsTrendingPageGetApi.CommentsTrendingPageSuccess){
            const id = localStorage.getItem('id');
            props.fetchAllRecmBlogs(id);
            setComments(props.RecomBlogsFromApi.RecomBlog.BlogShowPageGetApi.allBlogDetails.comments)
        }
    }, [props.RecomBlogsFromApi.Comment.CommentsTrendingPageGetApi.CommentsTrendingPageSuccess])

  // reply auto update
    useEffect(() => {
        if(props.RecomBlogsFromApi.ReplyComment.CommentsReplyGetApi.CommentsReplySuccess){
            const id = localStorage.getItem('id');
            props.fetchAllRecmBlogs(id)
            if(props.RecomBlogsFromApi.RecomBlog.BlogShowPageGetApi.allBlogDetails){
                setComments(props.RecomBlogsFromApi.RecomBlog.BlogShowPageGetApi.allBlogDetails.comments)
            }
        }
    }, [props.RecomBlogsFromApi.ReplyComment.CommentsReplyGetApi.CommentsReplySuccess])
    
    return (
        <div>
            <div className="BlogPageAllWrapper">
            <div className="BlogPagecommentHeading">
            <form onSubmit={handleSubmitBlogComment}>
            <div className="BlogPageBlogcommentTitle" style={{display: 'flex',justifyContent: 'space-between'}}>
                <div className="BlogCommentInput">
                    <input type="text" name="CommentUserInput" 
                    onChange={ (e) => {handleChangeBlogComment(e)}  } 
                    autoComplete="off"
                    placeholder="Comment Here................" 
                    value={commentInputField.CommentUserInput} 
                    className="BD_inputBox"
                    style={{width:'37vw',margin: '-5px 0rem',height: '4rem',color: 'black'}}
                    />
                </div>

                <div className="BlogPagecommentLogo">
                    <button className="BlogCommentButton" style={
                        {backgroundColor: 'skyblue',
                        width: '7rem',
                        borderRadius: '22%',
                        marginTop: '-0.5rem'}}>
                        <CommentIcon/>
                    </button>
                </div>
                
            </div>
            </form>
            </div>            
                    <div className="BlogPagecommentBlock">
                        <section className="BlogPagecommentSection">
                            <div className="BlogPagecommentBox">
                                <div className="BlogPagecommentContent" >
                                    {
                                        props.RecomBlogsFromApi.RecomBlog.BlogShowPageGetApi.allBlogDetails &&
                                        props.RecomBlogsFromApi.RecomBlog.BlogShowPageGetApi.allBlogDetails.comments &&
                                        props.RecomBlogsFromApi.RecomBlog.BlogShowPageGetApi.allBlogDetails.comments.map((element, index) => {
                                            // console.log('elements', element)
                                            return(
                                                <section>
                                                    <div style={{background: 'rgb(0 0 0 / 8%)'}}>                                                    
                                                    <div className="BlogView_Comment_infos" style={{margin: '1rem 0.5rem',marginBottom: '3rem'}}>
                                                        <div>

                                                        <Link to= '/userprofile'>
                                                        <span style={{margin: '1rem'}}>
                                                            <LazyLoadImage placeholder={<div><img src={miniLoader} /></div>} 
                                                            onClick={() => handleProfileCommentBlogClick(element.user_id)}
                                                            src={element.profile_pic} 
                                                            style={{width: '4rem', height: '4rem',borderRadius: '50%'}} 
                                                            alt=""/>
                                                        </span>
                                                        <span 
                                                        onClick={() => handleProfileCommentBlogClick(element.user_id)}
                                                        style={{margin: '0rem',color: '#006DB0'}}>{element.user_name}</span>
                                                        </Link>

                                                        <span style={{margin: '1.5rem',color: '#006DB0'}}>{element.comment_date}</span>
                                                        </div>
                                                            <p>{element.comment.length > 100 ? 
                                                                element.comment.slice(0, 100) : 
                                                                element.comment}
                                                            </p>                                                    
                                                        </div>

                                                    <p style={{border: '1px solid black', margin: '1rem 0.5rem', background: '#f5f5f5'}} >
                                                        {
                                                            element.reply.length > 0 &&
                                                            element.reply.map((replyElement, replyIndex) => {
                                                            return(
                                                                <div style={{textAlign: 'end',width: '99%',marginBottom: '3rem'}}>
                                                                    <div style={{margin: '0.2rem'}}>
                                                                        <span style= {{marginRight: '2.5rem',color: 'black', color:'#006DB0'}}>{replyElement.reply_date}</span>
                                                                        <Link to= '/userprofile'>
                                                                        <span
                                                                        onClick={() => handleProfileReplyBlogClick(replyElement.user_id)}
                                                                        style={{marginRight: '0.5rem', color: '#006DB0'}}>{replyElement.user_name}</span>
                                                                        <LazyLoadImage placeholder={<div><img src={miniLoader} /></div>}
                                                                        onClick={() => handleProfileReplyBlogClick(replyElement.user_id)}
                                                                        src={replyElement.profile_pic} 
                                                                        style={{width: '2rem', height: '2rem', borderRadius: '50%'}}
                                                                        />
                                                                        </Link>
                                                                    </div>
                                                                    <p>{replyElement.reply}</p>
                                                                    
                                                                </div>
                                                            )
                                                            })
                                                        }
                                                    </p>
                                                    </div>
                                                    <div style={{justifyContent: 'center',display: 'flex'}} >
                                                        <span>
                                                        <button onClick={ () => document.getElementById(`input${index}`).style.display="block" }>Reply</button>
                                                        </span>
                                                        {
                                                            <form  onSubmit={handleSubmitReply} >
                                                                <p id={`input${index}`} className={`input${index}`} style={{display: 'none'}}>
                                                                <input 
                                                                name="CommentsReplyUserInput" 
                                                                type="text" 
                                                                autoComplete="off"
                                                                value={commentReplyByUser.CommentsReplyUserInput}
                                                                onChange={ (e) => {handleReplyChange(e, element.comment_id)}}/>
                                                                <button>Post</button>
                                                                <button type="button" onClick={ () => document.getElementById(`input${index}`).style.display="none" }>&times;</button>
                                                            </p>
                                                            </form>
                                                        }
                                                    </div>
                                                </section>
                                            )
                                        })
                                    }
                                    
                                </div>
                            </div>
                        </section>
                    </div>
            </div>        
        </div> 
    )
}

export default BlogViewComment
