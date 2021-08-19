import { UPLOAD_BLOG, UPLOAD_BLOG_SUCCESS, UPLOAD_BLOG_FAILURE } from './UploadBlogTypes'
const initialState = {
    UploadBlogGetApi:{
    UploadBlogInProgress: false,
    UploadBlogSuccess:false,
    UploadBlogFailed:false,
    UploadBlog: [],
    error: '',
    }
}

 const UploadBlogReducer = (state = initialState, action) => {
    switch(action.type){
        case UPLOAD_BLOG:
            return{
                ...state,
                UploadBlogGetApi:{
                    UploadBlogInProgress: true,
                    UploadBlogSuccess:false,
                    UploadBlogFailed:false,
                    UploadBlog: [],
                    error: '',
                    }
               
            }
            case UPLOAD_BLOG_SUCCESS:
                return{
                    ...state,
                    UploadBlogGetApi:{
                        UploadBlogInProgress: false,
                        UploadBlogSuccess:true,
                        UploadBlogFailed:false,
                        UploadBlog: action.payload,
                        error: '',
                        }
                   
                }
            case UPLOAD_BLOG_FAILURE:
                return{
                    ...state,
                    UploadBlogGetApi:{
                        UploadBlogInProgress: false,
                        UploadBlogSuccess:false,
                        UploadBlogFailed:true,
                        UploadBlog: [],
                        error: '',
                        }
                   
                }
            default: return state 
    }
}

export default UploadBlogReducer
