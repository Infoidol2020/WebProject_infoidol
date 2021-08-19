import { GET_ALL_BLOG_CATEGORIES, GET_ALL_BLOG_CATEGORIES_SUCCESS, GET_ALL_BLOG_CATEGORIES_FAILURE } from './BlogCategoriesTypes'
const initialState = {
    BlogCategoriesGetApi:{
    BlogCategoriesInProgress: false,
    BlogCategoriesSuccess:false,
    BlogCategoriesFailed:false,
    BlogCategories: [],
    error: '',
    }
}

 const BlogCategoriesReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_ALL_BLOG_CATEGORIES:
            return{
                ...state,
                BlogCategoriesGetApi:{
                    BlogCategoriesInProgress: true,
                    BlogCategoriesSuccess:false,
                    BlogCategoriesFailed:false,
                    BlogCategories: [],
                    error: '',
                    }
               
            }
            case GET_ALL_BLOG_CATEGORIES_SUCCESS:
                return{
                    ...state,
                    BlogCategoriesGetApi:{
                        BlogCategoriesInProgress: false,
                        BlogCategoriesSuccess:true,
                        BlogCategoriesFailed:false,
                        BlogCategories: action.payload,
                        error: '',
                        }
                   
                }
            case GET_ALL_BLOG_CATEGORIES_FAILURE:
                return{
                    ...state,
                    BlogCategoriesGetApi:{
                        BlogCategoriesInProgress: false,
                        BlogCategoriesSuccess:false,
                        BlogCategoriesFailed:true,
                        BlogCategories: [],
                        error: '',
                        }
                   
                }
            default: return state 
    }
}

export default BlogCategoriesReducer
