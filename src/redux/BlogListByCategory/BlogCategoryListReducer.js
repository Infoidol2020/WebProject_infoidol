import { GET_ALL_BLOGCAT_LIST, GET_ALL_BLOGCAT_LIST_SUCCESS, GET_ALL_BLOGCAT_LIST_FAILURE } from './BlogCategoryListType'
const initialState = {
    BlogCatListGetApi:{
    BlogCatListInProgress: false,
    BlogCatListSuccess:false,
    BlogCatListFailed:false,
    allBlogCatList: [],
    error: '',
    }
}
 const BlogCategoryListReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_ALL_BLOGCAT_LIST:
            return{
                ...state,
                BlogCatListGetApi:{
                    BlogCatListInProgress: true,
                    BlogCatListSuccess:false,
                    BlogCatListFailed:false,
                    allBlogCatList: [],
                    error: '',
                    }
            }
            case GET_ALL_BLOGCAT_LIST_SUCCESS:
                return{
                    ...state,
                    BlogCatListGetApi:{
                        BlogCatListInProgress: false,
                        BlogCatListSuccess:true,
                        BlogCatListFailed:false,
                        allBlogCatList: action.payload,
                        error: '',
                        }
                }
            case GET_ALL_BLOGCAT_LIST_FAILURE:
                return{
                    ...state,
                    BlogCatListGetApi:{
                        BlogCatListInProgress: false,
                        BlogCatListSuccess:false,
                        BlogCatListFailed:true,
                        allBlogCatList: [],
                        error: '',
                        }
                }
            default: return state 
    }
}
export default BlogCategoryListReducer
