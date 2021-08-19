import React, {useEffect, useState} from 'react'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleRoundedIcon from '@material-ui/icons/ChatBubbleRounded';
import './TopBlogs.css'
import {Link} from 'react-router-dom'

import miniLoader from '../../assets/miniLoader.svg'

import { LazyLoadImage } from 'react-lazy-load-image-component';

const TopBlogs = (props) => {

    const handleTopBlogsClick = (blog_id,user_id) => {
        // console.log('gotchaa man top blog id', blog_id)
        props.fetchAllRecmBlogs(blog_id);
        localStorage.setItem('id',blog_id);
        localStorage.setItem('UI',user_id);
        window.scrollTo(0,0)

    }
// console.log('props from top blog', props)
    return (
        <>
        <div className="TopBlogSection-heading-wrapper">
            <div className="TopBlogSection-heading-container" style={{marginLeft: '2vw'}}>
                <h2>Top Blogs</h2>
            </div>
            <div className="TopBlogSection-heading">
                <Link to="/all-blogs">
                <div className="TopBlogSection-heading" style={{color: 'rgb(16, 201, 230)', marginRight: '2vw', cursor: 'pointer'}}
                onClick={() => { 
                    sessionStorage.setItem('blog-page-type', 4)
                    sessionStorage.setItem('blogPageOffset', 0)
                }
                }>view all</div>
                </Link>
            </div>
        </div>
        <div  className="topBlogContainer">
            <div className="TopBlogSection-index1Blog-container" style={{marginTop: '3vh'}}>
              {
                  props.topBlogs && props.topBlogs &&  props.topBlogs.map((element, index) => {
                      return(
                      index === 0 &&
                        <div className="TopBlogSection-index1Blog" 
                        onClick={() => handleTopBlogsClick(element.blog_id,element.user_id)}
                        // style={{display: 'inline-block', marginLeft: '3vw',border: 'solid 1px #dadada',width: '43rem',height: '55.6rem', padding: '1rem',background: '#1E9FC8'}}
                        >
                        <Link to={{pathname:'/blog-details'}}>
                        <div className="TopBlogSection-index1Blog-contents">
                        
                        <LazyLoadImage className="index1Blog-cat_image_link" placeholder={<div><img src={miniLoader} /></div>} src = {element.cat_image_link}  />
                        <h3 className= "index1Blog-Username">{element.user_name}</h3>
                        <div className="index1Blog-Title" className= "TopBlog_BlogTitle">{element.blog_title.length > 50 ? 
                                    element.blog_title.slice(0, 50).concat('......') : 
                                    element.blog_title }</div>
                        {/* <div className="TopBlogSection-heading">{element.blog_description}</div> */}
                        <div className="index1Blog-description" style={{opacity: 0.74, fontWeight: 'bold'}}>
                        {element.blog_description.length > 70 ? 
                                    element.blog_description.slice(0, 70).concat('......') : 
                                    element.blog_description }
                        <span style={{color: '#FF0000', marginLeft: '2vw'}}>read more</span>
                        </div>
                        <div className="index1Blog-like-section" style={{marginTop: '2vh'}}>
                            <span className="index1Blog-like">
                                <ThumbUpIcon />
                                <span style={{marginLeft: '2vw'}}>{element.no_of_like}</span> 
                            </span>
                            <span className="index1Blog-comment-section">
                                <ChatBubbleRoundedIcon style={{marginLeft: '2vw'}} />
                                <span style={{marginLeft: '2vw'}}>{element.no_of_comments}</span>
                            </span>
                        </div>
                    </div>
                    </Link> 
                    </div>
                      )
                  })
              }
            </div>
            <div className="top-blogs-scrollable" >
                {
                    props.topBlogs && props.topBlogs && props.topBlogs.map((element, index) => {
                        return(
                            index > 0 &&
                            <div className="TopBlogSection-user_id" 
                            onClick={() => handleTopBlogsClick(element.blog_id,element.user_id)}
                            >
                            <div className="TopBlogSection-scrollable">
                            <Link to={{pathname: '/blog-details'}}>
                                <div className="TopBlogSection-cat_image">
                                    <LazyLoadImage  className="TopBlogSection-cat_image_link" placeholder={<div><img src={miniLoader} alt=""/></div>} src = {element.cat_image_link}  />
                                </div>
                            <h3>{element.user_name}</h3>
                            <div className="TopBlogSection-heading">
                            {
                            element.blog_title.length > 50 ? 
                                        element.blog_title.slice(0, 50).concat('......') : 
                                        element.blog_title 
                            }
                            </div>
                            {/* <div className="TopBlogSection-heading">{element.blog_description}</div> */}
                            <div className="TopBlogSection-description" style={{opacity: 0.74, fontWeight: 'bold'}}>
                            {
                            element.blog_description.length > 70 ? 
                                        element.blog_description.slice(0, 70).concat('......') : 
                                        element.blog_description 
                            }
                            <span style={{color: '#FF0000', marginLeft: '2vw'}}>read more</span>

                            </div>
            
                            <div className="TopBlogSection-heading" style={{marginTop: '2vh'}}>
                            <span>
                                <ThumbUpIcon />
                            </span>
                        <span style={{marginLeft: '2vw'}}>{element.no_of_like}</span> 
                        <span>
                            <ChatBubbleRoundedIcon style={{marginLeft: '2vw'}} />
                        </span>
                        <span style={{marginLeft: '2vw'}}>{element.no_of_comments}</span>
                        </div>
                        </Link>
                        </div> 
                        </div>
                        )
                    })
                }
            </div>
        </div>
        </>
    )
}


export default  TopBlogs
