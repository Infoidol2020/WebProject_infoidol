import { TRENDING_BLOGS, TRENDING_BLOGS_SUCCESS, TRENDING_BLOGS_FAILURE, TRENDING_BLOGS_RESET } from './AllTrendingBlogsTypes'

const initialState = {
    TrendingBlogsApi:{
    TrendingBlogsInProgress: false,
    TrendingBlogsSuccess:false,
    TrendingBlogsFailed:false,
    TrendingBlogs: [],
    }
}

const TrendingBlogsReducer = (state = initialState, action) => {
    switch(action.type){
        case TRENDING_BLOGS:
            return{
                ...state,
                TrendingBlogsApi:{
                    TrendingBlogsInProgress: true,
                    TrendingBlogsSuccess:false,
                    TrendingBlogsFailed:false,
                    TrendingBlogs: [],
                    }
            
            }
            case TRENDING_BLOGS_SUCCESS:
                return{
                    ...state,
                    TrendingBlogsApi:{
                        TrendingBlogsInProgress: false,
                        TrendingBlogsSuccess:true,
                        TrendingBlogsFailed:false,
                        TrendingBlogs: action.payload,
                        }
                
                }
            case TRENDING_BLOGS_FAILURE:
                return{
                    ...state,
                    TrendingBlogsApi:{
                        TrendingBlogsInProgress: false,
                        TrendingBlogsSuccess:false,
                        TrendingBlogsFailed:true,
                        TrendingBlogs: [],
                        }
                
                }

                case TRENDING_BLOGS_RESET:
                    return{
                        ...state,
                        TrendingBlogsApi:{
                            TrendingBlogsInProgress: false,
                            TrendingBlogsSuccess:false,
                            TrendingBlogsFailed:false,
                            }
                    
                    }

            default: return state 
    }
}

export default TrendingBlogsReducer