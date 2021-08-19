import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'

import {hitAllTrendingPicturesAPI} from '../../redux/AllTrendingPictures/AllTrendingPicturesActions'

import pageLoader from '../../assets/pageLoader.svg'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import TrendingPictures from './TrendingPictures'

const AllTrendingPictures = (props) => {

    const [allTrendingPictures, setAllTrendingPictures] = useState([])
    // console.log('prrr', props.APIFromAllTrendingPictures.TrendingPictures)

    useEffect(() => {
        console.log('sdfff', sessionStorage.getItem('pictureOffset'))
        if(sessionStorage.getItem('pictureOffset') == undefined || sessionStorage.getItem('pictureOffset') == null){
            props.hitAllTrendingPicturesAPI(0)
            sessionStorage.setItem('pictureOffset', 0)
        }
        else{
            props.hitAllTrendingPicturesAPI(sessionStorage.getItem('pictureOffset'))
        }
    }, [])

    useEffect(() => {
        if(props.APIFromAllTrendingPictures.TrendingPictures.TrendingPicturesApi.TrendingPicturesSuccess &&
            props.APIFromAllTrendingPictures.TrendingPictures.TrendingPicturesApi.TrendingPictures.status &&
            props.APIFromAllTrendingPictures.TrendingPictures.TrendingPicturesApi.TrendingPictures.data.length > 0){
            // setAllTrendingPictures(allTrendingPictures => [...allTrendingPictures , ...props.APIFromAllTrendingPictures.TrendingPictures.TrendingPicturesApi.TrendingPictures.data])
            setAllTrendingPictures(props.APIFromAllTrendingPictures.TrendingPictures.TrendingPicturesApi.TrendingPictures.data)
        }
    }, [props.APIFromAllTrendingPictures.TrendingPictures.TrendingPicturesApi.TrendingPicturesSuccess])
    return (
        <div>
            <Sidebar />
            <Navbar />
            <div style={{marginLeft: '4vw', marginTop: '10vh'}}>
                {
                props.APIFromAllTrendingPictures.TrendingPictures.TrendingPicturesApi.TrendingPicturesInProgress ? 
                <div style={{textAlign: 'center'}}>
                    <img src={pageLoader} />
                </div>
                : 
                <TrendingPictures allTrendingPictures={allTrendingPictures} {...props} />

                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    // console.log('stateeeeee from Dashboardbnbvcvb', state);
    return{ 
        APIFromAllTrendingPictures: state
    }
}
const mapDispatchToProps = dispatch => {
    return {
        hitAllTrendingPicturesAPI: (offset) => dispatch(hitAllTrendingPicturesAPI(offset)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AllTrendingPictures)
