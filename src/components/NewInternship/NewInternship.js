import React, { useEffect} from 'react'
import { connect } from 'react-redux'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import { fetchInternshipCourses } from '../../redux/InternshipSubject/InternshipSubjectAction'
import { fetchInternshipCoursesDetails } from '../../redux/InternshipSubjectDetails/InternshipSubjectDetailsAction'
import NewInternshipSubCard from './NewInternshipSubCard'
import HorizontalLabelPositionBelowStepper from './NewInternshipTimeline'
import './NewInternshipTimeline.css'
import NewInternshipPricing from './NewInternshipPricing'
import NewInternshipCompanies from './NewInternshipCompanies'
import NewInternshipTabs from './NewInternshipTabs'
import InternshipBanner from './InternshipBanner'
import NInternshipLearn from './NInternshipLearn'
import InternshipCard from './InternshipCard'
import NewInternshipVideo from './NewInternshipVideo'

const NewInternship = (props) => {
        console.log('props from  New internship detail',props)
        useEffect(() => {
            sessionStorage.setItem('internshipSubjectId', 0)
            props.fetchInternshipCourses()
            // props.fetchInternshipCoursesDetails(sessionStorage.getItem('internshipSubjectId'))
        }, [])
    return (
        <div>
            <Navbar/>
            <Sidebar/>
            <section className="New-Internship-Tabs">
                <NewInternshipTabs/>
            </section>
            <section className="new-internship-banner">
            <InternshipBanner/>
            </section>
            <NewInternshipVideo/>
            <section className="New-internship-tab">
                <NInternshipLearn/>
            </section>
            <section className="New-Internship-SubCard">
                {/* <NewInternshipSubCard  {...props}/> */}
                <InternshipCard  {...props}/>
            </section>
            <section className="New-Internship-Timeline">
            <HorizontalLabelPositionBelowStepper/>
            </section>
            <NewInternshipPricing/>
            <NewInternshipCompanies/>
        </div>
    )
}

// export default NewInternship
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
export default connect(mapStateToProps, mapDispatchToProps)(NewInternship)