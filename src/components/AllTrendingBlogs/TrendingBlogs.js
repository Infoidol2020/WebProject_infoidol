import React from 'react'
import {Link} from 'react-router-dom'

import VisibilityIcon from '@material-ui/icons/Visibility';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import CommentIcon from '@material-ui/icons/Comment';

import miniLoader from '../../assets/miniLoader.svg'

import { LazyLoadImage } from 'react-lazy-load-image-component';

const TrendingBlogs = (props) => {


    const blogsTrending = props.allTrendingBlogs

    const handleblogClick = (blog_id,user_id) =>{
        localStorage.setItem('id', blog_id);
        localStorage.setItem('UI',user_id);
        window.scrollTo(0,0)
    
    }
    const loadMoreBlogs = () => {
        let offset = sessionStorage.getItem('blogOffset')
        let newOffset = parseInt(offset) + 10
        sessionStorage.setItem('blogOffset', newOffset)
        props.hitAllTrendingBlogsAPI(newOffset)

    }
    const prevBlogs = () => {
        let offset = sessionStorage.getItem('blogOffset')
        let newOffset = parseInt(offset) - 10
        sessionStorage.setItem('blogOffset', newOffset)
        props.hitAllTrendingBlogsAPI(newOffset)

    }
    return (
        blogsTrending &&
        <div style={{textAlign: 'center'}}>
            {
                blogsTrending.map((blogElement, blogIndex) => {
                    return(
                        <>
                        <Link to="/blog-details">
                        <div 
                        onClick={() => handleblogClick(blogElement.blog_id,blogElement.user_id)}
                        style={{
                        display: 'inline-block', 
                        background: '#999999',
                        border: 'solid 1px rgba(0, 0, 0, 0.5)',
                        borderRadius: '10px', 
                        margin: '1rem', 
                        }}>
                            <div style={{width: '15vw', height: '15vh'}}>
                                <LazyLoadImage placeholder={<div><img src={miniLoader} /></div>} src={blogElement.cat_image_link} style={{ padding: '1rem', width: '100%', height: '100%', objectFit: 'cover'}} />
                            </div>
                            <div style={{border: 'solid 1px #CDCDCD', 
                            color: '#fff',
                            opacity: '0.8',
                            display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.5rem', borderRadius: '5px', margin: '0.5rem'}}>
                                <div style={{display: 'flex', alignItems: 'center'}}>
                                    <VisibilityIcon />
                                    <div>&nbsp; {blogElement.no_of_views}</div>
                                </div>
                                <div style={{display: 'flex', alignItems: 'center'}}>
                                    <ThumbUpAltIcon />
                                    <div>&nbsp; {blogElement.no_of_like}</div>
                                </div>
                                <div style={{display: 'flex', alignItems: 'center'}}>
                                    <CommentIcon />
                                    <div>&nbsp; {blogElement.no_of_comments}</div>
                                </div>
                            </div>
                            <div style={{border: 'solid 1px #CDCDCD', 
                            color: '#fff',
                            opacity: '0.8',
                            borderRadius: '5px', margin: '0.5rem'}}>{blogElement.blog_title.length > 30 ? <div>{blogElement.blog_title.slice(0,30).toLowerCase()}...</div>: blogElement.blog_title.toLowerCase()}</div>
                        </div>
                        </Link>
                        </>
                    )
                })
            }
            <div style={{width: '86%', textAlign: 'center', marginTop: '2vh', 
            marginBottom: '5vh', margin: 'auto',
            display: 'flex', justifyContent: 'center', alignItems: 'center', height: '15vh'}}>
            {
                sessionStorage.getItem('blogOffset') != '0' &&
                <div 
                onClick={prevBlogs}
                style={{display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#999',
                color: '#fff', 
                border: '0',
                borderRadius: '10px',
                marginRight: '4vw',
                cursor: 'pointer',
                width: '5vw',
                height: '5vh'}}>
                <i class="fas fa-angle-double-left" style={{fontSize: '2rem'}}></i>
                
            </div>
            }
            {
                // props.APIFromAllTrendingBlogs.TrendingBlogs.TrendingBlogsApi.TrendingBlogs.data != BlogsTrending &&
            <div>
                <button 
                onClick={loadMoreBlogs}
                style={{
                // background: 'linear-gradient(130deg,#ff7a18,#af002d 41.07%,#319197 76.05%)', 
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: '#999',
                color: '#fff', 
                border: '0',
                borderRadius: '10px',
                cursor: 'pointer', 
                width: '5vw',
                height: '5vh'}}>
                    <i class="fas fa-angle-double-right" style={{fontSize: '2rem'}}></i>

                </button>
            </div>
            }

            </div>


        </div>
    )
}

export default TrendingBlogs
