import React, {useEffect,useState} from 'react'
import './VideoLikeShare.css'
import ShareMedia from '../Feed/ShareMedia';
import Report from './Report';


const VideoLikeShare = (props) => {
    const handleLike = (elementId, elementType) => {
        props.hitLikeApi(elementId, elementType)
    }
    // console.log('props from video comments', props.VideoDetails.Like.LikeApi.LikeApiSuccess)
    
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
    
    useEffect(() => {
        if(props.VideoDetails.Like.LikeApi.LikeApiSuccess){
            props.fetchAllVideoView(localStorage.getItem('id'))
        }

    }, [props.VideoDetails.Like.LikeApi.LikeApiSuccess])
    return (
        <div className="VideoLikeShare_Container" >
            {/* Share modal */}
            <div className="modal fade" id="exampleModalCenter" style={{marginTop: '35vh'}} tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
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
            {/* Like */}
            <div className="VideoLikeShare_LikeWrapper">
                {
                    props.videoDetails && props.videoDetails.video_detail.like_status === true &&
                    <div onClick={() => handleLike(props.videoDetails.video_detail.video_id,
                        props.videoDetails.video_detail.type)}>
                        <i class="fas fa-thumbs-up" 
                        style={{color:'Blue',fontSize:'xx-large',marginLeft: '1rem',marginTop: '1.5rem'}}></i>
                    </div>
                }
                {
                    props.videoDetails && props.videoDetails.video_detail.like_status === false &&
                    <div style={{border: '0', outline: 'none',background: '#F1F4F5E8 0% 0% no-repeat padding-box'}} onClick={() => handleLike(props.videoDetails.video_detail.video_id,
                        props.videoDetails.video_detail.type)}>
                        <i class="fas fa-thumbs-up"  
                        style={{color:'gray',fontSize:'xx-large',marginLeft: '1rem',marginTop: '1.5rem'}}></i>
                    </div>
                }
            </div>
            {/* Share */}
            <div style={{ margin: '0.5rem', cursor: 'pointer',color:'black',marginTop: '3vh'}}>
                <span onClick={() => handleShareClick(
                    props.VideoDetails.VideoView.VideoDetailPageGetApi.allVideoDetail.video_detail.video_link, 
                    props.VideoDetails.VideoView.VideoDetailPageGetApi.allVideoDetail.video_detail.video_title, 
                    props.VideoDetails.VideoView.VideoDetailPageGetApi.allVideoDetail.video_detail.video_caption, 
                    props.VideoDetails.VideoView.VideoDetailPageGetApi.allVideoDetail.video_detail.video_thumbnail_link, 
                    props.VideoDetails.VideoView.VideoDetailPageGetApi.allVideoDetail.video_detail.type)} 
                    style={{marginLeft: '0.5vw'}} data-toggle="modal" data-target="#exampleModalCenter">
                        <i className="fas fa-share" id="VD_shareIcon"
                        // style={{fontSize:'2vw',marginTop: '1.5rem'}}
                        ></i>
                </span>
            </div>
            {/* Report */}
            <Report {...props}/>
        </div>
    )
}

export default VideoLikeShare
