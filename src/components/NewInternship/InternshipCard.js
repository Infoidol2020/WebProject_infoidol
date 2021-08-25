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
        // props.fetchInternshipCoursesDetails(sessionStorage.getItem('internshipSubjectId'))

    }
    return (
        
        <div className="CardContainer" id="CardContainer" >

            <div id="CardContainer-blank"></div>
            <h2 style={{fontWeight:'bold',marginBottom:'4vh',marginLeft:'2vw',marginTop:'3vh'}}>Infoidol Learning Courses</h2>
            
            {
                CardSubject &&
                CardSubject.map((cardelem,elemindex) => {
                return(
                <div className="Cardsinternship" style={{cursor:'pointer',display:'inline-block',borderRadius:'10px'}}
                onClick={() => handleCourseClick(cardelem.sub_id)}
                >
                    <Link to={{pathname: '/course-detail-page',
                cardelem:{cardelem:cardelem}}}>
                    <div className="COurses">
                    <LazyLoadImage className="InternshipCard_Image" placeholder={<div><img src={miniLoader} /></div>} src={cardelem.back_image}   alt=""/>
                    </div>
                    <div className="CourseSubCard">
                        {/* <div className="CourseDescription"> */}
                        <h3 style={{color:'black'}}><b>{cardelem.sub_name}</b></h3>
                        {/* {
                        cardelem.sub_des && cardelem.sub_des.map((disccardelem,discIndex) => {
                            return(
                                <div>
                                    <p style={{color:'black',fontWeight:'bolder',fontSize:'initial'}}>{disccardelem}</p>
                                </div>
                            )
                        })
                        } */}
                        <div>
                                    <p style={{color:'black',fontWeight:'bolder',fontSize:'initial'}}>{cardelem.sub_des}</p>
                                </div>

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
