import React,{useState, useEffect} from 'react'
import {connect} from 'react-redux';
import './PictureViewRecommended.css'

import miniLoader from '../../assets/miniLoader.svg'

import { LazyLoadImage } from 'react-lazy-load-image-component';


const PictureViewRecommended = (props) => {

    // console.log('recommenddddd', props)
    // AllPictureListFromAPI.PictureRecommended.PictureRecommendedApi
    const [pictureDetails, setPictureDetail] = useState([]);
    // const [recommend, setrecommend] =useState([])

    const [recommendedPictures, setRecommendedPictures] = useState([])


    useEffect(()=>{
        setPictureDetail(props)
    })

    // useEffect(() => {
    //     setrecommend(props.AllPictureListFromAPI.PictureView.PictureDetailPageGetApi.allPictureDetail.recommended)
    // },[props.AllPictureListFromAPI.PictureView.PictureDetailPageGetApi.PictureDetailPageSuccess])

    useEffect(() => {
        if(sessionStorage.getItem('pictureRecommendedOffset') == undefined || sessionStorage.getItem('pictureRecommendedOffset') == null){
            props.hitPictureRecommendedAPI(0, localStorage.getItem('UI'))
            sessionStorage.setItem('pictureRecommendedOffset', 0)
        } 
        else{
            props.hitPictureRecommendedAPI(sessionStorage.getItem('pictureRecommendedOffset'), localStorage.getItem('UI'))

        }
    }, [])

    useEffect(() => {
        if(props.AllPictureListFromAPI.PictureRecommended.PictureRecommendedApi.PictureRecommendedSuccess && 
            props.AllPictureListFromAPI.PictureRecommended.PictureRecommendedApi.PictureRecommended.status &&
            props.AllPictureListFromAPI.PictureRecommended.PictureRecommendedApi.PictureRecommended.data.length > 0){
                setRecommendedPictures(props.AllPictureListFromAPI.PictureRecommended.PictureRecommendedApi.PictureRecommended.data)
            }
    }, [props.AllPictureListFromAPI.PictureRecommended.PictureRecommendedApi.PictureRecommendedSuccess])

    const handlePicture = (image_id) => {
        localStorage.setItem('id', image_id);
        props.fetchAllPictureView(image_id)

        // console.log('picture id gotit',image_id)
        window.scrollTo(0, 0)

            }

            const loadMorePictures = () => {
                let offset = sessionStorage.getItem('pictureRecommendedOffset')
                let newOffset = parseInt(offset) + 10
                sessionStorage.setItem('pictureRecommendedOffset', newOffset)
                props.hitPictureRecommendedAPI(newOffset, localStorage.getItem('UI'))
        
            }
            const prevPictures = () => {
                let offset = sessionStorage.getItem('pictureRecommendedOffset')
                let newOffset = parseInt(offset) - 10
                sessionStorage.setItem('pictureRecommendedOffset', newOffset)
                props.hitPictureRecommendedAPI(newOffset, localStorage.getItem('UI'))
        
            }
            
    return (
        <div className="PictureViewRecommend">
            <h2>Recommended</h2>
            {
                
                recommendedPictures && 
                recommendedPictures.map((e) => {
                    return(
                        <>  
                            <div className="PV_subBlock_Wrrapper" style={{cursor: 'pointer',display:'inline-block',borderRadius:'10px'}}>
                            <div className="PV_Img" onClick={() => handlePicture(e.image_id)}>
                                <LazyLoadImage placeholder={<div><img src={miniLoader} /></div>} src={e.picture_link} alt="" style={{objectFit: 'cover'}}/>
                            </div>
                            </div>
                        </>
                    )
                })
                
            }
        {/* picture recommended pagination */}
        <div style={{width: '86%', textAlign: 'center', marginTop: '2vh', 
            marginBottom: '5vh', margin: 'auto',
            display: 'flex', justifyContent: 'center', alignItems: 'center', height: '15vh'}}>
            {
                sessionStorage.getItem('pictureRecommendedOffset') != '0' &&
                <div className="PD_recommend_Arrow" 
                onClick={prevPictures}
                >
                <i class="fas fa-angle-double-left" style={{fontSize: '2rem'}}></i>
                
            </div>
            }
            <div className="PD_recommend_rightArrow">
                <button style={{border:'none',background:'none'}}
                onClick={loadMorePictures}
                >
                    <i class="fas fa-angle-double-right" style={{fontSize: '2rem'}}></i>

                </button>
            </div>

            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    // console.log('stateeeeee from pictureview page category', state);
    return{ 
        AllPictureListFromAPI: state
    }
}

export default connect(mapStateToProps)(PictureViewRecommended)
