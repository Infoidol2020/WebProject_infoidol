import React from 'react'
import LearningVideo from '../../assets/learningvideo.mp4'
import './NewInternshipVideo.css'

const NewInternshipVideo = () => {
    return (
        <div className="NewInternship-video" style={{marginLeft:'103rem',marginTop:'-27vh'}}>
            <video className="NewInternshipVideo"  controls style={{width:'24vw',height:'26vh'}}
            src={LearningVideo}></video>
        </div>
    )
}

export default NewInternshipVideo
