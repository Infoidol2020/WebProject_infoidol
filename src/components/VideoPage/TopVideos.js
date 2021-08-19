import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import { fetchTopCategoryVideos } from '../../redux/VideoPage/TopVideosCategoryActions'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import {Link} from 'react-router-dom';

import './TopVideos.css'

import miniLoader from '../../assets/miniLoader.svg'

import { LazyLoadImage } from 'react-lazy-load-image-component';

const TopVideos = (props) => {
    const handleVideoClick = (video_id,user_id) =>{
        // console.log('got video id', video_id);
        props.fetchAllVideoView(video_id)
        localStorage.setItem('id', video_id);
        localStorage.setItem('UI',user_id);
        window.scrollTo(0,0)
        // setVideoDetails(props.AllVideoFromAPI.VideoView.VideoDetailPageGetApi.allVideoDetail.video_detail);
    }
    return (
        <>
        <div className="mobile-top-videos-heading" style={{marginLeft: '4vw', display: 'flex', marginTop: '15vh', justifyContent: 'space-between', alignItems: 'center'}}>
            <div style={{marginLeft: '2vw'}}>
                <h2>Top Videos</h2>
            </div>
            <div>
                <Link to="/all-videos">
                <div style={{color: 'rgb(16, 201, 230)', marginRight: '2vw', cursor: 'pointer'}}
                onClick={() => { 
                    sessionStorage.setItem('video-page-type', 4)
                    sessionStorage.setItem('videoPageOffset', 0)
                }
                }>view all</div>
                </Link>
            </div>
        </div>
        <div className="topVideosContainer" style={{display: 'flex', width: '95%'}}>
            
            <div style={{width: '70%',background: '#0A0A0AD4 0% 0% no-repeat padding-box', opacity: '1'}}>

            <div style={{display: 'flex',background: '#0A0A0AD4 0% 0% no-repeat padding-box', opacity: '1'}}>
                <div style={{border: 'solid 1px #dadada', borderRadius: '10px', borderStyle: 'dotted', margin: '1rem', width: '50%', height: '40vh', position: 'relative'}}>
                {
                    props.topVideos && props.topVideos.map((element, index) => {
                    return(
                        index === 0 && 
                        <div  onClick={() => handleVideoClick(element.video_id, element.user_id)}>
                            <Link to={{pathname: '/video-details',
                            element: {element: element}}}>
                            {/* <video src={element.video_link} style={{width: '100%', height: '40vh'}} /> */}
                            {
                                element.video_thumbnail_link !== '' ?
                                <LazyLoadImage style={{width: '98%', height: '17vw', margin: '0.5rem', objectFit: 'cover'}} src={element.video_thumbnail_link} placeholder={<div><img src={miniLoader} /></div>} />
                                :
                                <LazyLoadImage style={{width: '98%', height: '17vw', margin: '0.5rem', objectFit: 'cover'}} src={element.cat_image_link} placeholder={<div><img src={miniLoader} /></div>} />
                                }
                            <span style={{top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                position: 'absolute',}}>
                            <p style={{color: '#2DD2EC',bottom: '5rem', font: 'normal normal bold 22px/22px Copperplate Gothic',}}>{element.video_title}</p>
                            </span>
                            <span style={{
                                top: '96%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                position: 'absolute',
                            }}>
                                <div style={{display: 'flex', alignItems: 'center'}}>
                                <AccessTimeIcon style={{color: '#fff', opacity: '0.5'}} />
                                <span style={{color: '#fff',opacity: '0.5', marginLeft: '1vw' }}>{element.created_date}</span>
                                </div>
                                </span>
                                </Link>
                        </div>
                    )
                })   
                }
                </div>
                <div style={{ border: 'solid 1px #dadada', borderRadius: '10px', borderStyle: 'dotted', margin: '1rem', width: '50%', height: '40vh', position: 'relative'}} >
                {
                    props.topVideos && props.topVideos.map((element, index) => {
                    return(
                        index === 1 && 
                        <div onClick={() => handleVideoClick(element.video_id, element.user_id)}>
                            <Link to={{pathname:'/video-details',
                                element: {element: element}}}>
                            {/* <video src={element.video_link} style={{width: '100%', height: '40vh'}} /> */}
                            {
                                element.video_thumbnail_link !== '' ?
                                <LazyLoadImage style={{width: '98%', height: '17vw', margin: '0.5rem', objectFit: 'cover'}} src={element.video_thumbnail_link} placeholder={<div><img src={miniLoader} /></div>} />
                                :
                                <LazyLoadImage style={{width: '98%', height: '17vw', margin: '0.5rem', objectFit: 'cover'}} src={element.cat_image_link} placeholder={<div><img src={miniLoader} /></div>} />
                                }
                            <span style={{top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                position: 'absolute',}}>
                            <p style={{color: '#2DD2EC',
                            bottom: '5rem', 
                            font: 'normal normal bold 22px/22px Copperplate Gothic',
                            }}>{element.video_title.length > 30 ? 
                                element.video_title.slice(0, 20).concat('...') : 
                                element.video_title}</p>
                            </span>
                            <span style={{
                                top: '96%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                position: 'absolute',
                            }}>
                                <div style={{display: 'flex', alignItems: 'center'}}>
                                <AccessTimeIcon style={{color: '#fff', opacity: '0.5'}} />
                                <span style={{color: '#fff',opacity: '0.5', marginLeft: '1vw' }}>{element.created_date}</span>
                                </div>
                                </span>
                            </Link>
                        </div>
                    )
                })   
                }
                </div>
            </div>
            <div style={{display: 'flex', margin: '1rem', }}>
                {
                    props.topVideos && props.topVideos.map((element, index) => {
                        return(
                            index > 1 && index < 6 && 
                            <div style={{height: '20vh',margin: '0.5rem',position :'relative', border: 'solid 1px #dadada', borderStyle: 'dotted', borderRadius: '10px'}} onClick={() => handleVideoClick(element.video_id,element.user_id)}>
                                <Link to={{pathname:'/video-details',
                            element: {element: element}}}>
                                {/* <video src={element.video_link} style={{width: '20vw', height: '20vh'}} /> */}
                                {
                                element.video_thumbnail_link !== '' ?
                                <LazyLoadImage style={{width: '14vw', height: '7vw', margin: '0.5rem', objectFit: 'cover'}} src={element.video_thumbnail_link} placeholder={<div><img src={miniLoader} /></div>} />
                                :
                                <LazyLoadImage style={{width: '14vw', height: '7vw', margin: '0.5rem', objectFit: 'cover'}} src={element.cat_image_link} placeholder={<div><img src={miniLoader} /></div>} />
                                }
                                <span style={{top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                position: 'absolute',}}>
                                <p style={{color: '#2DD2EC',bottom: '5rem', font: 'normal normal bold 15px Copperplate Gothic',}}>
                                {element.video_title.length > 30 ? 
                                element.video_title.slice(0, 20).concat('...') : 
                                element.video_title}
                                </p>
                            </span>
                            <span style={{
                                top: '90%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                position: 'absolute',
                            }}>
                                <div style={{display: 'flex', alignItems: 'center'}}>
                                <AccessTimeIcon style={{color: '#fff', opacity: '0.5'}} />
                                <span style={{color: '#fff',opacity: '0.5', marginLeft: '1vw' }}>{element.created_date}</span>
                                </div>
                                </span>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
            </div>
            <div style={{height: '70vh', width: '30%', overflowY: 'scroll', textAlign: 'center',background: '#0A0A0AD4 0% 0% no-repeat padding-box'}}>
                {
                    props.topVideos && props.topVideos.map((element, index) => {
                        return(
                            index > 5 && 
                            <div style={{height: '25vh',position: 'relative', border: 'solid 1px #dadada', borderStyle: 'dotted', borderRadius: '10px', margin: '0.5rem'}} onClick={() => handleVideoClick(element.video_id,element.user_id)}>
                                <Link to={{pathname:'/video-details',
                            element: {element: element}}}>
                                {/* <video src={element.video_link} style={{width: '50%', height: '20vh'}} /> */}
                                {
                                element.video_thumbnail_link !== '' ?
                                <LazyLoadImage style={{width: '90%', height: '20vh', margin: '0.5rem', objectFit: 'cover'}} src={element.video_thumbnail_link} placeholder={<div><img src={miniLoader} /></div>} />
                                :
                                <LazyLoadImage style={{width: '90%', height: '20vh', margin: '0.5rem', objectFit: 'cover'}} src={element.cat_image_link} placeholder={<div><img src={miniLoader} /></div>} />
                                }
                                <span style={{top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                position: 'absolute',}}>
                                <p style={{color: '#2DD2EC',bottom: '5rem', font: 'normal normal bold 22px/22px Copperplate Gothic',}}>
                                    {element.video_title.length > 30 ? 
                                element.video_title.slice(0, 20).concat('...') : 
                                element.video_title}
                                    </p>
                                </span>
                                <span style={{
                                    top: '92%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    position: 'absolute',
                                }}>
                                <div style={{display: 'flex', alignItems: 'center'}}>
                                <AccessTimeIcon style={{color: '#fff', opacity: '0.5'}} />
                                <span style={{color: '#fff',opacity: '0.5', marginLeft: '1vw' }}>{element.created_date}</span>
                                </div>
                                </span>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>

        </div>
        <div className="mobile-top-videos" style={{display: 'none',height: '70vh', width: '30%', overflowY: 'scroll', textAlign: 'center',background: '#0A0A0AD4 0% 0% no-repeat padding-box'}}>
                {
                    props.topVideos && props.topVideos.map((element, index) => {
                        return(
                            <div style={{height: '25vh',position: 'relative', border: 'solid 1px #dadada', borderStyle: 'dotted', borderRadius: '10px', margin: '0.5rem'}} onClick={() => handleVideoClick(element.video_id,element.user_id)}>
                                <Link to={{pathname:'/video-details',
                            element: {element: element}}}>
                                {/* <video src={element.video_link} style={{width: '50%', height: '20vh'}} /> */}
                                {
                                element.video_thumbnail_link !== '' ?
                                <LazyLoadImage style={{borderRadius: '10px', width: '90%', height: '20vh', margin: '0.5rem', objectFit: 'cover'}} src={element.video_thumbnail_link} placeholder={<div><img src={miniLoader} /></div>} />
                                :
                                <LazyLoadImage style={{borderRadius: '10px', width: '90%', height: '20vh', margin: '0.5rem', objectFit: 'cover'}} src={element.cat_image_link} placeholder={<div><img src={miniLoader} /></div>} />
                                }
                                <span style={{top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                position: 'absolute',}}>
                                <p style={{color: '#2DD2EC',bottom: '5rem', font: 'normal normal bold 22px/22px Copperplate Gothic',}}>
                                    {element.video_title.length > 30 ? 
                                element.video_title.slice(0, 20).concat('...') : 
                                element.video_title}
                                    </p>
                                </span>
                                <span style={{
                                    top: '92%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    position: 'absolute',
                                }}>
                                <div style={{display: 'flex', alignItems: 'center'}}>
                                <AccessTimeIcon style={{color: '#fff', opacity: '0.5'}} />
                                <span style={{color: '#fff',opacity: '0.5', marginLeft: '1vw' }}>{element.created_date}</span>
                                </div>
                                </span>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
export default TopVideos