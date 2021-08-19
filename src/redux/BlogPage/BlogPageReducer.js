import { GET_ALL_BLOGS, GET_ALL_BLOGS_SUCCESS, GET_ALL_BLOGS_FAILURE } from './BlogPageTypes'
const initialState = {
    BlogPageGetApi : {
        BlogPageInProgress : false,
        BlogPageSuccess : false,
        BlogPageFailed : false,
        allBlogsFromBlogApi : [],
        error : '',
    }
}

 const BlogPageReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_ALL_BLOGS:
            return{
                ...state,
                BlogPageGetApi:{
                    BlogPageInProgress: true,
                    BlogPageSuccess:false,
                    BlogPageFailed:false,
                    allBlogsFromBlogApi: [],
                    error: '',
                    }            
                }
            case GET_ALL_BLOGS_SUCCESS:
            return{
                ...state,
                BlogPageGetApi:{
                    BlogPageInProgress: false,
                    BlogPageSuccess:true,
                    BlogPageFailed:false,
                    allBlogsFromBlogApi: action.payload,
                    error: '',
                    }
            }
            case GET_ALL_BLOGS_FAILURE:
            return{
                ...state,
                BlogPageGetApi:{
                    BlogPageInProgress: false,
                    BlogPageSuccess:false,
                    BlogPageFailed:true,
                    allBlogsFromBlogApi: [],
                    error: '',
                    }
            }
            default: return state 
    }
}

export default BlogPageReducer