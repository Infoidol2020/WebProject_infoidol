import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'

import {hitAllTrendingAudiosAPI} from '../../redux/AllTrendingAudios/AllTrendingAudiosActions'

import pageLoader from '../../assets/pageLoader.svg'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import TrendingAudios from './TrendingAudios'

const AllTrendingAudios = (props) => {

    const [allTrendingAudios, setAllTrendingAudios] = useState([])
    const [length, setLength] = useState(0)
    useEffect(() => {
        // console.log('sdfff', sessionStorage.getItem('audioOffset'))
        if(sessionStorage.getItem('audioOffset') == undefined || sessionStorage.getItem('audioOffset') == null){
            props.hitAllTrendingAudiosAPI(0)
            sessionStorage.setItem('audioOffset', 0)
        }
        else{
            props.hitAllTrendingAudiosAPI(sessionStorage.getItem('audioOffset'))
        }
    }, [])

    useEffect(() => {
        if(props.APIFromAllTrendingAudios.TrendingAudios.TrendingAudiosApi.TrendingAudiosSuccess &&
            props.APIFromAllTrendingAudios.TrendingAudios.TrendingAudiosApi.TrendingAudios.status &&
            props.APIFromAllTrendingAudios.TrendingAudios.TrendingAudiosApi.TrendingAudios.data.length > 0){
            // setAllTrendingAudios(allTrendingAudios => [...allTrendingAudios , ...props.APIFromAllTrendingAudios.TrendingAudios.TrendingAudiosApi.TrendingAudios.data])
            setAllTrendingAudios(props.APIFromAllTrendingAudios.TrendingAudios.TrendingAudiosApi.TrendingAudios.data)
            setLength(prevLength => prevLength + props.APIFromAllTrendingAudios.TrendingAudios.TrendingAudiosApi.TrendingAudios.data.length)
        }
    }, [props.APIFromAllTrendingAudios.TrendingAudios.TrendingAudiosApi.TrendingAudiosSuccess])
    return (
        <div>
            <Sidebar />
            <Navbar />
            <div style={{marginLeft: '4vw', marginTop: '10vh'}}>
                {
                props.APIFromAllTrendingAudios.TrendingAudios.TrendingAudiosApi.TrendingAudiosInProgress ? 
                <div style={{textAlign: 'center'}}>
                    <img src={pageLoader} />
                </div>
                : 
                <TrendingAudios allTrendingAudios={allTrendingAudios} length={length} {...props} />

                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    // console.log('stateeeeee from Dashboardbnbvcvb', state);
    return{ 
        APIFromAllTrendingAudios: state
    }
}
const mapDispatchToProps = dispatch => {
    return {
        hitAllTrendingAudiosAPI: (offset) => dispatch(hitAllTrendingAudiosAPI(offset)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AllTrendingAudios)
