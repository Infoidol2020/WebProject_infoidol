import React, {useEffect} from 'react'
import { useState } from 'react'
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import { Link } from 'react-router-dom';


import './CourseDesciption.css'

const CourseDescription = (props) => {

    // console.log('des ',props.InternshipSubjectsApi.InternshipSubjectsDetails.internshipSubjectsDetailsDetailsGetApi.internshipSubjectsDetails[1])
    const [CourseDescription,setCourseDescription]= useState();

    useEffect(() => {
        // sessionStorage.setItem('internshipSubjectId',)
        // props.fetchInternshipCourses()
        props.fetchInternshipCoursesDetails(sessionStorage.getItem('internshipSubjectId'))
    }, [])
    const handleRegisteronemonth = (package_id) =>{
        sessionStorage.setItem('internshipPackageId',package_id)
        sessionStorage.setItem('emiStatus',0)
    }
    useEffect(() => {
    if(props.InternshipSubjectsApi.InternshipSubjectsDetails.internshipSubjectsDetailsDetailsGetApi.internshipSubjectsDetailsSuccess &&
        props.InternshipSubjectsApi.InternshipSubjectsDetails.internshipSubjectsDetailsDetailsGetApi.internshipSubjectsDetails.package_detail){
            setCourseDescription( props.InternshipSubjectsApi.InternshipSubjectsDetails.internshipSubjectsDetailsDetailsGetApi.internshipSubjectsDetails.package_detail)
            // console.log(' props.InternshipSubjectsApi.InternshipSubjectsDetails.internshipSubjectsDetailsDetailsGetApi.internshipSubjectsDetails[0]', props.InternshipSubjectsApi.InternshipSubjectsDetails.internshipSubjectsDetailsDetailsGetApi.internshipSubjectsDetailsSuccess)
        }

    }, [props.InternshipSubjectsApi.InternshipSubjectsDetails.internshipSubjectsDetailsDetailsGetApi.internshipSubjectsDetailsSuccess])
    return (
        <div className="course-description-container" >
            <p className="course-heading">What You'll Learn</p>
            <div className="course-flex-container">
            {
                CourseDescription && CourseDescription.map((courseElem,courseindex) => {
                    console.log('type',courseElem.type)
                    return(
                        <div className="course-desciption-component">

                            {
                                courseElem.days && courseElem.days === '30' &&
                                <div className="desciption-one-month">
                                <div className="description-top">
                                    <p className="num-of-days"> For {courseElem.days} days Learning</p>
                                    <p className="course-price-30"> &#8377;{courseElem.price}</p>
                                </div>

                                
                                    <div className="topic-container">
                                    {
                                        courseElem.topic && courseElem.topic.map((topicelem,topicindex) => {
                                            return(
                                                <p className="course-topics"><DoubleArrowIcon style={{width: '28px',height: '23px',color: '#FFFFFF'}}/>&nbsp;{topicelem}</p>
                                            )
                                        })
                                    }
                                    </div>

                                    <div className="course-register-30button">
                                    <Link to='/registeration-form'>
                                        <button  onClick={() => handleRegisteronemonth(courseElem.package_id)} >Register Now</button>
                                        </Link>
                                        <br/>
                                        <p className="internshipCourses-regd-note"><mark>** Register @INR {Math.floor(courseElem.price/2)} only/- & Start your classes. Pay remaining after course completion **</mark></p>
                                    </div>
                                </div>
                            }

                            {
                                courseElem.days && courseElem.days === '90' &&
                                <div className="desciption-three-month">
                                <div className="description-top">
                                    <p className="num-of-days"> For {courseElem.days} days Learning</p>
                                    <p className="course-price-90"> &#8377;{courseElem.price}</p>
                                </div>
                                
                
                                
                                    <div className="topic-container">
                                    {
                                        courseElem.topic && courseElem.topic.map((topicelem,topicindex) => {
                                            return(
                                                <p className="course-topics"><DoubleArrowIcon style={{width: '28px',height: '23px',color: '#FFFFFF'}}/> &nbsp;{topicelem}</p>
                                            )
                                        })
                                    }
                                    </div>
                                    <div className="course-register-90button">
                                    <Link to='/internship-form'>
                                        <button  onClick={() => sessionStorage.setItem('internshipPackageId', courseElem.package_id)} >Register Now</button>
                                    </Link>
                                    </div>

                                </div>
                            }
                            
                            
                    </div>
                    )
                })
            }
            
            </div>
            <div id="course-certificate-blank" style={{height:'8vh'}}>

            </div>
            
        </div>
    )
}

export default CourseDescription
