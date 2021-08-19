import { UPLOADED_BLOG, UPLOADED_BLOG_SUCCESS, UPLOADED_BLOG_FAILURE, UPLOADED_BLOG_RESET } from './MyUploadedBlogTypes'

const initialState = {
    MyUploadedBlogApi:{
    MyUploadedBlogInProgress: false,
    MyUploadedBlogSuccess:false,
    MyUploadedBlogFailed:false,
    MyUploadedBlog: [],
    }
}

const MyUploadedBlogReducer = (state = initialState, action) => {
    switch(action.type){
        case UPLOADED_BLOG:
            return{
                ...state,
                MyUploadedBlogApi:{
                    MyUploadedBlogInProgress: true,
                    MyUploadedBlogSuccess:false,
                    MyUploadedBlogFailed:false,
                    MyUploadedBlog: [],
                    }
            
            }
            case UPLOADED_BLOG_SUCCESS:
                return{
                    ...state,
                    MyUploadedBlogApi:{
                        MyUploadedBlogInProgress: false,
                        MyUploadedBlogSuccess:true,
                        MyUploadedBlogFailed:false,
                        MyUploadedBlog: action.payload,
                        }
                
                }
            case UPLOADED_BLOG_FAILURE:
                return{
                    ...state,
                    MyUploadedBlogApi:{
                        MyUploadedBlogInProgress: false,
                        MyUploadedBlogSuccess:false,
                        MyUploadedBlogFailed:true,
                        MyUploadedBlog: [],
                        }
                
                }

                case UPLOADED_BLOG_RESET:
                    return{
                        ...state,
                        MyUploadedBlogApi:{
                            MyUploadedBlogInProgress: false,
                            MyUploadedBlogSuccess:false,
                            MyUploadedBlogFailed:false,
                            }
                    
                    }

            default: return state 
    }
}

export default MyUploadedBlogReducer