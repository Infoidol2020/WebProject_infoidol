import React, { useRef,useEffect,useState }from 'react'
import './InternshipCoursesTabs.css'
import { Link } from 'react-router-dom'
const InternshipCoursesTabs = (props) => {
    // console.log('props from IcTabssssss',props)

    const [subjectDetails, setSubjectDetails] = useState()
    const [orderAmount, setOrderAmount] = useState(sessionStorage.getItem('internshipPrice'))
    const internshipCoursesDescription = useRef()
  
    useEffect(() => {
        // console.log('executed from sub detail ')
        if(props.InternshipSubjectsApi.InternshipSubjectsDetails.internshipSubjectsDetailsDetailsGetApi.internshipSubjectsDetailsSuccess &&
          props.InternshipSubjectsApi.InternshipSubjectsDetails.internshipSubjectsDetailsDetailsGetApi.internshipSubjectsDetails
        //   props.InternshipSubjectsApi.InternshipSubjectsDetails.internshipSubjectsDetailsDetailsGetApi.internshipSubjectsDetails.length> 0 
          ) 
          {
        setSubjectDetails(props.InternshipSubjectsApi.InternshipSubjectsDetails.internshipSubjectsDetailsDetailsGetApi.internshipSubjectsDetails)
        }
      }, [props.InternshipSubjectsApi.InternshipSubjectsDetails.internshipSubjectsDetailsDetailsGetApi.internshipSubjectsDetailsSuccess])

    const handleSubClick = (subId) => {
        // internshipCoursesDescription.current.style.color="green"
        props.fetchInternshipCoursesDetails(subId)
        sessionStorage.setItem('internshipSubjectId', subId)
        // console.log('handle Sub Click', subId)
    }
    
    return (
        <div className="internshipCourses_Container">
            <div className="internshipCourses" style={{cursor: 'pointer'}}  >
            {
                props.InternshipSubjectsApi.InternshipSubjects.internshipSubjectsGetApi.internshipSubjects &&
                props.InternshipSubjectsApi.InternshipSubjects.internshipSubjectsGetApi.internshipSubjects.map((element,elemindex) => {
                return(
                    <div  onClick={() => handleSubClick(element.sub_id)} style={{cursor: 'pointer'}} className="internshipCoursesBtn_Wrapper">
                        <button  className="internshipCoursesBtn">{element.sub_name}</button>
                    </div>
                )
                })
            }
            </div>
            <div className="internshipCoursesDesc_Container" ref={internshipCoursesDescription} >
            {
        props.InternshipSubjectsApi.InternshipSubjectsDetails.internshipSubjectsDetailsDetailsGetApi.internshipSubjectsDetails &&
        props.InternshipSubjectsApi.InternshipSubjectsDetails.internshipSubjectsDetailsDetailsGetApi.internshipSubjectsDetails.map((subDetailsElem,subDetailsElemIndex) =>{

        // console.log('internship sub details',props.InternshipSubjectsApi.InternshipSubjectsDetails.internshipSubjectsDetailsDetailsGetApi.internshipSubjectsDetails, subDetailsElem)
        return(
            <>
        <section className="internshipCoursesDetail" key={subDetailsElemIndex}>
            <div className="internshipCoursesHeading">
                <h3><span className="internshipCourseName">{subDetailsElem.sub_name}</span> -- {subDetailsElem.days} Learning & Internship Program</h3>
            </div>
            <br />
            <div className="internshipCoursesDescription">
                {subDetailsElem.description}
            </div>
            <br />
            <div className="internshipCoursesValues">
                <p className="internshipCoursesValuesTopics"><u>Values</u></p>
                {
                subDetailsElem.intern_value &&
                subDetailsElem.intern_value.map((ValuesItems,ValuesIndex) =>{
                    return(
                        <p className="internshipCourseTopics">
                            {/* {ValuesIndex + 1}. */}
                            &nbsp;{ValuesItems}</p>
                    )
                })}
            </div>
            <div className="internshipCoursesContent">
                <p className="internshipCoursesContentTopics"><u>Topics</u></p>
                {subDetailsElem.topic.map((ContentItems,ContentIndex) =>{
                    return(
                        <p className="internshipCourseTopics">{ContentIndex + 1}. &nbsp;{ContentItems}</p>
                    )
                })}
            </div>
            
            <Link to='/internship-form'>
            <button 
                onClick={() => sessionStorage.setItem('internshipPackageId', subDetailsElem.package_id)}  
                className="internshipCoursePurchase">
                Register Now
            </button>
            <p className="internshipCourses-regd-note"><mark>** Register @INR {Math.floor(subDetailsElem.price/2)} only/- & Start your classes. Pay remaining after course completion **</mark></p>
            </Link>            

        </section>
            {/* {
               props.InternshipSubjectsApi.InternshipSubjectsDetails.internshipSubjectsDetailsDetailsGetApi.internshipSubjectsDetails.length != subDetailsElemIndex + 1 ? 
               <div className="dsfghkl" style={{height: '3px', background: '#555', margin: '0'}}></div>
               : '' 
            } */}
        </>
        )
        })
      }
            </div>
        </div>
    )
}

export default InternshipCoursesTabs
