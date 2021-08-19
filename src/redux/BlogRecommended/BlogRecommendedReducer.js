import { BLOG_RECOMMENDED, BLOG_RECOMMENDED_SUCCESS, BLOG_RECOMMENDED_FAILURE, BLOG_RECOMMENDED_RESET } from './BlogRecommendedTypes'

const initialState = {
    BlogRecommendedApi:{
    BlogRecommendedInProgress: false,
    BlogRecommendedSuccess:false,
    BlogRecommendedFailed:false,
    BlogRecommended: [],
    }
}

const BlogRecommendedReducer = (state = initialState, action) => {
    switch(action.type){
        case BLOG_RECOMMENDED:
            return{
                ...state,
                BlogRecommendedApi:{
                    BlogRecommendedInProgress: true,
                    BlogRecommendedSuccess:false,
                    BlogRecommendedFailed:false,
                    BlogRecommended: [],
                    }
            
            }
            case BLOG_RECOMMENDED_SUCCESS:
                return{
                    ...state,
                    BlogRecommendedApi:{
                        BlogRecommendedInProgress: false,
                        BlogRecommendedSuccess:true,
                        BlogRecommendedFailed:false,
                        BlogRecommended: action.payload,
                        }
                
                }
            case BLOG_RECOMMENDED_FAILURE:
                return{
                    ...state,
                    BlogRecommendedApi:{
                        BlogRecommendedInProgress: false,
                        BlogRecommendedSuccess:false,
                        BlogRecommendedFailed:true,
                        BlogRecommended: [],
                        }
                
                }

                case BLOG_RECOMMENDED_RESET:
                    return{
                        ...state,
                        BlogRecommendedApi:{
                            BlogRecommendedInProgress: false,
                            BlogRecommendedSuccess:false,
                            BlogRecommendedFailed:false,
                            }
                    
                    }

            default: return state 
    }
}

export default BlogRecommendedReducer