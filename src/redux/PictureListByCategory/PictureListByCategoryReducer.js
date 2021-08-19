import { GET_ALL_PICTURES_LIST_BY_CATEGORY , 
    GET_ALL_PICTURES_LIST_BY_CATEGORY_SUCCESS, 
    GET_ALL_PICTURES_LIST_BY_CATEGORY_FAILURE} from './PictureListByCategoryTypes'
    
    const initialState = {
        pictureListByCategoryGetApi:{
        PictureListByCategoryInProgress: false,
        PictureListByCategorySuccess:false,
        PictureListByCategoryFailed:false,
        PictureListByCategory: [],
        error: '',
        }
    }
    
     const PictureListByCategoryReducer = (state = initialState, action) => {
        switch(action.type){

            case GET_ALL_PICTURES_LIST_BY_CATEGORY:
                
                return{
                    ...state,
                    pictureListByCategoryGetApi:{
                        PictureListByCategoryInProgress: true,
                        PictureListByCategorySuccess:false,
                        PictureListByCategoryFailed:false,
                        PictureListByCategory: [],
                        error: '',
                        }
                   
                }
                case GET_ALL_PICTURES_LIST_BY_CATEGORY_SUCCESS:
                return{
                    ...state,
                    pictureListByCategoryGetApi:{
                        PictureListByCategoryInProgress: false,
                        PictureListByCategorySuccess: true,
                        PictureListByCategoryFailed:false,
                        PictureListByCategory: action.payload,
                        error: '',
                        }
                
                }
                case GET_ALL_PICTURES_LIST_BY_CATEGORY_FAILURE:
                return{
                    ...state,
                    pictureListByCategoryGetApi:{
                        PictureListByCategoryInProgress: false,
                        PictureListByCategorySuccess: false,
                        PictureListByCategoryFailed:true,
                        PictureListByCategory: [],
                        error: '',
                        }
                    
                   
                }
                
                default: return state 
        }
    }
    
    export default PictureListByCategoryReducer