import React, {useState,useEffect, useRef} from 'react';
import {Link} from 'react-router-dom'

import './BlogViewMain.css'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import BlogViewComment from './BlogViewComment'
import ReportProblemIcon from '@material-ui/icons/ReportProblem';
import uuid from 'react-uuid'
import ShareMedia from './ShareMedia'
import NotificationsIcon from '@material-ui/icons/Notifications';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import LinkIcon from '@material-ui/icons/Link';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import Slider from "react-slick";
import Carousel from 'react-elastic-carousel'
import { useHistory } from 'react-router-dom';

import miniLoader from '../../assets/miniLoader.svg'

import { LazyLoadImage } from 'react-lazy-load-image-component';




const BlogViewMain = (props) => {
    // console.log('Blog View Main',props)
    const history = useHistory();
    const modalCloseBtn = useRef();

    const handleBlogProfileClick = (profile_id) => {
        localStorage.setItem('userProfileId', profile_id)
        props.fetchUserProfile(profile_id)
        // console.log('handleAudioProfileClick',profile_id)
    }
    const settings = {
        infinite: true,
        speed: 500,
        lazyLoad: true,
        slidesToShow: 1,
        // slidesToScroll: 5,
        adaptiveHeight: true,
        arrows: true
    };
    // const [showCaption, setShowCaptions] = useState(false);
    // const handleHiddenblogDetailss = () => {
    //     setShowCaptions(!showCaption);  
    // } 
    // const [load, setLoad] = useState(true)
    // console.log('props from view main show page', props)
    const blogContainer = useRef();
    let [blogDetails,setblogDetails] = useState({});
    const [message, setMessage] = useState(false)
    const [categoryName, setCategoryName] = useState()

    const [blog_id, setblog_id] = useState()
    const [type, settype] = useState()
    const [SubscribeStatus,setSubscribeStatus] = useState();
    const [connectStatus, setConnectStatus] =useState({});
    const [CustomizeName,setCustomizeName] =useState({});
    
    const handleCategoryChange = (e) => {
        // console.log('eeee33333333333333', e.target.value)
        setCategoryName(e.target.value);
        setMessage(false);
        // console.log('eeee33333333333333', e.target.value)
    }
    
    const handlePostData = (blog_id, type) => {
        setblog_id(props.RecomBlogsFromApi.RecomBlog.BlogShowPageGetApi.allBlogDetails.blog_detail.blog_id)
        settype(type)
        // console.log(element_Id, element_Type);
    }

    const handleReportSubmit = (e) => {
        e.preventDefault();
        if(localStorage.getItem('WebAppUserKey') === null || localStorage.getItem('WebAppUserKey') == '' ){
            modalCloseBtn.current.click()
            history.push('/login')
            return
        }
        localStorage.setItem('ReportKey', uuid())
        props.postReportAPI(categoryName, blog_id, type)
    }
    useEffect(() => {
        if(props.RecomBlogsFromApi.RecomBlog.BlogShowPageGetApi.allBlogDetails){
            setblogDetails(props.RecomBlogsFromApi.RecomBlog.BlogShowPageGetApi.allBlogDetails.blog_detail)
        }
    }, [props.RecomBlogsFromApi.RecomBlog.BlogShowPageGetApi.BlogShowPageSuccess])

    useEffect(() => {
        const id = localStorage.getItem('id');
        // console.log('id frm local storage',id);
        props.fetchAllRecmBlogs(id);
        
    },[props.RecomBlogsFromApi.RecomBlog.BlogShowPageGetApi.BlogShowPageSuccess])
    
    
    // ..........report..............//
    useEffect(() => {
        if(props.RecomBlogsFromApi.Report.ReportPostApi.ReportPostSuccess){
            setMessage(!message)
        }
        
    }, [props.RecomBlogsFromApi.Report.ReportPostApi.ReportPostSuccess, localStorage.getItem('ReportKey')])
    
    // ..........like..............//
    const handleLike = (blog_id, type) => {
        if(localStorage.getItem('WebAppUserKey') === null || localStorage.getItem('WebAppUserKey') == '' ){
            history.push('/login')
            return
        }
        props.hitLikeApi(blog_id, type)
    }
     //like
    useEffect(() => {
    if(props.RecomBlogsFromApi.Like.LikeApi.LikeApiSuccess){
        // console.log('executedddddd')
        const id = localStorage.getItem('id');
        props.fetchAllRecmBlogs(id)
        setblogDetails(props.RecomBlogsFromApi.RecomBlog.BlogShowPageGetApi.allBlogDetails.blog_detail)

}
    }, [props.RecomBlogsFromApi.Like.LikeApi.LikeApiSuccess, blogDetails])

    // console.log('like props', props.RecomBlogsFromApi.Like.LikeApi.LikeApiSuccess)
    
    useEffect(() => {
        const id = localStorage.getItem('id');
        props.fetchAllRecmBlogs(id)
        // console.log('executeddddddddddddddddddddddddddddddddddddddddddddddd')
    }, [props.RecomBlogsFromApi.Report.ReportCategoriesGetApi.ReportCategoriesSuccess])
    //  console.log('kfkkkkkkkkkkkkkkk',props.RecomBlogsFromApi.Report.ReportCategoriesGetApi.ReportCategoriesSuccess)

    //share element 
    const [shareElementLink, setShareElementLink] = useState()
    const [shareElementTitle, setShareElementTitle] = useState()
    const [shareElementDescription, setShareElementDescription] = useState()
    const [shareElementThumbnail, setShareElementThumbnail] = useState()
    const [shareElementType, setShareElementType] = useState()

    //handle share
const handleBlogShareClick = (link, title, description, thumbnail, type) => {
    // console.log('twert', type)
    // setShareElementLink(link.split(''))
    setShareElementLink(link.slice(0,2))
    setShareElementTitle(title)
    setShareElementDescription(description)
    setShareElementThumbnail(thumbnail)
    setShareElementType(type)
    // console.log('elemIddd', id)
} 
const handleSubscribeClick =() =>{
    if(localStorage.getItem('WebAppUserKey') === null || localStorage.getItem('WebAppUserKey') == '' ){
        modalCloseBtn.current.click()
        history.push('/login')
        return
    }
    const UI = localStorage.getItem('UI');
    props.hitsubscribeAPI(UI)
}
const handleUnSubscribeClick = () =>{
    const UI = localStorage.getItem('UI');
    props.hitUnsubscribeAPI(UI)
}
const handleConnectClick= () =>{
    if(localStorage.getItem('WebAppUserKey') === null || localStorage.getItem('WebAppUserKey') == '' ){
        modalCloseBtn.current.click()
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
        modalCloseBtn.current.click()
        history.push('/login')
        return
    }
    // console.log('kl',e.target.value)
    const UI = localStorage.getItem('UI');
    props.hitMakeCustomizeAPI(props.RecomBlogsFromApi.RecomBlog.BlogShowPageGetApi.allBlogDetails.blog_detail && props.RecomBlogsFromApi.RecomBlog.BlogShowPageGetApi.allBlogDetails.blog_detail.user_id,e.target.value)

}

useEffect(() => {
    props.fetchAllRecmBlogs(localStorage.getItem('id'))
    // props.fetchAllVideoView(localStorage.getItem('UI'))
    if(props.RecomBlogsFromApi.RecomBlog.BlogShowPageGetApi.allBlogDetails){
        if(props.RecomBlogsFromApi.RecomBlog.BlogShowPageGetApi.allBlogDetails.subscribe_status !== undefined ){
            setSubscribeStatus(props.RecomBlogsFromApi.RecomBlog.BlogShowPageGetApi.allBlogDetails.subscribe_status)
        }
        if(props.RecomBlogsFromApi.RecomBlog.BlogShowPageGetApi.allBlogDetails.connection_status !== undefined ){
            setConnectStatus(props.RecomBlogsFromApi.RecomBlog.BlogShowPageGetApi.allBlogDetails.connection_status)
        }
        if(props.RecomBlogsFromApi.RecomBlog.BlogShowPageGetApi.allBlogDetails.customize_name !== undefined){
            setCustomizeName(props.RecomBlogsFromApi.RecomBlog.BlogShowPageGetApi.allBlogDetails.customize_name)
        }
    }
}, [props.RecomBlogsFromApi.Subscribe.subscribeApi.subscribeSuccess,
props.RecomBlogsFromApi.Subscribe.unsubscribeApi.unsubscribeSuccess,
props.RecomBlogsFromApi.connect.connectApi.connectSuccess,
props.RecomBlogsFromApi.connect.connectRejectApi.connectRejectSuccess,
props.RecomBlogsFromApi.makeCustomize.makeCustomizeApi.makeCustomizeSuccess
    ])
// var desc = setShareElementDescription.split('');


// console.log('descriptionmmmmmmmmmmm',props)
   return (
        <div ref={blogContainer}>
            <div className="Bvm_Share">
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

            <div style={{marginTop: '10vh'}} class="modal fade" id="reportModalBlog" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                        message &&
                        <div style={{textAlign: 'center'}}>
                            <p style={{color: '#B22222', fontSize : '2rem', fontWeight: 'bold' }}>Reported Successfully...</p>
                        </div>
                        
                    }
                </div>
                <div class="modal-body">
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
            <div className="BlogView_FirstContainer">
                <div className="BlogView_elems">
                {
                    props.RecomBlogsFromApi.RecomBlog.BlogShowPageGetApi.allBlogDetails &&
                    props.RecomBlogsFromApi.RecomBlog.BlogShowPageGetApi.allBlogDetails.blog_detail &&
                <>
                <div className="BlogViewContentsData" style={{marginLeft: '1rem'}}>
                    {/* <Slider {...settings}  style={{outline: 'none'}}> */}
                    <Carousel itemsToShow={1}>
                        {
                            // <img src={props.RecomBlogsFromApi.RecomBlog.BlogShowPageGetApi.allBlogDetails && 
                            //     props.RecomBlogsFromApi.RecomBlog.BlogShowPageGetApi.allBlogDetails.blog_detail && 
                            //     props.RecomBlogsFromApi.RecomBlog.BlogShowPageGetApi.allBlogDetails.blog_detail.blog_link} alt=""/>
                            (props.RecomBlogsFromApi.RecomBlog.BlogShowPageGetApi.allBlogDetails.blog_detail && 
                            props.RecomBlogsFromApi.RecomBlog.BlogShowPageGetApi.allBlogDetails.blog_detail.blog_link != undefined) &&
                            props.RecomBlogsFromApi.RecomBlog.BlogShowPageGetApi.allBlogDetails.blog_detail.blog_link.map((element) => {
                                let extension = element.split('.').pop();
                                return(
                                    <div className="BlogViewContentWrapper">
                                    {
                                    (extension === 'jpg' || extension === 'jpeg' || extension === 'png' || extension === 'jfif' ) ?
                                <div className="BlogViewContentImageWrapper" style={{outline: 'none'}}>
                                    <LazyLoadImage placeholder={<div><img src={miniLoader} /></div>}  className="BlogViewContentImage" src ={element} />
                                    <div className="BlogViewImageCatName" style={{textAlign: 'center', opacity: '0.85', fontWeight:'bold'}}>{element.cat_name}</div>
                                </div>
                                : ''
                                    }
                                    { 
                                    // extension === '3gp' 
                                (extension === 'mp4' || extension === 'webm' || extension === 'mkv') ?
                                <div className="BlogViewContentVideoWrapper" style={{outline: 'none'}}>
                                    <video  className="BlogViewContentVideo" controls src ={element} />
                                    <div className="BlogViewVideoCatName"style={{textAlign: 'center', opacity: '0.85', fontWeight:'bold'}}>{element.cat_name}</div>
                                </div> 
                                : ''
                                    }
                                </div>
                                )
                            })
                        }
                    {/* </Slider> */}
                    </Carousel>

                </div>

                    <section className="BlogToBlogViewiew_Wrapper" >
                        <div className="BlogView_information">
                                <div className="BlogView_additional_information">
                                    <div className="BlogView_Views">
                                        <b>{props.RecomBlogsFromApi.RecomBlog.BlogShowPageGetApi.allBlogDetails.blog_detail && props.RecomBlogsFromApi.RecomBlog.BlogShowPageGetApi.allBlogDetails.blog_detail.no_of_views}Views</b>
                                    </div>
                                    <div className="BlogView_Created_Time">
                                        <b> {props.RecomBlogsFromApi.RecomBlog.BlogShowPageGetApi.allBlogDetails.blog_detail && props.RecomBlogsFromApi.RecomBlog.BlogShowPageGetApi.allBlogDetails.blog_detail.created_date}</b>
                                    </div>

                                    <div className="TrendingBloglikeShareSection"
                                    // style={{display: 'flex',width: '20rem',justifyContent: 'space-between',marginLeft: '36rem',marginTop: '-0.5rem'}} 
                                    >
                                        <span>{props.RecomBlogsFromApi.RecomBlog.BlogShowPageGetApi.allBlogDetails.blog_detail.like_status}</span>
                                    <div onClick={() => { handleLike(props.RecomBlogsFromApi.RecomBlog.BlogShowPageGetApi.allBlogDetails.blog_detail.blog_id, props.RecomBlogsFromApi.RecomBlog.BlogShowPageGetApi.allBlogDetails.blog_detail.type);}} 
                                        style={{ margin: '0.5rem', cursor: 'pointer'}} title="hit like">
                                            {
                                                props.RecomBlogsFromApi.RecomBlog.BlogShowPageGetApi.allBlogDetails.blog_detail.like_status ? 
                                                <ThumbUpIcon style={{color: 'blue',fontSize: 'x-large'}}/> :
                                                <ThumbUpIcon style={{color: 'gray',fontSize: 'x-large'}}/>
                                            }
                                            <span style={{marginLeft: '0.5vw'}}>{props.RecomBlogsFromApi.RecomBlog.BlogShowPageGetApi.allBlogDetails.blog_detail.no_of_like}</span>
                                    </div>

                                                {/* Share Box */}
                                    <div style={{ margin: '0.5rem', cursor: 'pointer',color:'gray',fontSize: 'x-large',marginTop: '0.5px'}}>
                                        <span onClick={() => handleBlogShareClick(props.RecomBlogsFromApi.RecomBlog.BlogShowPageGetApi.allBlogDetails.blog_detail.blog_link,
                                                props.RecomBlogsFromApi.RecomBlog.BlogShowPageGetApi.allBlogDetails.blog_detail.blog_title, 
                                                props.RecomBlogsFromApi.RecomBlog.BlogShowPageGetApi.allBlogDetails.blog_detail.blog_description, 
                                                props.RecomBlogsFromApi.RecomBlog.BlogShowPageGetApi.allBlogDetails.blog_detail.blog_thumbnail_link, 
                                                props.RecomBlogsFromApi.RecomBlog.BlogShowPageGetApi.allBlogDetails.blog_detail.type)} 
                                            style={{marginLeft: '0.5vw'}} data-toggle="modal" data-target="#exampleModalCenter">
                                            <i className="fas fa-share"></i>
                                        </span>
                                    </div>

                                    {/* Report Box */}
                                        <div className="TrendingBlogreport">
                                            <div style={{padding: '0.5rem'}}>
                                            <button data-toggle="modal" data-target="#reportModalBlog"
                                            style={{background: 'transparent', border: '0', outline: 'none'}} 
                                            onClick={() => handlePostData(props.RecomBlogsFromApi.RecomBlog.BlogShowPageGetApi.allBlogDetails.blog_detail.video_id, props.RecomBlogsFromApi.RecomBlog.BlogShowPageGetApi.allBlogDetails.blog_detail.type)}><ReportProblemIcon  style={{color: 'gray',fontSize: 'x-large'}}/>
                                            </button>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <div className="rightSectionBlogShow">
                            <section className="TrendingBlogcommentProfile" style={{display:'flex'}}>
                            <Link to='./userprofile'>
                                <div className="TrendingBlogpicProfileComment"
                                onClick={() => handleBlogProfileClick(props.RecomBlogsFromApi.RecomBlog.BlogShowPageGetApi.allBlogDetails.blog_detail.user_id) }>
                                    <LazyLoadImage className="BD_Profilepic" placeholder={<div><img src={miniLoader} /></div>} src={props.RecomBlogsFromApi.RecomBlog.BlogShowPageGetApi.allBlogDetails.blog_detail.user_profile_pic} alt="" 
                                    // style={{borderRadius:'50%', width:'6vw',height:'7vh'}}
                                    />
                                </div>
                            </Link>

                                <div className="TrendingBlogfollowInCommentBtn">
                                {
                            localStorage.getItem('WebAppUserKey') === localStorage.getItem('UI') ?
                            ''
                            :

                            (props.RecomBlogsFromApi.RecomBlog.BlogShowPageGetApi.allBlogDetails && props.RecomBlogsFromApi.RecomBlog.BlogShowPageGetApi.allBlogDetails.connection_status === 1) &&
                            <button
                                onClick={() => handleConnectClick()}  
                                style={{background: 'transparent linear-gradient(90deg, #1E9FC8 0%, #3C34AC 100%)', 
                                // border: '0', 
                                // outline: 'none', 
                                // color: '#fff', 
                                // width: '7vw', 
                                // height: '5vh',
                                // marginLeft: '1vw',
                                // marginTop:'4vh', 
                                // borderRadius: '10px'
                            }} >Connect <LinkIcon/> </button>
                        }
                        {
                            localStorage.getItem('WebAppUserKey') === localStorage.getItem('UI') ?
                            ''
                            :
                            (props.RecomBlogsFromApi.RecomBlog.BlogShowPageGetApi.allBlogDetails && props.RecomBlogsFromApi.RecomBlog.BlogShowPageGetApi.allBlogDetails.connection_status === 4) &&
                            <button  
                                onClick={() => handledisConnectClick()} 
                                style={{background: '#8FBC8F', 
                                opacity: '1',
                                // border: '0', 
                                // outline: 'none', 
                                // color: '#fff', 
                                // width: '7vw',
                                // height: '5vh',
                                // marginLeft: '1vw',
                                // marginTop:'4vh', 
                                // borderRadius: '10px'
                            }} >Connected <CheckCircleIcon/> </button>
                        }
                        {
                            localStorage.getItem('WebAppUserKey') === localStorage.getItem('UI') ?
                            ''
                            :
                            (props.RecomBlogsFromApi.RecomBlog.BlogShowPageGetApi.allBlogDetails && props.RecomBlogsFromApi.RecomBlog.BlogShowPageGetApi.allBlogDetails.connection_status === 2 ||
                                props.RecomBlogsFromApi.RecomBlog.BlogShowPageGetApi.allBlogDetails && props.RecomBlogsFromApi.RecomBlog.BlogShowPageGetApi.allBlogDetails.connection_status === 3)  &&
                            <button  
                                disabled
                                style={{background: '#CCCC00', 
                                opacity: '0.8',
                                // border: '0', 
                                // outline: 'none', 
                                // color: '#fff', 
                                // width: '7vw',
                                // height: '5vh',
                                // marginLeft: '1vw',
                                // marginTop:'4vh', 
                                // borderRadius: '10px'
                            }} >Pending <RemoveCircleOutlineIcon/> </button>
                        }
                                </div>

                                <div className="TrendingBlogfollowInCommentBtn">
                                {
                            localStorage.getItem('WebAppUserKey') === localStorage.getItem('UI') ?
                            ''
                            :
                            <div className="BD_Customizebutton">
                                <select 
                            onChange={(e) => handleCustomizeClick(e)}
                            // style={{
                            //     marginLeft: '2vw', 
                            //     color: '#fff',
                            //     border: '0',
                            //     borderRadius: '10px',
                            //     outline: 'none',
                            //     width: '7vw',
                            //     height: '5vh',
                            //     marginTop:'4vh', 
                            //     marginLeft:'1vw',
                            //     background: 'transparent linear-gradient(90deg, #1E9FC8 0%, #3C34AC 100%)'}}
                                >
                                        {
                                        (props.RecomBlogsFromApi.RecomBlog.BlogShowPageGetApi.allBlogDetails.blog_detail && props.RecomBlogsFromApi.RecomBlog.BlogShowPageGetApi.allBlogDetails.customize_name !== null) &&
                                            <option value={''}>{props.RecomBlogsFromApi.RecomBlog.BlogShowPageGetApi.allBlogDetails.blog_detail && props.RecomBlogsFromApi.RecomBlog.BlogShowPageGetApi.allBlogDetails.customize_name}</option>
                                        }
                                {
                                    props.RecomBlogsFromApi.RecomBlog.BlogShowPageGetApi.allBlogDetails.blog_detail && props.RecomBlogsFromApi.RecomBlog.BlogShowPageGetApi.allBlogDetails.customize_list && props.RecomBlogsFromApi.RecomBlog.BlogShowPageGetApi.allBlogDetails.blog_detail && props.RecomBlogsFromApi.RecomBlog.BlogShowPageGetApi.allBlogDetails.customize_list.map((element, index) => {
                                        return(
                                            <>
                                            {
                                                props.RecomBlogsFromApi.RecomBlog.BlogShowPageGetApi.allBlogDetails.blog_detail && props.RecomBlogsFromApi.RecomBlog.BlogShowPageGetApi.allBlogDetails.customize_name !== element.name &&
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

                                <div className="TrendingBlogfollowInCommentBtn">
                                {
                                            localStorage.getItem('WebAppUserKey') === localStorage.getItem('UI') ?
                                            ''
                                            :
                                            props.RecomBlogsFromApi.RecomBlog.BlogShowPageGetApi.allBlogDetails && props.RecomBlogsFromApi.RecomBlog.BlogShowPageGetApi.allBlogDetails.subscribe_status === 0 ?
                                            <button  
                                            onClick={() => handleSubscribeClick()}
                                            style={{background: 'transparent linear-gradient(90deg, #1E9FC8 0%, #3C34AC 100%)', 
                                            // border: '0', 
                                            // outline: 'none', 
                                            // color: '#fff', 
                                            // width: '8vw',
                                            // height: '5vh',
                                            // marginLeft: '1vw',
                                            // marginTop:'4vh',  
                                            // borderRadius: '10px'
                                        }} >Subscribe <NotificationsIcon/> </button>
                                            :
                                            <button  
                                            onClick={() => handleUnSubscribeClick()}
                                            style={{background: '#A52A2A', 
                                            opacity: '0.8',
                                            // border: '0', 
                                            // outline: 'none', 
                                            // color: '#fff', 
                                            // width: '8vw',
                                            // height: '5vh',
                                            // marginLeft: '1vw', 
                                            // marginTop:'4vh', 
                                            // borderRadius: '10px'
                                        }} >Subscribed <NotificationsActiveIcon/> </button>
                                        }
                                </div>
                                <div>
                                    
                                </div>
                            </section>
                            <div className="BD_Title">
                            <h2 
                                // style={{marginTop: '1rem',marginLeft: '2rem',marginBottom:'2rem', color: 'burlywood',width: '61rem',fontSize:' x-large'}}
                                > 
                                    {props.RecomBlogsFromApi.RecomBlog.BlogShowPageGetApi.allBlogDetails.blog_detail.blog_title}
                                </h2>
                            </div>
                            
                                
                                <div className="TrendingBlogViewDescription"  
                                // style={{color: 'teal',margin: '0 0 2rem 2rem',width: '61rem',fontSize:'initial',height: '41rem',overflowY: 'scroll'}}
                                >
                                    <span style={{color: 'teal'}}> {props.RecomBlogsFromApi.RecomBlog.BlogShowPageGetApi.allBlogDetails.blog_detail.blog_description}</span>
                                </div>
                        </div>
                    </section>
                </>
                }
                </div>
                
                <BlogViewComment {...props} />
                
            </div>
        </div>
    )
}

export default BlogViewMain
