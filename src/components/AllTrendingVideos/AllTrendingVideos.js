import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'

import {hitAllTrendingVideosAPI} from '../../redux/AllTrendingVideos/AllTrendingVideosActions'

import pageLoader from '../../assets/pageLoader.svg'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import TrendingVideos from './TrendingVideos'
const AllTrendingVideos = (props) => {
    const [allTrendingVideos, setAllTrendingVideos] = useState([])
    // console.log('prrr', props.APIFromAllTrendingVideos.TrendingVideos.TrendingVideosApi)

    useEffect(() => {
        // console.log('sdfff', sessionStorage.getItem('videoOffset'))
        if(sessionStorage.getItem('videoOffset') == undefined || sessionStorage.getItem('videoOffset') == null){
            props.hitAllTrendingVideosAPI(0)
            sessionStorage.setItem('videoOffset', 0)
        }
        else{
            props.hitAllTrendingVideosAPI(sessionStorage.getItem('videoOffset'))
        }
    }, [])

    useEffect(() => {
        if(props.APIFromAllTrendingVideos.TrendingVideos.TrendingVideosApi.TrendingVideosSuccess &&
            props.APIFromAllTrendingVideos.TrendingVideos.TrendingVideosApi.TrendingVideos.status &&
            props.APIFromAllTrendingVideos.TrendingVideos.TrendingVideosApi.TrendingVideos.data.length > 0){
            // setAllTrendingVideos(allTrendingVideos => [...allTrendingVideos , ...props.APIFromAllTrendingVideos.TrendingVideos.TrendingVideosApi.TrendingVideos.data])
            setAllTrendingVideos(props.APIFromAllTrendingVideos.TrendingVideos.TrendingVideosApi.TrendingVideos.data)
        }
    }, [props.APIFromAllTrendingVideos.TrendingVideos.TrendingVideosApi.TrendingVideosSuccess])
    return ( 
        <div>
            <Sidebar />
            <Navbar />
            <div style={{marginLeft: '4vw', marginTop: '10vh'}}>
                {props.APIFromAllTrendingVideos.TrendingVideos.TrendingVideosApi.TrendingVideosInProgress ? 
                <div style={{textAlign: 'center'}}>
                    <img src={pageLoader} />
                </div>: 
                <TrendingVideos allTrendingVideos={allTrendingVideos}  {...props} />

                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    // console.log('stateeeeee from Dashboardbnbvcvb', state);
    return{ 
        APIFromAllTrendingVideos: state
    }
}
const mapDispatchToProps = dispatch => {
    return {
        hitAllTrendingVideosAPI: (offset) => dispatch(hitAllTrendingVideosAPI(offset)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AllTrendingVideos)
