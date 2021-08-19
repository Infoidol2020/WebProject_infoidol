import React,{useState,useEffect} from 'react'
import loader from '../../assets/pageLoader.svg';
import './VideoViewPageComment.css'
import '../PictureViewPage/PictureViewComment.css'


import CommentIcon from '@material-ui/icons/Comment';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ReportProblemIcon from '@material-ui/icons/ReportProblem';

import LinkIcon from '@material-ui/icons/Link';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';



import uuid from 'react-uuid'
import ShareMedia from '../Feed/ShareMedia';

const VideoViewPageComment = (props) => {

    console.log('videoprop',props.VideoDetail)
    const [like, setLike] = useState(false);
    const [elementId, setElementId] = useState()
    const [elementType, setElementType] = useState()
    const [commentList,setCommentList]=useState([])
    const [commentId, setCommentId] = useState();
    const [VideoDetail, setVideoDetail] = useState();
    const [reportCategories, setReportCategories] = useState([])
    const [message, setMessage] = useState(false)
    const [categoryName, setCategoryName] = useState()
    const [connectStatus, setConnectStatus] =useState({})
    const [CustomizeName,setCustomizeName] =useState({})

    //share element 
    const [shareElementLink, setShareElementLink] = useState()
    const [shareElementTitle, setShareElementTitle] = useState()
    const [shareElementDescription, setShareElementDescription] = useState()
    const [shareElementThumbnail, setShareElementThumbnail] = useState()
    const [shareElementType, setShareElementType] = useState()


    //handle share
    const handleShareClick = (link, title, description, thumbnail, type) => {
        // console.log('twert', type)
        setShareElementLink(link)
        setShareElementTitle(title)
        setShareElementDescription(description)
        setShareElementThumbnail(thumbnail)
        setShareElementType(type)
        // console.log('elemIddd', id)
    }

    console.log('action_beeeeeeeaaannnnnn',props)
    const [commentInputField,setcommentInputField] = useState({
        CommentUserInput : '',
    });

    const[commentReplyByUser,setcommentReplyByUser] = useState({
        CommentsReplyUserInput: '',
    });

    const handleLike =(videoId, videoType) =>{
        console.log('proplplplp', videoId, videoType)
        props.hitLikeApi(videoId, videoType)
    }
    


    
    const handleCategoryChange = (e) => {
        console.log('eeee', e.target.value)
        setMessage(false);
        setCategoryName(e.target.value);
    }
    const handleReportSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('ReportKey', uuid())
        props.postReportAPI(categoryName, elementId, elementType)
    }


    const handlePostData = (element_Id, element_Type) => {
        setElementId(element_Id)
        setElementType(element_Type)
        // console.log(element_Id, element_Type);
    }



    const handleSubmitComment = (e) => {
        e.preventDefault();
        console.log('pressed');
        const id = localStorage.getItem('id');
        props.fetchAllComments(commentInputField.CommentUserInput, 
            props.VideoDetails.VideoView.VideoDetailPageGetApi.allVideoDetail.video_detail.video_id,
            props.VideoDetails.VideoView.VideoDetailPageGetApi.allVideoDetail.video_detail.type)
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
        setcommentReplyByUser({CommentsReplyUserInput:''})
    
    }

    const handleReplyChange = (e, id) => {
        console.log ('e.target.valueiytre', id)
        setcommentReplyByUser({...commentReplyByUser,
            [e.target.name] : e.target.value})
        setCommentId(id)

    }

    const handleConnectClick= () =>{
        const UI = localStorage.getItem('UI');
        props.hitconnectAPI(UI)
    }

    const handledisConnectClick = () =>{
        const UI = localStorage.getItem('UI');
        props.hitconnectRejectAPI(UI)

    }

    const handleCustomizeClick= (e) =>{
        console.log('kl',e.target.value)
        const UI = localStorage.getItem('UI');
        props.hitMakeCustomizeAPI(props.VideoDetails.VideoView.VideoDetailPageGetApi.allVideoDetail.video_detail.user_id,
            e.target.value)

    }

    useEffect(() => {
        const id = localStorage.getItem('id');
        props.fetchAllVideoView(id); 
    }, [])

    useEffect(() => {
        if(props.VideoDetails.VideoView.VideoDetailPageGetApi.allVideoDetail){
            setCommentList(props.VideoDetails.VideoView.VideoDetailPageGetApi.allVideoDetail.comments)
        }
        
        }, [props.VideoDetails.VideoView.VideoDetailPageGetApi.VideoDetailPageSuccess])

        //comment refresh
        useEffect(() => {
            const id = localStorage.getItem('id');
            if(props.VideoDetails.Comment.CommentsTrendingPageGetApi.CommentsTrendingPageSuccess){
                props.fetchAllVideoView(id); 
            }
        }, [props.VideoDetails.Comment.CommentsTrendingPageGetApi.CommentsTrendingPageSuccess])
    
        //reply refersh
        useEffect(() => {
            const id = localStorage.getItem('id');
            if(props.VideoDetails.ReplyComment.CommentsReplyGetApi.CommentsReplySuccess){
                props.fetchAllVideoView(id); 
            }
        }, [props.VideoDetails.ReplyComment.CommentsReplyGetApi.CommentsReplySuccess])

        useEffect(() => {
        setReportCategories(props.VideoDetails.Report.ReportCategoriesGetApi.reportCategories)
    },[props.VideoDetails.Report.ReportCategoriesGetApi.ReportCategoriesSuccess])

    useEffect(() => { 
        props.fetchReportCategories()
    }, []) 

    useEffect(() => {
        if(props.VideoDetails.Report.ReportPostApi.ReportPostSuccess){
        setMessage(!message)
        }
    }, [props.VideoDetails.Report.ReportPostApi.ReportPostSuccess, localStorage.getItem('ReportKey')])


        //like refresh
        useEffect(() =>{
            const id = localStorage.getItem('id');
            if(props.VideoDetails.Like.LikeApi.LikeApiSuccess){
    
                props.fetchAllVideoView(id);
            }
        },[props.VideoDetails.Like.LikeApi.LikeApiSuccess])


    // console.log(localStorage.getItem('VVP_Commkey'))

    useEffect(() => {
        if(props.VideoDetails.VideoView.VideoDetailPageGetApi.allVideoDetail){
            setVideoDetail(props.VideoDetails.VideoView.VideoDetailPageGetApi.allVideoDetail.video_detail)
        }
    }, [])


//    For refresh
    console.log('bvcx',props.VideoDetails.Comment.CommentsTrendingPageGetApi.CommentsTrendingPageSuccess)
    






    //Connect refresh
    useEffect(() =>{
        if(props.VideoDetails.connect.connectApi.connectSuccess ||
            props.VideoDetails.connect.connectRejectApi.connectRejectSuccess ||
            props.VideoDetails.makeCustomize.makeCustomizeApi.makeCustomizeSuccess){
        props.fetchAllVideoView(localStorage.getItem('id'))

            }
            // props.fetchAllVideoView(localStorage.getItem('UI'))
            if(props.VideoDetails.VideoView.VideoDetailPageGetApi.allVideoDetail){
                if(props.VideoDetails.VideoView.VideoDetailPageGetApi.allVideoDetail.connection_status !== undefined ){
                    setConnectStatus(props.VideoDetails.VideoView.VideoDetailPageGetApi.allVideoDetail.connection_status)
                }
                if(props.VideoDetails.VideoView.VideoDetailPageGetApi.allVideoDetail.customize_name !== undefined){
                    setCustomizeName(props.VideoDetails.VideoView.VideoDetailPageGetApi.allVideoDetail.customize_name)
                }
            }
    },[props.VideoDetails.connect.connectApi.connectSuccess,
        props.VideoDetails.connect.connectRejectApi.connectRejectSuccess,
        props.VideoDetails.makeCustomize.makeCustomizeApi.makeCustomizeSuccess
    ])

    console.log('rtyu23456iop',props.VideoDetails.VideoView.VideoDetailPageGetApi.VideoDetailPageInProgress)

        // { set state not working need to fix it.... calling api(fetchAllComment()) directly through props... }
        // useEffect(() =>{
        //     const id = localStorage.getItem('id');
        //     props.fetchAllVideoView(id);

        //     if(props.VideoDetails.VideoView &&
        //         props.VideoDetails.VideoView.VideoDetailPageGetApi &&
        //         props.VideoDetails.VideoView.VideoDetailPageGetApi.allVideoDetail &&
        //         props.VideoDetails.VideoView.VideoDetailPageGetApi.allVideoDetail.video_detail &&
        //          props.VideoDetails.VideoView.VideoDetailPageGetApi.allVideoDetail.video_detail.video_id
        //         && props.VideoDetails.VideoView.VideoDetailPageGetApi.allVideoDetail.video_detail.type ){
        //     setElementId(props.VideoDetails.VideoView.VideoDetailPageGetApi.allVideoDetail.video_detail.video_id)
        //     setElementType(props.VideoDetails.VideoView.VideoDetailPageGetApi.allVideoDetail.video_detail.type)
        //         }
        // },[])

    return (
        
        <div>
                {/* Share modal */}
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

                {/* report modal */}
            <div style={{marginTop: '10vh'}} class="modal fade" id="reportModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                message ?
                                    <div style={{textAlign: 'center'}}>
                                    <p style={{color: '#B22222', fontSize : '2rem', fontWeight: 'bold' }}>Reported Successfully...</p>
                                    </div>
                                    : ''
                            }
                        </div>
                        <div class="modal-body">
                        <form  onSubmit={ (e) => handleReportSubmit(e)}>
                            {
                                reportCategories.map((element, index) => {
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
                                {/* <button type="button" class="btn btn-primary">Save changes</button> */}
                        </div>
                    </div>
                </div>
            </div>
            {
                props.VideoDetails.VideoView.VideoDetailPageGetApi.VideoDetailPageInProgress ?
                 <img src ={loader} style={{display: 'flex',backgroundColor: '#dadada', alignItems: 'center', justifyContent: 'center'}} />
                :
            <div className="VV_CommentBlock" >
                <section className="VV_CommentProfile">
                    <div className="picProfileComment">
                        <img src={(props.VideoDetails.VideoView.VideoDetailPageGetApi.allVideoDetail && 
                            props.VideoDetails.VideoView.VideoDetailPageGetApi.allVideoDetail.video_detail) 
                            && props.VideoDetails.VideoView.VideoDetailPageGetApi.allVideoDetail.video_detail.user_profile_pic} alt=""/>

                        
                    </div>
                    <div className="VideoViewComment_followInCommentBtn">
                    {
                            localStorage.getItem('WebAppUserKey') === localStorage.getItem('UI') ?
                            ''
                            :

                            (props.VideoDetails.VideoView.VideoDetailPageGetApi.allVideoDetail && props.VideoDetails.VideoView.VideoDetailPageGetApi.allVideoDetail.connection_status === 1) &&
                            <button
                                onClick={() => handleConnectClick()}>Connect <LinkIcon/> </button>
                        }
                        {
                            localStorage.getItem('WebAppUserKey') === localStorage.getItem('UI') ?
                            ''
                            :
                            (props.VideoDetails.VideoView.VideoDetailPageGetApi.allVideoDetail && props.VideoDetails.VideoView.VideoDetailPageGetApi.allVideoDetail.connection_status === 4) &&
                            <button  
                            onClick={() => handledisConnectClick()}>Connected <CheckCircleIcon/> </button>
                        }
                        {
                            localStorage.getItem('WebAppUserKey') === localStorage.getItem('UI') ?
                            ''
                            :
                            (props.VideoDetails.VideoView.VideoDetailPageGetApi.allVideoDetail && props.VideoDetails.VideoView.VideoDetailPageGetApi.allVideoDetail.connection_status === 2 ||
                                props.VideoDetails.VideoView.VideoDetailPageGetApi.allVideoDetail && props.VideoDetails.VideoView.VideoDetailPageGetApi.allVideoDetail.connection_status === 3)  &&
                            <button disabled>Pending <RemoveCircleOutlineIcon/> </button>
                        }
                    </div>

                    <div className="VideoViewComment_Customize ">
                        {
                            localStorage.getItem('WebAppUserKey') === localStorage.getItem('UI') ?
                            ''
                            :
                            <div>
                                <select 
                            onChange={(e) => handleCustomizeClick(e)}
                            style={{background: 'transparent linear-gradient(90deg, #1E9FC8 0%, #3C34AC 100%)', 
                                border: '0', 
                                outline: 'none', 
                                color: '#fff', 
                                width: '8vw', 
                                height: '5vh',
                                marginLeft: '3vw',
                                marginTop:'3.5vh', 
                                borderRadius: '10px'}}>
                                        {
                                        (props.VideoDetails.VideoView.VideoDetailPageGetApi.allVideoDetail && 
                                            props.VideoDetails.VideoView.VideoDetailPageGetApi.allVideoDetail.customize_name !== null) &&
                                            <option value={''}>{props.VideoDetails.VideoView.VideoDetailPageGetApi.allVideoDetail.customize_name}</option>
                                        }
                                {
                                    ( props.VideoDetails.VideoView.VideoDetailPageGetApi.allVideoDetail && 
                                        props.VideoDetails.VideoView.VideoDetailPageGetApi.allVideoDetail.customize_list) && 
                                    props.VideoDetails.VideoView.VideoDetailPageGetApi.allVideoDetail.customize_list.map((element, index) => {
                                        return(
                                            <>
                                            {
                                                props.VideoDetails.VideoView.VideoDetailPageGetApi.allVideoDetail.customize_name !== element.name &&
                                                <option style={{background: '#555'}} value={element.customize_id}>{element.name}</option>
                                            }
                                            </>
                                        )
                                    })
                                }
                            </select>
                            </div>
                            
                        }
                    </div>
                </section>
                <section className="commentSectionVC">
                
                
                    {
                        props.VideoDetails.VideoView.VideoDetailPageGetApi.allVideoDetail &&
                        props.VideoDetails.VideoView.VideoDetailPageGetApi.allVideoDetail.video_detail && 
                        props.VideoDetails.VideoView.VideoDetailPageGetApi.allVideoDetail.video_detail.type == 1 ?
                        <div className="likeShareVideo">
                            <div className="likeVideoVC"style={{marginTop: '12vh',marginLeft:'0.56vw'}}>
                            <div onClick={() => handleLike(props.VideoDetails.VideoView.VideoDetailPageGetApi.allVideoDetail.video_detail.video_id, 
                                                        props.VideoDetails.VideoView.VideoDetailPageGetApi.allVideoDetail.video_detail.type)}  title="hit like">
                                {
                                    props.VideoDetails.VideoView.VideoDetailPageGetApi.allVideoDetail.video_detail.like_status ? 
                                    <i class="fas fa-thumbs-up" style={{color:'Blue',fontSize:'xx-large' }}></i> :
                                    <i class="fas fa-thumbs-up"  style={{color:'black',fontSize:'xx-large'}}></i>
                                
                                }
                                <span >{ props.VideoDetails.VideoView.VideoDetailPageGetApi.allVideoDetail.video_detail.no_of_like}</span>
                            </div>

                            </div>
                            {/* <div className="sharePicture" style={{color:'black',marginTop: '7vh'}}>
                                <i class="fas fa-share iconComment"/>
                            </div> */}
                            <div style={{ margin: '0.5rem', cursor: 'pointer',color:'black',marginTop: '3vh'}}>
                                <span onClick={() => handleShareClick(
                                    props.VideoDetails.VideoView.VideoDetailPageGetApi.allVideoDetail.video_detail.video_link, 
                                    props.VideoDetails.VideoView.VideoDetailPageGetApi.allVideoDetail.video_detail.video_title, 
                                    props.VideoDetails.VideoView.VideoDetailPageGetApi.allVideoDetail.video_detail.video_caption, 
                                    props.VideoDetails.VideoView.VideoDetailPageGetApi.allVideoDetail.video_detail.video_thumbnail_link, 
                                    props.VideoDetails.VideoView.VideoDetailPageGetApi.allVideoDetail.video_detail.type)} 
                                    style={{marginLeft: '0.5vw'}} data-toggle="modal" data-target="#exampleModalCenter"><i className="fas fa-share" style={{fontSize:'2vw'}}></i></span>
                            </div>

                            <div className="reportVc"  style={{color:'black',marginTop: '3vh',marginLeft:'0.2vw'}}>
                                                    {/* <i class="fas fa-exclamation-triangle iconComment"></i> */}
                                <div style={{ }}>
                                    <button data-toggle="modal" data-target="#reportModal" style={{fontSize:'2.5rem',background: 'transparent', border: '0', outline: 'none'}}
                                        onClick={() => handlePostData(props.VideoDetails.VideoView.VideoDetailPageGetApi.allVideoDetail.video_detail.image_id, props.VideoDetails.VideoView.VideoDetailPageGetApi.allVideoDetail.video_detail.type)}><ReportProblemIcon style={{fontSize:'xx-large'}}/></button>
                                </div>

                            </div>
                        </div>
                        :''

                    }
                    
                            
                            <div className="VideoViewpage_commentBox">
                                <div className="commentHeading">
                                    <div className="VideoViewpage_commentTitle">
                                        <div className="VideoViewComment_CommentTitle">Comment</div>
                                    {/* </div>
                                    <div className="commentLogo"> */}
                                        <div className="VideoViewComment_CommentIcon"><CommentIcon style={{fontSize: 'xx-large',marginLeft: '-5rem', marginTop: '0.5rem'}}/></div>
                                    </div>
                                </div>
                                <div className="VS_commentShowContainer">
                                    <div className="VideoViewpage_CommentList">
                                        {
                                            (props.VideoDetails.VideoView.VideoDetailPageGetApi.allVideoDetail &&
                                            props.VideoDetails.VideoView.VideoDetailPageGetApi.allVideoDetail.comments) ?
                                            props.VideoDetails.VideoView.VideoDetailPageGetApi.allVideoDetail.comments && props.VideoDetails.VideoView.VideoDetailPageGetApi.allVideoDetail.comments.map((element ,index) => {
                                                return(
                                                    <>
                                                        <div  style={{ background:'white', marginTop:'2vh',width: '46rem'}}>
                                                            <div className="VideoViewComment_profileComment" style={{display:'flex'}}>
                                                                <img src={element.profile_pic} alt="" style={{borderRadius:'50%',width:'3vw', height:'5vh'}}/>
                                                                <div className="VideoViewComment_Usernamecommented">{element.user_name}</div>
                                                                <div className="VideoViewComment_UsercommentedTime">{element.comment_date}</div>
                                                            </div>
                                                            <div className="VideoViewComment_UserComment">
                                                                {element.comment}
                                                                </div>
                                                            {
                                                                element.reply.length > 0 &&
                                                            <div className="VideoViewComment_replySection">{
                                                                element.reply.map((replyElement , replyIndex) => {
                                                                    return(
                                                                        <div style={{}}>
                                                                            
                                                                            <div className="rplyProfileComment" style={{display:'flex'}}>
                                                                            <img src={replyElement.profile_pic} style={{width: '2rem', height: '2rem', borderRadius: '50%'}}/>
                                                                            <div style={{margin:'0px'}}>{replyElement.user_name}</div>
                                                                            <div style={{marginLeft:'17vw',margin:'0px,0px,0px'}}>{replyElement.reply_date}</div>
                                                                            </div>
    
                                                                            <span style={{color:'black',margin:'2rem 0px'}}>{replyElement.reply}</span>
                                                                        </div>
                                                                    )
                                                                    
                                                                })
                                                            }
                                                            </div>
                                                            
                                                        }
                                                        
                                                        <div style={{display:'flex',marginTop:'0.5rem'}}>
                                                            <img src={element.profile_pic} style={{width: '3rem', height: '3rem',borderRadius:'50%'}} alt=""/>
                                                            <div>
                                                                <span>
                                                                    <button onClick={ () => document.getElementById(`input${index}`).style.display="block" } style={{backgroundColor: 'skyblue',borderRadius:'12px',marginLeft:'0.5rem'}}>Reply</button>
                                                                </span>
                                                                {
                                                                    <form  onSubmit={handleSubmitReply} >
                                                                        <p id={`input${index}`} className={`input${index}`} style={{display: 'none'}}>
                                                                        <textarea
                                                                        rows="2" 
                                                                        cols="65" 
                                                                        name="CommentsReplyUserInput" 
                                                                        value={commentReplyByUser.CommentsReplyUserInput}
                                                                        autocomplete="off"
                                                                        onChange={ (e) => {handleReplyChange(e,element.comment_id)}} 
                                                                        style={{width:'23vw', borderRadius:'6px'}}
                                                                        required/>
                                                                        <button style={{backgroundColor: 'skyblue',borderRadius:'7px'}}>Post</button>
                                                                        </p>
                                                                    </form>
                                                                }
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </>
                                                )
                                            })
                                            :''
                                        }

                                    </div>
                                </div>

                                    <form onSubmit={handleSubmitComment}>
                                        <div className="VideodetailcommentTitle" >
                                            <div className="VideoViewComment_VideoDetail">
                                                <textarea
                                                rows="3" 
                                                cols="68" 
                                                name="CommentUserInput" 
                                                value={commentInputField.CommentUserInput}
                                                autocomplete="off"
                                                onChange={ (e) => {handleChangeComment(e)}} 
                                                placeholder="Comment Here"  
                                                style={{marginTop: '0.5rem'}} 
                                                required/>
                                            </div>

                                            <div className="VideoDetailcommentLogo">
                                                <button className="VideoDetail VideoViewComment_PostButton" style={{backgroundColor: 'skyblue'}}>Post</button>
                                            </div>
                                        </div>
                                        
                                </form>
                            </div>
                        </section>

            </div>
            }        
        </div>
    )
}

export default VideoViewPageComment
