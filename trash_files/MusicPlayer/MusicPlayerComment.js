import React,{useState, useEffect }from 'react';
import uuid from 'react-uuid';
import CommentIcon from '@material-ui/icons/Comment';
import './MusicPlayerComment.css'


const MusicPlayerComment = (props) => {
    console.log('props from Music Comment',props);
    const [commentId, setCommentId] = useState();
    const [comments, setComments] = useState([])

    const[commentReplyByUser,setcommentReplyByUser] = useState({
        CommentsReplyUserInput: '',
    });

    const [commentInputField,setcommentInputField] = useState({
        CommentUserInput : '',
    });

    const handleSubmitComment = (e) => {
        e.preventDefault();
        localStorage.setItem('uuid from music page comment', uuid())
        console.log('pressed');
        const id = localStorage.getItem('id');
        const type = localStorage.getItem('TYPE');
        console.log('typeeeeeeeeeeeeeee', type)
        props.fetchAllComments(commentInputField.CommentUserInput,id,type) 
        console.log('ffffffffkkkkkkkkkkkkk',id,type)
        setcommentInputField({CommentUserInput:''})
    }

    const handleChangeComment = (e) => {
        console.log('e.target.value',e.target.value)
        setcommentInputField({...commentInputField,
        [e.target.name] : e.target.value})
        }

        const handleSubmitReply = (e) => {
            e.preventDefault();
            console.log('replied',commentId)
            props.fetchAllCommentsReply(commentReplyByUser.CommentsReplyUserInput, commentId)
            setcommentReplyByUser({CommentsReplyUserInput: ''})
        }
    
        const handleReplyChange = (e, id) => {
            console.log ('e.target.value',e.target.value)
            setcommentReplyByUser({...commentReplyByUser,
                [e.target.name] : e.target.value})
            setCommentId(id)
        }

        useEffect(() => {
            const id = localStorage.getItem('id');
            props.fetchAllCommentsReply(commentReplyByUser.CommentsReplyUserInput,id);
        },[])
        
        // useEffect(() => {
        //     if(props.AllAudiosFromAPI.ReplyComment.CommentsReplyGetApi.CommentsReplySuccess){
        //         const id = localStorage.getItem('id');
        //         props.fetchAllAudios(id)
        //         setComments(props.AllAudiosFromAPI.Comment.CommentsTrendingPageGetApi.allCommentsFromCommentApi.comments)
        //     }
        // }, [props.AllAudiosFromAPI.ReplyComment.CommentsReplyGetApi.CommentsReplySuccess])


        console.log('replycheck',props)

    useEffect(() => {
        const id = localStorage.getItem('id');
        props.fetchMusicCommentList(id)
    }, [])

    useEffect(() => {
        const id = localStorage.getItem('id');
        props.fetchMusicCommentList(id)
    }, [props.AllAudiosFromAPI.ReplyComment.CommentsReplyGetApi.CommentsReplySuccess])  

    useEffect(() => {
        const id = localStorage.getItem('id');
        props.fetchMusicCommentList(id)
    }, [props.AllAudiosFromAPI.Comment.CommentsTrendingPageGetApi.CommentsTrendingPageSuccess])
    console.log('gfdsa',props)
    return (
        <div className="MusicPageCommentsContainer">
            {/* <section className="MusicCommentProfile" style={{display:'flex',justifyContent: 'space-between'}}>
                <div className="MusicProfileComment">
                    <img src={props.AllAudiosFromAPI.AudioPage.AudioPageGetApi.allAudioPageApi.music_id && props.AllAudiosFromAPI.AudioPage.AudioPageGetApi.allAudioPageApi.user_profile_pic} alt=""/>
                </div>
                    <div className="MusicfollowInCommentBtn">
                        <button>Connect</button>
                    </div>
                    <div className="MusicfollowInCommentBtn">
                        <button>Customize</button>
                    </div>
            </section> */}
                <div className="Music_commentShowContainer">
                    <form onSubmit={handleSubmitComment}>
                    <div className="MusicPagecommentTitle" 
                    style={{display: 'flex',
                    justifyContent: 'space-between',
                    marginLeft: '0rem',
                    marginBottom: '0.5rem'}}>
                    {/* <p>Comments</p> */}
                        <div className="MusicPage">
                            <input type="text" name="CommentUserInput" 
                            onChange={ (e) => {handleChangeComment(e)}} 
                            autoComplete="off"
                            placeholder="Comment Here.........................." 
                            value={commentInputField.CommentUserInput} 
                            style={{width:'141%',margin: '-5px 0rem',height: '4rem',color: 'black'}}/>
                        </div>
                        <div className="MusicPagecommentLogo">
                            <button className="BlogCommentBtn"Page style={
                                {backgroundColor: 'skyblue',
                                width: '7rem',
                                height: '4rem',
                                margintop: '-0.5rem',
                                borderRadius: '22%'}}>
                                <CommentIcon/>
                            </button>
                        </div>
                    </div>
                    </form>
                    <div className="MusicCommentList" style={{width:'27vw',height:'28vh',overflowY:'scroll'}}>
                        {
                            props.AllAudiosFromAPI.MusicPageComments.MusicCommentsListGetApi.allMusicCommentsList && 
                            props.AllAudiosFromAPI.MusicPageComments.MusicCommentsListGetApi.allMusicCommentsList.comments ?

                            props.AllAudiosFromAPI.MusicPageComments.MusicCommentsListGetApi.allMusicCommentsList.comments && 
                            props.AllAudiosFromAPI.MusicPageComments.MusicCommentsListGetApi.allMusicCommentsList.comments.map((element ,index) => {
                            return(
                            <>
                                <div  style={{ background:'white', marginTop:'2vh'}}>
                                    <div className="profileComment" style={{display:'flex'}}>
                                        <img src={element.profile_pic} alt="" style={{borderRadius:'50%',width:'3vw', height:'5vh'}}/>
                                        <div style={{width: '14rem'}}>{element.user_name}</div>
                                        <div style={{marginLeft:'8vw',width: '9rem'}}>{element.comment_date}</div>
                                    </div>
                                    <b>{element.comment}</b>
                                    <p style={{border: '1px solid black', margin: '1rem 0.5rem', background: '#f5f5f5'}} >
                                {
                                    element.reply.length > 0 &&
                                    element.reply.map((replyElement, replyIndex) => {
                                    return(
                                        <div style={{textAlign: 'end',width: '99%',marginBottom: '3rem'}}>
                                            <div style={{margin: '0.2rem'}}>
                                                <span style= {{marginRight: '2.5rem',color: 'black'}}>{replyElement.reply_date}</span>
                                                <span style={{marginRight: '0.5rem', color: 'skyblue'}}>{replyElement.user_name}</span>
                                                <img src={replyElement.profile_pic} style={{width: '2rem', height: '2rem', borderRadius: '50%'}} alt=""/>
                                                                        
                                            </div>
                                            <p>{replyElement.reply}</p>
                                        </div>
                                    )
                                    })
                                }
                                    </p>
                                                        
                                <div style={{justifyContent: 'center',display: 'flex'}} >
                                    <span>
                                    <button onClick={ () => document.getElementById(`input${index}`).style.display="block" }>Reply</button>
                                    </span>
                                    {
                                        <form  onSubmit={handleSubmitReply} >
                                            <p id={`input${index}`} className={`input${index}`} style={{display: 'none'}}>
                                            <input 
                                            name="CommentsReplyUserInput" 
                                            autoComplete="off"
                                            type="text" 
                                            value={commentReplyByUser.CommentsReplyUserInput}
                                            onChange={ (e) => {handleReplyChange(e, element.comment_id)}}/>
                                            <button>Post</button>
                                            <button onClick={ () => document.getElementById(`input${index}`).style.display="none" }>&times;</button>
                                        </p>
                                        </form>
                                    }
                                </div>
                                </div>
                            </>
                                            )
                            })
                            :''
                            }
                            </div>
                            <div>
                            {/* <form onSubmit={handleSubmitComment}>
                    <div  style={{display:'flex'}}> */}
                        {/* <div >
                            <input type="text" 
                            name="CommentUserInput" 
                            value={commentInputField.CommentUserInput}
                            onChange={ (e) => {handleChangeComment(e)}} 
                            placeholder="Comment Here"  
                            style={{color: 'Black',width: '25vw', border: 'solid 1px red'}} 
                            required/>
                        </div> */}
                        {/* <div>
                            <input
                            name="CommentUserInput" 
                            value={commentInputField.CommentUserInput}
                            // placeholder="Comment Here"  
                            onChange={ (e) => {handleChangeComment(e)}} 
                            type="text" />
                        </div>

                        <div className="MusicDetailcommentLogo">
                            <button className="MusicDetail" style={{backgroundColor: 'skyblue'}}><CommentIcon/></button>
                        </div> */}
                    {/* </div>
                </form> */}
                </div>
                            </div>

                
        </div>
    )
}

export default MusicPlayerComment
