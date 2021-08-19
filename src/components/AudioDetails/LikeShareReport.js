import React, {useEffect,useState} from 'react'
import ShareMedia from '../Feed/ShareMedia';
import { useHistory } from 'react-router-dom';


import './LikeShareReport.css'

const LikeShareReport = (props) => {
    const history = useHistory();
    //share element 
    const [shareElementLink, setShareElementLink] = useState()
    const [shareElementTitle, setShareElementTitle] = useState()
    const [shareElementDescription, setShareElementDescription] = useState()
    const [shareElementThumbnail, setShareElementThumbnail] = useState()
    const [shareElementType, setShareElementType] = useState()


    //handle share
    const handleShareClick = (link, title, description, thumbnail, type) => {
        // console.log('twert', type)
        setShareElementLink(link)
        setShareElementTitle(title)
        setShareElementDescription(description)
        setShareElementThumbnail(thumbnail)
        setShareElementType(type)
        // console.log('elemIddd', id)
    }
    // console.log('props from LSR musickkk', props)
    const handleLike = (id, type) => {
        if(localStorage.getItem('WebAppUserKey') === null || localStorage.getItem('WebAppUserKey') == '' ){
            history.push('/login')
            return
        }
        // console.log(id, type)
        props.hitLikeApi(id, type)
    }

    useEffect(() => {
        if(props.AllAudiosFromAPI.Like.LikeApi.LikeApiSuccess){
            props.fetchMusicCommentList(localStorage.getItem('id')); //music detail page api
        }
    }, [props.AllAudiosFromAPI.Like.LikeApi.LikeApiSuccess])
    return (
        <>
        {/* Share modal */}
        <div className="modal fade" id="exampleModalCenter" style={{marginTop: '35vh'}} tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content share-modal-audio" >
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">Share Content</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <ShareMedia 
                    shareElementLink={shareElementLink} 
                    shareElementTitle={shareElementTitle} 
                    shareElementDescription={shareElementDescription} 
                    shareElementThumbnail={shareElementThumbnail}
                    shareElementType={shareElementType} />
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    {/* <button type="button" className="btn btn-primary">Save changes</button> */}
                </div>
                </div>
            </div>
            </div>
        <div>
            {
                props.musicDetails &&
                props.musicDetails.music_detail.like_status &&
                <div 
                onClick={ () => handleLike(props.musicDetails.music_detail.music_id, props.musicDetails.music_detail.type)}>
                    <i class="fas fa-thumbs-up like-audio-container"  
                    style={{color:'Blue',fontSize:'xx-large',marginRight: '3rem',marginLeft: '2rem'}}></i>
                </div>
            }
        </div>
        <div>
            {
                props.musicDetails &&
                props.musicDetails.music_detail.like_status == false &&
                <div 
                
                onClick={ () => handleLike(props.musicDetails.music_detail.music_id, props.musicDetails.music_detail.type)}>
                    <i  className="fas fa-thumbs-up like-audio-container" 
                    style={{color:'gray',fontSize:'xx-large',marginRight: '3rem',marginLeft: '2rem'}}></i></div>
                }
        </div>
        {/* Share */}
        <div style={{ margin: '0.5rem', cursor: 'pointer',color:'black'}}>
                <span onClick={() => handleShareClick(
                    props.musicDetails.music_detail.music_link, 
                    props.musicDetails.music_detail.music_title, 
                    props.musicDetails.music_detail.music_caption, 
                    props.musicDetails.music_detail.music_thumbnail_link, 
                    props.musicDetails.music_detail.type)} 
                    style={{marginLeft: '0.5vw'}} data-toggle="modal" data-target="#exampleModalCenter">
                        <i className="fas fa-share share-audio-container" style={{fontSize:'2vw',color: 'lightgray',marginRight: '3rem'}}></i>
                </span>
            </div>
        </>
    )
}

export default LikeShareReport
