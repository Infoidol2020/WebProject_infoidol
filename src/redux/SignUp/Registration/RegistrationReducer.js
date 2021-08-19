import { SET_NEW_USERS, SET_NEW_USERS_SUCCESS, SET_NEW_USERS_FAILURE } from './RegistrationTypes'
const initialState = {
    userRegistration:{
    userRegistrationInProgress: false,
    userRegistrationSuccess:false,
    userRegistrationFailed:false,
    userRegistration: [],
    }
}

 const UserRegistrationReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_NEW_USERS:
            return{
                ...state,
                userRegistration:{
                    userRegistrationInProgress: true,
                    userRegistrationSuccess:false,
                    userRegistrationFailed:false,
                    userRegistrationResponse: [],
                    }
               
            }
            case SET_NEW_USERS_SUCCESS:
                return{
                    ...state,
                    userRegistration:{
                        userRegistrationInProgress: false,
                        userRegistrationSuccess:true,
                        userRegistrationFailed:false,
                        userRegistrationResponse: action.payload,
                        }
                   
                }
            case SET_NEW_USERS_FAILURE:
                return{
                    ...state,
                    userRegistration:{
                        userRegistrationInProgress: false,
                        userRegistrationSuccess:false,
                        userRegistrationFailed:true,
                        userRegistrationResponse: [],
                        }
                   
                }
            default: return state 
    }
}

export default UserRegistrationReducer



// import { SET_NEW_USERS, SET_NEW_USERS_SUCCESS, SET_NEW_USERS_FAILURE } from './RegistrationTypes'
// const initialState = {
//     loading: false,
//     userRegistration: [],
//     error: ''
// }

//  const UserRegistrationReducer = (state = initialState, action) => {
//     switch(action.type){
//         case SET_NEW_USERS:
//             return{
//                 ...state,
//                 loading: true
//             }
//             case SET_NEW_USERS_SUCCESS:
//             return{
//                 loading: false,
//                 userRegistration: action.payload,
//                 error: ''
//             }
//             case SET_NEW_USERS_FAILURE:
//             return{
//                 loading: false,
//                 userRegistration: [],
//                 error: action.payload
//             }
//             default: return state 
//     }
// }

// export default UserRegistrationReducer