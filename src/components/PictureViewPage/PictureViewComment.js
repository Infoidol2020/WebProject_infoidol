import React,{useEffect,useState, useRef}from 'react';
import uuid from 'react-uuid' 
import {Link} from 'react-router-dom'
import './PictureViewComment.css';


// import axios from 'axios';
// import Image from "../../assets/img.png";
// import pinky from '../../assets/img.png';
// import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import CommentIcon from '@material-ui/icons/Comment';
// import AccountCircleIcon from '@material-ui/icons/AccountCircle';
// import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ReportProblemIcon from '@material-ui/icons/ReportProblem';
// import {connect} from 'react-redux'
import ShareMedia from '../Feed/ShareMedia';
import LinkIcon from '@material-ui/icons/Link';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import { useHistory } from 'react-router-dom';

import miniLoader from '../../assets/miniLoader.svg'

import { LazyLoadImage } from 'react-lazy-load-image-component';




const PictureViewComment = (props) => {
    // console.log('PictureViewComment--',props)
    // Profile Redirection Click
 const handleProfileCommentPictureClick = (user_id) => {
    localStorage.setItem('userProfileId', user_id)
    props.fetchUserProfile(user_id)
            console.log('elemIddd', user_id)
}
    // Profile Redirection Click
    const handleProfileReplyPictureClick = (user_id) => {
        localStorage.setItem('userProfileId', user_id)
        props.fetchUserProfile(user_id)
                console.log('elemIddd', user_id)
    }
    const history = useHistory();
    const modalCloseBtn = useRef();
    // console.log('commmm',props)
    const [commentInputField,setcommentInputField] = useState({
        CommentUserInput : '',
    });

    const[commentReplyByUser,setcommentReplyByUser] = useState({
        CommentsReplyUserInput: '',
    });


    const [commentList,setCommentList]=useState([])
    // const [props.AllPictureListFromAPI.PictureView.PictureDetailPageGetApi.allPictureDetail.picture_detail, setPictureDetail] =useState([])
    const [reportCategories, setReportCategories] = useState([])

    const [commentId, setCommentId] = useState();
    const [elementId, setElementId] = useState()
    const [elementType, setElementType] = useState()
    const [message, setMessage] = useState(false)
    const [categoryName, setCategoryName] = useState()
    const [ConnectStatus,setConnectStatus] = useState({})
    const [CustomizeName,setCustomizeName] = useState({})

    //share element 
    const [shareElementLink, setShareElementLink] = useState()
    const [shareElementTitle, setShareElementTitle] = useState()
    const [shareElementDescription, setShareElementDescription] = useState()
    const [shareElementThumbnail, setShareElementThumbnail] = useState()
    const [shareElementType, setShareElementType] = useState()


    // useEffect(() => {
    //     const id = localStorage.getItem('id');
        // console.log('idddddddddd', id)
    //     props.fetchAllPictureView(id);
    // }, [props.AllPictureListFromAPI.Comment.CommentsTrendingPageGetApi.CommentsTrendingPageSuccess])
    


    const handleSubmitComment = (e) => {
        e.preventDefault();
        if(localStorage.getItem('WebAppUserKey') === null || localStorage.getItem('WebAppUserKey') == '' ){
            history.push('/login')
            return
        }
        // console.log('pressed');
        const id = localStorage.getItem('id');
        props.fetchAllComments(commentInputField.CommentUserInput,
            props.AllPictureListFromAPI.PictureView.PictureDetailPageGetApi.allPictureDetail.picture_detail.image_id,
            props.AllPictureListFromAPI.PictureView.PictureDetailPageGetApi.allPictureDetail.picture_detail.type)
            setcommentInputField({CommentUserInput:''})
    }

    const handleChangeComment = (e) => {
        // console.log('e.target.value',e.target.value)
        setcommentInputField({...commentInputField,
        [e.target.name] : e.target.value})

    }
    const handleReplyChange = (e, id) => {
        // console.log ('e.target.valueiytre', id)
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
        setcommentReplyByUser({CommentsReplyUserInput:''})

    }

    const handleLike = (elementId, elementType) => {
        if(localStorage.getItem('WebAppUserKey') === null || localStorage.getItem('WebAppUserKey') == '' ){
            history.push('/login')
            return
        }
        props.hitLikeApi(elementId, elementType)
        // console.log('clicked from user feed like', elementId, elementType)
    }

    const handleReportSubmit = (e) => {
        e.preventDefault();
        if(localStorage.getItem('WebAppUserKey') === null || localStorage.getItem('WebAppUserKey') == '' ){
            modalCloseBtn.current.close()
            history.push('/login')
            return
        }
        localStorage.setItem('ReportKey', uuid())
        props.postReportAPI(categoryName, elementId, elementType)
    }

    const handleCategoryChange = (e) => {
        // console.log('eeee', e.target.value)
        setMessage(false);
        setCategoryName(e.target.value);
    }

    const handlePostData = (element_Id, element_Type) => {
        setElementId(element_Id)
        setElementType(element_Type)
        // console.log(element_Id, element_Type);
    }

    
    const handleConnectClick= () =>{
        if(localStorage.getItem('WebAppUserKey') === null || localStorage.getItem('WebAppUserKey') == '' ){
            history.push('/login')
            return
        }
        const UI = localStorage.getItem('UI');
        props.hitconnectAPI(UI)
    }
    const handledisConnectClick = () =>{
        const UI = localStorage.getItem('UI');
        props.hitconnectRejectAPI(UI)
    
    }

    const handleCustomizeClick= (e) =>{
        if(localStorage.getItem('WebAppUserKey') === null || localStorage.getItem('WebAppUserKey') == '' ){
            history.push('/login')
            return
        }
        // console.log('kl',e.target.value)
        const UI = localStorage.getItem('UI');
        props.hitMakeCustomizeAPI(props.AllPictureListFromAPI.PictureView.PictureDetailPageGetApi.allPictureDetail.picture_detail.user_id,e.target.value)
    }


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

    // Profile Redirection Click
    const handlePicProfileClick = (user_id) => {
        localStorage.setItem('userProfileId', user_id)
        props.fetchUserProfile(user_id)
                console.log('elemIddd', user_id)

    }
    useEffect(() => {
        const id = localStorage.getItem('id');
        props.fetchAllPictureView(id);
    }, [])

//     useEffect(() =>{
//         const id = localStorage.getItem('id');
// // if(props.AllPictureListFromAPI.PictureView &&
// //     props.AllPictureListFromAPI.PictureView.PictureDetailPageGetAp &&
// //     props.AllPictureListFromAPI.PictureView.PictureDetailPageGetApi.allPictureDetail &&
// //     props.AllPictureListFromAPI.PictureView.PictureDetailPageGetApi.allPictureDetail.picture_detail &&
// //     props.AllPictureListFromAPI.PictureView.PictureDetailPageGetApi.allPictureDetail.picture_detail.image_id
// //     && props.AllPictureListFromAPI.PictureView.PictureDetailPageGetApi.allPictureDetail.picture_detail.type ){
// // setElementId(props.AllPictureListFromAPI.PictureView.PictureDetailPageGetApi.allPictureDetail.picture_detail.image_id)
// // setElementType(props.AllPictureListFromAPI.PictureView.PictureDetailPageGetApi.allPictureDetail.picture_detail.type)
// //     }

// props.fetchAllPictureView(id);
// },[props.AllPictureListFromAPI.PictureView.PictureDetailPageGetApi.PictureDetailPageSuccess])

// console.log('exec', props.AllPictureListFromAPI)
    useEffect(() => {
        if(props.AllPictureListFromAPI.PictureView.PictureDetailPageGetApi.PictureDetailPageSuccess){
        setCommentList(props.AllPictureListFromAPI.PictureView.PictureDetailPageGetApi.allPictureDetail.comments)
        const id = localStorage.getItem('id');
            props.fetchAllPictureView(id);
        }
        // setPictureDetail(props.AllPictureListFromAPI.PictureView.PictureDetailPageGetApi.allPictureDetail.picture_detail)
    }, [props.AllPictureListFromAPI.PictureView.PictureDetailPageGetApi.PictureDetailPageSuccess])

    useEffect(() => {
        // console.log('executed ....',props.AllPictureListFromAPI.Comment.CommentsTrendingPageGetApi.CommentsTrendingPageSuccess )
        if(props.AllPictureListFromAPI.Comment.CommentsTrendingPageGetApi.CommentsTrendingPageSuccess){
            const id = localStorage.getItem('id');
            props.fetchAllPictureView(id);
        }
    }, [props.AllPictureListFromAPI.Comment.CommentsTrendingPageGetApi.CommentsTrendingPageSuccess])

    useEffect(() => {
        if(props.AllPictureListFromAPI.ReplyComment.CommentsReplyGetApi.CommentsReplySuccess){
            const id = localStorage.getItem('id');
            props.fetchAllPictureView(id);
        }
    }, [props.AllPictureListFromAPI.ReplyComment.CommentsReplyGetApi.CommentsReplySuccess])

    useEffect(() => { 
        props.fetchReportCategories()
    }, [])
    useEffect(() => {
        setReportCategories(props.AllPictureListFromAPI.Report.ReportCategoriesGetApi.reportCategories)
    },[props.AllPictureListFromAPI.Report.ReportCategoriesGetApi.ReportCategoriesSuccess])



    useEffect(() => {
        const id = localStorage.getItem('id');
        if(props.AllPictureListFromAPI.Like.LikeApi.LikeApiSuccess){
            props.fetchAllPictureView(id)
        }
    }, [props.AllPictureListFromAPI.Like.LikeApi.LikeApiSuccess])


    // console.log('Like',props.AllPictureListFromAPI.Like.LikeApi.LikeApiSuccess)
    
    // useEffect(() => {
    //     const id = localStorage.getItem('id');
    //     console.log('iddd', id)
    //     props.fetchAllPictureView(id);
    // },[props.AllPictureListFromAPI.ReplyComment.CommentsReplyGetApi.CommentsReplySuccess])



    useEffect(() => {
        if(props.AllPictureListFromAPI.Report.ReportPostApi.ReportPostSuccess){
        setMessage(!message)
        }
    }, [props.AllPictureListFromAPI.Report.ReportPostApi.ReportPostSuccess, localStorage.getItem('ReportKey')])

    //Connect refresh
    useEffect(() =>{
        props.fetchAllPictureView(localStorage.getItem('id'))
            // props.fetchAllVideoView(localStorage.getItem('UI'))
            if(props.AllPictureListFromAPI.PictureView.PictureDetailPageGetApi.allPictureDetail){
                if(props.AllPictureListFromAPI.PictureView.PictureDetailPageGetApi.allPictureDetail.connection_status !== undefined ){
                    setConnectStatus(props.AllPictureListFromAPI.PictureView.PictureDetailPageGetApi.allPictureDetail.connection_status)
                }
                if(props.AllPictureListFromAPI.PictureView.PictureDetailPageGetApi.allPictureDetail.customize_name !== undefined){
                    setCustomizeName(props.AllPictureListFromAPI.PictureView.PictureDetailPageGetApi.allPictureDetail.customize_name)
                }

            }
    },[props.AllPictureListFromAPI.connect.connectApi.connectSuccess,
        props.AllPictureListFromAPI.connect.connectRejectApi.connectRejectSuccess,
    props.AllPictureListFromAPI.makeCustomize.makeCustomizeApi.makeCustomizeSuccess])

    // console.log('executed ....',props.AllPictureListFromAPI.Comment.CommentsTrendingPageGetApi.CommentsTrendingPageSuccess )



        // console.log('qqqqqqqq', props.AllPictureListFromAPI)
    return (
        <div style={{width:'39vw'}}>
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
                            <button ref={modalCloseBtn} type="button" class="close" 
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

                    <div className="commentBlock">
                        
                                    <>
                                    <section className="commentProfile">
                                        <Link to= '/userprofile' className='xjxj'>
                                        <div 
                                        onClick={() => handlePicProfileClick(props.AllPictureListFromAPI.PictureView.PictureDetailPageGetApi.allPictureDetail.picture_detail.user_id)}
                                        className="picProfileComment">
                                            <LazyLoadImage placeholder={<div><img src={miniLoader} /></div>} src={props.AllPictureListFromAPI.PictureView.PictureDetailPageGetApi.allPictureDetail.picture_detail && 
                                                props.AllPictureListFromAPI.PictureView.PictureDetailPageGetApi.allPictureDetail.picture_detail.user_profile_pic} alt=""/>
                                        </div>
                                        </Link>

                                        <div className="followInCommentBtn">
                                        {
                            localStorage.getItem('WebAppUserKey') === localStorage.getItem('UI') ?
                            ''
                            :

                            (props.AllPictureListFromAPI.PictureView.PictureDetailPageGetApi.allPictureDetail &&props.AllPictureListFromAPI.PictureView.PictureDetailPageGetApi.allPictureDetail.connection_status === 1) &&
                            <button
                                onClick={() => handleConnectClick()}  
                                style={{background: 'transparent linear-gradient(90deg, #1E9FC8 0%, #3C34AC 100%)', 
                                border: '0'}} >Connect <LinkIcon/> </button>
                        }
                        {
                            localStorage.getItem('WebAppUserKey') === localStorage.getItem('UI') ?
                            ''
                            :
                            (props.AllPictureListFromAPI.PictureView.PictureDetailPageGetApi.allPictureDetail && props.AllPictureListFromAPI.PictureView.PictureDetailPageGetApi.allPictureDetail.connection_status === 4) &&
                            <button  
                            onClick={() => handledisConnectClick()} 
                                style={{background: '#8FBC8F', 
                                opacity: '1'}} >Connected <CheckCircleIcon/> </button>
                        }
                        {
                            localStorage.getItem('WebAppUserKey') === localStorage.getItem('UI') ?
                            ''
                            :
                            (props.AllPictureListFromAPI.PictureView.PictureDetailPageGetApi.allPictureDetail && props.AllPictureListFromAPI.PictureView.PictureDetailPageGetApi.allPictureDetail.connection_status === 2 ||
                                props.AllPictureListFromAPI.PictureView.PictureDetailPageGetApi.allPictureDetail && props.AllPictureListFromAPI.PictureView.PictureDetailPageGetApi.allPictureDetail.connection_status === 3)  &&
                            <button  
                                disabled
                                style={{background: '#CCCC00', 
                                opacity: '0.8'}} >Pending <RemoveCircleOutlineIcon/> </button>
                        }
                                            {/* <button>Connect</button> */}
                                        </div>

                                        <div className="followInCommentBtn">
                                        {
                                            localStorage.getItem('WebAppUserKey') === localStorage.getItem('UI') ?
                                            ''
                                            :
                                            <div>
                                                <select 
                                                    onChange={(e) => handleCustomizeClick(e)}
                                                    style={{
                                                                color: '#fff',
                                                                border: '0',
                                                                borderRadius: '10px',
                                                                outline: 'none',
                                                                height: '5vh',
                                                                marginTop:'4vh', 
                                                                marginLeft:'2vw',
                                                                background: 'transparent linear-gradient(90deg, #1E9FC8 0%, #3C34AC 100%)'}}>
                                                                {
                                                                props.AllPictureListFromAPI.PictureView.PictureDetailPageGetApi.allPictureDetail.customize_name!== null &&
                                                                    <option value={''}>{props.AllPictureListFromAPI.PictureView.PictureDetailPageGetApi.allPictureDetail.customize_name}</option>
                                                                }
                                                                {
                                                                    props.AllPictureListFromAPI.PictureView.PictureDetailPageGetApi.allPictureDetail.customize_list && props.AllPictureListFromAPI.PictureView.PictureDetailPageGetApi.allPictureDetail.customize_list.map((element, index) => {
                                                                        return(
                                                                            <>
                                                                            {
                                                                                props.AllPictureListFromAPI.PictureView.PictureDetailPageGetApi.allPictureDetail.customize_namee !== element.name &&
                                                                                <option style={{background: '#555'}} value={element.customize_id}>{element.name}</option>
                                                                            }
                                                                            </>
                                                                        )
                                                                    })
                                                                }
                                                    </select>

                                                        </div>
                                                        
                                                    }
                                            {/* <button>Customize</button> */}
                                        </div>
                                    </section>
                                    </>
                                
                        
                        <section className="commentSection">
                                        <>  
                                        {
                                            props.AllPictureListFromAPI.PictureView.PictureDetailPageGetApi.allPictureDetail.picture_detail && props.AllPictureListFromAPI.PictureView.PictureDetailPageGetApi.allPictureDetail.picture_detail.type === 3 ?
                                            <div className="likeSharePicture">
                                                <div className="likePicture" style={{marginLeft:'0.9rem'}}>
                                                    <div onClick={() => handleLike( props.AllPictureListFromAPI.PictureView.PictureDetailPageGetApi.allPictureDetail.picture_detail.image_id, 
                                                        props.AllPictureListFromAPI.PictureView.PictureDetailPageGetApi.allPictureDetail.picture_detail.type)}  title="hit like">
                                                    {
                                                        props.AllPictureListFromAPI.PictureView.PictureDetailPageGetApi.allPictureDetail.picture_detail.like_status ? 
                                                        <i class="fas fa-thumbs-up" style={{color:'Blue',fontSize:'xx-large' }}></i> :
                                                        <i class="fas fa-thumbs-up"  style={{color:'black',fontSize:'xx-large'}}></i>
                                                    
                                                    }
                                                    
                                                    <span >{ props.AllPictureListFromAPI.PictureView.PictureDetailPageGetApi.allPictureDetail.picture_detail.no_of_like}</span>
                                                    </div>
                                                </div>
                                                <div style={{ margin: '0.5rem', cursor: 'pointer'}}>
                                                    <span onClick={() => handleShareClick(
                                                        props.AllPictureListFromAPI.PictureView.PictureDetailPageGetApi.allPictureDetail.picture_detail.picture_link,
                                                        props.AllPictureListFromAPI.PictureView.PictureDetailPageGetApi.allPictureDetail.picture_detail.picture_title, 
                                                        props.AllPictureListFromAPI.PictureView.PictureDetailPageGetApi.allPictureDetail.picture_detail.picture_caption, 
                                                        props.AllPictureListFromAPI.PictureView.PictureDetailPageGetApi.allPictureDetail.picture_detail.picture_link,
                                                        props.AllPictureListFromAPI.PictureView.PictureDetailPageGetApi.allPictureDetail.picture_detail.type)} 
                                                        style={{marginLeft: '0.5vw'}} data-toggle="modal" data-target="#exampleModalCenter">
                                                        <i className="fas fa-share" id="PD_ShareIcon" ></i>
                                                    </span>
                                                </div>

                                                <div className="reportPicture"  style={{color:'black'}}>
                                                    {/* <i class="fas fa-exclamation-triangle iconComment"></i> */}
                                                <div style={{ }}>
                                                <button data-toggle="modal" data-target="#reportModal"    style={{fontSize:'2.5rem',background: 'transparent', border: '0', outline: 'none'}}
                                                    onClick={() => handlePostData(props.AllPictureListFromAPI.PictureView.PictureDetailPageGetApi.allPictureDetail.picture_detail.image_id,
                                                    props.AllPictureListFromAPI.PictureView.PictureDetailPageGetApi.allPictureDetail.picture_detail.type)}>
                                                    <ReportProblemIcon id="PD_ReportIcon" />
                                                </button>
                                                </div>
                                                </div>
                                            </div>
                                            :''
                                        }
                                        </>
                            
                            <div className="commentBox">
                                <div className="commentHeading">
                                    <div className="commentTitle">
                                        <div className="hgf">Comment</div>
                                
                                        <div className="hgf"><CommentIcon/></div>
                                    </div>
                                </div>
                        
                                <div className="TrendingBlogcommentHeading">
                                    <div className="CommentList" >
                                    {
                                        props.AllPictureListFromAPI.PictureView.PictureDetailPageGetApi.allPictureDetail.comments ?
                                        props.AllPictureListFromAPI.PictureView.PictureDetailPageGetApi.allPictureDetail.comments && 
                                        props.AllPictureListFromAPI.PictureView.PictureDetailPageGetApi.allPictureDetail.comments.map((element,index) =>{
                                            return(
                                                <>

                                                    <div style={{ background:'white', marginTop:'2vh'}}>
                                                        <div className="profileComment" style={{display:'flex'}}>
                                                        <Link to= '/userprofile'>
                                                            <LazyLoadImage  placeholder={<div><img src={miniLoader} /></div>}
                                                            onClick={() => handleProfileCommentPictureClick(element.user_id)}
                                                            className="PD_CommentDp"
                                                            src={element.profile_pic} alt="" />
                                                            <span 
                                                            onClick={() => handleProfileCommentPictureClick(element.user_id)}
                                                            style={{whiteSpace: 'nowrap', marginLeft: '0.5rem',color: '#006DB0'}}>{element.user_name}</span>
                                                        </Link>

                                                        <div style={{marginLeft:'auto', whiteSpace: 'nowrap',color: '#006DB0'}}>{element.comment_date}</div>
                                                        </div>
                                                        <b>{element.comment}</b>
                                                        {
                                                            element.reply.length > 0 &&
                                                            <div className="replySection" style={{height:'6vh',borderRadius:'5px',overflowY: 'scroll',border: 'solid 1px black'}} >{
                                                                element.reply.map((replyElement , replyIndex) => {
                                                                    // console.log('elements picture cOMMENT', replyElement)
                                                                    return(
                                                                        <div style={{}}>
                                                                            
                                                                            <div className="rplyProfileComment" style={{display:'flex'}}>
                                                                            <Link to= '/userprofile'>
                                                                            <LazyLoadImage placeholder={<div><img src={miniLoader} /></div>}
                                                                            onClick={() => handleProfileReplyPictureClick(replyElement.user_id)}
                                                                            src={replyElement.profile_pic} style={{width: '2rem', height: '2rem', borderRadius: '50%'}}/>
                                                                            <span 
                                                                            onClick={() => handleProfileReplyPictureClick(replyElement.user_id)}
                                                                            style={{margin:'0px', whiteSpace: 'nowrap', marginLeft: '0.5rem', color:'#006DB0'}}>{replyElement.user_name}</span>
                                                                            </Link>
                                                                            <div style={{marginLeft:'auto',whiteSpace: 'nowrap',margin:'0px,0px,0px', color:'#006DB0'}}>{replyElement.reply_date}</div>
                                                                            </div>
                                                                            <b style={{color:'black',margin:'0px,0px,0px'}}>{replyElement.reply}</b>
                                                                        </div>
                                                                    )
                                                                    
                                                                })
                                                            }
                                                            </div>
                                                            
                                                        }
                                                        
                                                        <div style={{display:'flex',marginTop:'0.5rem'}}>
                                                            <LazyLoadImage placeholder={<div><img src={miniLoader} /></div>} src={element.profile_pic} style={{width: '3rem', height: '3rem',borderRadius:'50%'}} alt=""/>
                                                            <div>
                                                                <span>
                                                                    <button onClick={ () => document.getElementById(`input${index}`).style.display="block" } style={{backgroundColor: 'skyblue',borderRadius:'12px',marginLeft:'0.5rem'}}>Reply</button>
                                                                </span>
                                                                {
                                                                    <form  onSubmit={handleSubmitReply} >
                                                                        <p id={`input${index}`} className={`input${index}`} style={{display: 'none'}}>
                                                                        <input name="CommentsReplyUserInput"
                                                                        type="text"
                                                                        value={commentReplyByUser.CommentsReplyUserInput}
                                                                        autocomplete="off"
                                                                        onChange={ (e) => {handleReplyChange(e,element.comment_id)}}
                                                                        className="PD_Commenttoreplybox"
                                                                        // style={{width:'23vw', borderRadius:'6px'}} 
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
                                        : ''
                                        
                                    }
                                    </div>
                                    <form onSubmit={handleSubmitComment}>
                                    <div className="TrendingBlogBlogcommentTitle" style={{display:'flex'}}>
                                        <div className="TrendingBlo">
                                            <input type="text" 
                                            name="CommentUserInput" 
                                            value={commentInputField.CommentUserInput}
                                            autocomplete="off"
                                            onChange={ (e) => {handleChangeComment(e)}} 
                                            className="PD_Commenthere"
                                            placeholder="Comment Here"  
                                            required/>
                                        </div>

                                        <div className="TrendingBlogcommentLogo">
                                            <button className="TrendingBlo" style={{backgroundColor: '#006DB0'}}><CommentIcon/></button>
                                        </div>
                                    </div>
                                    
                                    </form>

                                
                                </div>
                            </div>
                        </section>
                    </div>
            
                </div>
            
            
    )
}



export default PictureViewComment
