import { GET_ALL_RECOMMENDED_BLOGS, GET_ALL_RECOMMENDED_BLOGS_SUCCESS, GET_ALL_RECOMMENDED_BLOGS_FAILURE, GET_ALL_RECOMMENDED_BLOGS_RESET } from './TypesRecommendedBlogs'
const initialState = {
    BlogShowPageGetApi : {
        BlogShowPageProgress : false,
        BlogShowPageSuccess : false,
        BlogShowPageFailed : false,
        allBlogDetails : [],
        error : '',
    }
}

 const ReducerRecommendedBlogs = (state = initialState, action) => {
    switch(action.type){
        case GET_ALL_RECOMMENDED_BLOGS:
            return{
                ...state,
                BlogShowPageGetApi : {
                    BlogShowPageProgress : true,
                    BlogShowPageSuccess : false,
                    BlogShowPageFailed : false,
                    allBlogDetails : [],
                    error : '',
                }
            }
            case GET_ALL_RECOMMENDED_BLOGS_SUCCESS:
            return{
                ...state,
                BlogShowPageGetApi : {
                    BlogShowPageProgress : false,
                    BlogShowPageSuccess : true,
                    BlogShowPageFailed : false,
                    allBlogDetails : action.payload,
                    error : '',
                }
            }
            case GET_ALL_RECOMMENDED_BLOGS_FAILURE:
            return{
                ...state,
                BlogShowPageGetApi : {
                    BlogShowPageProgress : false,
                    BlogShowPageSuccess : false,
                    BlogShowPageFailed : true,
                    allBlogDetails : [],
                    error : '',
                }
            }
            case GET_ALL_RECOMMENDED_BLOGS_RESET:
                return{
                    ...state,
                    BlogShowPageGetApi : {
                        BlogShowPageProgress : false,
                        BlogShowPageSuccess : false,
                        BlogShowPageFailed : false,
                        allBlogDetails : action.payload,
                        error : '',


                    }
                }
            default: return state 
    }
}

export default ReducerRecommendedBlogs