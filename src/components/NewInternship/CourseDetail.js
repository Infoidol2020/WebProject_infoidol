import React,{useEffect,useState} from 'react'
import LearningBoy from '../../assets/LearningBoy.svg'
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import './CourseDetail.css'
import checkList from '../../assets/checkList.jpg';
import projectBased from '../../assets/projectBased.jpg';
import workExp from '../../assets/working.svg';
import support from '../../assets/support.jpg';
import coworkers from '../../assets/coworkers.jpg';


const CourseDetail = (props) => {
    // console.log(' props CourseDetail', props.InternshipSubjectsApi.InternshipSubjectsDetails.internshipSubjectsDetailsDetailsGetApi.internshipSubjectsDetails.subject_detail.sub_name)
    const [Feature,setFeature]=useState();

    useEffect(() => {
        if(props.InternshipSubjectsApi.InternshipSubjectsDetails.internshipSubjectsDetailsDetailsGetApi.internshipSubjectsDetailsSuccess &&
            props.InternshipSubjectsApi.InternshipSubjectsDetails.internshipSubjectsDetailsDetailsGetApi.internshipSubjectsDetails){
                setFeature(props.InternshipSubjectsApi.InternshipSubjectsDetails.internshipSubjectsDetailsDetailsGetApi.internshipSubjectsDetails.subject_detail.sub_name)
                console.log(' props CourseDetail',Feature)
            }
        }, [props.InternshipSubjectsApi.InternshipSubjectsDetails.internshipSubjectsDetailsDetailsGetApi.internshipSubjectsDetailsSuccess])
    return (
        <div className="course-details-container">
            <div className="course-details-wrapper">
                <p className="course-details-Career">
                    Take Your Developer Career to New Levels
                </p>
                <p className="course-details-highlight">
                    Hands-on, project-based learning is at the heart of everything you do at Infoidol. Land top {Feature} developer jobs with real work experience in key skills by working on internship-grade development projects.
                </p>
            </div>

            <div className="course-value-list">
                <div className="course-list">
                    <img className="course-list-img" src={projectBased} alt="" />
                    <p className="Project-based">True, Project-based Learning</p>
                </div>

                <div className="course-list">
                    <img className="course-list-img" src={workExp} alt="" />
                    <p className="Project-based">Real Work Experience</p>
                </div>

                <div className="course-list">
                    <img className="course-list-img" src={checkList} alt="" />
                    <p className="Project-based">Job-ready Portfolio on GitHub</p>
                </div>

                <div className="course-list">
                    <img className="course-list-img" src={support} alt="" />
                    <p className="Project-based">Personalised Career Guidance & Support</p>
                </div>
                <div className="course-list">
                    <img className="course-list-img" src={coworkers} alt="" />
                    <p className="Project-based">Chances Of getting placed at Infoidol</p>
                </div>

            </div>
            <div id="course-description-blank" style={{height:'8vh'}}>

            </div>
        </div>
    )
}

export default CourseDetail
