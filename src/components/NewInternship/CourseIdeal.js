import React from 'react'
import './CourseIdeal.css'
import VerifiedUser from '../../assets/human-resources.png'
import EligibleUser from '../../assets/competence.png'

const CourseIdeal = () => {
    return (
        <div style={{marginLeft:'8rem',marginBottom:'10vh'}}>
            <p className="course-ideal-heading">Ideal Learner</p>
            <p className="course-ideal-sub-heading">This program requires very basic understanding of programming and is ideal for the following candidates:-</p>
            <div style={{display:'flex',justifyContent:'space-around'}}>
                <div className="course-user">
                    <img style={{width:'5vw'}} src={VerifiedUser}/>
                    <p className="course-eligible-heading">Target Audience</p>
                    <p className="course-content">Students,Fresher, Software Developers, IT Professionals,Technical Consultants</p>
                </div>
                <div className="course-eligible">
                    <img style={{width:'5vw'}} src={EligibleUser}/>
                    <p className="course-eligible-heading">Pre-requisite Criteria</p>
                    <p className="course-content">College Students,Any technical degree in computer science, and basic programming knowledge.</p>
                </div>
            </div>
        </div>
        
    )
}

export default CourseIdeal
