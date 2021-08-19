import React from 'react'
import {Link} from 'react-router-dom'
import './BlogPage.css'
import VisibilityIcon from '@material-ui/icons/Visibility';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import CommentIcon from '@material-ui/icons/Comment';

import miniLoader from '../../assets/miniLoader.svg'

import { LazyLoadImage } from 'react-lazy-load-image-component';


const BlogPage = (props) => {
    // console.log('props from tv', props) 
    const allBlogs = props.AllBlogPage

    const handleBlogClick = (Blog_id,user_id) =>{
        localStorage.setItem('id', Blog_id);
        localStorage.setItem('UI',user_id);
        window.scrollTo(0,0)
    
    }
    const loadMoreBlogs = () => {
        let offset = sessionStorage.getItem('blogPageOffset')
        let newOffset = parseInt(offset) + 10
        sessionStorage.setItem('blogPageOffset', newOffset)
        props.hitAllBlogPageAPI(newOffset, sessionStorage.getItem('blog-page-type'))

    }
    const prevBlogs = () => {
        let offset = sessionStorage.getItem('blogPageOffset')
        let newOffset = parseInt(offset) - 10
        sessionStorage.setItem('blogPageOffset', newOffset)
        props.hitAllBlogPageAPI(newOffset, sessionStorage.getItem('blog-page-type'))

    }
    return (
        allBlogs &&
        <div className="BlogViewAll-container" style={{textAlign: 'center'}}>
            {
                allBlogs.map((blogElement, BlogIndex) => {
                    return(
                        <>
                        <Link to="/blog-details">
                        <div className="BlogViewAll-wrapper" 
                        onClick={() => handleBlogClick(blogElement.blog_id,blogElement.user_id)}>
                            <div className="BlogViewAll-thumbnail-wrapper">
                                {/* <img src={blogElement.cat_image_link} style={{ padding: '1rem', width: '100%', height: '100%'}} /> */}
                                {
                                blogElement.blog_thumbnail_link !== '' ?
                                <LazyLoadImage  className="BlogViewAll-blog_thumbnail_link" src={blogElement.blog_thumbnail_link} placeholder={<div><img src={miniLoader} /></div>} />
                                :
                                <LazyLoadImage className="BlogViewAll-cat_image_link" src={blogElement.cat_image_link} placeholder={<div><img src={miniLoader} /></div>} />
                                }
                            </div>
                            <section className="BlogViewAll-like-comment-section">
                                <div className="BlogViewAll-views-section" style={{display: 'flex', alignItems: 'center'}}>
                                    <VisibilityIcon />
                                    <div className="BlogViewAll-no_of_views">&nbsp; {blogElement.no_of_views}</div>
                                </div>
                                <div className="BlogViewAll-like-section" style={{display: 'flex', alignItems: 'center'}}>
                                    <ThumbUpAltIcon />
                                    <div className="BlogViewAll-no_of_like">&nbsp; {blogElement.no_of_like}</div>
                                </div>
                                <div className="BlogViewAll-comments-section" style={{display: 'flex', alignItems: 'center'}}>
                                    <CommentIcon />
                                    <div className="BlogViewAll-no_of_comments">&nbsp; {blogElement.no_of_comments}</div>
                                </div>
                            </section>
                            <div className="BlogViewAll-blog_title">{blogElement.blog_title.length > 30 ? <div className="BlogViewAll-">{blogElement.blog_title.slice(0,30).toLowerCase()}...</div>: blogElement.blog_title.toLowerCase()}</div>
                        </div>
                        </Link>
                        </>
                    )
                })
            }
            <div className="BlogViewAll-angle-double-left">
            {
                sessionStorage.getItem('blogPageOffset') != '0' &&
                <div className="BlogViewAll-prev-btn" 
                onClick={prevBlogs}>
                <i class="fas fa-angle-double-left" style={{fontSize: '2rem'}}></i>
                
            </div>
            }
            <div className="BlogViewAll-angle-double-right">
                <button className="BlogViewAll-next-btn" onClick={loadMoreBlogs}>
                    <i class="fas fa-angle-double-right" style={{fontSize: '2rem'}}></i>
                </button>
            </div>
            </div>
        </div>
    )
}

export default BlogPage
