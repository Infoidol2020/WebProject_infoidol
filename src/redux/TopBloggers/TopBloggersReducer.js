import { GET_TOP_BLOGGERS, GET_TOP_BLOGGERS_SUCCESS, GET_TOP_BLOGGERS_FAILURE } from './TopBloggersTypes'
const initialState = {
    loading: false,
    TopBloggers: [],
    error: ''
}

 const TopBloggersReducer = (state = initialState, action) => {
    switch(action.type){
        case  GET_TOP_BLOGGERS:
            return{
                ...state,
                loading: true
            }
            case GET_TOP_BLOGGERS_SUCCESS:
            return{
                loading: false,
                TopBloggers: action.payload,
                error: ''
            }
            case GET_TOP_BLOGGERS_FAILURE:
            return{
                loading: false,
                TopBloggers: [],
                error: action.payload
            }
            default: return state 
    }
}

export default TopBloggersReducer