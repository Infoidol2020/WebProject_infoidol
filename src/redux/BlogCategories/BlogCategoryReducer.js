import { GET_BLOG_CATEGORY, GET_BLOG_CATEGORY_SUCCESS, GET_BLOG_CATEGORY_FAILURE } from './BlogCategoryTypes'
const initialState = {
    loading: false,
    blogCategories: [],
    error: ''
}

 const BlogCategoryReducer = (state = initialState, action) => {
    switch(action.type){
        case  GET_BLOG_CATEGORY:
            return{
                ...state,
                loading: true
            }
            case GET_BLOG_CATEGORY_SUCCESS:
            return{
                loading: false,
                blogCategories: action.payload,
                error: ''
            }
            case GET_BLOG_CATEGORY_FAILURE:
            return{
                loading: false,
                blogCategories: [],
                error: action.payload
            }
            default: return state 
    }
}

export default BlogCategoryReducer