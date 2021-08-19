import React,{useEffect,useState} from 'react'
import LearningBoy from '../../assets/LearningBoy.svg'
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import './CourseDetail.css'

const CourseDetail = (props) => {
    const [Feature,setFeature]=useState();

    useEffect(() => {
        if(props.InternshipSubjectsApi.InternshipSubjectsDetails.internshipSubjectsDetailsDetailsGetApi.internshipSubjectsDetailsSuccess &&
            props.InternshipSubjectsApi.InternshipSubjectsDetails.internshipSubjectsDetailsDetailsGetApi.internshipSubjectsDetails){
                setFeature( props.InternshipSubjectsApi.InternshipSubjectsDetails.internshipSubjectsDetailsDetailsGetApi.internshipSubjectsDetails)
                console.log(' props.InternshipSubjectsApi.InternshipSubjectsDetails.internshipSubjectsDetailsDetailsGetApi.internshipSubjectsDetails[0]', props.InternshipSubjectsApi.InternshipSubjectsDetails.internshipSubjectsDetailsDetailsGetApi.internshipSubjectsDetailsSuccess)
            }
        
    
        }, [props.InternshipSubjectsApi.InternshipSubjectsDetails.internshipSubjectsDetailsDetailsGetApi.internshipSubjectsDetailsSuccess])
    return (
        <div className="course-details-container">
            <p className="pgm-highlight-sect">
                Program Highlights
            </p>
            <div className="course-details-wrapper">
                <section className="course-detail-img-section">
                    <img className="course-detail-img" src={LearningBoy} alt="LearningBoyimg" />
                </section>
                <section className="course-detail-brief-section">
                    {
                        Feature && Feature.map((featureelem, featureindex) =>{
                            return(
                                <div>
                                {
                                    featureelem && featureelem.type === "1" &&
                                    <div>
                                        {
                                            featureelem && featureelem.intern_value.map((valelem,valindex) => {
                                                return(
                                                    <div className="course-value-list">
                                                        <ul style={{listStyleType: 'none'}}>
                                                            <li><DoubleArrowIcon style={{width: '28px',height: '23px',color: '#A435F0'}}/><span className="course-detail-li">{valelem}</span></li>
                                                        </ul>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                }
                                </div>
                            )
                        })
                    }
                    {/* <ul style={{listStyleType: 'none'}}>
                        <li><DoubleArrowIcon style={{width: '28px',height: '23px',color: '#A435F0'}}/><span className="course-detail-li"> Project based Learning.</span></li>
                        <li><DoubleArrowIcon style={{width: '28px',height: '23px',color: '#A435F0'}}/><span className="course-detail-li"> Real work experience.</span></li>
                        <li><DoubleArrowIcon style={{width: '28px',height: '23px',color: '#A435F0'}}/><span className="course-detail-li"> Internship and Learning certificate.</span></li>
                        <li><DoubleArrowIcon style={{width: '28px',height: '23px',color: '#A435F0'}}/><span className="course-detail-li"> Job ready portfolio on Git hub.</span></li>
                        <li><DoubleArrowIcon style={{width: '28px',height: '23px',color: '#A435F0'}}/><span className="course-detail-li"> Personalized carrier guidance and support.</span></li>
                        <li><DoubleArrowIcon style={{width: '28px',height: '23px',color: '#A435F0'}}/><span className="course-detail-li"> Recorded video of live classes.</span></li>
                        <li><DoubleArrowIcon style={{width: '28px',height: '23px',color: '#A435F0'}}/><span className="course-detail-li"> Chance of getting placement infoidol pvt.ltd.</span></li>
                    </ul> */}
                </section>
            </div>
        </div>
    )
}

export default CourseDetail
