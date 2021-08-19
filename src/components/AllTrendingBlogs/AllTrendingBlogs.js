import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'

import { hitAllTrendingBlogsAPI } from '../../redux/AllTrendingBlogs/AllTrendingBlogsActions'

import pageLoader from '../../assets/pageLoader.svg'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import TrendingBlogs from './TrendingBlogs'

const AllTrendingBlogs = (props) => {

    const [allTrendingBlogs, setAllTrendingBlogs] = useState([])
    // console.log('prrr', props.APIFromAllTrendingBlogs.TrendingBlogs)

    useEffect(() => {
        if(sessionStorage.getItem('blogOffset') == undefined || sessionStorage.getItem('blogOffset') == null){
            props.hitAllTrendingBlogsAPI(0)
            sessionStorage.setItem('blogOffset', 0)
        }
        else{
            props.hitAllTrendingBlogsAPI(sessionStorage.getItem('blogOffset'))
        }
    }, [])

    useEffect(() => {
        if(props.APIFromAllTrendingBlogs.TrendingBlogs.TrendingBlogsApi.TrendingBlogsSuccess &&
            props.APIFromAllTrendingBlogs.TrendingBlogs.TrendingBlogsApi.TrendingBlogs.status &&
            props.APIFromAllTrendingBlogs.TrendingBlogs.TrendingBlogsApi.TrendingBlogs.data.length > 0){
            // setAllTrendingBlogs(allTrendingBlogs => [...allTrendingBlogs , ...props.APIFromAllTrendingBlogs.TrendingBlogs.TrendingBlogsApi.TrendingBlogs.data])
            setAllTrendingBlogs(props.APIFromAllTrendingBlogs.TrendingBlogs.TrendingBlogsApi.TrendingBlogs.data)
        }
    }, [props.APIFromAllTrendingBlogs.TrendingBlogs.TrendingBlogsApi.TrendingBlogsSuccess])
    return (
        <div>
            <Sidebar />
            <Navbar />
            <div style={{marginLeft: '4vw', marginTop: '10vh'}}>
                {
                props.APIFromAllTrendingBlogs.TrendingBlogs.TrendingBlogsApi.TrendingBlogsInProgress ? 
                <div style={{textAlign: 'center'}}>
                    <img src={pageLoader} />
                </div>
                : 
                <TrendingBlogs allTrendingBlogs={allTrendingBlogs} {...props} />

                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    // console.log('stateeeeee from Dashboardbnbvcvb', state);
    return{ 
        APIFromAllTrendingBlogs: state
    }
}
const mapDispatchToProps = dispatch => {
    return {
        hitAllTrendingBlogsAPI: (offset) => dispatch(hitAllTrendingBlogsAPI(offset)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AllTrendingBlogs)
