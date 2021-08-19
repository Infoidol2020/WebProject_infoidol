import React from 'react'
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import './CourseCertificate.css'
import InternCertificate from '../../assets/Internship_certificate.jpeg'


const CourseCertificate = () => {
    return (
        <div style={{marginLeft:'8rem',marginBottom:'2vh'}}>
            <p className="course-certification-heading">Why Infoidol learning and Intership program..?</p>
            <div style={{display:'flex'}}>
                <div className="course-certificate-points" style={{marginTop:'3vh'}}>
                <ul style={{listStyleType: 'none'}}>
                        <li style={{display:'flex'}}><DoubleArrowIcon style={{width: '28px',height: '23px',color: '#A435F0'}}/><span className="course-detail-li"> Develop skill for real carrier growth. </span></li>
                        <li style={{display:'flex'}}><DoubleArrowIcon style={{width: '28px',height: '23px',color: '#A435F0'}}/><span className="course-detail-li"> Learn from experts active in their field.</span></li>
                        <li style={{display:'flex'}}><DoubleArrowIcon style={{width: '28px',height: '23px',color: '#A435F0'}}/><span className="course-detail-li"> Learn by working on live project.</span></li>
                        <li style={{display:'flex'}}><DoubleArrowIcon style={{width: '28px',height: '23px',color: '#A435F0'}}/><span className="course-detail-li"> Pertionalized guideness from infoidol mentors.</span></li>
                        <li style={{display:'flex'}}><DoubleArrowIcon style={{width: '28px',height: '23px',color: '#A435F0'}}/><span className="course-detail-li"> Placement oppertunity.</span></li>
                    </ul>
                </div>
                <div className="course-internship-certificate-image">
                    <img src={InternCertificate}/>
                </div>
            </div>
        </div>
    )
}

export default CourseCertificate
