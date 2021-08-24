import { fontSize } from '@material-ui/system'
import React from 'react'
import './CourseDummyBlock.css'
// import HandDraw from '../../assets/PairProgrammer.svg'
import giphyy from '../../assets/giphy.gif'
// import HandDraw from '../../assets/HandDrew.jpg'


const CourseDummyBlock = () => {
    return (
        <div className="course-Block" style={{marginTop:'8vh',marginBottom:'10vh',display:'flex', background:'rgb(39 40 61)',width:'96vw', height:'40vh',padding:'4rem'}}>
            <img  style={{width:'27vw',height:'30vh',marginLeft:'3vw'}} src={giphyy}/>
            {/* <div style={{width:'100%',height:'20vh',paddingBottom:'56%',position:'relative'}}><iframe className="course-dummy-img" src="https://giphy.com/embed/L1R1tvI9svkIWwpVYr" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/Pluralsight-computer-technology-coding-L1R1tvI9svkIWwpVYr">via GIPHY</a></p> */}
            <p className="course-dummy-para">Build internship-grade projects and gain real developer work experience today </p>
            {/* <p className="course-dummy-para">real developer work experience today</p> */}
        </div>
    )
}

export default CourseDummyBlock
