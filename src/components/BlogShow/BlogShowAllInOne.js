import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {fetchAllRecmBlogs} from '../../redux/BlogShowRecommended';
import {fetchAllComments} from '../../redux/CommentTrendingBlog';
// import {fetchBlogsCommentList} from '../../redux/CommentList';
import {fetchAllCommentsReply} from '../../redux/Reply/ActionReplyToComment';
import { hitLikeApi } from '../../redux/Like/LikeActions';
import {postReportAPI} from '../../redux/Report/ReportActions';
import {fetchReportCategories} from '../../redux/Report/ReportActions'
import {hitsubscribeAPI} from '../../redux/Subscribe/SubscribeActions'
import {hitUnsubscribeAPI} from '../../redux/Subscribe/SubscribeActions'
import {hitconnectAPI} from '../../redux/Connect/ConnectActions'
import {hitconnectRejectAPI} from '../../redux/Connect/ConnectActions'
import {hitMakeCustomizeAPI} from '../../redux/MakeCustomize/MakeCustomizeActions'
import {hitBlogRecommendedAPI} from '../../redux/BlogRecommended/BlogRecommendedActions'





import './BlogShowAllInOne.css'
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';
import BlogViewMain from './BlogViewMain';
import BlogShowRecommended from './BlogShowRecommended';
import BlogViewComment from './BlogViewComment';
import Footer from '../NewFooter' 
import { fetchUserProfile } from '../../redux/UserProfile/UserProfileActions';



const BlogShowAllInOne = (props) => {
    // const [BlogsFromApi, setBlogsFromApi] = useState([])
    const [RecomBlogsFromApi, setRecomBlogsFromApi] = useState([])
    const [reportCategories, setReportCategories] = useState([])

    useEffect(() => { 
        props.fetchReportCategories()
    }, [])
    
    useEffect(() => {
        setReportCategories(props.RecomBlogsFromApi.Report.ReportCategoriesGetApi.reportCategories)
    }, [props.RecomBlogsFromApi.Report.ReportCategoriesGetApi.ReportCategoriesSuccess])


    // console.log('props alla re aala',props)
    useEffect(() => {
        const id = localStorage.getItem('id');
        // console.log('id frm local storage',id);
        props.fetchAllRecmBlogs(id);
    },[])

//  console.log('props .data',props.RecomBlogsFromApi)
//  console.log('gotilleeeeeeeeeeeeeeee elementzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',elementId,props.elementType)

    return (
        <div className="RecommBlogs_Wrapper">
            <Sidebar/>
            <Navbar/>
            <section className="BlogViewMainSection">
                <BlogViewMain data={RecomBlogsFromApi} {...props} reportCategories={reportCategories}/>
                {/* <BlogViewComment {...props}/> */}
            </section>        
            <section id="BlogRecommendationSection">
                <BlogShowRecommended {...props}/>
            </section>
        <Footer />
        </div>
        
    )
}

const mapStateToProps = (state) => {
    // console.log('states from all in 1 blog show', state);
    return{
        RecomBlogsFromApi:  state
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchAllRecmBlogs: (blog_id) => dispatch(fetchAllRecmBlogs(blog_id)),
        fetchAllComments: (data, blog_id, type) => dispatch(fetchAllComments(data, blog_id, type)),
        fetchAllCommentsReply: (dataReply, commentId) => dispatch(fetchAllCommentsReply(dataReply, commentId)),
        hitLikeApi: (elementId, elementType) => dispatch(hitLikeApi(elementId, elementType)),
        fetchReportCategories: () => dispatch(fetchReportCategories()),
        postReportAPI: (categoryName, elementType, elementId) => dispatch(postReportAPI(categoryName, elementType, elementId)),
        hitsubscribeAPI :(profile_id) => dispatch(hitsubscribeAPI(profile_id)),
        hitUnsubscribeAPI: (profile_id) => dispatch(hitUnsubscribeAPI(profile_id)),
        hitconnectAPI :(profile_id) => dispatch(hitconnectAPI(profile_id)),
        hitconnectRejectAPI :(profile_id) => dispatch(hitconnectRejectAPI(profile_id)),
        hitMakeCustomizeAPI:(profile_id, customize_id) => dispatch(hitMakeCustomizeAPI(profile_id, customize_id)),
        fetchUserProfile: (data) => dispatch(fetchUserProfile(data)),
        hitBlogRecommendedAPI: (offset, artistId) => dispatch(hitBlogRecommendedAPI(offset, artistId))



        //in doubt i.e no use
        // fetchBlogsCommentList: (data) => dispatch(fetchBlogsCommentList(data)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(BlogShowAllInOne)

// export default BlogShowRecommended
