import { GET_ALL_PICTURE_CATEGORIES, GET_ALL_PICTURE_CATEGORIES_SUCCESS, GET_ALL_PICTURE_CATEGORIES_FAILURE} from './PictureCategoriesTypes'
const initialState = {
    pictureCategoriesGetApi:{
    pictureCategoriesInProgress: false,
    pictureCategoriesSuccess:false,
    pictureCategoriesFailed:false,
    pictureCategories: [],
    error: '',
    }
}

 const pictureCategoriesReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_ALL_PICTURE_CATEGORIES:
            return{
                ...state,
                pictureCategoriesGetApi:{
                    pictureCategoriesInProgress: true,
                    pictureCategoriesSuccess:false,
                    pictureCategoriesFailed:false,
                    pictureCategories: [],
                    error: '',
                    pictureListByCategory: []
                    }
               
            }
            case GET_ALL_PICTURE_CATEGORIES_SUCCESS:
            return{
                ...state,
                pictureCategoriesGetApi:{
                    pictureCategoriesInProgress: false,
                    pictureCategoriesSuccess: true,
                    pictureCategoriesFailed:false,
                    pictureCategories: action.payload,
                    error: '',
                    pictureListByCategory: []
                    }
            
            }
            case GET_ALL_PICTURE_CATEGORIES_FAILURE:
            return{
                ...state,
                pictureCategoriesGetApi:{
                    pictureCategoriesInProgress: false,
                    pictureCategoriesSuccess: false,
                    pictureCategoriesFailed:true,
                    pictureCategories: [],
                    error: '',
                    pictureListByCategory: []
                    }
                
               
            }
          
            
            default: return state 
    }
}

export default pictureCategoriesReducer