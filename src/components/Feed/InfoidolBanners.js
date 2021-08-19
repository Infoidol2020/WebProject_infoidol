import React from 'react'
import mission from '../../assets/infoidolPics/mission.png';
import vision from '../../assets/infoidolPics/vision.png';
import purpose from '../../assets/infoidolPics/purpose.png';

import miniLoader from '../../assets/miniLoader.svg'

import { LazyLoadImage } from 'react-lazy-load-image-component';

const InfoidolBanners = () => {
    return (
        <div className="FeedPge_AddBannner" style={{marginTop: '7vh'}}>
            <div style={{marginTop: '7vh'}}>
                <LazyLoadImage placeholder={<div><img src={miniLoader} /></div>} src = {mission} style={{width: '27vw', height: '40vh', borderRadius :'10px', boxShadow: '8px 19px 17px #00000029'}} />
            </div>
            <div style={{marginTop: '7vh'}}>
                <LazyLoadImage placeholder={<div><img src={miniLoader} /></div>} src = {vision} style={{width: '27vw', height: '40vh', borderRadius :'10px', boxShadow: '8px 19px 17px #00000029'}} />
            </div>
            <div style={{marginTop: '7vh'}}>
                <LazyLoadImage placeholder={<div><img src={miniLoader} /></div>} src = {purpose} style={{width: '27vw', height: '40vh', borderRadius :'10px', boxShadow: '8px 19px 17px #00000029'}} />
            </div>
        </div>
    )
}

export default InfoidolBanners
