import React, { useState } from 'react'
import { useEffect } from 'react';

import miniLoader from '../../assets/miniLoader.svg';
import './InternshipCard.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {Link} from 'react-router-dom'



const InternshipCard = (props) => {
    const [CardSubject, setCardSubject]= useState();
    console.log('card mmmm',CardSubject)
    useEffect(() => {
        if(props.InternshipSubjectsApi.InternshipSubjects.internshipSubjectsGetApi.internshipSubjectsSuccess &&
            props.InternshipSubjectsApi.InternshipSubjects.internshipSubjectsGetApi.internshipSubjects){
                setCardSubject( props.InternshipSubjectsApi.InternshipSubjects.internshipSubjectsGetApi.internshipSubjects)
                // console.log('setCardSubject',props.InternshipSubjectsApi.InternshipSubjects.internshipSubjectsGetApi.internshipSubjects)
            }
        
    },[props.InternshipSubjectsApi.InternshipSubjects.internshipSubjectsGetApi.internshipSubjectsSuccess])
    const handleCourseClick = (sub_id) => {
        sessionStorage.setItem('internshipSubjectId',sub_id)
        sessionStorage.setItem('emiStatus',0)
        // props.fetchInternshipCoursesDetails(sub_id)

    }
    return (
        
        <div className="CardContainer" id="CardContainer" >

            <div id="CardContainer-blank"></div>
            <h2 style={{fontWeight:'bold'}}>Infoidol Learning Courses</h2>
            
            {
                CardSubject &&
                CardSubject.map((element,elemindex) => {
                return(
                <div className="Cardsinternship" style={{cursor:'pointer',display:'inline-block',borderRadius:'10px'}}
                onClick={() => handleCourseClick(element.sub_id)}
                >
                    <Link to={{pathname: '/course-detail-page'}}>
                    <div className="COurses">
                    <LazyLoadImage className="InternshipCard_Image" placeholder={<div><img src={miniLoader} /></div>} src={element.back_image}   alt=""/>
                    </div>
                    <div className="CourseSubCard">
                        {/* <div className="CourseDescription"> */}
                        <h3 style={{color:'black'}}><b>{element.sub_name}</b></h3>
                        {
                        element.sub_des && element.sub_des.map((discElement,discIndex) => {
                            return(
                                <div>
                                    <p style={{color:'black',fontWeight:'bolder',fontSize:'initial'}}>{discElement}</p>
                                </div>
                            )
                        })
                        }
                        {/* </div> */}
                    
                    </div>
                    </Link>

                </div>
                )
                })
                }
                <div id="ninternshipCard-blank">
            </div>
        </div>
    
    )
}

export default InternshipCard
