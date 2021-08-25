import React,{useEffect} from 'react'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import NewInternshipTabs from './NewInternshipTabs'

import { connect } from 'react-redux'
// import { fetchInternshipCourses } from '../../redux/InternshipSubject/InternshipSubjectAction'
import { fetchInternshipCoursesDetails } from '../../redux/InternshipSubjectDetails/InternshipSubjectDetailsAction'
import CourseDescription from './CourseDescription'
import CourseDetail from './CourseDetail'
// import InternshipBanner from './InternshipBanner'
import CourseDetailAdms from './CourseDetailAdms'
import CourseOverview from './CourseOverview'
import CourseIdeal from './CourseIdeal'
import CourseAdvantage from './CourseAdvantage'
import CourseToolCovered from './CourseToolCovered'
import CourseCertificate from './CourseCertificate'
import CourseGraph from './CourseGraph'
import CourseBanner from './CourseBanner'
import CourseDummyBlock from './CourseDummyBlock'
import CourseTab from './CourseTab'


const CourseDetailpage = (props) => {
    console.log('Course Detail console',props)
    useEffect(() => {
        // sessionStorage.setItem('internshipSubjectId')
        // props.fetchInternshipCourses()
        props.fetchInternshipCoursesDetails(sessionStorage.getItem('internshipSubjectId'))
        // window.location.reload();
    }, [])
    return (
        <div>
            {/* <Navbar/>
            <Sidebar/> */}
            <section style={{marginTop:'-7rem'}}> 
            <CourseTab/>
            </section>
            <CourseBanner {...props}/>
            <CourseOverview {...props}/>
            <CourseDetail {...props}/>
            <CourseDescription  {...props}/>
            <CourseAdvantage {...props}/>
            <CourseCertificate/>
            <CourseDummyBlock/>
            <CourseIdeal/> 
            <CourseDetailAdms/>
            <CourseToolCovered {...props}/>
            <CourseGraph {...props} />

            {/* <CourseIdeal/>  */}

            {/* <CourseDetail {...props}/>
            <CourseAdvantage {...props}/>
            <CourseCertificate/>
            <CourseDescription  {...props}/>
            <CourseToolCovered {...props}/>
            <CourseDetailAdms/>
            <CourseGraph {...props} />
            <CourseIdeal/> */}

        </div>
    )
}
const mapStateToProps = (state) => {
    console.log('stateeeeeec internship details', state);
return{
    InternshipSubjectsApi :state
}
}
const mapDispatchToProps = dispatch => {
return {
    // fetchInternshipCourses: () => dispatch(fetchInternshipCourses()),
    fetchInternshipCoursesDetails : (Subject_Id) => dispatch(fetchInternshipCoursesDetails(Subject_Id)),
}
}
export default connect(mapStateToProps, mapDispatchToProps)(CourseDetailpage)
// export default CourseDetailpage
