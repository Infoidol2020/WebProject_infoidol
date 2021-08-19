import { GET_ALL_PICTURES, GET_ALL_PICTURES_SUCCESS, GET_ALL_PICTURES_FAILURE,GET_PICTURES_BY_CATEGORIES, GET_ALL_PICTURES_LIST_BY_CATEGORY } from './PicturePageTypes'
const initialState = {
    picturePageGetApi:{
    PicturePageInProgress: false,
    PicturePageSuccess:false,
    PicturePageFailed:false,
    allPictures: [],
    error: '',
    }
}

 const PicturePageReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_ALL_PICTURES:
            return{
                ...state,
                picturePageGetApi:{
                    PicturePageInProgress: true,
                    PicturePageSuccess:false,
                    PicturePageFailed:false,
                    allPictures: [],
                    error: '',
                    }
            
            }
            case GET_ALL_PICTURES_SUCCESS:
            return{
                ...state,
                picturePageGetApi:{
                    PicturePageInProgress: false,
                    PicturePageSuccess: true,
                    PicturePageFailed:false,
                    allPictures: action.payload,
                    error: '',
                    }
            
            }
            case GET_ALL_PICTURES_FAILURE:
            return{
                ...state,
                picturePageGetApi:{
                    PicturePageInProgress: false,
                    PicturePageSuccess: false,
                    PicturePageFailed:true,
                    allPictures: [],
                    error: '',
                    }
                
            
            }
        
            
            default: return state 
    }
}

export default PicturePageReducer