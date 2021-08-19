import React, {useState, useEffect} from 'react';
// import axios from 'axios';
import {connect} from 'react-redux';
import Carousel from 'react-elastic-carousel'
import './RecentPlayed.css'
// const RecentPlayed = ({ArtistsFromApi}) => {
const RecentPlayed = (props) => {
    // console.log('props from Recently played',props)
    const [ArtistsFromApi,setArtistsFromApi] = useState([]);

    useEffect(() => {
        setArtistsFromApi(props.AllAudiosFromAPI.AudioItem.AudioPlayerGetApi.allAudioPlayerApi.recent_played)
    }, [props.AllAudiosFromAPI.AudioItem.AudioPlayerGetApi.AudioPlayerSuccess])
    // console.log('Recently played vvvvvvvvvvvvvvvvvvvvvvvvvv ',props.AllAudiosFromAPI.AudioItem.AudioPlayerGetApi.allAudioPlayerApi.recent_played)
    
    return (
        <div className="rescentMusicPlayed" >
            <div className="recentlyPlayed" >
                <h2 style={{marginBottom: '3rem'}}>Recently Played</h2 >
            </div>
            <div className="recentPlayedWrapper">
            <div className="styling-example">
                    <Carousel itemsToShow={6}>
                {
                    ArtistsFromApi ?
                    ArtistsFromApi && ArtistsFromApi.map((element, index) => {
                        return(
                            <>
                                <div className="recentlyMusicDetail">
                                {element.music_thumbnail ?
                                <>
                                <img alt="Thumbnail" src={element.music_thumbnail}></img>
                                <p className="recentPlayedSongsTitle">  {element.music_title.length > 7 ? 
                                    element.music_title.slice(0, 22).concat('...') : 
                                    element.music_title}</p>
                                    </>
                                    :<img alt="broken_img" src={element.cat_image_link}></img>

                                }                                
                                </div>
                            </>
                        )
                    }): <>Loading...plz Wait !!</>
                }
                 </Carousel>
                                </div>
            </div>
        </div>
    )
}

export default RecentPlayed