import React, {useEffect,useState} from 'react'
import uuid from 'react-uuid'
import ReportProblemIcon from '@material-ui/icons/ReportProblem';
import './Report.css';


const Report = (props) => {
    // console.log('execcccccccccc123456789',props && props.VideoDetails)

    const [reportCategories, setReportCategories] = useState()
    const [message, setMessage] = useState(false)
    const [categoryName, setCategoryName] = useState()
    const [musicId, setMusicId] = useState();
    const [type,setType] = useState();
    // console.log('props from report', props)
    const handleReportSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('ReportKey', uuid())
        props.postReportAPI(categoryName, localStorage.getItem('id'), 1)
    }

    const handleCategoryChange = (e) => {
        // console.log('category value', e)
        setCategoryName(e.target.value);
        setMessage(false);
    }

    useEffect(() => {
        props.fetchReportCategories()
    }, [])
    useEffect(() => {
        if(props.VideoDetails.Report.ReportCategoriesGetApi.ReportCategoriesSuccess){
            setReportCategories(props.VideoDetails.Report.ReportCategoriesGetApi.reportCategories)
        }
    }, [props.VideoDetails.Report.ReportCategoriesGetApi.ReportCategoriesSuccess])

    useEffect(() => {
        // console.log('execcccccccccc123456789')

        if(props.VideoDetails.Report.ReportPostApi.ReportPostSuccess){
            setMessage(!message)
        }
    }, [props.VideoDetails.Report.ReportPostApi.ReportPostSuccess, localStorage.getItem('ReportKey')])
    return (
        <div>
            <div data-toggle="modal" data-target="#exampleModal"                    
            onClick={() => {
                        setMessage(false)
                        setCategoryName('')
                    }}>
                <ReportProblemIcon className="VD_ReportIcon" id="VD_repoticon"
                // style={{fontSize: 'xx-large',marginLeft: '1rem',marginTop: '3.5rem'}}
                />
            </div>
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content" style={{marginTop: '15vh'}}>
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Report</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"
                    onClick={() => {
                        setMessage(false)
                        setCategoryName('')
                    }}>
                    <span aria-hidden="true">&times;</span>
                    </button>
                    {
                        message &&
                        <div style={{textAlign: 'center'}}>
                            <p style={{color: '#B22222', fontSize : '2rem', fontWeight: 'bold' }}>Reported Successfully...</p>
                        </div>
                        
                    }
                </div>
                <div class="modal-body">
                <form  onSubmit={ (e) => handleReportSubmit(e)}>
                    {
                        reportCategories && reportCategories.map((element, index) => {
                            return(
                                <> 
                                <div style={{display: 'flex'}}>
                                <input  required type = "radio" name="myGroupName" value={element.cat_name} style={{cursor: 'pointer'}} 
                                onChange={(e) => handleCategoryChange(e)} />
                                <p  style={{marginLeft: '2vw', fontWeight: 'bold', opacity: '0.7'}}>{element.cat_name}</p>
                                </div>
                                
                                </>
                            )
                        })
                    }
                <div style={{textAlign: 'center'}}>
                    <button 
                    style={{background: 'transparent linear-gradient(90deg, #1E9FC8 0%, #3C34AC 100%)', 
                    width: '7vw',
                    border: '0',
                    height: '5vh',
                    borderRadius: '10px',
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: '1.5rem',
                    opacity: '0.8'}} >Submit</button>
                </div>
                </form>
                </div>
                {/* <div class="modal-footer">

                </div> */}
            </div>
        </div>
        </div>
        </div>
    )
}

export default Report
