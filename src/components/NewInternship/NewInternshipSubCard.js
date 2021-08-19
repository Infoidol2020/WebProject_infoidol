import React, { useEffect } from 'react'
import './NewInternshipSubCard.css'

const NewInternshipSubCard = (props) => {
    console.log('props from new internship cards',props)
  useEffect(() => {
            // sessionStorage.setItem('internshipSubjectId', 1)
            props.fetchInternshipCourses()
            props.fetchInternshipCoursesDetails()
        }, [])
    return (
        <section className="new-internship-Sub-card-container" id="new-internship-Sub-card-container">
            <div id="internshipSubCard-blank">
                
            </div>
            <p  className="new-internship-courses">
            Infoidol Learning Courses
            </p>
            {
                props.InternshipSubjectsApi.InternshipSubjects.internshipSubjectsGetApi.internshipSubjects &&
                props.InternshipSubjectsApi.InternshipSubjects.internshipSubjectsGetApi.internshipSubjects.map((cardelement,cardelemindex) => {
                    return(
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img className="sub_image-card-front-" src={cardelement.sub_image} alt="Avatar" style={{width:'19vw', height: '47.5vh'}}/>
                                    {/* <p classNameName="new-internship-sub_name-card" style={{color: 'black'}}>{cardelement.sub_name}</p>  */}
                                </div>
                                
                                <div className="flip-card-back">
                                <img className="sub_image-card-back" src={cardelement.back_image} alt="Avatar"/>
                                    {/* <p className="sub_name-card-back">{cardelement.sub_name}</p>  */}
                                    <div className="card-back-sub-desc-wrapper">
                                    <p className="sub_desc-card-back">{cardelement.sub_des}</p>
                                    {
                                        // cardelement.sub_preview &&
                                        // cardelement.sub_preview.map((card_desc_element,card_desc_index) => {
                                        //     return(
                                        //         <div className="card_desc_element-back">
                                        //             {/* {card_desc_index +1}  */}
                                        //             <span className="card-back-bullets">&#10003;</span>
                                        //             {card_desc_element}</div>
                                        //     )
                                        // })
                                    }
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            <div id="internshipSubpricing-blank">
                
            </div>
        </section>
    )
}

export default NewInternshipSubCard
