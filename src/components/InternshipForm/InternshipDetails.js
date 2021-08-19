import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import internBanner from '../../assets/Internship.jpg'
import airplaneBanner from '../../assets/airplane.gif'
// import internBanner from '../../assets/Offerprice.gif'


import './InternshipDetails.css'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
// import VerticalTabs from './TabPanel'
import InternshipCoursesTabs from './InternshipCoursesTabs'
import { fetchInternshipCourses } from '../../redux/InternshipSubject/InternshipSubjectAction'
import { fetchInternshipCoursesDetails } from '../../redux/InternshipSubjectDetails/InternshipSubjectDetailsAction'
// import { fetchInternshipRegisterMap } from '../../redux/InternshipRegisterMap/InternshipRegisterMapAction'

const InternshipDetails = (props) => {
    // console.log('props from internship detail',props)
    useEffect(() => {
        sessionStorage.setItem('internshipSubjectId', 1)
        props.fetchInternshipCourses()
        props.fetchInternshipCoursesDetails(1)
    }, [])
    return (
        <div>
            <Navbar/>
            <Sidebar/>
            <section className="ID_Wrapper">
                <div className="About_Internship_Container">
                    <p className="InternshipDetail_Title1">
                    Join Our
                    </p>
                    <p className="InternshipDetail_Title2">
                    LEARNING 
                    </p>
                    <p className="InternshipDetail_Title4">
                    <span className="InternshipDetailT4_Content">& </span> INTERNSHIP
                    </p>
                    <p className="InternshipDetail_Title3">
                    PROGRAM
                    </p>
                    <p className="InternshipDetailBrief">
                        <span className="InternshipDetailsHeading">
                        <em>Infoidol learning and internship program</em> is practical learning with internship experience.
                        </span>
                        <br />
                        <br />
                        <p  className="InternshipDetailsHeading"><b>Mission:-</b> " To provide practical  technical skills to make you expert in in-demand technical skills which guarantees you to succeed in Information technology industry "</p>
                    <div className="Internship-values">
                        <h3><b>Core Values</b></h3>
                    <ul className="Internship-values-list">
                        <li>True project based Learning.</li>
                        <li>Become professional coder at end of this program.</li>
                        <li>Real work experience.</li>
                        <li>Course completion certificate.</li>
                        <li>Job-ready portfolio on Git hub.</li>
                        <li>Personalized carrier guidance and support.</li>
                        <li>Chance of getting placement at infoidol pvt. ltd.</li>
                        <li>Recorded videos of live classes.</li>
                    </ul>
                    </div>
                    </p>
                </div>
                {/* <div className="InternshipDetails_Plane"> */}
                    {/* <img src={airplaneBanner} alt="" className="airplaneBanner-img" /> */}
                    <div className="airplaneBanner-img" >
                        <iframe src="https://giphy.com/embed/QVreOR83Fgr67g2WFJ" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
                    </div>
                {/* </div> */}
                <div className="InternshipDetails_Picture ">
                    <img src={internBanner} alt="" className="Id_img" />
                </div>
            </section>

            <section className="InternshipDetails_Subjects">
                {/* <VerticalTabs {...props} /> */}
                <InternshipCoursesTabs {...props}/>
            </section>
        </div>
    )
}
const mapStateToProps = (state) => {
        // console.log('stateeeeeec internship details', state.InternshipSubjects.internshipSubjectsGetApi.internshipSubjects);
    return{
        InternshipSubjectsApi :state
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchInternshipCourses: () => dispatch(fetchInternshipCourses()),
        fetchInternshipCoursesDetails : (Subject_Id) => dispatch(fetchInternshipCoursesDetails(Subject_Id)),
        // fetchInternshipRegisterMap : (regd_id,order_id) => dispatch(fetchInternshipRegisterMap(regd_id,order_id)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(InternshipDetails)
