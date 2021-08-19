import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {connect} from 'react-redux'
import './TopArtists.css'
// const TopArtists = ({ArtistsFromApi, fetchAllAudiosItem}) => {

const TopArtists = (props) => {
    const [ArtistsFromApi,setArtistsFromApi] =useState([]);
    // console.log('props from top artists page',props)
    useEffect(() => {
        // console.log('hiiiiiii')
        props.fetchAllAudiosItem();
    },[props.AllAudiosFromAPI.AudioItem.AudioPlayerGetApi.AudioPlayerSuccess]) 

    useEffect(() => {
        setArtistsFromApi(props.AllAudiosFromAPI.AudioItem.AudioPlayerGetApi.allAudioPlayerApi.top_artist)
        // console.log('top artists ok')
    }, [props.AllAudiosFromAPI.AudioItem.AudioPlayerGetApi.AudioPlayerSuccess])
    // console.log('mmmmmmmmmmmmmmmmmmmmm',props.AllAudiosFromAPI.AudioItem.AudioPlayerGetApi.allAudioPlayerApi.top_artist)
    return (
        <div className="musicPlayerArtists" >
                <h2>Top Artists</h2>
            {
                ArtistsFromApi ?
                ArtistsFromApi && ArtistsFromApi.map((element, index) => {
                    return(
                            <>
                                <div className="Artists_Dp">
                                    {
                                        element.profile_pic !== "" ?  
                                    <img src={ element.profile_pic} alt="Artists_dp"/>
                                    :
                                    <img src="https://homepages.cae.wisc.edu/~ece533/images/boat.png" alt="Artists_dp"/>
                                    }
                                    <span>{element.artist_name}</span>   
                                </div>
                            </>
                        )
                    })
                    : 
                    <>
                        <p>Loading...</p>
                    </>
            }  
            </div>
    )
}


export default TopArtists
