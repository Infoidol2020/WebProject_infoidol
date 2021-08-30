import React from 'react'
import './CourseIdeal.css'
import VerifiedUser from '../../assets/human-resources.png'
import EligibleUser from '../../assets/competence.png'
import goal from '../../assets/goal.png'

const CourseIdeal = () => {
    return (
        <div className="CourseIdealContainer">
            <div id="course-IdealLearning-blank" style={{height:'6vh'}}>
            </div>
            <p className="course-ideal-heading">Ideal Learner</p>
            <p className="course-ideal-sub-heading">This program requires very basic understanding of programming and is ideal for the following candidates:-</p>
            <div className="course-ideal-flex" style={{display:'flex',justifyContent:'space-around'}}>
                <div className="course-user">
                    <img className="course-ideal-img" style={{width:'5vw'}} src={VerifiedUser}/>
                    <p className="course-eligible-heading">Target Audience</p>
                    <p className="course-content">Students,Fresher, Software Developers, IT Professionals,Technical Consultants</p>
                </div>
                <div className="course-eligible">
                    <img className="course-ideal-img" style={{width:'5vw'}} src={EligibleUser}/>
                    <p className="course-eligible-heading">Pre-requisite Criteria</p>
                    <p className="course-content">College Students,Any technical degree in computer science, and basic programming knowledge.</p>
                </div>
                <div className="course-eligible">
                    <img className="course-ideal-img" style={{width:'5vw'}} src={goal}/>
                    <p className="course-eligible-heading">Only Skills Matters</p>
                    <p className="course-content"> <em>Grades never matters, Skills matters.</em> <br /> Should be available to take up a
                        job immediately after completing this course.</p>
                </div>
            </div>
            <div id="course-Admission-blank" style={{height:'8vh'}}>
            </div>
        </div>
        
    )
}

export default CourseIdeal
