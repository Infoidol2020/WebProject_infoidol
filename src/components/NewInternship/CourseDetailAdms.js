import React from 'react'
import adms1 from '../../assets/ChooseCourse.svg'
import adms2 from '../../assets/Formfill.svg'
import adms3 from '../../assets/Onlinelearning.svg'
import './CourseDetailAdms.css'

const CourseDetailAdms = () => {
    return (
        <section className="CourseDetailAdms">
            <p className="CourseDetailAdmsHeading">
                Admission Process
            </p>
            <div className="course-details-adms-process-container">
            <div className="adms-process-img-container">
                <img className="adms-process-img" src={adms1} alt="admsProcessImg" />
                <p className="adms-process-brief">Select the course</p>
            </div>

            <div className="adms-process-img-container">
                <img className="adms-process-img" src={adms2} alt="admsProcessImg" />
                <p className="adms-process-brief">Fill the form</p>
            </div>
            
            <div className="adms-process-img-container">
                <img className="adms-process-img" src={adms3} alt="admsProcessImg" />
                <p className="adms-process-brief">Start learning</p>
            </div>
        </div>
        </section>
    )
}

export default CourseDetailAdms
