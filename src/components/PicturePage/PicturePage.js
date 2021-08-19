import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux'

import pageLoader from '../../assets/pageLoader.svg'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import TopCategoryPictures from './TopCategoryPictures'
import PictureCategories from './PictureCategories'
import ParticularCategoryPictures from './ParticularCategoryPictures'

import { fetchAllPictures } from '../../redux/PicturePage'
import {fetchPictureListByCategory} from "../../redux/PictureListByCategory"
import {fetchAllPictureView} from '../../redux/PictureViewPage/PictureViewPageAction'
// import CopyRight from '../CopyRight/CopyRight' 
import Footer from '../NewFooter'


const PicturePage = (props) => {

    // console.log('propsvideo',props)

    const [pictures, setPictures] = useState()
    const [PictureCats,setPictureCats]=useState();
    const [AllcategoriesPic,setAllCatergoriesPic]=useState()

    useEffect(() => {
        props.fetchAllPictures()
    }, [])


    useEffect(() => {
        if(props.PicturesFromAPI.PicturePage.picturePageGetApi.PicturePageSuccess){
            if(props.PicturesFromAPI.PicturePage.picturePageGetApi.allPictures.length>0){
            setPictures(props.PicturesFromAPI.PicturePage.picturePageGetApi.allPictures[0].data.data.new_released)
            setPictureCats(props.PicturesFromAPI.PicturePage.picturePageGetApi.allPictures[0].data.data.category)
            setAllCatergoriesPic(props.PicturesFromAPI.PicturePage.picturePageGetApi.allPictures[1].data.data)
        }}

    }, [props.PicturesFromAPI.PicturePage.picturePageGetApi.PicturePageSuccess])

    useEffect(() => {
        setAllCatergoriesPic(  props.PicturesFromAPI.PictureListByCategory.pictureListByCategoryGetApi.PictureListByCategory)
    }, [props.PicturesFromAPI.PictureListByCategory.pictureListByCategoryGetApi.PictureListByCategorySuccess])

    return (
        <div>
        {props.PicturesFromAPI.PicturePage.picturePageGetApi.PicturePageInProgress?  
        <>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <img src={pageLoader} />
            </div>
            </>
            :
            <>
            <Navbar/>
            <Sidebar />
            <TopCategoryPictures  pictures={pictures} {...props}/>
            <PictureCategories data={PictureCats}  {...props}/>

            <ParticularCategoryPictures data={AllcategoriesPic} {...props} />
            {/* <CopyRight /> */}
            <Footer />
                
        
            </>}

        </div>
    )
}

const mapStateToProps = (state) => {
    // console.log('state from picture page', state);
    return{
        PicturesFromAPI: state,
    
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchAllPictures: () => dispatch(fetchAllPictures()),
        fetchPictureListByCategory:(id)=>dispatch(fetchPictureListByCategory(id)),
        fetchAllPictureView : (data) => dispatch(fetchAllPictureView(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PicturePage)
