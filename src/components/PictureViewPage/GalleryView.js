import React from 'react'

const GalleryView = (props) => {
    // var pictureMain = props.AllPictureListFromAPI.PictureView.PictureDetailPageGetApi.allPictureDetail.picture_detail;
    console.log('gallery ',props)
    return (
        <div>
            <p>loren20

            </p>
            <img src={props.AllPictureListFromAPI.PictureView.PictureDetailPageGetApi.allPictureDetail.picture_detail && 
                props.AllPictureListFromAPI.PictureView.PictureDetailPageGetApi.allPictureDetail.picture_detail.picture_link} style={{}} />
        </div>
    )
}

export default GalleryView
