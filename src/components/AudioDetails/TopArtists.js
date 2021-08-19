import React from 'react'
import {Link} from 'react-router-dom'

import './TopArtists.css'

import miniLoader from '../../assets/miniLoader.svg'

import { LazyLoadImage } from 'react-lazy-load-image-component';

const TopArtists = (props) => {

    const handleAudioProfileClick = (profile_id) => {
        localStorage.setItem('userProfileId', profile_id)
        props.fetchUserProfile(profile_id)
        // console.log('handleAudioProfileClick',profile_id)
    }
    return (
        <div className="AudioDetail_TopArtist">
            {
                (props.topArtists && props.topArtists.length > 0) &&
                <h2 className="TopArtists_Headline">Top Artists</h2>
            }
            {
                (props.topArtists && props.topArtists.length > 0) &&
                props.topArtists.map((artist, artistIndex) => {
                    return(
                        <Link to='./userprofile'>
                        <div className="TopArtist_InfoWrapper" 
                        onClick={() => handleAudioProfileClick(artist.artist_id)}
                        key={artistIndex} >
                            <LazyLoadImage placeholder={<div><img src={miniLoader} /></div>} className="TopArtist_Pix" src={artist.profile_pic}/>
                            {/* <span style={{marginTop: '-1rem'}}>{artist.artist_name}</span> */}
                            {
                                window.matchMedia('(max-width: 500px)'.matches) ?
                                    <span style={{marginTop: '-1rem'}}>{artist.artist_name.slice(0, 7).concat('...')}</span>
                                : 
                                <span style={{marginTop: '-1rem'}}>{artist.artist_name}</span>
                            }
                        </div>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default TopArtists
