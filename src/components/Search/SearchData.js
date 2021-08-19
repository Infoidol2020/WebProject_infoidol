import React, {useEffect, useState, useRef} from 'react'
import {Link} from 'react-router-dom'

import miniLoader from '../../assets/miniLoader.svg'

import { LazyLoadImage } from 'react-lazy-load-image-component';

import './SearchData.css'
const SearchData = (props) => {

    const [users, setUsers] = useState([]);
    const [videos, setVideos] = useState([]);
    const [music, setMusic] = useState([]);
    const [pictures, setPictures] = useState([]);
    const [blogs, setBlogs] = useState([]);

    const [userSection, setUserSection] = useState(true);
    const [videoSection, setVideoSection] = useState(false);
    const [musicSection, setMusicSection] = useState(false);
    const [pictureSection, setPictureSection] = useState(false);
    const [blogSection, setBlogSection] = useState(false);

    const userBtn = useRef();
    const videosBtn = useRef();
    const musicBtn = useRef();
    const pictureBtn = useRef();
    const blogBtn = useRef();

    const handlePeopleBtn = () => {
        userBtn.current.style.background = '#00F6FD80';
        videosBtn.current.style.background = '';
        musicBtn.current.style.background = '';
        blogBtn.current.style.background = '';
        pictureBtn.current.style.background = '';

        setUserSection(true)
        setVideoSection(false)
        setMusicSection(false)
        setBlogSection(false)
        setPictureSection(false)
    }
    const handleVideoBtn = () => {
        userBtn.current.style.background = '';
        videosBtn.current.style.background = '#00F6FD80';
        musicBtn.current.style.background = '';
        blogBtn.current.style.background = '';
        pictureBtn.current.style.background = '';

        setUserSection(false)
        setVideoSection(true)
        setMusicSection(false)
        setBlogSection(false)
        setPictureSection(false)

    }
    const handleAudioBtn = () => {
        userBtn.current.style.background = '';
        videosBtn.current.style.background = '';
        musicBtn.current.style.background = '#00F6FD80';
        blogBtn.current.style.background = '';
        pictureBtn.current.style.background = '';

        setUserSection(false)
        setVideoSection(false)
        setMusicSection(true)
        setBlogSection(false)
        setPictureSection(false)

    }
    const handleBlogBtn = () => {
        userBtn.current.style.background = '';
        videosBtn.current.style.background = '';
        musicBtn.current.style.background = '';
        blogBtn.current.style.background = '#00F6FD80';
        pictureBtn.current.style.background = '';

        setUserSection(false)
        setVideoSection(false)
        setMusicSection(false)
        setBlogSection(true)
        setPictureSection(false)

    }
    const handlePictureBtn = () => {
        userBtn.current.style.background = '';
        videosBtn.current.style.background = '';
        musicBtn.current.style.background = '';
        blogBtn.current.style.background = '';
        pictureBtn.current.style.background = '#00F6FD80';

        setUserSection(false)
        setVideoSection(false)
        setMusicSection(false)
        setBlogSection(false)
        setPictureSection(true)

    }
     // set user profile id
     const handleProfileClick = (profile_id) => {
        localStorage.setItem('userProfileId', profile_id)
        props.fetchUserProfile(localStorage.getItem('userProfileId'))
    }

    const handleContentClick = (data_id, type, profile_id) => {
        localStorage.setItem('id', data_id);
         localStorage.setItem('TYPE', type);
          localStorage.setItem('UI', profile_id)
    }
    // console.log('props from search data page...',props.searchData)


    useEffect(() => {
        if(props.searchData){
            if(props.searchData.user_list !== undefined){
                setUsers(props.searchData.user_list)
            }
            if(props.searchData.video_list !== undefined){
                setVideos(props.searchData.video_list)
            }
            if(props.searchData.music_list !== undefined){
                setMusic(props.searchData.music_list)
            }
            if(props.searchData.picture_list !== undefined){
                setPictures(props.searchData.picture_list)
            }
            if(props.searchData.blog_list !== undefined){
                setBlogs(props.searchData.blog_list)
            }
        }
    }, [props.searchData])

    useEffect(() => {
        props.dataSearch(sessionStorage.getItem('searchQuery'))
    }, [])

    return (
        <>
        {
                // (
                // props.searchData.user_list &&
                // props.searchData.video_list &&
                // props.searchData.music_list &&
                // props.searchData.picture_list && 
                // props.searchData.blog_list &&
                // props.searchData.user_list.length !== 0 && 
                // props.searchData.video_list.length !== 0 &&
                // props.searchData.music_list.length !== 0 &&
                // props.searchData.picture_list.length !== 0 &&
                // props.searchData.blog_list.length !== 0 )  ?
        <div style={{border: 'solid 1px #dadada', width: '60%', margin: '0 auto',boxShadow: '2px 2px #dadada'}}>
            {
                 
                <div style={{display: 'flex', justifyContent: 'space-between'}}> 
                <div >
                    <button style={{background: '#00F6FD80'}} onClick={handlePeopleBtn} ref={userBtn} 
                    className="filter-search-data-buttons">People  &nbsp;
                    <span style={{color: 'brown'}}>
                        {props.searchData.user_list && 
                        props.searchData.user_list.length
                        }
                    </span>
                    </button>
                </div>
                <div>
                    <button onClick={handleVideoBtn} ref={videosBtn} 
                    className="filter-search-data-buttons">Video &nbsp;
                    <span style={{color: 'brown'}}>
                        {props.searchData.video_list && 
                        props.searchData.video_list.length
                        }
                    </span>
                    </button>
                </div>
                <div>
                    <button onClick={handleAudioBtn} ref={musicBtn} 
                    className="filter-search-data-buttons">Audio &nbsp;
                    <span style={{color: 'brown'}}>
                    {props.searchData.music_list && 
                    props.searchData.music_list.length
                    }
                    </span>
                    </button>
                    
                </div>
                <div>
                    <button onClick={handleBlogBtn} ref={blogBtn} 
                    className="filter-search-data-buttons">Blog &nbsp;
                    <span style={{color: 'brown'}}>
                    {props.searchData.blog_list && 
                    props.searchData.blog_list.length
                    }
                    </span>
                    </button>
                </div>
                <div>
                    <button onClick={handlePictureBtn} ref={pictureBtn} 
                    className="filter-search-data-buttons">Picture &nbsp;
                    <span style={{color: 'brown'}}>
                    {props.searchData.picture_list && 
                    props.searchData.picture_list.length
                    }
                    </span>
                    </button>
                </div>

            </div>
            }


            <div className="search-data-users-scrollable" style={{marginTop: '2vh', height: '76vh', overflowY: 'scroll', boxShadow: '2px 2px #dadada' }}>
               
                {/* user data section */}
                {
                    userSection &&
                   users && users.map((user, userIndex) => {
                       return(
                        // <Link to='/userprofile'></Link>
                        // set user id onClick={}
                        // () => localStorage.setItem('userProfileId', user.data_id)
                        <Link to='./userprofile'>
                           <div  
                           onClick={() => handleProfileClick(user.data_id)}
                           key={userIndex} 
                           style={{display: 'inline-block', cursor: 'pointer', margin: '1rem'}} title="visit user profile">
                               <div className="search-data-users" >
                                    <LazyLoadImage placeholder={<div><img src={miniLoader} /></div>} src={user.thumbnail} style={{width: '7rem', height: '7rem', borderRadius: '50%',marginLeft: '2vh'}} />
                                    <p style={{padding: '2rem'}}>
                                        {user.name.length > 15 ? user.name.slice(0,15).concat('...'): user.name}
                                        </p>
                               </div>
                           </div>
                        </Link>
                       )
                   }) 
                }

                {/* video data section */}
                {
                    videoSection && 
                    videos && videos.map((video, videoIndex) => {
                        return(
                            <Link to="/video-details">
                                <div  key={videoIndex} 
                                onClick={() => handleContentClick(video.data_id, video.type, video.profile_id) }
                                style={{display: 'inline-block', cursor: 'pointer', border: 'solid 1px #dadada', margin: '0.5rem', padding: '0.5rem'}} title="check the video">
                                    <div className="search-data-videos">
                                        <LazyLoadImage placeholder={<div><img src={miniLoader} /></div>} src={video.thumbnail} style={{width: '17vw', height: '20vh'}} />
                                        <p style={{textAlign: 'center', fontWeight: 'bold'}}>{video.name.length> 30 ?
                                        video.name.slice(0,30).concat('...') :
                                        video.name
                                        }</p>  
                                    </div>
                                </div>
                            </Link>
                        )

                    })

                }


                 {/* music data section */}
                {
                    musicSection && 
                    music && music.map((music, musicIndex) => {
                        return(
                            <Link to="/audio-details">
                                <div  key={musicIndex} 
                                onClick={() => handleContentClick(music.data_id, music.type, music.profile_id) }
                                style={{display: 'inline-block', cursor: 'pointer', border: 'solid 1px #dadada', margin: '0.5rem', padding: '0.5rem'}} title="check the music">
                                    <div className="search-data-music">
                                        <LazyLoadImage placeholder={<div><img src={miniLoader} /></div>} src={music.thumbnail} style={{width: '17vw', height: '20vh', objectFit: 'cover'}} />
                                        <p style={{textAlign: 'center', fontWeight: 'bold'}}>
                                        {music.name.length > 30 ? music.name.slice(0,30).concat('...'): music.name}</p>  
                                    </div>
                                </div>
                            </Link>

                        )

                    })

                }

                
                 {/* blog data section */}
                 {
                    blogSection && 
                    blogs && blogs.map((blog, blogIndex) => {
                        return(
                            <Link to="/blog-details">
                                <div  key={blogIndex} 
                                onClick={() => handleContentClick(blog.data_id, blog.type, blog.profile_id) }
                                style={{display: 'inline-block', cursor: 'pointer', border: 'solid 1px #dadada', margin: '0.5rem', padding: '0.5rem'}} title="check the blog">
                                    <div className="search-data-blog">
                                        <LazyLoadImage placeholder={<div><img src={miniLoader} /></div>} src={blog.thumbnail} style={{width: '17vw', height: '20vh', }} />
                                        <p style={{textAlign: 'center', fontWeight: 'bold'}}>
                                            {blog.name.length > 30 ? blog.name.slice(0,30).concat('...'): blog.name}
                                            </p>  
                                    </div>
                                </div>
                            </Link>
                        )

                    })

                }

                 {/* picture data section */}
                 {
                    pictureSection && 
                    pictures && pictures.map((picture, pictureIndex) => {
                        return(
                            <Link to="/picture-details">
                                <div  key={pictureIndex} 
                                onClick={() => handleContentClick(picture.data_id, picture.type, picture.profile_id) }
                                style={{display: 'inline-block', cursor: 'pointer', border: 'solid 1px #dadada', margin: '0.5rem', padding: '0.5rem'}} title="check the picture">
                                    <div className="search-data-picture">
                                        <LazyLoadImage placeholder={<div><img src={miniLoader} /></div>} src={picture.thumbnail} style={{width: '17vw', height: '20vh', }} />
                                        <p style={{textAlign: 'center', fontWeight: 'bold'}}>
                                        {picture.name.length > 30 ? picture.name.slice(0,30).concat('...'): picture.name}</p>  
                                    </div>
                                </div>
                            </Link>
                        )

                    })

                }
            </div>
        </div>
        // : 
        //     <div style={{
        //     display: 'flex', 
        //     justifyContent: 'center', 
        //     alignItems: 'center', 
        //     background: 'brown', 
        //     color: '#fff', 
        //     fontWeight: 'bold',
        //     height: '7vh'}}>
        //         No data found
        //     </div>
            }
        </>
    )
}

export default SearchData
