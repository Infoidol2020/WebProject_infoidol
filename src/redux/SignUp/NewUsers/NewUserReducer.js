import { GET_NEW_USERS, GET_NEW_USERS_SUCCESS, GET_NEW_USERS_FAILURE } from './NewUserTypes'
const initialState = {
    loading: false,
    newUsers: [],
    error: ''
}

 const NewUserReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_NEW_USERS:
            return{
                ...state,
                loading: true
            }
            case GET_NEW_USERS_SUCCESS:
            return{
                loading: false,
                newUsers: action.payload,
                error: ''
            }
            case GET_NEW_USERS_FAILURE:
            return{
                loading: false,
                newUsers: [],
                error: action.payload
            }
            default: return state 
    }
}

export default NewUserReducer