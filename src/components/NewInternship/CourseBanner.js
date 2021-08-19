import React,{useEffect,useState} from 'react'
import './CourseBanner.css'

const CourseBanner = (props) => {
    const [banner,setbanner]=useState();
    useEffect(() => {
        if(props.InternshipSubjectsApi.InternshipSubjectsDetails.internshipSubjectsDetailsDetailsGetApi.internshipSubjectsDetailsSuccess &&
            props.InternshipSubjectsApi.InternshipSubjectsDetails.internshipSubjectsDetailsDetailsGetApi.internshipSubjectsDetails){
                setbanner( props.InternshipSubjectsApi.InternshipSubjectsDetails.internshipSubjectsDetailsDetailsGetApi.internshipSubjectsDetails)
                // console.log(' props.InternshipSubjectsApi.InternshipSubjectsDetails.internshipSubjectsDetailsDetailsGetApi.internshipSubjectsDetails[0]', props.InternshipSubjectsApi.InternshipSubjectsDetails.internshipSubjectsDetailsDetailsGetApi.internshipSubjectsDetailsSuccess)
            }
        }, [props.InternshipSubjectsApi.InternshipSubjectsDetails.internshipSubjectsDetailsDetailsGetApi.internshipSubjectsDetailsSuccess])

        // useEffect(() => {
        //     if(props.InternshipSubjectsDetails.internshipSubjectsDetailsDetailsGetApi.internshipSubjectsDetailsSuccess &&
        //         props.InternshipSubjectsDetails.nternshipSubjectsDetailsDetailsGetApi.internshipSubjectsDetails)
        // })
    return (
        <div className="course-banner">
            {
                banner && banner.map((bannerelement,bannerindex) => {
                    return(
                        <div>
                            {
                                bannerelement && bannerelement.type === "1" &&
                                <div className="course-banner-container">
                                    <img src={bannerelement.Sub_poster} />
                                </div>
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CourseBanner
